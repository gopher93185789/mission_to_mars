import React, { useRef, useState } from 'react';
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
            <div className="w-full  h-fit mt-8 flex flex-row justify-center items-center">
                <button onClick={() => setModel('models/ship.glb')} className="text-white w-32 bg-neutral-900 text-xl font-bold text-opacity-50 hover:text-opacity-100 active:scale-95 hover:border-opacity-100 duration-300 ease-in-out py-5 border border-white border-opacity-50  rounded-l-xl ">ship</button>
               
                <button onClick={() => setModel('models/mars.glb')} className="text-white w-32 bg-neutral-900 text-xl font-bold text-opacity-50 hover:text-opacity-100 active:scale-95 hover:border-opacity-100 duration-300 ease-in-out py-5 border border-white border-opacity-50">mars</button>
                <button onClick={() => setModel('models/base.glb')} className="text-white w-32 bg-neutral-900 text-xl font-bold text-opacity-50 hover:text-opacity-100 active:scale-95 hover:border-opacity-100 duration-300 ease-in-out py-5 border border-white border-opacity-50  rounded-r-xl ">base</button>
            </div>

            {model != ''?             
            <Canvas className='mt-4 rounded-t-3xl' camera={{ position: [0, 0, 5], zoom: 1.2 }}>
                <ambientLight intensity={1.5} />
                <pointLight position={[10, 10, 10]} />
                <RotatingModel model={model} position={[0, 0, 0]}/>
                <OrbitControls  enablePan={false} />
            </Canvas> : null} 


        </>
    )
}