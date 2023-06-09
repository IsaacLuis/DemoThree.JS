
import './style.css'

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { AmbientLight } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { RGBELoader } from '../RGBELoader';

// IN TRANSITION TO REACT

// const scene = new THREE.Scene();

// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)


// const renderer = new THREE.WebGLRenderer({
//     canvas: document.querySelector('#bg'),
// });


// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(window.innerWidth, window.innerHeight);
// camera.position.setZ(30);
// camera.position.setX(-3);

// renderer.render(scene, camera);

// const geometry = new THREE.TorusGeometry(25, 3, 15, 100);
// const material = new THREE.MeshPhysicalMaterial({ color: '#ddffdd'  });
// const torus = new THREE.Mesh(geometry, material);

// scene.add(torus);

// // Lights

// const pointLight = new THREE.PointLight(0xffffff);
// pointLight.position.set(5, 5, 5);

// const ambientLight = new THREE.AmbientLight(0xffffff);
// scene.add(pointLight, ambientLight);

// // Helpers

// // const lightHelper = new THREE.PointLightHelper(pointLight)
// // const gridHelper = new THREE.GridHelper(200, 50);
// // scene.add(lightHelper, gridHelper)

// // const controls = new OrbitControls(camera, renderer.domElement);

// function addStar() {
//     const geometry = new THREE.SphereGeometry(0.25, 24, 24);
//     const material = new THREE.MeshStandardMaterial({ color: '#000000' });
//     const star = new THREE.Mesh(geometry, material);

//     const [x, y, z] = Array(3)
//         .fill()
//         .map(() => THREE.MathUtils.randFloatSpread(100));

//     star.position.set(x, y, z);
//     scene.add(star);
// }

// Array(200).fill().forEach(addStar);

// // Background

// const spaceTexture = new THREE.TextureLoader().load('space.jpg');
// scene.background = spaceTexture;

// // Avatar

// const jeffTexture = new THREE.TextureLoader().load('8c187c08-ae72-48d5-848a-3e658b15631a.jpg');

// const jeff = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: jeffTexture }));

// scene.add(jeff);

// // Moon

// // const moonTexture = new THREE.TextureLoader().load('moon.jpg');
// // const normalTexture = new THREE.TextureLoader().load('normal.jpg');

// // const moon = new THREE.Mesh(
// //   new THREE.SphereGeometry(3, 32, 32),
// //   new THREE.MeshStandardMaterial({
// //     map: moonTexture,
// //     normalMap: normalTexture,
// //   })
// // );

// // scene.add(moon);

// // moon.position.z = 30;
// // moon.position.setX(-10);


// // const loader = new GLTFLoader();
// // loader.load(
// //   'adamHead/adamHead.gltf',
// //   (gltf) => {
// //     scene.add(gltf.scene);
// //   },
// //   (progress) => {
// //     console.log(`Loading: ${progress.loaded / progress.total * 100}%`);
// //   },
// //   (error) => {
// //     console.error(error);
// //   }
// // );


// const loader = new GLTFLoader();
// loader.load(
//   'adamHead/adamHead.gltf',
//   (gltf) => {
//     const model = gltf.scene;
//     scene.add(model);

//     // Perform any necessary operations on the model
//     model.position.set(0, 0, 0);
//     model.scale.set(1, 1, 1);

//     // Animation loop
//     const animate = function () {
//       requestAnimationFrame(animate);

//       // Rotate the model
//       model.rotation.y += 0.01;
//       model.position.x = -25;
//       model.position.z = 30;

//       renderer.render(scene, camera);
//     };

//     animate();
//   },
//   (xhr) => {
//     console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
//   },
//   (error) => {
//     console.error(error);
//   }
// );

// // const loader = new GLTFLoader();
// // let model;

// // loader.load(
// //   'adamHead.gltf',
// //   (gltf) => {
// //     model = gltf.scene;
// //     scene.add(model);
// //   },
// //   (progress) => {
// //     console.log(`Loading: ${progress.loaded / progress.total * 100}%`);
// //   },
// //   (error) => {
// //     console.error(error);
// //   }
// // );



// //  computer.position.set(0, 0, 0);
// //  computer.scale.set(1, 1, 1);

// jeff.position.z = -5;
// jeff.position.x = 2;


// // function render() {
// //   renderer.render(scene, camera);
// //   requestAnimationFrame(render);
// // }
// // render()

// // Scroll Animation

// function moveCamera() {
//     const t = document.body.getBoundingClientRect().top;
//     // moon.rotation.x += 0.05;
//     // moon.rotation.y += 0.075;
//     // moon.rotation.z += 0.05;
  
//     jeff.rotation.y += 0.01;
//     jeff.rotation.z += 0.01;
  
//     camera.position.z = t * -0.01;
//     camera.position.x = t * -0.0002;
//     camera.rotation.y = t * -0.0002;
//   }
  
//   document.body.onscroll = moveCamera;
//   moveCamera();








  
// function animate() {

//     requestAnimationFrame(animate);
    
//     torus.rotation.x += 0.01;
//     torus.rotation.y += 0.005;
//     torus.rotation.z += 0.01;

//     // Rotate the model
//     // model.rotation.y += 0.01;


//     //controls.update();

//     renderer.render(scene, camera);
// }

// animate();

const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=> {
                if(entry.isIntersecting){
                    entry.target.classList.add('show');
                }
                else {
                    entry.target.classList.remove('show')
                }
        });
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>{
            observer.observe(el)
})

let scene, camera, renderer;

function init() {
  //create scene object
  scene = new THREE.Scene();
  
  //setup camera with facing upward
  camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 1;
  camera.rotation.x = Math.PI/2;
  
  //setup renderer
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  animate(); 
}

//rendering loop
function animate() {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

init();

let starGeo = new THREE.BufferGeometry();
let starVertices = [];

for(let i = 0; i < 6000; i++) {
  starVertices.push(Math.random() * 600 - 300);
  starVertices.push(Math.random() * 600 - 300);
  starVertices.push(Math.random() * 600 - 300);
}

starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));

let sprite = new THREE.TextureLoader().load('moon.jpg');
const normalTexture = new THREE.TextureLoader().load('normal.jpg');

let starMaterial = new THREE.PointsMaterial({
    
  color: 0xaaaaaa,
  size: 0.8,
  map: sprite,
  alphaTest: 0.5,
});



let stars = new THREE.Points(starGeo, starMaterial);
scene.add(stars);

stars.velocity = 0;
stars.acceleration = 0.02;

function animation() {
  let starPositions = starGeo.attributes.position.array;
  
  for (let i = 0; i < starPositions.length; i += 3) {
    stars.velocity += stars.acceleration;
    starPositions[i + 1] -= stars.velocity;
    
    if (starPositions[i + 1] < -200) {
      starPositions[i + 1] = 200;
      stars.velocity = 0;
    }
  }

  starGeo.attributes.position.needsUpdate = true;
  
  stars.rotation.y += 0.002;
  
  requestAnimationFrame(animation);
}

animation();

