import * as THREE from './../lib/three.js';
import { colorWhite } from './colors.js';

const light = new THREE.HemisphereLight( 0x443333, 0x111122 );
light.position.set(0,0,0);





const spotLight = new THREE.SpotLight( 0xffffbb, 2 );
                spotLight.position.set( 100, 30, 10 );
                spotLight.position.multiplyScalar( 700 );
                // scene.add( spotLight );

                spotLight.castShadow = true;

                spotLight.shadow.mapSize.width = 2048;
                spotLight.shadow.mapSize.height = 2048;

                spotLight.shadow.camera.near = 200;
                spotLight.shadow.camera.far = 1500;

                spotLight.shadow.camera.fov = 40;

                spotLight.shadow.bias = - 0.005;



export { light,  spotLight}