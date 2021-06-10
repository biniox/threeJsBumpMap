import { TextureLoader,  MeshBasicMaterial, BoxGeometry, Mesh, BackSide} from './../../lib/three.js';




let texture_ft = new TextureLoader().load('./textures/skybox/tears_ft.jpg')
let texture_bk = new TextureLoader().load('./textures/skybox/tears_bk.jpg')
let texture_up = new TextureLoader().load('./textures/skybox/tears_up.jpg')
let texture_dn = new TextureLoader().load('./textures/skybox/tears_dn.jpg')
let texture_rt = new TextureLoader().load('./textures/skybox/tears_rt.jpg')
let texture_lf = new TextureLoader().load('./textures/skybox/tears_lf.jpg')
  

const skyMaterialArray = [];
skyMaterialArray.push(new MeshBasicMaterial({map: texture_ft }));
skyMaterialArray.push(new MeshBasicMaterial({map: texture_bk }));
skyMaterialArray.push(new MeshBasicMaterial({map: texture_up }));
skyMaterialArray.push(new MeshBasicMaterial({map: texture_dn }));
skyMaterialArray.push(new MeshBasicMaterial({map: texture_rt }));
skyMaterialArray.push(new MeshBasicMaterial({map: texture_lf }));

for(let i=0; i<6; i++) skyMaterialArray[i].side = BackSide; 
let skyBoxGeo = new BoxGeometry(75,75,75);
let skybox = new Mesh(skyBoxGeo, skyMaterialArray);


export { skybox }