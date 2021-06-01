import * as THREE from './../../lib/three.js';

export const texturePromiseLoader = (url) => {
    return new Promise((resolve, reject) => (new THREE.TextureLoader()).load(url, data => resolve(data), null, reject));
}