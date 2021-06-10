import { PerspectiveCamera } from './../lib/three.js';

const camera = new PerspectiveCamera(
    27,
    window.innerWidth / window.innerHeight,
    1,
    10000
  );
  // camera.position.set( 0, 0, 160 );
  camera.position.z = 10;

  // cameraControls = new OrbitControls(camera, renderer.domElement);
  // // cameraControls.target.set(-2.5, -1.5, 8.5);
  // cameraControls.target.set(0,0,0);
  // cameraControls.maxDistance = 400;
  // cameraControls.minDistance = 0;
  // cameraControls.update();

export { camera }