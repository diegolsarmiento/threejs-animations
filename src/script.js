import './style.css';
import * as THREE from 'three';
import gsap from 'gsap';

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
    width: 800,
    height: 600
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);


// Starting time (second try)
let time = Date.now();

// Using Clock Method (third try)
//const clock = new THREE.Clock();


// Usig GSAP Library (fourth Try)
//gsap.to(mesh.position, { duration: 1, delay: 1, x: 2});
//gsap.to(mesh.position, { duration: 1, delay: 2, x: 0});

// Animations
const tick = () => 
{   
    /* //First try
    // How and where it moves
    mesh.position.x += Math.PI * 0.01;
    mesh.position.y += Math.PI * 0.01;
    //mesh.rotation.x += Math.PI * 0.01;
    mesh.rotation.z += Math.PI * 0.02;
    */

    // Second Try
    const currentTime = Date.now();
    const deltaTime = currentTime - time;
    time = currentTime;

    //mesh.scale.y += 0.01 * deltaTime * 2;
    mesh.rotation.x += 0.01 * deltaTime * 2;

    // Third Try - Using Clock
    //const elapsedTime = clock.getElapsedTime();

    // Update Objects
    //mesh.position.z += elapsedTime;

    //mesh.position.y = Math.cos(elapsedTime);
    //mesh.position.x = Math.sin(elapsedTime)

    //camera.position.y = Math.sin(elapsedTime);
    //camera.position.x = Math.cos(elapsedTime)
    //camera.lookAt(mesh.position)

    // Render Camera
    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
};

tick();
