import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';

// Scene, Camera ve Renderer oluşturma
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('model-container').appendChild(renderer.domElement);

// Işık ekleme
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1).normalize();
scene.add(light);

const loader = new GLTFLoader();
loader.load('/assets/models/logo.glb', function (gltf) {
    scene.add(gltf.scene);
    gltf.position.set(100, 100, 100);
    gltf.scale.set(0.1, 0.01, 0.01);
}, undefined, function (error) {
    console.error(error);
});

camera.position.z = 5;

// Animasyon döngüsü
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();
