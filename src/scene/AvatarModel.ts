import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export class AvatarModel {
  public group: THREE.Group;
  public headGroup: THREE.Group;
  public eyes: THREE.Mesh[];
  public isCustomModelLoaded: boolean = false;
  private mixer: THREE.AnimationMixer | null = null;
  private breathingMesh: THREE.Mesh | null = null;
  private studioPedestal: THREE.Group;

  constructor() {
    this.group = new THREE.Group();
    this.headGroup = new THREE.Group();
    this.eyes = [];
    this.studioPedestal = new THREE.Group();

    this.group.add(this.studioPedestal);
    this.buildStudioPedestal();
    this.buildProceduralStylizedAvatar();
  }

  /**
   * Attempts to load custom GLB model from /models/me.glb.
   * If missing or failed, stays on procedural fallback seamlessly.
   */
  public async loadCustomModel(url = '/models/me.glb'): Promise<boolean> {
    const loader = new GLTFLoader();
    try {
      const gltf = await loader.loadAsync(url);
      if (gltf && gltf.scene) {
        // Remove procedural character but keep pedestal
        const childrenToRemove = this.group.children.filter((c) => c !== this.studioPedestal);
        childrenToRemove.forEach((c) => this.group.remove(c));

        const model = gltf.scene;
        model.position.set(0, 0, 0);
        this.group.add(model);

        if (gltf.animations && gltf.animations.length > 0) {
          this.mixer = new THREE.AnimationMixer(model);
          const action = this.mixer.clipAction(gltf.animations[0]);
          action.play();
        }

        this.isCustomModelLoaded = true;
        return true;
      }
    } catch {
      // Custom model not present or failed to load; procedural avatar remains active
      this.isCustomModelLoaded = false;
    }
    return false;
  }

  /**
   * Constructs an architectural studio pedestal beneath the character
   */
  private buildStudioPedestal() {
    const pedestalGeo = new THREE.CylinderGeometry(1.6, 1.8, 0.12, 48);
    const pedestalMat = new THREE.MeshStandardMaterial({
      color: 0x0f1422,
      roughness: 0.35,
      metalness: 0.6,
    });
    const pedestal = new THREE.Mesh(pedestalGeo, pedestalMat);
    pedestal.position.y = -0.06;
    pedestal.receiveShadow = true;
    this.studioPedestal.add(pedestal);

    // Inner glowing ring
    const ringGeo = new THREE.RingGeometry(1.4, 1.48, 48);
    ringGeo.rotateX(-Math.PI / 2);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.45,
      side: THREE.DoubleSide,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.position.y = 0.005;
    this.studioPedestal.add(ring);
  }

  /**
   * Builds a stylized 3D human character representing Priyansh Singh
   * (dark technical jacket, posture, stylized hair, expressive eyes)
   */
  private buildProceduralStylizedAvatar() {
    const charGroup = new THREE.Group();
    charGroup.position.set(0, 0, 0);

    // Materials
    const skinMat = new THREE.MeshStandardMaterial({
      color: 0xdfa17a,
      roughness: 0.65,
      metalness: 0.05,
    });
    const jacketMat = new THREE.MeshStandardMaterial({
      color: 0x181e2b,
      roughness: 0.4,
      metalness: 0.2,
    });
    const pantsMat = new THREE.MeshStandardMaterial({
      color: 0x0f131a,
      roughness: 0.7,
      metalness: 0.1,
    });
    const shoesMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.3,
      metalness: 0.1,
    });
    const hairMat = new THREE.MeshStandardMaterial({
      color: 0x111115,
      roughness: 0.8,
      metalness: 0.1,
    });
    const eyeMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8, // Electric blue eye iris
    });

    // 1. Shoes
    const shoeL = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.12, 0.36), shoesMat);
    shoeL.position.set(-0.22, 0.06, 0.04);
    const shoeR = shoeL.clone();
    shoeR.position.x = 0.22;
    charGroup.add(shoeL, shoeR);

    // 2. Legs / Trousers
    const legL = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.09, 0.82, 16), pantsMat);
    legL.position.set(-0.22, 0.52, 0);
    const legR = legL.clone();
    legR.position.x = 0.22;
    charGroup.add(legL, legR);

    // 3. Torso / Technical Jacket
    const torsoGeo = new THREE.CylinderGeometry(0.32, 0.25, 0.85, 24);
    const torso = new THREE.Mesh(torsoGeo, jacketMat);
    torso.position.set(0, 1.25, 0);
    charGroup.add(torso);
    this.breathingMesh = torso;

    // Jacket Zipper / Detail Line
    const zipGeo = new THREE.BoxGeometry(0.02, 0.82, 0.02);
    const zipMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, metalness: 0.8, roughness: 0.2 });
    const zipper = new THREE.Mesh(zipGeo, zipMat);
    zipper.position.set(0, 1.25, 0.28);
    charGroup.add(zipper);

    // 4. Arms
    const armGeo = new THREE.CylinderGeometry(0.09, 0.08, 0.72, 16);
    armGeo.translate(0, -0.32, 0);

    const armL = new THREE.Mesh(armGeo, jacketMat);
    armL.position.set(-0.38, 1.55, 0);
    armL.rotation.z = 0.12;

    const armR = new THREE.Mesh(armGeo, jacketMat);
    armR.position.set(0.38, 1.55, 0);
    armR.rotation.z = -0.12;

    // Hands
    const handL = new THREE.Mesh(new THREE.SphereGeometry(0.07, 12, 12), skinMat);
    handL.position.set(-0.46, 0.88, 0);
    const handR = new THREE.Mesh(new THREE.SphereGeometry(0.07, 12, 12), skinMat);
    handR.position.set(0.46, 0.88, 0);

    charGroup.add(armL, armR, handL, handR);

    // 5. Neck
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.12, 0.16, 16), skinMat);
    neck.position.set(0, 1.72, 0);
    charGroup.add(neck);

    // 6. Head Group (Rotates toward cursor smoothly)
    this.headGroup.position.set(0, 1.88, 0);

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.22, 24, 24), skinMat);
    head.scale.set(0.95, 1.05, 1.0);
    this.headGroup.add(head);

    // Hair
    const hairGeo = new THREE.SphereGeometry(0.24, 20, 20, 0, Math.PI * 2, 0, Math.PI * 0.65);
    const hair = new THREE.Mesh(hairGeo, hairMat);
    hair.position.set(0, 0.04, -0.02);
    this.headGroup.add(hair);

    // Eyes
    const eyeGeo = new THREE.SphereGeometry(0.035, 12, 12);
    const eyeL = new THREE.Mesh(eyeGeo, eyeMat);
    eyeL.position.set(-0.08, 0.02, 0.19);
    const eyeR = eyeL.clone();
    eyeR.position.x = 0.08;
    this.headGroup.add(eyeL, eyeR);
    this.eyes.push(eyeL, eyeR);

    charGroup.add(this.headGroup);
    this.group.add(charGroup);
  }

  /**
   * Animate breathing, eye cursor tracking, and model mixer updates
   */
  public update(delta: number, elapsedTime: number, mouse: { x: number; y: number }) {
    if (this.mixer) {
      this.mixer.update(delta);
    }

    // Procedural breathing cycle
    if (this.breathingMesh) {
      const breathe = Math.sin(elapsedTime * 2.2) * 0.015;
      this.breathingMesh.scale.set(1 + breathe, 1 + breathe * 0.5, 1 + breathe);
    }

    // Eye and head tracking toward cursor
    if (this.headGroup) {
      const targetRotY = mouse.x * 0.35; // Limited realistic range
      const targetRotX = -mouse.y * 0.25;

      this.headGroup.rotation.y = THREE.MathUtils.lerp(this.headGroup.rotation.y, targetRotY, 0.08);
      this.headGroup.rotation.x = THREE.MathUtils.lerp(this.headGroup.rotation.x, targetRotX, 0.08);
    }

    // Subtle eye pupil micro-shift
    this.eyes.forEach((eye) => {
      eye.position.x = (eye === this.eyes[0] ? -0.08 : 0.08) + mouse.x * 0.01;
      eye.position.y = 0.02 + mouse.y * 0.008;
    });
  }

  /**
   * Adapts lighting / pedestal colors to match current theme
   */
  public applyTheme(theme: 'dark' | 'light') {
    if (this.studioPedestal) {
      const pedestal = this.studioPedestal.children[0] as THREE.Mesh;
      if (pedestal && pedestal.material instanceof THREE.MeshStandardMaterial) {
        pedestal.material.color.setHex(theme === 'dark' ? 0x0f1422 : 0xe2e8f0);
      }
    }
  }
}
