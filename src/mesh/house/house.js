
import { TextureLoader,  PlaneGeometry, MeshPhongMaterial, sRGBEncoding, Vector2,  RepeatWrapping } from './../../../lib/three.js';
import { Reflector } from "./../../../lib/Reflector.js";
import { GLTFLoader } from "./../../../lib/GLTFLoader.js";

  let gltf;
  let verticalMirror;
  let verticalMirror2;
  let loader;

  const mirrorTexture = new TextureLoader().load(
    "textures/mirror/mirror.PNG"
  );

  let geometry = new PlaneGeometry(0.85, 0.85);
  verticalMirror = new Reflector(geometry, {
    clipBias: 0.003,
    textureWidth: window.innerWidth * window.devicePixelRatio,
    textureHeight: window.innerHeight * window.devicePixelRatio,
    color: 0x546d82

  });

  verticalMirror.material.fog = true;
//   console.log(verticalMirror);
  verticalMirror.position.y = 0.25;
  verticalMirror.position.z = 2.43;
  verticalMirror.position.x = 1;


          //Lustro 2
          let geometry2 = new PlaneGeometry(0.85, 0.85);
  verticalMirror2 = new Reflector(geometry2, {
    clipBias: 0.003,
    textureWidth: window.innerWidth * window.devicePixelRatio,
    textureHeight: window.innerHeight * window.devicePixelRatio,
    color: 0x546d82 ,
  });
  verticalMirror2.position.y = 0.25;
  verticalMirror2.position.z = 0;
  verticalMirror2.position.x = -2.43;
          verticalMirror2.rotateY(-Math.PI / 2);


          //Materiały i tekstury
          //Dach
  const roofColorTexture = new TextureLoader().load(
    "textures/roof_slates_03_diff_2k1.jpg"
  );
          roofColorTexture.flipY = false;
  roofColorTexture.encoding = sRGBEncoding;
  const roofNormalTexture = new TextureLoader().load(
    "textures/roof_slates_03_nor_2k1.jpg"
  );

          roofNormalTexture.flipY = false;

  const roofMaterial = new MeshPhongMaterial({
    shininess: 20,
    map: roofColorTexture,
    normalMap: roofNormalTexture,
              normalScale: new Vector2(1, 1),
  });
  const roofMaterialWithoutNormal = new MeshPhongMaterial({
    shininess: 20,
    map: roofColorTexture,
    // normalMap: roofNormalTexture,
              normalScale: new Vector2(1, 1),
  });
  roofMaterial.map.wrapS = RepeatWrapping;
  roofMaterialWithoutNormal.map.wrapS = RepeatWrapping;
  roofMaterial.normalMap.wrapS = RepeatWrapping;

          //Drzwi
          const doorColorTexture = new TextureLoader().load(
    "textures/Wood029_2K_Color1.jpg"
  );
          doorColorTexture.flipY = false;
  doorColorTexture.encoding = sRGBEncoding;
  const doorNormalTexture = new TextureLoader().load(
    "textures/Wood029_2K_Normal1.jpg"
  );

          doorNormalTexture.flipY = true;

  const doorMaterial = new MeshPhongMaterial({
    shininess: 20,
    map: doorColorTexture,
    normalMap: doorNormalTexture,
              normalScale: new Vector2(1, 1),
  });
  doorMaterial.map.wrapS = RepeatWrapping;
  doorMaterial.normalMap.wrapS = RepeatWrapping;
          doorMaterial.map.wrapT = RepeatWrapping;
  doorMaterial.normalMap.wrapT = RepeatWrapping;


  const doorMaterialWithoutNormal = new MeshPhongMaterial({
    shininess: 20,
    map: doorColorTexture,
    // normalMap: doorNormalTexture,
              // normalScale: new Vector2(1, 1),
  });
  doorMaterialWithoutNormal.map.wrapS = RepeatWrapping;
  // doorMaterial.normalMap.wrapS = RepeatWrapping;
  doorMaterialWithoutNormal.map.wrapT = RepeatWrapping;
  // doorMaterial.normalMap.wrapT = RepeatWrapping;

          //Back
          const backColorTexture = new TextureLoader().load(
    "textures/Bricks026_2K_Color1.jpg"
  );
          backColorTexture.flipY = false;
  backColorTexture.encoding = sRGBEncoding;
  const backNormalTexture = new TextureLoader().load(
    "textures/Bricks026_2K_Normal1.jpg"
  );

          backNormalTexture.flipY = false;

  const backMaterial = new MeshPhongMaterial({
    shininess: 5,
    map: backColorTexture,
    normalMap: backNormalTexture,
              normalScale: new Vector2(0.5, 0.5),
  });
  backMaterial.map.wrapS = RepeatWrapping;
  backMaterial.normalMap.wrapS = RepeatWrapping;
          backMaterial.map.wrapT = RepeatWrapping;
  backMaterial.normalMap.wrapT = RepeatWrapping;

  const backMaterialWithoutNormal = new MeshPhongMaterial({
    shininess: 5,
    map: backColorTexture,
    // normalMap: backNormalTexture,
              normalScale: new Vector2(0.5, 0.5),
  });

  backMaterialWithoutNormal.map.wrapS = RepeatWrapping;
  // backMaterial.normalMap.wrapS = RepeatWrapping;
  backMaterialWithoutNormal.map.wrapT = RepeatWrapping;
  // backMaterial.normalMap.wrapT = RepeatWrapping;

          //Front
          const frontColorTexture = new TextureLoader().load(
    "textures/WoodSiding005_2K_Color1.jpg"
  );
          frontColorTexture.flipY = false;
  frontColorTexture.encoding = sRGBEncoding;
  const frontNormalTexture = new TextureLoader().load(
    "textures/WoodSiding005_2K_Normal1.jpg"
  );

          frontNormalTexture.flipY = false;

  const frontMaterial = new MeshPhongMaterial({
    shininess: 10,
    map: frontColorTexture,
    normalMap: frontNormalTexture,
              normalScale: new Vector2(0.5, 0.5),
  });
  frontMaterial.map.wrapS = RepeatWrapping;
  frontMaterial.normalMap.wrapS = RepeatWrapping;
          frontMaterial.map.wrapT = RepeatWrapping;
  frontMaterial.normalMap.wrapT = RepeatWrapping;

  const frontMaterialWithoutNormal = new MeshPhongMaterial({
    shininess: 10,
    map: frontColorTexture,
    // normalMap: frontNormalTexture,
              // normalScale: new Vector2(0.5, 0.5),
  });
  frontMaterialWithoutNormal.map.wrapS = RepeatWrapping;
  // frontMaterial.normalMap.wrapS = RepeatWrapping;
  frontMaterialWithoutNormal.map.wrapT = RepeatWrapping;
  // frontMaterial.normalMap.wrapT = RepeatWrapping;

          //Window
          const windowColorTexture = new TextureLoader().load(
    "textures/fine_grained_wood_col_2k1.jpg"
  );
          windowColorTexture.flipY = false;
  windowColorTexture.encoding = sRGBEncoding;
  const windowNormalTexture = new TextureLoader().load(
    "textures/fine_grained_wood_normal_2k1.jpg"
  );

          windowNormalTexture.flipY = false;

  const windowMaterial = new MeshPhongMaterial({
    shininess: 10,
    map: windowColorTexture,
    normalMap: windowNormalTexture,
              normalScale: new Vector2(1, 1),
  });
  windowMaterial.map.wrapS = RepeatWrapping;
  windowMaterial.normalMap.wrapS = RepeatWrapping;
          windowMaterial.map.wrapT = RepeatWrapping;
  windowMaterial.normalMap.wrapT = RepeatWrapping;

  const windowMaterialWithoutNormal = new MeshPhongMaterial({
    shininess: 10,
    map: windowColorTexture,
    // normalMap: windowNormalTexture,
              // normalScale: new Vector2(1, 1),
  });
  windowMaterialWithoutNormal.map.wrapS = RepeatWrapping;
  // windowMaterial.normalMap.wrapS = RepeatWrapping;
  windowMaterialWithoutNormal.map.wrapT = RepeatWrapping;
  // windowMaterial.normalMap.wrapT = RepeatWrapping;

          //WindowBack
          const windowBackColorTexture = new TextureLoader().load(
    "textures/plaster_grey_04_diff_2k1.jpg"
  );
          windowBackColorTexture.flipY = false;
  windowBackColorTexture.encoding = sRGBEncoding;
  const windowBackNormalTexture = new TextureLoader().load(
    "textures/plaster_grey_04_nor_2k1.jpg"
  );

          windowBackNormalTexture.flipY = false;

  const windowBackMaterial = new MeshPhongMaterial({
    shininess: 10,
    map: windowBackColorTexture,
    normalMap: windowBackNormalTexture,
              normalScale: new Vector2(1, 1),
  });
  windowBackMaterial.map.wrapS = RepeatWrapping;
  windowBackMaterial.normalMap.wrapS = RepeatWrapping;
          windowBackMaterial.map.wrapT = RepeatWrapping;
  windowBackMaterial.normalMap.wrapT = RepeatWrapping;

  const windowBackMaterialWithoutNormal = new MeshPhongMaterial({
    shininess: 10,
    map: windowBackColorTexture,
    // normalMap: windowBackNormalTexture,
              // normalScale: new Vector2(1, 1),
  });
  windowBackMaterialWithoutNormal.map.wrapS = RepeatWrapping;
  // windowBackMaterialWithoutNormal.normalMap.wrapS = RepeatWrapping;
  windowBackMaterialWithoutNormal.map.wrapT = RepeatWrapping;
  // windowBackMaterialWithoutNormal.normalMap.wrapT = RepeatWrapping;

          //Chimneye
          const chimneyeColorTexture = new TextureLoader().load(
    "textures/factory_brick_diff_2k1.jpg"
  );
          chimneyeColorTexture.flipY = false;
  chimneyeColorTexture.encoding = sRGBEncoding;
  const chimneyeNormalTexture = new TextureLoader().load(
    "textures/factory_brick_nor_2k1.jpg"
  );

          chimneyeNormalTexture.flipY = false;


  const chimneyeMaterial = new MeshPhongMaterial({
    shininess: 10,
    map: chimneyeColorTexture,
    normalMap: chimneyeNormalTexture,
              normalScale: new Vector2(1, 1),
  });
  chimneyeMaterial.map.wrapS = RepeatWrapping;
  chimneyeMaterial.normalMap.wrapS = RepeatWrapping;
          chimneyeMaterial.map.wrapT = RepeatWrapping;
  chimneyeMaterial.normalMap.wrapT = RepeatWrapping;


  const chimneyeMaterialWithoutNormal = new MeshPhongMaterial({
    shininess: 10,
    map: chimneyeColorTexture,
    // normalMap: chimneyeNormalTexture,
              // normalScale: new Vector2(1, 1),
  });
  chimneyeMaterialWithoutNormal.map.wrapS = RepeatWrapping;
  // chimneyeMaterialWithoutNormal.normalMap.wrapS = RepeatWrapping;
  chimneyeMaterialWithoutNormal.map.wrapT = RepeatWrapping;
  // chimneyeMaterialWithoutNormal.normalMap.wrapT = RepeatWrapping;

  //Grass
          const grassColorTexture = new TextureLoader().load(
    "textures/Grass001_1K_Color.jpg"
  );
          grassColorTexture.flipY = false;
  grassColorTexture.encoding = sRGBEncoding;
  const grassNormalTexture = new TextureLoader().load(
    "textures/Grass001_1K_Normal.jpg"
  );

          grassNormalTexture.flipY = false;


  const grassMaterial = new MeshPhongMaterial({
    shininess: 10,
    map: grassColorTexture,
    normalMap: grassNormalTexture,
              normalScale: new Vector2(1, 1),
  });
  grassMaterial.map.wrapS = RepeatWrapping;
  grassMaterial.normalMap.wrapS = RepeatWrapping;
          grassMaterial.map.wrapT = RepeatWrapping;
  grassMaterial.normalMap.wrapT = RepeatWrapping;


  const grassMaterialWithoutNormal = new MeshPhongMaterial({
    shininess: 10,
    map: grassColorTexture,
    // normalMap: grassNormalTexture,
              // normalScale: new Vector2(1, 1),
  });
  grassMaterialWithoutNormal.map.wrapS = RepeatWrapping;
  // grassMaterialWithoutNormal.normalMap.wrapS = RepeatWrapping;
  grassMaterialWithoutNormal.map.wrapT = RepeatWrapping;
  // grassMaterialWithoutNormal.normalMap.wrapT = RepeatWrapping;

  //Pavement
          const pavementColorTexture = new TextureLoader().load(
    "textures/t_brick_floor_002_Diffuse_1k.jpg"
  );
          pavementColorTexture.flipY = false;
  pavementColorTexture.encoding = sRGBEncoding;
  const pavementNormalTexture = new TextureLoader().load(
    "textures/t_brick_floor_002_GL_Normal_1k.jpg"
  );

          pavementNormalTexture.flipY = false;


  const pavementMaterial = new MeshPhongMaterial({
    shininess: 10,
    map: pavementColorTexture,
    normalMap: pavementNormalTexture,
              normalScale: new Vector2(1, 1),
  });
  pavementMaterial.map.wrapS = RepeatWrapping;
  pavementMaterial.normalMap.wrapS = RepeatWrapping;
          pavementMaterial.map.wrapT = RepeatWrapping;
  pavementMaterial.normalMap.wrapT = RepeatWrapping;


  const pavementMaterialWithoutNormal = new MeshPhongMaterial({
    shininess: 10,
    map: pavementColorTexture,
    // normalMap: pavementNormalTexture,
              // normalScale: new Vector2(1, 1),
  });
  pavementMaterialWithoutNormal.map.wrapS = RepeatWrapping;
  // pavementMaterialWithoutNormal.normalMap.wrapS = RepeatWrapping;
  pavementMaterialWithoutNormal.map.wrapT = RepeatWrapping;
  // pavementMaterialWithoutNormal.normalMap.wrapT = RepeatWrapping;

  //Road
          const roadColorTexture = new TextureLoader().load(
    "textures/ground2/shell_floor_01_diff_4k.JPG"
  );
          roadColorTexture.flipY = false;
  roadColorTexture.encoding = sRGBEncoding;
  const roadNormalTexture = new TextureLoader().load(
    "textures/ground2/shell_floor_01_nor_4k.JPG"
  );

          roadNormalTexture.flipY = false;


  const roadMaterial = new MeshPhongMaterial({
    shininess: 10,
    map: roadColorTexture,
    normalMap: roadNormalTexture,
              normalScale: new Vector2(1, 1),
  });
  roadMaterial.map.wrapS = RepeatWrapping;
  roadMaterial.normalMap.wrapS = RepeatWrapping;
          roadMaterial.map.wrapT = RepeatWrapping;
  roadMaterial.normalMap.wrapT = RepeatWrapping;


  const roadMaterialWithoutNormal = new MeshPhongMaterial({
    shininess: 10,
    map: roadColorTexture,
    // normalMap: roadNormalTexture,
              // normalScale: new Vector2(1, 1),
  });
  roadMaterialWithoutNormal.map.wrapS = RepeatWrapping;
  // roadMaterialWithoutNormal.normalMap.wrapS = RepeatWrapping;
  roadMaterialWithoutNormal.map.wrapT = RepeatWrapping;
  // roadMaterialWithoutNormal.normalMap.wrapT = RepeatWrapping;


  loader = new GLTFLoader();

const loadHouseScenePromise = () => {
  return new Promise((resolve, reject) => loader.load("textures/ProjektLepszy3.glb", function (gltf) {
    gltf.scene.rotation.y = -Math.PI/2;
              console.log(gltf)
    gltf.scene.traverse(function (child) {
      if (child.isMesh) {
        if (child.name === "Roof") {
          child.material = roofMaterial;
        }
                      if (child.name === "Door") {
          child.material = doorMaterial;
        }
                      if (child.name === "Back") {
          child.material = backMaterial;
        }
                      if (child.name === "Front") {
          child.material = frontMaterial;
        }
                      if (child.name === "Window_1" || child.name === "Window_2") {
                          console.log("Window")
          child.material = windowMaterial;
        }
                      if (child.name === "Window_1a" || child.name === "Window_2a" || child.name === "Door_a") {
                          console.log("Window")
          child.material = windowBackMaterial;
        }
                      if (child.name === "Chimneye") {
          child.material = chimneyeMaterial;
        }
        if (child.name === "Grass") {
          child.material = grassMaterial;
        }
        if (child.name === "Pavement") {
          child.material = pavementMaterial;
        }
        if (child.name === "Road") {
          child.material = roadMaterial;
        }


      }

    });

    resolve(gltf.scene);
    console.log(gltf.scene)
}));
}




    // objects = objects.concat(...gtlf.Scene)
//   });

  export {
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



        }


  

