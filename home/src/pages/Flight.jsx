import React, {useEffect, useRef, useState } from 'react';
import { StarCanvas } from "../components/StarCanvas";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Earth({model = 'models/earth.glb'}) {
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
    <mesh ref={modelRef} scale={2} position={[100, 0, 0]} >
      <primitive object={scene} />
    </mesh>
  );
}

function Mars({model = 'models/mars.glb'}) {
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
    <mesh ref={modelRef} scale={1} position={[-100, 0, 0]} >
      <primitive object={scene} />
    </mesh>
  );
}

function Ship({model = 'models/ship.glb'}) {
  const modelRef = useRef();
  const { scene, materials } = useGLTF(model);
  const [position, setPosition] = useState([0, 0, 0])  

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


    useEffect(() => {
      if (position[2] <= -200) {
        setPosition((prev) => [prev[0], prev[1], 0])
      }else {
        const interval = setInterval(() => {
            setPosition((prev) => [prev[0], prev[1], prev[2]-0.05])
        }, 10);
         return () => clearInterval(interval)
      }
  
    }, [])

  return (
    <mesh ref={modelRef} scale={1/12} position={[95, 0, 0]} rotation={[0, Math.PI / 2, 0]} >
      <primitive object={scene} position={position} />
    </mesh>
  );
}

function Galaxy({model = 'models/space2.glb'}) {
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
    <mesh ref={modelRef} scale={100} position={[0, -100, 50]} >
      <primitive object={scene} />
    </mesh>
  );
}

export function Flight() {
    const [Distance, setDistance] = useState(250000000)
    const [Fuel, setFuel] = useState(100)

    useEffect(() => {
        const int = setInterval(() => {
            setDistance((prev) => prev - 371)
        }, 1000);
    }, [])

    useEffect(() => {
        setFuel(((Distance / 250000000) * 100).toFixed(3))
    }, [Distance])


    return (
        <div className="h-full w-full py-11 px-60 gap-3 flex flex-row">
            <StarCanvas />
            <div className="w-1/2 h-full rounded-xl flex gap-1 flex-col">
                <div className="w-full h-fit p-1 bg-neutral-900 rounded-xl  gap-1 flex flex-row">
                    <div className="w-1/2 flex p-2 flex-col ">
                        <p className="w-full text-xl font-bold text-white text-opacity-35">Seat Number</p>
                        <p className="w-full text-2xl text-white tracking-wide font-medium">234A</p>
                    </div>

                    <div className="w-1/2 flex p-2 flex-col ">
                        <p className="w-full text-xl font-bold text-white text-opacity-35">Flight Number</p>
                        <p className="w-full text-2xl text-white tracking-wide font-medium">A284c</p>
                    </div>
                </div>
                

                <div className="w-full h-full bg-neutral-900 gap-5 rounded-xl flec flex-row">
                    <div className="w-full h-fit  p-1  gap-1 flex flex-row">
                        <div className="w-1/2 flex p-2 flex-col rounded-lg">
                            <p className="w-full text-xl font-bold text-white text-opacity-35">Speed</p>
                            <p className="w-full text-2xl text-white tracking-wide font-medium">1,335,960  km/u</p>
                        </div>

                        <div className="w-1/2 flex p-2 flex-col rounded-lg">
                            <p className="w-full text-xl font-bold text-white text-opacity-35">Distance</p>
                            <p className="w-full text-2xl text-white tracking-wide font-medium">{Distance} km</p>
                        </div>

                    </div>

                    <div className="w-full h-fit p-1  gap-1 flex flex-row">
                        <div className="w-1/2 flex p-2 flex-col rounded-lg">
                            <p className="w-full text-xl font-bold text-white text-opacity-35">System Health</p>
                            <p className="w-full text-2xl text-white tracking-wide font-medium">98%</p>
                        </div>

                        <div className="w-1/2 flex p-2 flex-col rounded-lg">
                            <p className="w-full text-xl font-bold text-white text-opacity-35">Fuel</p>
                            <p className="w-full text-2xl text-white tracking-wide font-medium">{Fuel}%</p>
                        </div>
                    </div>
                </div>

                <div className="w-full h-fit p-1    gap-2 flex flex-row">
                    <div className="w-1/2 h-44 bg-neutral-900 rounded-xl flex p-2 flex-col">
                    <p className="w-full text-xl font-bold text-white text-opacity-35">News Today</p>
                    <p className="w-4/5 mt-1 text-lg text-white line-clamp-4 tracking-wide font-medium overflow-hidden">
                        NASA has demonstrated a new form of communication called holoportation, allowing high-quality 3D models of people to be transmitted live to the International Space Station. This technology enables real-time interactions between astronauts and medical professionals on Earth, enhancing telemedicine capabilities for space missions.
                    </p>

                    </div>

                    <div className="w-1/2 h-44 bg-neutral-900 rounded-xl flex p-2 flex-col">
                        <p className="w-full text-xl font-bold text-white text-opacity-35">Distance</p>
                        <p className="w-full text-2xl text-white tracking-wide font-medium">38472 km</p>
                    </div>
                </div>
                
            </div>
            <div className="w-1/2 h-full relative overflow-hidden bg-neutral-900 rounded-xl">
                <div className=" h-full w-full flex items-center">

                    <Canvas className='hover:cursor-move' camera={{ position: [140, 30, 20] }}>
                        <ambientLight intensity={5} />
                        <Galaxy />
                        <Earth  />
                        <Mars />
                        <Ship />
                        <OrbitControls enableZoom={true} enableRotate={true} />
                    </Canvas>
                </div>
            </div>
        </div>
    )
}