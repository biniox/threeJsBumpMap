import * as THREE from './lib/three.js';
import { light, spotLight } from './src/light.js';
import { camera } from './src/camera.js';
import { colorYellow, colorPink } from './src/colors.js';
import { cube } from './src/mesh/cubeMesh.js';
import { ground, groundMaterialWithoutNormal, groundMaterial } from './src/mesh/ground.js';
import { texturePromiseLoader } from './src/helpers/texturePromiseLoader.js'

import { FirstPersonControls } from './lib/controls/FirstPersonControls.js'
import { OrbitControls } from './lib/controls/OrbitControls.js'

    const scene = new THREE.Scene();
    const backgroundScene = await texturePromiseLoader('./textures/sceneBackground.jpg');
    scene.background = backgroundScene;   
    //adding objects to scene
    scene.add( light );
    scene.add(spotLight);
    scene.add( ground );
    scene.add( cube );

    //rendering
    const renderer = new THREE.WebGLRenderer({ antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.append(renderer.domElement);
    renderer.render(scene, camera);

    
    console.log(ground);
    //controls function
    const controls = new OrbitControls( camera, renderer.domElement );
    renderer.render(scene, camera);


    function tick() {
        controls.update(0.5);
        renderer.render( scene, camera );

        requestAnimationFrame( tick );

    }

    const showGround = () => console.log(ground);




    tick();




    const changeButtonOn = document.querySelector(".changeMap_on");
    const changeButtonOff = document.querySelector(".changeMap_off");

    changeButtonOn.addEventListener("click", () => {
        changeButtonOn.classList.add("active");
        changeButtonOff.classList.remove("active");

        ground.material = groundMaterial;

    })

    changeButtonOff.addEventListener("click", () => {
        changeButtonOn.classList.remove("active");
        changeButtonOff.classList.add("active");
        // scene.add( ground );
        ground.material = groundMaterialWithoutNormal;
    })


