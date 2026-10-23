import React, { useEffect, useRef, useState, useMemo } from 'react';
import { ProjectItem } from '../../types/portfolio.ts';
import { Sparkles, RotateCw, Layers, Eye, Info } from 'lucide-react';
import { Theme } from '../../hooks/useTheme.ts';

interface Node3D {
  id: string;
  name: string;
  category: 'core' | 'project' | 'skill';
  color: string;
  radius: number;
  // 3D coordinates
  x: number;
  y: number;
  z: number;
  // Projected screen coordinates
  px?: number;
  py?: number;
  scale?: number;
  alpha?: number;
  connections: string[];
  projectRef?: string;
  detail?: string;
}

interface Edge3D {
  source: string;
  target: string;
  color?: string;
}

interface Skills3DWebProps {
  theme: Theme;
  onSelectProject?: (projectTitle: string) => void;
}

export const Skills3DWeb: React.FC<Skills3DWebProps> = ({ theme, onSelectProject }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hoveredNode, setHoveredNode] = useState<Node3D | null>(null);
  const [filterMode, setFilterMode] = useState<'all' | 'projects' | 'skills'>('all');
  const [isRotating, setIsRotating] = useState(true);

  // Define 3D Node Constellation
  const rawNodes: Node3D[] = useMemo(
    () => [
      // Core anchor
      {
        id: 'core',
        name: 'Priyansh Singh',
        category: 'core',
        color: '#06b6d4',
        radius: 14,
        x: 0,
        y: 0,
        z: 0,
        connections: ['sentinelpy', 'clockwork', 'novabank', 'novavoice', 'leetcode'],
        detail: 'B.Tech ECE · Full-Stack & Cybersecurity',
      },

      // Project Nodes
      {
        id: 'sentinelpy',
        name: 'SentinelPy',
        category: 'project',
        color: '#10b981',
        radius: 11,
        x: -140,
        y: -60,
        z: 80,
        connections: ['python', 'fastapi', 'react', 'cybersecurity', 'render', 'core'],
        projectRef: 'SentinelPy',
        detail: 'Network Security Scanner & Reconnaissance Platform',
      },
      {
        id: 'clockwork',
        name: 'ClockWork',
        category: 'project',
        color: '#6366f1',
        radius: 11,
        x: 130,
        y: -70,
        z: 60,
        connections: ['typescript', 'gemini', 'react', 'vercel', 'core'],
        projectRef: 'ClockWork',
        detail: 'AI-Powered Everyday Tasks with Gemini API',
      },
      {
        id: 'novabank',
        name: 'NovaBank',
        category: 'project',
        color: '#38bdf8',
        radius: 10,
        x: 90,
        y: 110,
        z: -70,
        connections: ['python', 'react', 'vercel', 'core'],
        projectRef: 'NovaBank',
        detail: 'Private Banking UI & Financial Ledger Concept',
      },
      {
        id: 'novavoice',
        name: 'NovaVoice Bridge',
        category: 'project',
        color: '#f59e0b',
        radius: 10,
        x: -120,
        y: 90,
        z: -60,
        connections: ['python', 'flask', 'gcalendar', 'core'],
        projectRef: 'NovaVoice Calendar Bridge',
        detail: 'Local Flask REST API for Google Calendar Scheduling',
      },
      {
        id: 'leetcode',
        name: 'LeetCode Practice',
        category: 'project',
        color: '#ec4899',
        radius: 10,
        x: 0,
        y: -140,
        z: -80,
        connections: ['cpp', 'algorithms', 'core'],
        projectRef: 'LeetCode Solutions',
        detail: 'C++ Algorithmic Practice & Data Structure Optimization',
      },

      // Skill Nodes
      {
        id: 'python',
        name: 'Python',
        category: 'skill',
        color: '#38bdf8',
        radius: 8,
        x: -190,
        y: 20,
        z: 10,
        connections: ['sentinelpy', 'novavoice', 'novabank'],
        detail: 'Async sockets, scanning engine, and REST APIs',
      },
      {
        id: 'fastapi',
        name: 'FastAPI',
        category: 'skill',
        color: '#10b981',
        radius: 8,
        x: -210,
        y: -100,
        z: 40,
        connections: ['sentinelpy'],
        detail: 'High performance asynchronous backend with OpenAPI',
      },
      {
        id: 'react',
        name: 'React + Vite',
        category: 'skill',
        color: '#06b6d4',
        radius: 8,
        x: 10,
        y: 40,
        z: 130,
        connections: ['sentinelpy', 'clockwork', 'novabank'],
        detail: 'Responsive frontend UI dashboards & states',
      },
      {
        id: 'typescript',
        name: 'TypeScript',
        category: 'skill',
        color: '#3b82f6',
        radius: 8,
        x: 190,
        y: -20,
        z: 70,
        connections: ['clockwork'],
        detail: 'Type-safe client architecture and API schemas',
      },
      {
        id: 'gemini',
        name: 'Gemini API',
        category: 'skill',
        color: '#8b5cf6',
        radius: 9,
        x: 170,
        y: -130,
        z: -20,
        connections: ['clockwork'],
        detail: 'Multimodal prompt orchestration and natural language automation',
      },
      {
        id: 'cpp',
        name: 'C++',
        category: 'skill',
        color: '#ec4899',
        radius: 8,
        x: 70,
        y: -180,
        z: -40,
        connections: ['leetcode'],
        detail: 'Core algorithmic problem solving with STL',
      },
      {
        id: 'cybersecurity',
        name: 'Cybersecurity',
        category: 'skill',
        color: '#10b981',
        radius: 8,
        x: -120,
        y: -130,
        z: 120,
        connections: ['sentinelpy'],
        detail: 'Port reconnaissance, service signatures & CTF challenges',
      },
      {
        id: 'flask',
        name: 'Flask',
        category: 'skill',
        color: '#f59e0b',
        radius: 7,
        x: -170,
        y: 130,
        z: -80,
        connections: ['novavoice'],
        detail: 'Lightweight REST microservice endpoints',
      },
      {
        id: 'gcalendar',
        name: 'Calendar API',
        category: 'skill',
        color: '#f97316',
        radius: 7,
        x: -60,
        y: 150,
        z: -40,
        connections: ['novavoice'],
        detail: 'Event creation & availability query integrations',
      },
      {
        id: 'render',
        name: 'Render Cloud',
        category: 'skill',
        color: '#64748b',
        radius: 7,
        x: -180,
        y: -40,
        z: 140,
        connections: ['sentinelpy'],
        detail: 'Web service & FastAPI cloud hosting',
      },
      {
        id: 'vercel',
        name: 'Vercel Edge',
        category: 'skill',
        color: '#64748b',
        radius: 7,
        x: 160,
        y: 60,
        z: -40,
        connections: ['clockwork', 'novabank'],
        detail: 'Edge deployment for fast worldwide delivery',
      },
      {
        id: 'algorithms',
        name: 'Data Structures',
        category: 'skill',
        color: '#a855f7',
        radius: 7,
        x: -80,
        y: -170,
        z: -100,
        connections: ['leetcode'],
        detail: 'Trees, graphs, dynamic programming, and search algorithms',
      },
    ],
    []
  );

  // Extract edges
  const edges: Edge3D[] = useMemo(() => {
    const list: Edge3D[] = [];
    const added = new Set<string>();

    rawNodes.forEach((node) => {
      node.connections.forEach((targetId) => {
        const edgeKey = [node.id, targetId].sort().join('-');
        if (!added.has(edgeKey)) {
          added.add(edgeKey);
          list.push({ source: node.id, target: targetId });
        }
      });
    });
    return list;
  }, [rawNodes]);

  // Rotation angles
  const rotRef = useRef({ x: 0.25, y: 0.35 });
  const mouseState = useRef({
    isDown: false,
    lastX: 0,
    lastY: 0,
    hoveredId: null as string | null,
  });

  // Handle Canvas Drawing Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;

    const updateSize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = Math.max(rect.height, 460);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.scale(dpr, dpr);
    };

    updateSize();
    window.addEventListener('resize', updateSize);

    // Mouse Drag Rotation
    const onMouseDown = (e: MouseEvent) => {
      mouseState.current.isDown = true;
      mouseState.current.lastX = e.clientX;
      mouseState.current.lastY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      if (mouseState.current.isDown) {
        const dx = e.clientX - mouseState.current.lastX;
        const dy = e.clientY - mouseState.current.lastY;
        rotRef.current.y += dx * 0.006;
        rotRef.current.x -= dy * 0.006;
        mouseState.current.lastX = e.clientX;
        mouseState.current.lastY = e.clientY;
      }

      // Check hit testing with projected nodes
      let found: Node3D | null = null;
      for (const node of rawNodes) {
        if (node.px !== undefined && node.py !== undefined) {
          const dist = Math.hypot(mouseX - node.px, mouseY - node.py);
          if (dist < (node.radius * (node.scale || 1) + 10)) {
            found = node;
            break;
          }
        }
      }

      mouseState.current.hoveredId = found ? found.id : null;
      setHoveredNode(found);
    };

    const onMouseUp = () => {
      mouseState.current.isDown = false;
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        mouseState.current.isDown = true;
        mouseState.current.lastX = e.touches[0].clientX;
        mouseState.current.lastY = e.touches[0].clientY;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (mouseState.current.isDown && e.touches.length === 1) {
        const dx = e.touches[0].clientX - mouseState.current.lastX;
        const dy = e.touches[0].clientY - mouseState.current.lastY;
        rotRef.current.y += dx * 0.007;
        rotRef.current.x -= dy * 0.007;
        mouseState.current.lastX = e.touches[0].clientX;
        mouseState.current.lastY = e.touches[0].clientY;
      }
    };

    const onTouchEnd = () => {
      mouseState.current.isDown = false;
    };

    canvas.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    canvas.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // 3D Projection Engine
    const FOV = 420;
    const CENTER_OFFSET_Z = 340;

    let time = 0;

    const render = () => {
      time += 0.015;

      // Gentle auto-rotation when not dragging
      if (isRotating && !mouseState.current.isDown) {
        rotRef.current.y += 0.0025;
        rotRef.current.x += Math.sin(time * 0.5) * 0.0008;
      }

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      const cosX = Math.cos(rotRef.current.x);
      const sinX = Math.sin(rotRef.current.x);
      const cosY = Math.cos(rotRef.current.y);
      const sinY = Math.sin(rotRef.current.y);

      // Project each node in 3D
      const projectedNodes = rawNodes.map((node) => {
        // Rotate around Y axis
        const x1 = node.x * cosY + node.z * sinY;
        const z1 = -node.x * sinY + node.z * cosY;

        // Rotate around X axis
        const y2 = node.y * cosX - z1 * sinX;
        const z2 = node.y * sinX + z1 * cosX;

        // Perspective projection
        const totalZ = z2 + CENTER_OFFSET_Z;
        const scale = FOV / Math.max(totalZ, 60);
        const px = cx + x1 * scale;
        const py = cy + y2 * scale;
        const alpha = Math.min(Math.max((z2 + 200) / 400, 0.2), 1);

        node.px = px;
        node.py = py;
        node.scale = scale;
        node.alpha = alpha;

        return { ...node, x1, y2, z2, px, py, scale, alpha };
      });

      // Sort by depth (painter's algorithm)
      projectedNodes.sort((a, b) => a.z2 - b.z2);

      const nodeMap = new Map(projectedNodes.map((n) => [n.id, n]));
      const hoveredId = mouseState.current.hoveredId;
      const activeHoveredNode = hoveredId ? nodeMap.get(hoveredId) : null;

      const isDark = theme === 'dark' || document.documentElement.classList.contains('dark');

      // 1. Draw Edges
      edges.forEach((edge) => {
        const src = nodeMap.get(edge.source);
        const tgt = nodeMap.get(edge.target);
        if (!src || !tgt) return;

        // Filter logic
        if (filterMode === 'projects' && (src.category === 'skill' && tgt.category === 'skill')) return;
        if (filterMode === 'skills' && (src.category === 'project' && tgt.category === 'project')) return;

        const isHighlighted =
          hoveredId &&
          (src.id === hoveredId ||
            tgt.id === hoveredId ||
            (activeHoveredNode &&
              activeHoveredNode.connections.includes(src.id) &&
              activeHoveredNode.connections.includes(tgt.id)));

        ctx.beginPath();
        ctx.moveTo(src.px, src.py);
        ctx.lineTo(tgt.px, tgt.py);

        const avgAlpha = (src.alpha + tgt.alpha) / 2;

        if (isHighlighted) {
          ctx.strokeStyle = isDark ? 'rgba(56, 189, 248, 0.85)' : 'rgba(14, 165, 233, 0.9)';
          ctx.lineWidth = 2.2;
        } else {
          ctx.strokeStyle = isDark
            ? `rgba(148, 163, 184, ${0.12 * avgAlpha})`
            : `rgba(100, 116, 139, ${0.18 * avgAlpha})`;
          ctx.lineWidth = 1;
        }
        ctx.stroke();
      });

      // 2. Draw Nodes
      projectedNodes.forEach((node) => {
        if (filterMode === 'projects' && node.category === 'skill') return;
        if (filterMode === 'skills' && node.category === 'project') return;

        const isHovered = hoveredId === node.id;
        const isConnected =
          activeHoveredNode &&
          (activeHoveredNode.connections.includes(node.id) || activeHoveredNode.id === node.id);

        const currentRadius = Math.max(node.radius * node.scale * (isHovered ? 1.35 : 1), 3);

        // Glow halo for active / core / project nodes
        if (isHovered || isConnected || node.category === 'core') {
          const grad = ctx.createRadialGradient(
            node.px,
            node.py,
            currentRadius * 0.5,
            node.px,
            node.py,
            currentRadius * 2.8
          );
          grad.addColorStop(0, node.color + (isDark ? 'aa' : '77'));
          grad.addColorStop(1, 'transparent');
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(node.px, node.py, currentRadius * 2.8, 0, Math.PI * 2);
          ctx.fill();
        }

        // Main Node Circle
        ctx.beginPath();
        ctx.arc(node.px, node.py, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.globalAlpha = isHovered ? 1 : Math.max(node.alpha, 0.45);
        ctx.fill();
        ctx.globalAlpha = 1;

        // Border ring
        ctx.lineWidth = isHovered ? 2.5 : 1.2;
        ctx.strokeStyle = isDark ? '#ffffff' : '#0f172a';
        ctx.stroke();

        // Node Label
        const shouldShowLabel =
          isHovered ||
          isConnected ||
          node.scale > 0.9 ||
          node.category === 'core' ||
          node.category === 'project';

        if (shouldShowLabel) {
          ctx.font = `${isHovered ? 'bold ' : ''}${Math.round(
            Math.max(10 * node.scale, 9)
          )}px 'Plus Jakarta Sans', system-ui, sans-serif`;
          ctx.fillStyle = isDark
            ? isHovered
              ? '#ffffff'
              : 'rgba(241, 245, 249, 0.9)'
            : isHovered
            ? '#0f172a'
            : 'rgba(30, 41, 59, 0.9)';

          const textWidth = ctx.measureText(node.name).width;
          const labelY = node.py + currentRadius + 14;

          // Label pill background for readability
          ctx.fillStyle = isDark
            ? isHovered
              ? 'rgba(15, 23, 42, 0.9)'
              : 'rgba(15, 23, 42, 0.65)'
            : isHovered
            ? 'rgba(255, 255, 255, 0.95)'
            : 'rgba(255, 255, 255, 0.75)';

          ctx.fillRect(node.px - textWidth / 2 - 4, labelY - 11, textWidth + 8, 15);

          ctx.fillStyle = isDark ? (isHovered ? '#38bdf8' : '#e2e8f0') : isHovered ? '#0284c7' : '#1e293b';
          ctx.fillText(node.name, node.px - textWidth / 2, labelY);
        }
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', updateSize);
      canvas.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      canvas.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [rawNodes, edges, filterMode, isRotating, theme]);

  return (
    <div className="relative w-full bg-slate-50/70 dark:bg-[#0a0e17] border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-200">
      {/* Interactive Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-200/80 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>3D Project & Skill Constellation</span>
              <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-200 dark:border-cyan-800">
                Interactive
              </span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Drag to rotate 360° · Hover nodes to trace live skill-to-project architectures
            </p>
          </div>
        </div>

        {/* Filter and Rotation Buttons */}
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-0.5 text-xs font-medium">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-2.5 py-1 rounded transition-colors ${
                filterMode === 'all'
                  ? 'bg-slate-900 text-white dark:bg-slate-800 dark:text-cyan-400 font-semibold shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilterMode('projects')}
              className={`px-2.5 py-1 rounded transition-colors ${
                filterMode === 'projects'
                  ? 'bg-slate-900 text-white dark:bg-slate-800 dark:text-cyan-400 font-semibold shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setFilterMode('skills')}
              className={`px-2.5 py-1 rounded transition-colors ${
                filterMode === 'skills'
                  ? 'bg-slate-900 text-white dark:bg-slate-800 dark:text-cyan-400 font-semibold shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Skills
            </button>
          </div>

          <button
            onClick={() => setIsRotating((prev) => !prev)}
            aria-label={isRotating ? 'Pause auto-rotation' : 'Resume auto-rotation'}
            title={isRotating ? 'Pause rotation' : 'Resume rotation'}
            className={`p-2 rounded-lg border transition-colors ${
              isRotating
                ? 'bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800'
                : 'bg-white dark:bg-slate-900 text-slate-500 border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <RotateCw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      {/* 3D Canvas Area */}
      <div
        ref={containerRef}
        className="relative w-full h-[460px] cursor-grab active:cursor-grabbing select-none rounded-xl overflow-hidden bg-slate-900/5 dark:bg-slate-950/60"
      >
        <canvas ref={canvasRef} className="w-full h-full block" />

        {/* Floating Active Node Card */}
        {hoveredNode && (
          <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm p-3.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl transition-all">
            <div className="flex items-center justify-between gap-2 mb-1">
              <div className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: hoveredNode.color }}
                />
                <span className="font-bold text-sm text-slate-900 dark:text-white">
                  {hoveredNode.name}
                </span>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                {hoveredNode.category}
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
              {hoveredNode.detail}
            </p>
            <div className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 flex items-center gap-1">
              <span>{hoveredNode.connections.length} active connection(s)</span>
            </div>
          </div>
        )}

        {/* Bottom Legend */}
        <div className="absolute top-3 right-3 hidden sm:flex items-center gap-3 text-[11px] font-mono text-slate-400 bg-white/80 dark:bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Projects</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-500" />
            <span>Skills</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-indigo-500" />
            <span>AI / API</span>
          </div>
        </div>
      </div>
    </div>
  );
};
