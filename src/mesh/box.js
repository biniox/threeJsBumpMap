import { TextureLoader, MeshStandardMaterial, BoxGeometry } from './../../lib/three.js';
  
  const texture_basic = new TextureLoader().load('./textures/box/Wood_Crate_001_basecolor.jpg')
  const texture_normal = new TextureLoader().load('./textures/box/Wood_Crate_001_normal.jpg')



  

  const BoxArray = [];
  BoxArray.push(new MeshStandardMaterial({map: texture_basic
  ,normalMap: texture_normal }));
  BoxArray.push(new MeshStandardMaterial({map: texture_basic
  ,normalMap: texture_normal }));
  BoxArray.push(new MeshStandardMaterial({map: texture_basic
  ,normalMap: texture_normal }));
  BoxArray.push(new MeshStandardMaterial({map: texture_basic
  ,normalMap: texture_normal }));
  BoxArray.push(new MeshStandardMaterial({map: texture_basic
  ,normalMap: texture_normal }));
  BoxArray.push(new MeshStandardMaterial({map: texture_basic
  ,normalMap: texture_normal }));

  const BoxArrayWithoutNormal = [];
  BoxArrayWithoutNormal.push(new MeshStandardMaterial({map: texture_basic }));
  BoxArrayWithoutNormal.push(new MeshStandardMaterial({map: texture_basic }));
  BoxArrayWithoutNormal.push(new MeshStandardMaterial({map: texture_basic }));
  BoxArrayWithoutNormal.push(new MeshStandardMaterial({map: texture_basic }));
  BoxArrayWithoutNormal.push(new MeshStandardMaterial({map: texture_basic }));
  BoxArrayWithoutNormal.push(new MeshStandardMaterial({map: texture_basic }));


  let BoxGeo = new BoxGeometry(1,1,1);


  export { BoxGeo, BoxArray, BoxArrayWithoutNormal }