import * as THREE from 'three';

export interface CameraKeyframe {
  progress: number; // 0.0 to 1.0
  sectionId: string;
  position: THREE.Vector3;
  target: THREE.Vector3;
  fov?: number;
}

export const CAMERA_TIMELINE: CameraKeyframe[] = [
  // 1. Hero: Medium full-body shot, character offset slightly to the right
  {
    progress: 0.0,
    sectionId: 'hero',
    position: new THREE.Vector3(0.8, 1.4, 4.2),
    target: new THREE.Vector3(0.0, 1.0, 0),
    fov: 42,
  },
  // 2. About: Camera sweeps closer, focusing on upper body & portrait framing
  {
    progress: 0.16,
    sectionId: 'about',
    position: new THREE.Vector3(0.5, 1.45, 2.8),
    target: new THREE.Vector3(0.0, 1.25, 0),
    fov: 40,
  },
  // 3. Skills: Orbiting three-quarter angle, looking across character to data space
  {
    progress: 0.32,
    sectionId: 'skills',
    position: new THREE.Vector3(-1.1, 1.3, 3.4),
    target: new THREE.Vector3(0.1, 1.0, 0),
    fov: 44,
  },
  // 4. Experience: Elevated timeline perspective, sweeping alongside character
  {
    progress: 0.48,
    sectionId: 'experience',
    position: new THREE.Vector3(1.2, 1.2, 3.2),
    target: new THREE.Vector3(0.0, 0.9, 0),
    fov: 42,
  },
  // 5. Education: Grounded milestone angle
  {
    progress: 0.62,
    sectionId: 'education',
    position: new THREE.Vector3(-0.7, 1.35, 3.1),
    target: new THREE.Vector3(0.0, 1.05, 0),
    fov: 42,
  },
  // 6. Projects: Dramatic wide studio composition overlooking projects gallery
  {
    progress: 0.78,
    sectionId: 'projects',
    position: new THREE.Vector3(0.0, 1.6, 4.6),
    target: new THREE.Vector3(0.0, 0.85, 0),
    fov: 46,
  },
  // 7. Achievements: Focused angled perspective
  {
    progress: 0.90,
    sectionId: 'achievements',
    position: new THREE.Vector3(-0.9, 1.3, 3.6),
    target: new THREE.Vector3(0.0, 1.0, 0),
    fov: 42,
  },
  // 8. Contact: Cinematic low-angle finish
  {
    progress: 1.0,
    sectionId: 'contact',
    position: new THREE.Vector3(0.4, 1.1, 3.4),
    target: new THREE.Vector3(0.0, 1.1, 0),
    fov: 40,
  },
];

/**
 * Interpolates camera position and target along the timeline given scroll progress (0..1)
 */
export function getCameraStateAtProgress(progress: number, outPos: THREE.Vector3, outTarget: THREE.Vector3): number {
  const clampedProgress = Math.max(0, Math.min(1, progress));

  // Find surrounding keyframes
  let prev = CAMERA_TIMELINE[0];
  let next = CAMERA_TIMELINE[CAMERA_TIMELINE.length - 1];

  for (let i = 0; i < CAMERA_TIMELINE.length - 1; i++) {
    if (clampedProgress >= CAMERA_TIMELINE[i].progress && clampedProgress <= CAMERA_TIMELINE[i + 1].progress) {
      prev = CAMERA_TIMELINE[i];
      next = CAMERA_TIMELINE[i + 1];
      break;
    }
  }

  const range = next.progress - prev.progress;
  const factor = range > 0 ? (clampedProgress - prev.progress) / range : 0;
  // Smooth cubic ease-in-out interpolation
  const t = factor * factor * (3 - 2 * factor);

  outPos.lerpVectors(prev.position, next.position, t);
  outTarget.lerpVectors(prev.target, next.target, t);

  const prevFov = prev.fov || 42;
  const nextFov = next.fov || 42;
  return prevFov + (nextFov - prevFov) * t;
}
