import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';


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
        <>
            <div className="w-full absolute top-20 h-fit mt-8 z-20 flex flex-row justify-center items-center">
                <button onClick={() => setModel('models/ship.glb')} className={`text-white w-24 backdrop-blur-lg text-lg font-bold ${model === 'models/ship.glb' ? "text-opacity-100 border-opacity-100" : "text-opacity-50 hover:text-opacity-100"}   active:scale-95 hover:border-opacity-100 duration-300 ease-in-out py-3 border border-white border-opacity-50  rounded-l-lg `}>Ship</button>
                <button onClick={() => setModel('models/mars.glb')} className={`text-white w-24 backdrop-blur-lg text-lg font-bold ${model === 'models/mars.glb' ? "text-opacity-100 border-opacity-100" : "text-opacity-50 hover:text-opacity-100"}  active:scale-95 hover:border-opacity-100 duration-300 ease-in-out py-3 border border-white border-opacity-50`}>Mars</button>
                <button onClick={() => setModel('models/base.glb')} className={`text-white w-24 backdrop-blur-lg text-lg font-bold ${model === 'models/base.glb' ? "text-opacity-100 border-opacity-100" : "text-opacity-50 hover:text-opacity-100"}  active:scale-95 hover:border-opacity-100 duration-300 ease-in-out py-3 border border-white border-opacity-50  rounded-r-xl `}>Base</button>
            </div>

            {model != '' ?             
            <Canvas className='mt-4 rounded-t-3xl hover:cursor-move' camera={{ position: [0, 5, 10], zoom: 1.2 }}>
                <ambientLight intensity={1.5} />
                <pointLight position={[10, 10, 10]} />
                <RotatingModel model={model} position={[0, 0, 0]}/>
                <OrbitControls  enablePan={false} />
            </Canvas> : null} 
        </>
    )
}
