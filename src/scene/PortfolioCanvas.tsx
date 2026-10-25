import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { AvatarModel } from './AvatarModel.ts';
import { getCameraStateAtProgress } from './CameraTimeline.ts';
import { Theme } from '../hooks/useTheme.ts';

interface PortfolioCanvasProps {
  scrollProgress: number;
  theme: Theme;
}

export const PortfolioCanvas: React.FC<PortfolioCanvasProps> = ({ scrollProgress, theme }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef(scrollProgress);
  scrollRef.current = scrollProgress;

  const themeRef = useRef(theme);
  themeRef.current = theme;

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const isDark = themeRef.current === 'dark';
    scene.background = new THREE.Color(isDark ? 0x070a12 : 0xf8fafc);
    scene.fog = new THREE.FogExp2(isDark ? 0x070a12 : 0xf8fafc, 0.08);

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0.8, 1.4, 4.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = isDark ? 1.15 : 1.0;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    mount.appendChild(renderer.domElement);

    // 2. Studio Lighting
    const ambientLight = new THREE.AmbientLight(isDark ? 0x334155 : 0xffffff, isDark ? 0.6 : 0.85);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, isDark ? 1.8 : 1.4);
    keyLight.position.set(3, 5, 4);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(isDark ? 0x38bdf8 : 0x93c5fd, isDark ? 1.0 : 0.6);
    fillLight.position.set(-4, 2, 2);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(isDark ? 0x818cf8 : 0xa5b4fc, isDark ? 2.2 : 0.9);
    rimLight.position.set(0, 3, -4);
    scene.add(rimLight);

    // Studio Ground Reflector / Grid Plane
    const groundGeo = new THREE.PlaneGeometry(30, 30);
    groundGeo.rotateX(-Math.PI / 2);
    const groundMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x090d16 : 0xf1f5f9,
      roughness: 0.8,
      metalness: 0.1,
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.position.y = -0.12;
    ground.receiveShadow = true;
    scene.add(ground);

    // Subtle studio grid lines
    const grid = new THREE.GridHelper(24, 24, isDark ? 0x1e293b : 0xcbd5e1, isDark ? 0x0f172a : 0xe2e8f0);
    grid.position.y = -0.11;
    scene.add(grid);

    // 3. Avatar Model (Loads custom me.glb or procedural character)
    const avatar = new AvatarModel();
    scene.add(avatar.group);
    avatar.loadCustomModel('/models/me.glb');
    avatar.applyTheme(themeRef.current);

    // 4. Cursor Tracking
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const onMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // 5. Responsive Resize
    const onResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // 6. Camera Animation Loop with Damped Interpolation
    let animId: number;
    const clock = new THREE.Clock();

    const targetPos = new THREE.Vector3();
    const targetLookAt = new THREE.Vector3();
    const currentLookAt = new THREE.Vector3(0, 1.0, 0);

    const animate = () => {
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse easing
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Update avatar breathing and eye gaze
      avatar.update(delta, elapsedTime, mouse);

      // Compute camera keyframe position based on scroll progress
      const targetFov = getCameraStateAtProgress(scrollRef.current, targetPos, targetLookAt);

      // Damped camera movement toward target
      camera.position.lerp(targetPos, 0.06);
      currentLookAt.lerp(targetLookAt, 0.06);
      camera.lookAt(currentLookAt);

      if (Math.abs(camera.fov - targetFov) > 0.05) {
        camera.fov = THREE.MathUtils.lerp(camera.fov, targetFov, 0.06);
        camera.updateProjectionMatrix();
      }

      // Smooth theme transitions
      const currentDark = themeRef.current === 'dark';
      const destBg = currentDark ? 0x070a12 : 0xf8fafc;
      (scene.background as THREE.Color).lerp(new THREE.Color(destBg), 0.08);
      (scene.fog as THREE.FogExp2).color.lerp(new THREE.Color(destBg), 0.08);

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      groundGeo.dispose();
      groundMat.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none"
      aria-hidden="true"
    />
  );
};
