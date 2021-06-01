import * as THREE from './../lib/three.js';

const camera = new THREE.PerspectiveCamera(24, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 350;
camera.position.x = 350;
camera.position.y = 150;

export { camera }