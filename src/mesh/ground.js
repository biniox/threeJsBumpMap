import * as THREE from './../../lib/three.js';
import { texturePromiseLoader } from './../../src/helpers/texturePromiseLoader.js';



const textureBase = await texturePromiseLoader('./../../textures/ground2/shell_floor_01_diff_4k.JPG');
const textureNormal = await texturePromiseLoader('./../../textures/ground2/shell_floor_01_nor_4k.JPG');
const textureHeight = await texturePromiseLoader('./../../textures/ground/1K_height.jpg');
const textureHeight1 = await texturePromiseLoader('./../../textures/ground/1K_height1.jpg');
const textureRough = await texturePromiseLoader('./../../textures/ground2/shell_floor_01_rough_4k.JPG');

const groundGeo = new THREE.BoxGeometry( 100, 1, 100 );
const groundMaterial = new THREE.MeshPhongMaterial( {
    map: textureBase,
    normalMap: textureNormal,
} );

const groundMaterialWithoutNormal = new THREE.MeshPhongMaterial( {
    map: textureBase,
} );


const ground = new THREE.Mesh( groundGeo, groundMaterial );

export { ground, groundMaterial, groundMaterialWithoutNormal}