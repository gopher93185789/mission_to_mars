import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';


function RotatingModel({position}) {
  const modelRef = useRef();
  const { scene } = useGLTF('mars.glb');  

 
  const [rotation, setRotation] = useState([0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => [prev[0], prev[1] + 0.001, prev[2]]);
    }, 25);  

    return () => clearInterval(interval);
  }, []);

  return (
    <mesh ref={modelRef} rotation={rotation} position={position}>
      <primitive object={scene} />
    </mesh>
  );
}


export function Planet({size}) {
  

    return (
        <div className={size}> 
        <Canvas camera={{ position: [0, -1, 5], zoom: 1.6 }}>
          <ambientLight intensity={1.5} />
          <pointLight position={[10, 10, 10]} />
          <RotatingModel position={[0,-2, 0]}/>
          <OrbitControls  enablePan={false} />
        </Canvas>
      </div>
      );
}


// fnal := 3.6