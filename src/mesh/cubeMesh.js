import * as THREE from './../../lib/three.js';


const cubeGeo = new THREE.BoxGeometry( 1, 1, 1 );
const cubeMaterial = new THREE.MeshPhongMaterial( {
    color: 0x00ff00,
    shininess: 80,
} );
const cube = new THREE.Mesh( cubeGeo, cubeMaterial );

export {cube}