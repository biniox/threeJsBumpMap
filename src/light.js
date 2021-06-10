import * as THREE from './../lib/three.js';
import { colorWhite } from './colors.js';






const spotLight = new THREE.SpotLight( 0xffffbb, 3 );
spotLight.position.set( 50, 30, 30 );
spotLight.position.multiplyScalar( 700 );
// scene.add( spotLight );
// spotLight.distance(10);   

spotLight.castShadow = true;

spotLight.shadow.mapSize.width = 2048;
spotLight.shadow.mapSize.height = 2048;

spotLight.shadow.camera.near = 200;
spotLight.shadow.camera.far = 1500;

spotLight.shadow.camera.fov = 40;

spotLight.shadow.bias = - 0.005;



const spotLightHelper = new THREE.SpotLightHelper( spotLight );


const spotLight2 = new THREE.SpotLight( 0xffffbb, 2, 110 );
spotLight2.position.set( -50, 30, -50 );
// spotLight2.position.multiplyScalar( 700 );
// scene.2add( spotLight );
2
spotLight2.castShadow = true;
2
spotLight2.shadow.mapSize.width = 2048;
spotLight2.shadow.mapSize.height = 2048;
2
spotLight2.shadow.camera.near = 200;
spotLight2.shadow.camera.far = 1500;
2
spotLight2.shadow.camera.fov = 40;
2
spotLight2.shadow.bias = - 0.005;

const spotLightHelper2 = new THREE.SpotLightHelper( spotLight2 );


export { spotLight,  spotLight2, spotLightHelper, spotLightHelper2 }