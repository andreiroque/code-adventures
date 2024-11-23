import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";

gsap.registerPlugin(ScrollTrigger);

const camera = new THREE.PerspectiveCamera(
  10,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.z = 13;

const scene = new THREE.Scene();
let model;
const loader = new GLTFLoader();
loader.load(
  "./mechanical-keyboard.glb",
  (gltf) => {
    model = gltf.scene;
    model.position.y -= 0.5;
    scene.add(model);
  },
  (xhr) => {},
  (err) => {}
);

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("container3D").appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff);
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);
scene.add(pointLight, ambientLight);

const control = new OrbitControls(camera, renderer.domElement);

console.log(control);

const reRender3D = () => {
  requestAnimationFrame(reRender3D);
  control.update();
  renderer.render(scene, camera);
};

reRender3D();
