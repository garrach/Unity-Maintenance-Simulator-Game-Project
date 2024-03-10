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
  const setupGUI = (cam, ground, groundMaterial, camP, camR) => {
    const gui = new dat.GUI();


    const folderCamera = gui.addFolder('Camera');
    folderCamera.add(cam.rotation, 'x', camR.min, camR.max).name('Rotation X');
    folderCamera.add(cam.rotation, 'z', camR.min, camR.max).name('Rotation Z');
    folderCamera.add(cam.rotation, 'y', camR.min, camR.max).name('Rotation Y');

    folderCamera.add(cam.position, 'x', camP.min, camP.max).name('position X');
    folderCamera.add(cam.position, 'z', camP.min, camP.max).name('position Z');
    folderCamera.add(cam.position, 'y', camP.min, camP.max).name('position Y');

    const folderGround = gui.addFolder('Ground');
    folderGround.add(ground.rotation, 'x', -1, 1).name('Rotation X');
    folderGround.add(ground.rotation, 'z', -1, 1).name('Rotation Z');

    const folderMaterial = gui.addFolder('Material');
    folderMaterial.add(groundMaterial, 'shininess', 0, 100).name('Shininess');
    folderMaterial.addColor(groundMaterial, 'specular').name('Specular Color');
    folderMaterial.addColor(groundMaterial, 'emissive').name('Emissive Color');
    folderMaterial.add(groundMaterial, 'emissiveIntensity', 0, 1).name('Emissive Intensity');
  };
  useEffect(() => {
    let scene, camera, renderer, car, light, distanceCam, myscreenX, myscreenY;
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
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.shadowMap.enabled = true;
      mount.current.appendChild(renderer.domElement);



      // Create a rotating mesh
      var geometry = new THREE.BoxGeometry();
      var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      var rotatingMesh = new THREE.Mesh(geometry, material);
      scene.add(rotatingMesh);

      // Create a moving mesh
      var movingGeometry = new THREE.BoxGeometry();
      var movingMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
      var movingMesh = new THREE.Mesh(movingGeometry, movingMaterial);
      scene.add(movingMesh);


      // Orbit controls setup
      controls.current = new OrbitControls(camera, renderer.domElement);
      controls.current.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
      controls.current.dampingFactor = 0.25;
      controls.current.screenSpacePanning = false;
      controls.current.maxPolarAngle = Math.PI / 2;
      controls.current.minTargetRadius = 3;
      controls.current.minDistance = 6;
      controls.current.maxDistance = 9;

      // Texture loader
      const textureLoader = new TextureLoader();
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
      scene.add(ground);

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


      // Animation
      animate();
    };

    const animate = () => {
      requestAnimationFrame(animate);
      if (PlayState) {
        //car.rotation.z-=Math.PI/1800;
      }
      lights.current.position.x = camera.position.x + 1;
      lights.current.position.y = camera.position.y + 1;
      lights.current.position.z = camera.position.z + 1;
      if (car)
        car.rotation.y -= 0.001;

      controls.current.update();

      renderer.render(scene, camera);
    };

    const lerpFactor = 0.05; // You can adjust this value for the speed of interpolation

    let isAnimPlaying = false;
    const changeScene = (index) => {
      const targetPosition = scenes[index];
      console.log(index);
      const animate = () => {
        animaRef.current = false;
        // Calculate the lerp value for each axis
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

    mount.current.addEventListener('mousemove', (evv) => {
      if (car)
        TH3dPointTOscreen(car.position, camera, car);
    })

    let index = 0;

    mount.current.addEventListener('mousedown', (calloutGrn) => {
      if(car)
      console.log(childs.current[0]);
    })
    const actions = document.querySelectorAll('button');
    actions.forEach((elemnt) => {
      elemnt.setAttribute('value', index++)
      elemnt.addEventListener('click', (eve) => {
        console.log(eve.target)
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
