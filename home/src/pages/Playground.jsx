import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { StarCanvas } from '../components/StarCanvas';

function RotatingModel({model = 'models/mars.glb'}) {
  const modelRef = useRef();
  const { scene } = useGLTF(model);  


  return (
    <mesh ref={modelRef} >
      <primitive object={scene} />
    </mesh>
  );
}

export function Playground() {
    const [model, setModel] = useState('')

    return (
        <div className='w-screen h-screen absolute'>
        <StarCanvas numStars={300} />
            <div className="w-full absolute top-20 h-fit mt-8 z-20 flex flex-row justify-center items-center">
                <button onClick={() => setModel('models/ship.glb')} className={`text-white w-24 backdrop-blur-lg text-lg font-bold ${model === 'models/ship.glb' ? "text-opacity-100 border-opacity-100" : "text-opacity-50 hover:text-opacity-100"}   active:scale-95 hover:border-opacity-100 duration-300 ease-in-out py-3 border border-white border-opacity-50  rounded-l-lg `}>Ship</button>
                <button onClick={() => setModel('models/earth.glb')} className={`text-white w-24 backdrop-blur-lg text-lg font-bold ${model === 'models/earth.glb' ? "text-opacity-100 border-opacity-100" : "text-opacity-50 hover:text-opacity-100"}  active:scale-95 hover:border-opacity-100 duration-300 ease-in-out py-3 border border-white border-opacity-50`}>Earth</button>
                <button onClick={() => setModel('models/base.glb')} className={`text-white w-24 backdrop-blur-lg text-lg font-bold ${model === 'models/base.glb' ? "text-opacity-100 border-opacity-100" : "text-opacity-50 hover:text-opacity-100"}  active:scale-95 hover:border-opacity-100 duration-300 ease-in-out py-3 border border-white border-opacity-50  rounded-r-xl `}>Base</button>
            </div>

          {model != '' ?             
          <Canvas className='hover:cursor-move' camera={{ position: [0, 5, 10], zoom: 1 }}>
              <ambientLight intensity={1.5} />
              <pointLight position={[10, 10, 10]} />
              <RotatingModel model={model} position={[0, 0, 0]}/>
              <OrbitControls panSpeed={0.5} maxDistance={100}  minDistance={1} rotateSpeed={0.5} />
          </Canvas> : null} 
        </div>
    )
}
