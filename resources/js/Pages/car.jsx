import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { TextureLoader } from 'three';
import * as dat from 'dat.gui';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';


const ThreeCar = ({ container }) => {
  const mount = useRef(null);

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
    let PlayState=false;
    const init = () => {
      // Scene
      scene = new THREE.Scene();

      // Camera
      camera = new THREE.PerspectiveCamera(70, container.clientWidth / container.clientHeight, 0.1, 10000);
      camera.position.set(0,-(Math.PI/2)*3, (Math.PI));
      camera.rotation.set(Math.PI/3,0, 0);

      // Renderer
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.shadowMap.enabled = true;
      mount.current.appendChild(renderer.domElement);

      // Texture loader
      const textureLoader = new TextureLoader();
      const texture = textureLoader.load('mapG.jpg');

                // Set the texture to repeat
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            const repeatFactor = 512; // Adjust the repeat factor based on your preference
            texture.repeat.set(repeatFactor, repeatFactor);

            // Ground
            const groundGeometry = new THREE.PlaneGeometry(1000, 1000, 32, 32);
            const groundMaterial = new THREE.MeshPhongMaterial({
            map: texture,
            side: THREE.DoubleSide,
            shininess: 10,
            specular: new THREE.Color(0xaaaaaa),
            emissive: new THREE.Color(0x000000),
            emissiveIntensity: 0.2,
            });
            const ground = new THREE.Mesh(groundGeometry, groundMaterial);
            ground.rotation.x = 0;
            ground.rotation.z = 0;
            ground.receiveShadow = true;
            //scene.add(ground);

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
        loader.load('cyberpunk_car.glb', (gltf) => {
            // Success callback
            const modelMesh = gltf.scene;
            modelMesh.position.set(0, 0, 0); 
            modelMesh.rotation.set(Math.PI/2,Math.PI/2,0); 
            modelMesh.scale.set(0.02, 0.02, 0.02);
            car.add(modelMesh)
            //scene.add(modelMesh);

          }, (xhr) => {
            // Loading progress callback
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
          }, (error) => {
            // Error callback
            console.error('Error loading model', error);
          });
      // Car
      const carGeometry = new THREE.BoxGeometry();
      const carMaterial = new THREE.MeshPhongMaterial({ color: 0x3498db });
      car = new THREE.Mesh(carGeometry, carMaterial);
      car.position.set(0, 0, Math.PI/30);
      car.castShadow = true;
      scene.add(car);

      // Point Light
      const pointLight = new THREE.PointLight(0xffffff, 100, 100);
      pointLight.position.set(0, 0, 5);
      pointLight.castShadow = true;
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
        car.rotation.z-=Math.PI/1800;
      }
      renderer.render(scene, camera);
    };

    window.addEventListener('mousedown',()=>{
      PlayState=!PlayState;
    })
    window.addEventListener('resize', () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    });

    init();

    return () => {
      // Cleanup logic, if needed
      window.removeEventListener('resize', () => {});
    };
  }, []);

  return <div ref={mount} />;
};

export default ThreeCar;
