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

        <button className='absolute top-0 left-0 group bg-neutral-900 z-10 rounded-full size-16 text-2xl font-bold text-white ml-5 mt-5'>
            ?
            <div className='w-96 absolute p-3 min-h-20 scale-y-0 group-hover:scale-y-100 duration-500 ease-in-out origin-top bg-neutral-900 mt-5 rounded-lg'>
                <p className='text-opacity-50 text-left text-white text-sm'>
                Een VR holodeck is een virtuele ruimte waar gebruikers volledig kunnen onderdompelen in een digitale wereld. Met behulp van virtual reality technologieën kunnen ze 3D omgevingen verkennen, interactieve objecten manipuleren en met anderen communiceren alsof ze fysiek aanwezig zijn. Het biedt een unieke, meeslepende ervaring die de grenzen tussen de fysieke en digitale wereld vervaagt. Cool, toch?
                </p>
            </div>
        </button>
        </>
    )
}