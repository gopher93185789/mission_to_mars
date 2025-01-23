import React, {  useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import {  OrbitControls,  useGLTF } from '@react-three/drei';


function RotatingModel() {
  const modelRef = useRef();
  const { scene, materials } = useGLTF("/earth_hologram/scene.gltf");  



  return (
    <mesh ref={modelRef} >
      <primitive object={scene} />
    </mesh>
  );
}



export function VrHolodeck() {
    return (
        <>
        <div className="absolute h-full w-full overflow-hidden">
          <Canvas className='hover:cursor-move' camera={{ position: [0, 5, 10], zoom: 1 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <RotatingModel />
              <OrbitControls enablePan={false}  maxPolarAngle={1.7} maxDistance={7} minDistance={7} rotateSpeed={0.5} />
          </Canvas> 
        </div>
        </>
    )
}