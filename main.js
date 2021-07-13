import * as THREE from "./lib/three.js";

import Stats from "./lib/stats.module.js";

import { camera } from './src/camera.js'
import { controls, onKeyUp, onKeyDown, animateMove, objects } from './src/controls.js'
import { skybox } from './src/mesh/skybox.js'
import { BoxGeo, BoxArray, BoxArrayWithoutNormal } from './src/mesh/box.js'
import { spotLight,  spotLight2, spotLightHelper, spotLightHelper2 } from './src/light.js'
import {
  verticalMirror, 
  verticalMirror2, 
  loadHouseScenePromise,
  roofMaterialWithoutNormal,
  roofMaterial,
  backMaterialWithoutNormal,
  backMaterial,
  doorMaterialWithoutNormal,
  doorMaterial,
  frontMaterialWithoutNormal, 
  frontMaterial, 
  windowMaterialWithoutNormal,
  windowMaterial,
  windowBackMaterialWithoutNormal,
  windowBackMaterial,
  chimneyeMaterialWithoutNormal,
  chimneyeMaterial,
  grassMaterialWithoutNormal,
  grassMaterial,
  pavementMaterialWithoutNormal,
  pavementMaterial,
  roadMaterialWithoutNormal,
  roadMaterial
} from './src/mesh/house/house.js'

const statsEnabled = true;

let container, stats;

let scene, renderer;

let mesh;

let house; 




const windowHalfX = window.innerWidth / 2;
const windowHalfY = window.innerHeight / 2;



init();
animate();

function init() {
  container = document.createElement("div");
  document.body.appendChild(container);

  //

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  scene = new THREE.Scene();

scene.add( controls.getObject() );



document.addEventListener( 'keydown', onKeyDown );
document.addEventListener( 'keyup', onKeyUp );



  scene.add(skybox);


  let Box = new THREE.Mesh(BoxGeo, BoxArray);

  Box.position.x = -3;
  Box.position.y = -1;
  scene.add(Box);

  let Box2 = new THREE.Mesh(BoxGeo, BoxArray);
  Box2.position.x = -4.1;
  Box2.position.y = -1;
  Box2.position.z = -1.1;
  scene.add(Box2);

  let Box3 = new THREE.Mesh(BoxGeo, BoxArray);
  Box3.position.x = -3;
  Box3.position.y = -1;
  Box3.position.z = -1.1;

  scene.add(Box3);

  let Box4 = new THREE.Mesh(BoxGeo, BoxArray);
  Box4.position.x = -4;
  Box4.position.y = 0;
  Box4.position.z = -1.1;
  Box4.rotation.y = Math.PI / 3;

  scene.add(Box4);



let Box5 = new THREE.Mesh(BoxGeo, BoxArray);

Box5.position.x = 1;
Box5.position.y = -1;
Box5.position.z = 6;
scene.add(Box5);

let Box6 = new THREE.Mesh(BoxGeo, BoxArray);
Box6.position.x = -0.1;
Box6.position.y = -1;
Box6.position.z = 7;
scene.add(Box6);

let Box7 = new THREE.Mesh(BoxGeo, BoxArray);
Box7.position.x = 1.2;
Box7.position.y = -1;
Box7.position.z = 7.1;

scene.add(Box7);

let Box8 = new THREE.Mesh(BoxGeo, BoxArray);
Box8.position.x = 0.5;
Box8.position.y = 0;
Box8.position.z = 6.5;
Box8.rotation.y = Math.PI / 3;

scene.add(Box8);

objects.push(Box);
objects.push(Box2);
objects.push(Box3);
objects.push(Box4);
objects.push(Box5);
objects.push(Box6);
objects.push(Box7);
objects.push(Box8);

  // LIGHTS






    scene.add(spotLight)
    scene.add( spotLightHelper );
    scene.add(spotLight2)  
    scene.add( spotLightHelper2 );

    scene.add(verticalMirror);    
    scene.add(verticalMirror2); 
 
    loadHouseScenePromise().then((data) => {house = data; scene.add(house)})


  // EVENTS

  window.addEventListener("resize", onWindowResize);
  const changeButtonOn = document.querySelector(".changeMap_on");
const changeButtonOff = document.querySelector(".changeMap_off");

changeButtonOn.addEventListener("click", () => {
    changeButtonOn.classList.add("active");
    changeButtonOff.classList.remove("active");
    Box.material = BoxArray;
    Box2.material = BoxArray;
    Box3.material = BoxArray;
    Box4.material = BoxArray;
    Box5.material = BoxArray;
    Box6.material = BoxArray;
    Box7.material = BoxArray;
    Box8.material = BoxArray;
    // ground.material = groundMaterial;
    house.children[0].material = backMaterial;
    house.children[1].material = roofMaterial;
    house.children[2].material = frontMaterial;
    house.children[3].material = doorMaterial;
    // house.children[4].material = windowMaterialWithoutNormal;
    // house.children[5].material = windowBackMaterialWithoutNormal;
    // house.children[6].material = roofMaterialWithoutNormal;
    // house.children[7].material = roofMaterialWithoutNormal;
    // house.children[8].material = roofMaterialWithoutNormal;
    house.children[9].material = chimneyeMaterial;
    house.children[10].material = grassMaterial;
    house.children[11].material = pavementMaterial;
    house.children[12].material = roadMaterial;
    console.log(house.children);

})

changeButtonOff.addEventListener("click", () => {
    changeButtonOn.classList.remove("active");
    changeButtonOff.classList.add("active");
    // scene.add( ground );
    console.log(Box.material)
    Box.material = BoxArrayWithoutNormal;
    Box2.material = BoxArrayWithoutNormal;
    Box3.material = BoxArrayWithoutNormal;
    Box4.material = BoxArrayWithoutNormal;
    Box5.material = BoxArrayWithoutNormal;
    Box6.material = BoxArrayWithoutNormal;
    Box7.material = BoxArrayWithoutNormal;
    Box8.material = BoxArrayWithoutNormal;
    house.children[0].material = backMaterialWithoutNormal;
    house.children[1].material = roofMaterialWithoutNormal;
    house.children[2].material = frontMaterialWithoutNormal;
    house.children[3].material = doorMaterialWithoutNormal;
    // house.children[4].material = windowMaterialWithoutNormal;
    // house.children[5].material = windowBackMaterialWithoutNormal;
    // house.children[6].material = roofMaterialWithoutNormal;
    // house.children[7].material = roofMaterialWithoutNormal;
    // house.children[8].material = roofMaterialWithoutNormal;
    house.children[9].material = chimneyeMaterialWithoutNormal;
    house.children[10].material = grassMaterialWithoutNormal;
    house.children[11].material = pavementMaterialWithoutNormal;
    house.children[12].material = roadMaterialWithoutNormal;
})
}

function createScene(geometry, scale, material) {
  mesh = new THREE.Mesh(geometry, material);

  mesh.position.y = -50;
  mesh.scale.set(scale, scale, scale);

  mesh.castShadow = true;
  mesh.receiveShadow = true;

  scene.add(mesh);
}

//

function onWindowResize() {
  renderer.setSize(window.innerWidth, window.innerHeight);

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  verticalMirror
    .getRenderTarget()
    .setSize(
      window.innerWidth * window.devicePixelRatio,
      window.innerHeight * window.devicePixelRatio
    );
}


function animate() {

requestAnimationFrame( animate );
animateMove();

renderer.render( scene, camera );

}


