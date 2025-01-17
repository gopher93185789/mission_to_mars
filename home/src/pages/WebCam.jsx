import React, {useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';


function Galaxy({model = 'models/galaxy.glb'}) {
  const modelRef = useRef();
  const { scene, materials } = useGLTF(model);  

  useEffect(() => {
    Object.keys(materials).forEach((key) => {
      const material = materials[key];
      if (material.map) {
        material.map.needsUpdate = true;
      }

      if (material.envMap) {
        material.envMap = scene.background;
      }
    });
  }, [materials, scene]);

  return (
    <mesh ref={modelRef} >
      <primitive object={scene} />
    </mesh>
  );
}

function ShipModel({model = 'models/ship.glb'}) {
  const modelRef = useRef();
  const { scene } = useGLTF(model);
  const [position, setPosition] = useState([0, 0, 500])


  useEffect(() => {
    if (position[2] === 1259) {
      setPosition((prev) => [prev[0], prev[1], 500])
    }else {
      const interval = setInterval(() => {
          setPosition((prev) => [prev[0], prev[1], prev[2]-0.05])
      }, 1);
       return () => clearInterval(interval)
    }

  }, [])



  return (
    <>
    <mesh ref={modelRef} scale={1/50}  >
      <primitive object={scene} position={position} />
    </mesh>
    <pointLight position={[position[0], position[1], position[2]]} intensity={15} color="blue" />

    </>

  );
}

export function WebCam() {
  return (
    <> 
      <div className="absolute h-screen w-screen flex flex-col gap-5 items-center">
          <Canvas className='hover:cursor-move' camera={{ position: [-50, 15, 0], zoom: 5 }}>
              <ambientLight intensity={5} />
              <Galaxy  position={[0, 0, 0]}/>
              <ShipModel position={[0, 0, 100]}/>
              <OrbitControls panSpeed={0.1} rotateSpeed={0.1} maxDistance={130} />
          </Canvas>
      </div>
  </>
  )
}