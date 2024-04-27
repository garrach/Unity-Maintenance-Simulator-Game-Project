import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { TextureLoader } from 'three';
import * as dat from 'dat.gui';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
const ThreeCar = ({ carModel, SetLoading }) => {
  const mount = useRef(null);
  const controls = useRef(null);
  const lights = useRef(null);
  const animaRef = useRef(true);
  const [cammm, setCamm] = useState(null);
  const childs = useRef([]);
  const exhausttips = useRef()

  useEffect(() => {
    let scene, camera, renderer, car, light, distanceCam, myscreenX, myscreenY, particles;
    // Create a clock
    var clock = new THREE.Clock();
    var timeScale = 1;
    let PlayState = true;
    const scenes = [
      { x: 3.2969087939719683, y: 3.430890457734696, z: -6.3898604104255305 },
      { x: 4.103372221890537, y: 2.380595561743041, z: 5.0837834981127825 },
      { x: -4.684384394148391, y: 3.3248415450784985, z: 3.2615370701188793 },
      { x: 2.4953740181776554, y: 3.341296773273761, z: -7.298813993342782 },
    ];
    const ex = ({ x, y, z }, { object }) => {

      const getWorldPosition = () => {
        const worldPosition = new THREE.Vector3();

        // Traverse the object's ancestors and accumulate their positions
        const traverseAncestors = (obj) => {
          if (obj.parent) {
            traverseAncestors(obj.parent);
            obj.updateMatrix(); // Ensure the object's matrix is up-to-date
            worldPosition.applyMatrix4(obj.matrixWorld);
          }
        };

        traverseAncestors(object);

        return worldPosition;
      };
      getWorldPosition();
      const textureLoader = new TextureLoader();
      const texture = textureLoader.load('sm.png');
      const particlesGeometry = new THREE.BufferGeometry();
      const particleMaterial = new THREE.PointsMaterial({
        size: 0.3,
        map: texture,
        blending: THREE.AdditiveBlending,
        depthTest: false,
        transparent: true,
        alphaTest: 0.5, // Adjust the alpha threshold as needed
      });
      // Define the number of particles
      const particlesCount = 1000;
      const particlesPositions = new Float32Array(particlesCount * 3);
      // Set random positions for the particles within a sphere
      for (let i = 0; i < particlesCount; i++) {
        particlesPositions[i * 3] = (Math.random() - 0.5) * x;
        particlesPositions[i * 3 + 1] = (Math.random() - 0.5) * y;
        particlesPositions[i * 3 + 2] = (Math.random() - 0.5) * z;
      }
      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlesPositions, 3));
      particles = new THREE.Points(particlesGeometry, particleMaterial);
      particles.position.set(getWorldPosition().x, getWorldPosition().y, getWorldPosition().z)
      scene.add(particles);
      return particles;
    }
    const init = () => {
      // Scene
      scene = new THREE.Scene();
      // Camera
      camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 10000);
      camera.position.set(scenes[0].x, scenes[0].y, scenes[0].z);
      camera.rotation.set(Math.PI / 3, 0, 0);
      setCamm(camera);
      // Renderer
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth-30, window.innerHeight);
      renderer.shadowMap.enabled = true;
      mount.current.appendChild(renderer.domElement);
      // Create cylinder
      const geometry = new THREE.CylinderGeometry(1, 1, 2, 128);
      const material = new THREE.MeshBasicMaterial({ color: 0x000000 });
      const cylinder = new THREE.Mesh(geometry, material);
      cylinder.scale.set(6, 0.25, 6)
      scene.add(cylinder);
      // Create cylinder
      const geometryRim = new THREE.CylinderGeometry(1, 1, 2, 128);
      const materialRim = new THREE.MeshBasicMaterial({ color: 0x00aaff });
      const cylinderRim = new THREE.Mesh(geometryRim, materialRim);
      cylinderRim.scale.set(6.3, 0.2, 6.3)
      scene.add(cylinderRim);
      // Create cylinder
      const geometryBase = new THREE.CylinderGeometry(1, 1, 2, 128);
      const materialBase = new THREE.MeshStandardMaterial({ color: 0x000000 });
      const cylinderBase = new THREE.Mesh(geometryBase, materialBase);
      cylinderBase.scale.set(10, 0.1, 10)
      scene.add(cylinderBase);
      // Orbit controls setup
      controls.current = new OrbitControls(camera, renderer.domElement);
      controls.current.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
      controls.current.dampingFactor = 0.1;
      controls.current.screenSpacePanning = false;
      controls.current.maxPolarAngle = Math.PI / (2 + 0.5);
      controls.current.minTargetRadius = 3;
      controls.current.minDistance = 6;
      controls.current.maxDistance = 9;

      // Set the texture to repeat
      /* texture.wrapS = THREE.RepeatWrapping;
       texture.wrapT = THREE.RepeatWrapping;
       const repeatFactor = 1024; // Adjust the repeat factor based on your preference
       texture.repeat.set(repeatFactor, repeatFactor);*/
      // Create particle system for smoke
      // Texture loader
      /*const textureLoader = new TextureLoader();
      const texture = textureLoader.load('mapG0.jpg');
      // Set the texture to repeat
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      const repeatFactor = 1024; // Adjust the repeat factor based on your preference
      texture.repeat.set(repeatFactor, repeatFactor);
      // Ground
      const groundGeometry = new THREE.PlaneGeometry(1000, 1000, 32, 32);
      const groundMaterial = new THREE.MeshPhongMaterial({
        map: texture,
        side: THREE.DoubleSide,
        shininess: 1,
        specular: new THREE.Color(0xaaaaaa),
        emissive: new THREE.Color(0x000000),
        emissiveIntensity: 0.1,
      });
      const ground = new THREE.Mesh(groundGeometry, groundMaterial);
      ground.rotation.x = (Math.PI / 2);
      ground.rotation.z = (0);
      ground.receiveShadow = true;
      scene.add(ground);*/
      // GUI control
      const camP = {
        min: -(Math.PI * 2),
        max: Math.PI * 2
      }
      const camR = {
        min: -(Math.PI * 2),
        max: Math.PI * 4
      }
      // setupGUI(camera,ground, groundMaterial,camP,camR);
      const loader = new GLTFLoader();
      loader.load('storage/mersedes-benz_s65_w222.glb', (gltf) => {
        const modelMesh = gltf.scene;
        modelMesh.traverse((child) => {
          childs.current.push(child);
          TH3dPointTOscreen(child.position, camera, child)
        })
        modelMesh.position.set(0, 0, 0);
        car = modelMesh;
        modelMesh.scale.set(2, 2, 2);
        scene.add(modelMesh);
        SetLoading(false);
      }, undefined, (error) => {
        console.error('Error loading model', error);
      });
      // Point Light
      const pointLight = new THREE.PointLight(0xffffff, 100, 100);
      pointLight.castShadow = true;
      lights.current = pointLight;
      scene.add(pointLight);
      // Hemisphere Light
      const hemisphereLight = new THREE.HemisphereLight(0x404040, 0xffffff, 2);
      scene.add(hemisphereLight);
      animate();
    };
    let dying = []
    const animate = () => {

      requestAnimationFrame(animate);
      if (PlayState) {
        //car.rotation.z-=Math.PI/1800;
      }
      lights.current.position.x = camera.position.x + 1;
      lights.current.position.y = camera.position.y + 1;
      lights.current.position.z = camera.position.z + 1;
      if (car) {
        car.rotation.y -= 0.001;

        //particles.position.set(car.position.x, car.position.y, car.position.z - 6)
      }
      controls.current.update();
      renderer.render(scene, camera);
    };


    const lerpFactor = 0.05; 
    let isAnimPlaying = false;
    const changeScene = (index) => {
      const targetPosition = scenes[index];
      const animate = () => {
        animaRef.current = false;
        const lerpX = camera.position.x + (targetPosition.x - camera.position.x) * lerpFactor;
        const lerpY = camera.position.y + (targetPosition.y - camera.position.y) * lerpFactor;
        const lerpZ = camera.position.z + (targetPosition.z - camera.position.z) * lerpFactor;
        // Update the camera position
        camera.position.set(lerpX, lerpY, lerpZ);
        // Continue animating until the camera position is close to the target position
        if (
          Math.abs(targetPosition.x - camera.position.x) > 0.1 ||
          Math.abs(targetPosition.y - camera.position.y) > 0.1 ||
          Math.abs(targetPosition.z - camera.position.z) > 0.1
        ) {
          isAnimPlaying = true;
          requestAnimationFrame(animate);
        } else {
          isAnimPlaying = false;
        }
      };
      animate();
    };
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
    const calcDistance = (initPos, target) => {
      //a2+b2=c2
      const distance = Math.abs(Math.pow((initPos.x - target.x), 2) + Math.pow((initPos.y - target.y), 2) + Math.pow((initPos.z - target.z), 2));
      return Math.floor(Math.sqrt(distance) + 0.25);
    }
    window.addEventListener('wheel', (evntt) => {
      const { x, y, z } = car.position;
      const initPos = {
        x: x,
        y: y,
        z: z,
      }
      distanceCam = calcDistance(initPos, camera.position)
      if (distanceCam < 7) {
        //controls.current.enablePan=false;
        //controls.current.enableZoom=false;
        console.log(distanceCam);
      } else {
        //controls.current.enableZoom=true;
      }
      //if(Math.abs(camera.position.x>=8) || Math.abs(camera.position.y)>=8 || Math.abs(camera.position.z)>=8 )
    })
    window.addEventListener('keydown', (key) => {
      exhausttips.current = [];
      if (key.key == "Enter") {

        // Create a new material with a specific color (e.g., red)
        const newMaterial = new THREE.MeshStandardMaterial({
          color: 0x0aaff0, // Hex color for red
          // Other material properties can be set here, such as roughness, metalness, etc.
        });
        childs.current.map((elemnt) => {
          if (elemnt.name.includes('xxxx')) {
            exhausttips.current.push(elemnt)

            elemnt.children.map(item => {
              if (item.material) {
                item.material = newMaterial;
                item.rotation.set(0,0,Math.PI/3);
              }
            });
          
      }
    })



  }

    })
const Carcalls = document.createElement('span');
const TH3dPointTOscreen = (position, Camera, yo) => {
  Carcalls.classList.add(yo.name);
  //Carcalls.innerHTML = yo.name;
  Carcalls.classList.add('callout');
  mount.current.appendChild(Carcalls);
  const point3D = position;
  const point2D = point3D.clone().project(camera);
  const myscreenWidth = window.innerWidth;
  const myscreenHeight = window.innerHeight;
  myscreenX = (point2D.x + 1 + 0.001) * (myscreenWidth / 2);
  myscreenY = (-point2D.y + 1 + 0.001) * (myscreenHeight / 2);
  Carcalls.style.top = myscreenY + 'px';
  Carcalls.style.left = myscreenX + 'px';
}
let index = 0;
const actions = document.querySelectorAll('button');
actions.forEach((elemnt) => {
  elemnt.setAttribute('value', index++)
  elemnt.addEventListener('click', (eve) => {
    if (!isAnimPlaying)
      changeScene(Number(elemnt.getAttribute('value')))
  })
})
init();
return () => {
  window.removeEventListener('resize', () => { });
};
  }, []);
return <div ref={mount} />;
};
export default ThreeCar;