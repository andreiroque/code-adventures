import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

gsap.registerPlugin(ScrollTrigger);

console.log(gsap);

const camera = new THREE.PerspectiveCamera(
  10,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.x = -0.22;
camera.position.y = 0.57;
camera.position.z = 1;

const scene = new THREE.Scene();
let napoleon;
const loader = new GLTFLoader();
loader.load(
  "./src/napoleon.glb",
  function (gltf) {
    napoleon = gltf.scene;
    napoleon.scale.set(5, 5, 5);
    napoleon.position.y -= 1;
    scene.add(napoleon);
  },
  function (xhr) {},
  function (err) {}
);

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("container3D").appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff);
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);
scene.add(pointLight, ambientLight);

const reRender3D = () => {
  requestAnimationFrame(reRender3D);
  renderer.render(scene, camera);
};

reRender3D();

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#container3D",
    start: "top top",
    end: "+=3000",
    markers: true,
    scrub: 1,
  },
});

tl.to(camera.position, { x: 0 });
tl.to(camera.position, { z: 13 }, 0);
tl.to(camera.position, { y: 0.19 }, 0.5);
