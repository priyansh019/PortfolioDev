import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

/**
 * High-performance, silky-smooth 3D Interactive Core
 * Replaces choppy video scrub with an ultra-responsive, 60fps Three.js
 * cybernetic matrix with exponential inertia damping.
 * Uses exact user palette:
 * Canvas: #051F20, Deep: #0B2B26, Border: #163832, Accent: #235347, Sage: #8EB69B, Mint: #DAF1DE
 */
export const HeroVisual3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Detect software WebGL
    const isSoftwareGl = (() => {
      const gl = document.createElement('canvas').getContext('webgl2');
      if (!gl) return true;
      const ext = gl.getExtension('WEBGL_debug_renderer_info');
      const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
      const gpu = String(gl.getParameter(param));
      gl.getExtension('WEBGL_lose_context')?.loseContext();
      return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
    })();

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isSoftwareGl,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // 2. Lighting Setup adhering to exact palette
    const ambientLight = new THREE.AmbientLight(0x0b2b26, 2.5);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xdaf1de, 3.0);
    keyLight.position.set(5, 5, 5);
    scene.add(keyLight);

    const rimLight = new THREE.PointLight(0x8eb69b, 4.0, 15);
    rimLight.position.set(-5, -4, 3);
    scene.add(rimLight);

    const accentLight = new THREE.PointLight(0x235347, 5.0, 20);
    accentLight.position.set(0, 4, -2);
    scene.add(accentLight);

    // 3. Multi-layer Composite 3D Architectural Core
    const coreGroup = new THREE.Group();
    // Offset slightly to right for desktop composition balance
    coreGroup.position.set(window.innerWidth > 768 ? 1.6 : 0, 0, 0);
    scene.add(coreGroup);

    // Part A: Inner Crystalline Core (Icosahedron)
    const innerGeo = new THREE.IcosahedronGeometry(1.2, 1);
    const innerMat = new THREE.MeshPhysicalMaterial({
      color: 0x163832,
      emissive: 0x0b2b26,
      roughness: 0.15,
      metalness: 0.85,
      wireframe: false,
      clearcoat: 0.8,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // Part B: Outer Geodesic Wireframe Lattice
    const wireGeo = new THREE.IcosahedronGeometry(1.65, 2);
    const wireMat = new THREE.MeshStandardMaterial({
      color: 0xdaf1de,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
      roughness: 0.2,
      metalness: 0.9,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    coreGroup.add(wireMesh);

    // Part C: Orbital Gyroscopic Rings
    const ringMat1 = new THREE.MeshStandardMaterial({
      color: 0x8eb69b,
      metalness: 0.9,
      roughness: 0.2,
      transparent: true,
      opacity: 0.75,
    });
    const ringGeo1 = new THREE.TorusGeometry(2.2, 0.025, 16, 100);
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    coreGroup.add(ring1);

    const ringMat2 = new THREE.MeshStandardMaterial({
      color: 0xdaf1de,
      metalness: 0.95,
      roughness: 0.1,
      transparent: true,
      opacity: 0.65,
    });
    const ringGeo2 = new THREE.TorusGeometry(2.55, 0.02, 16, 100);
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = Math.PI / 3;
    ring2.rotation.y = Math.PI / 4;
    coreGroup.add(ring2);

    const ringMat3 = new THREE.MeshStandardMaterial({
      color: 0x235347,
      metalness: 0.7,
      roughness: 0.3,
      transparent: true,
      opacity: 0.5,
    });
    const ringGeo3 = new THREE.TorusGeometry(2.9, 0.018, 16, 100);
    const ring3 = new THREE.Mesh(ringGeo3, ringMat3);
    ring3.rotation.x = -Math.PI / 4;
    ring3.rotation.z = Math.PI / 6;
    coreGroup.add(ring3);

    // Part D: Constellation Points (Floating Node Mesh)
    const particleCount = 140;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const radius = 2.2 + Math.random() * 2.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(particlePositions, 3)
    );
    const particleMat = new THREE.PointsMaterial({
      color: 0xdaf1de,
      size: 0.045,
      transparent: true,
      opacity: 0.8,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    coreGroup.add(particleSystem);

    // 4. Mouse Tracking with Silky Smooth Inertia Damping
    const mouse = {
      targetX: 0,
      targetY: 0,
      currentX: 0,
      currentY: 0,
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse between -1 and 1
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = -(e.clientY / window.innerHeight) * 2 + 1;
      mouse.targetX = nx * 0.75;
      mouse.targetY = ny * 0.55;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Window Resize
    const handleResize = () => {
      if (!renderer || !camera) return;
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      coreGroup.position.set(width > 768 ? 1.6 : 0, 0, 0);
    };

    window.addEventListener('resize', handleResize);

    // 5. Render Loop with Delta Damping
    let animId: number;
    let clock = new THREE.Clock();

    const render = () => {
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Smooth lerp mouse tracking (frame-rate independent damping)
      const dampFactor = Math.min(1, delta * 3.8);
      mouse.currentX += (mouse.targetX - mouse.currentX) * dampFactor;
      mouse.currentY += (mouse.targetY - mouse.currentY) * dampFactor;

      // Base idle rotations + cursor response
      innerMesh.rotation.x = elapsed * 0.25 + mouse.currentY * 0.4;
      innerMesh.rotation.y = elapsed * 0.35 + mouse.currentX * 0.4;

      wireMesh.rotation.x = -elapsed * 0.18 + mouse.currentY * 0.6;
      wireMesh.rotation.y = elapsed * 0.22 + mouse.currentX * 0.6;

      ring1.rotation.z = elapsed * 0.4 + mouse.currentX * 0.3;
      ring2.rotation.y = elapsed * 0.3 - mouse.currentY * 0.3;
      ring3.rotation.x = elapsed * 0.25 + mouse.currentX * 0.2;

      particleSystem.rotation.y = elapsed * 0.08 + mouse.currentX * 0.2;

      // Gentle floating bob
      coreGroup.position.y = Math.sin(elapsed * 1.2) * 0.12;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    // Cleanup
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      innerGeo.dispose();
      innerMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      ringGeo3.dispose();
      ringMat3.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  // Fade out as user scrolls deep into content
  const scrollFade = Math.max(0, 1 - scrollY / 700);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none select-none transition-opacity duration-300"
      style={{
        opacity: scrollFade * 0.95,
      }}
      aria-hidden="true"
    />
  );
};
