import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";

gsap.registerPlugin(ScrollTrigger);

// Scene, Camera, Renderer setup
const camera = new THREE.PerspectiveCamera(
  10,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 13;

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("container3D").appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff);
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);
scene.add(pointLight, ambientLight);

const control = new OrbitControls(camera, renderer.domElement);
control.update();

// Variables for the model and animation mixer
let model;
let mixer;
let action;

// GLTFLoader to load the model
const loader = new GLTFLoader();
loader.load(
  "./mechanical-keyboard.glb", // Path to your GLB model
  (gltf) => {
    model = gltf.scene;
    model.position.y -= 0.2; // Adjust position if needed
    scene.add(model);

    // Setup the AnimationMixer and clip action
    mixer = new THREE.AnimationMixer(model);
    const clip = gltf.animations[0]; // Assuming the first animation is the one you want
    action = mixer.clipAction(clip);
    action.play(); // Play the animation (we'll control it via GSAP)

    // Setup GSAP ScrollTrigger after model is loaded
    setupScrollAnimation(clip);
  },
  (xhr) => {
    console.log(`Model loaded: ${(xhr.loaded / xhr.total) * 100}%`);
  },
  (err) => {
    console.error("An error occurred while loading the model", err);
  }
);

// Animation loop
const clock = new THREE.Clock();
const reRender3D = () => {
  requestAnimationFrame(reRender3D);
  if (mixer) mixer.update(clock.getDelta()); // Update the mixer with time delta
  control.update();
  renderer.render(scene, camera);
};
reRender3D();

// GSAP ScrollTrigger logic
function setupScrollAnimation(clip) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#container3D",
      start: "top top",
      end: "+=3000",
      scrub: 1,
      markers: true,
    },
  });

  // Control the animation's time using the scroll progress
  tl.to(
    { time: 0 },
    {
      time: clip.duration, // Full duration of the animation
      onUpdate: function () {
        // Set the animation time based on scroll progress
        action.time = this.targets()[0].time;
        action.paused = false; // Ensure it's playing
      },
      onReverseComplete: function () {
        // Ensure the animation is paused when scrolling backward
        action.time = 0;
        action.paused = true;
      },
    }
  );
}
