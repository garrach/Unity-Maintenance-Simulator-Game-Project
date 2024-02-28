import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { TextureLoader } from 'three';
import * as dat from 'dat.gui';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeCar = ({carModel}) => {
  const mount = useRef(null);
  const controls = useRef(null);
  const lights = useRef(null);
  const animaRef=useRef(true);
  const [cammm,setCamm]=useState(null);
  const setupGUI = (cam,ground, groundMaterial,camP,camR) => {
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
    let scene, camera, renderer, car, light;
    let PlayState=true;
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
      camera.position.set(scenes[0].x, scenes[0].y,scenes[0].z);
      camera.rotation.set(Math.PI/3,0, 0);
      setCamm(camera);
      // Renderer
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.shadowMap.enabled = true;
      mount.current.appendChild(renderer.domElement);

      // Orbit controls setup
      controls.current = new OrbitControls(camera, renderer.domElement);
      controls.current.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
      controls.current.dampingFactor = 0.25;
      controls.current.screenSpacePanning = false;
      controls.current.maxPolarAngle = Math.PI / 2;
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
            ground.rotation.x = (Math.PI/2);
            ground.rotation.z = (0); 
            ground.receiveShadow = true;
            scene.add(ground);

        // GUI control
        const camP={
            min:-(Math.PI*2),
            max:Math.PI*2
        }
        const camR={
            min:-(Math.PI*2),
            max:Math.PI*4
        }
       // setupGUI(camera,ground, groundMaterial,camP,camR);

        // Load GLTF model
        const loader = new GLTFLoader();
        loader.load('storage/cyberpunk_car.glb', (gltf) => {
            // Success callback
            const modelMesh = gltf.scene;
            modelMesh.position.set(0, 0, -1); 
            //modelMesh.rotation.set(Math.PI/2,Math.PI/2,0); 
            modelMesh.scale.set(0.02, 0.02, 0.02);
            scene.add(modelMesh)
            //scene.add(modelMesh);

          }, (xhr) => {
            // Loading progress callback
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
          }, (error) => {
            // Error callback
            console.error('Error loading model', error);
          });
    
     

      // Point Light
      const pointLight = new THREE.PointLight(0xffffff, 100, 100);
      
      pointLight.castShadow = true;
      lights.current=pointLight;
      scene.add(pointLight);

      // Hemisphere Light
      const hemisphereLight = new THREE.HemisphereLight(0x404040, 0xffffff, 2);
      scene.add(hemisphereLight);

      // Animation
      animate();
    };

    const animate = () => {
      requestAnimationFrame(animate);
      if(PlayState){
        //car.rotation.z-=Math.PI/1800;
      }
      lights.current.position.x=camera.position.x+1;
      lights.current.position.y=camera.position.y+1;
      lights.current.position.z=camera.position.z+1;
      controls.current.update();
      renderer.render(scene, camera);
    };

    const lerpFactor = 0.05; // You can adjust this value for the speed of interpolation

    const changeScene = (index) => {
      const targetPosition = scenes[index];
      console.log(index);
      const animate = () => {
        animaRef.current=false;
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
          
          requestAnimationFrame(animate);
        }
      
      };
    
      // Start the animation
      animate();
    };
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
    window.addEventListener('wheel',(evntt)=>{
      console.log(camera.position);
    })
   
      let index=0;
    
      
        const actions = document.querySelectorAll('button');
        actions.forEach((elemnt)=>{
          elemnt.setAttribute('value',index++)
          elemnt.addEventListener('click',(eve)=>{
            console.log(eve.target)
              changeScene(Number(elemnt.getAttribute('value')))
              
          })
        })
      
    
   

    init();

    return () => {
      window.removeEventListener('resize', () => {});
    
      mount.current=null;
    };
  }, []);

  return <div ref={mount} />;
};

export default ThreeCar;
