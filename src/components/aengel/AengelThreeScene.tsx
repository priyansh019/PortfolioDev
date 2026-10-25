import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { AengelProject } from '../../data/portfolio.ts';

interface AengelThreeSceneProps {
  currentProject: AengelProject;
  isPortalActive: boolean;
  onSceneReady?: () => void;
}

export const AengelThreeScene: React.FC<AengelThreeSceneProps> = ({
  currentProject,
  isPortalActive,
}) => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  // References for live animation updates
  const sceneRef = useRef<THREE.Scene | null>(null);
  const gemMeshRef = useRef<THREE.Mesh | null>(null);
  const innerLightRef = useRef<THREE.PointLight | null>(null);
  const terrainMeshRef = useRef<THREE.LineSegments | null>(null);
  const targetColorRef = useRef<THREE.Color>(new THREE.Color(currentProject.gemstoneColor));

  // Update target color on project change
  useEffect(() => {
    targetColorRef.current.set(currentProject.gemstoneColor);
  }, [currentProject]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.fog = new THREE.FogExp2(0x050811, 0.04);

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 1.2, 5.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    mount.appendChild(renderer.domElement);

    // 2. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.5);
    keyLight.position.set(5, 8, 5);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x00f0ff, 2.0);
    rimLight.position.set(-5, -2, -3);
    scene.add(rimLight);

    // Gemstone Internal Core Light
    const innerLight = new THREE.PointLight(currentProject.gemstoneColor, 4, 8);
    innerLight.position.set(0, 0, 0);
    scene.add(innerLight);
    innerLightRef.current = innerLight;

    // 3. Central 3D Crystal Monolith
    const gemGeo = new THREE.IcosahedronGeometry(0.9, 0); // Faceted low-poly look like in aengel.io
    const gemMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x111625),
      emissive: new THREE.Color(currentProject.gemstoneColor),
      emissiveIntensity: 0.35,
      metalness: 0.1,
      roughness: 0.15,
      transmission: 0.85, // Glass refractive effect
      ior: 1.52,
      thickness: 1.2,
      flatShading: true,
      wireframe: false,
    });
    const gemMesh = new THREE.Mesh(gemGeo, gemMat);
    gemMesh.position.set(0, 0.2, 0);
    scene.add(gemMesh);
    gemMeshRef.current = gemMesh;

    // Glowing wireframe cage around gem
    const wireGeo = new THREE.WireframeGeometry(gemGeo);
    const wireMat = new THREE.LineBasicMaterial({
      color: new THREE.Color(currentProject.gemstoneColor),
      transparent: true,
      opacity: 0.4,
    });
    const gemWireframe = new THREE.LineSegments(wireGeo, wireMat);
    gemMesh.add(gemWireframe);

    // 4. Undulating Cyber Terrain Wireframe (Mountains in aengel.io video 00:15)
    const terrainGeo = new THREE.PlaneGeometry(24, 18, 55, 45);
    terrainGeo.rotateX(-Math.PI / 2);
    terrainGeo.translate(0, -1.2, -2);

    const posAttr = terrainGeo.attributes.position;
    const initialY = new Float32Array(posAttr.count);
    for (let i = 0; i < posAttr.count; i++) {
      const x = posAttr.getX(i);
      const z = posAttr.getZ(i);
      // Create mountain ridge ripples
      const d = Math.sqrt(x * x + z * z);
      const h = Math.sin(x * 0.5) * Math.cos(z * 0.5) * 0.8 + Math.sin(d * 1.2) * 0.3;
      initialY[i] = h;
      posAttr.setY(i, h);
    }
    terrainGeo.computeVertexNormals();

    const terrainWireGeo = new THREE.WireframeGeometry(terrainGeo);
    const terrainMat = new THREE.LineBasicMaterial({
      color: 0x1e293b,
      transparent: true,
      opacity: 0.35,
    });
    const terrainMesh = new THREE.LineSegments(terrainWireGeo, terrainMat);
    scene.add(terrainMesh);
    terrainMeshRef.current = terrainMesh;

    // 5. Ambient Atmospheric Dust Particles
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 12;
      particlePositions[i + 1] = (Math.random() - 0.5) * 8;
      particlePositions[i + 2] = (Math.random() - 0.5) * 10;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x94a3b8,
      size: 0.035,
      transparent: true,
      opacity: 0.6,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // 6. Interactive Mouse Parallax
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const onMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // 7. Responsive Resize
    const onResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // 8. Render Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse easing
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      camera.position.x = mouse.x * 0.6;
      camera.position.y = 1.2 + mouse.y * 0.4;
      camera.lookAt(0, 0.2, 0);

      // Rotate Monolith Gemstone
      if (gemMesh) {
        gemMesh.rotation.y = elapsedTime * 0.35 + mouse.x * 0.5;
        gemMesh.rotation.x = Math.sin(elapsedTime * 0.5) * 0.2 + mouse.y * 0.3;
        gemMesh.position.y = 0.2 + Math.sin(elapsedTime * 1.2) * 0.08;

        // Smoothly interpolate material and inner light color
        const targetColor = targetColorRef.current;
        gemMat.emissive.lerp(targetColor, 0.08);
        wireMat.color.lerp(targetColor, 0.08);
        if (innerLight) {
          innerLight.color.lerp(targetColor, 0.08);
        }
      }

      // Drift particle dust
      if (particleSystem) {
        particleSystem.rotation.y = elapsedTime * 0.02;
      }

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
      gemGeo.dispose();
      gemMat.dispose();
      terrainGeo.dispose();
      terrainMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${
        isPortalActive ? 'opacity-100' : 'opacity-0'
      }`}
    />
  );
};
