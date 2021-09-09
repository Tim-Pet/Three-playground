import './style.css';
import * as THREE from 'three';
import { AxesHelper } from 'three';

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
mesh.position.set(0.7, -0.6, 1);
scene.add(mesh);

// Scale
mesh.scale.set(2, 0.5, 0.5);

// Rotation
mesh.rotation.reorder('XYZ'); // Axes rotate based on previous rotation
mesh.rotation.x = Math.PI * 0.25; // 180° rotation
mesh.rotation.z = Math.PI * 0.25; // 180° rotation

// Axes helper
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.set(0, 0, 3);
scene.add(camera);

camera.lookAt(mesh.position);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
