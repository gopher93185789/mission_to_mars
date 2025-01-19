import { StarCanvas } from "../../components/StarCanvas"
import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';


import "./styles.css"


function RotatingModel({model = 'models/gym2.glb'}) {
  const modelRef = useRef();
  const { scene } = useGLTF(model);  


  return (
    <mesh ref={modelRef} scale={10} >
      <primitive object={scene} />
    </mesh>
  );
}

export function Fitness() {
    return (
        <>
        <StarCanvas />
        <header>
            <h1>Wellness & Fitness Center</h1>
            <p>Your guide to staying healthy during the journey to Mars</p>
        </header>
        <div className="overflow-auto scrollbar-none">
        <div className="container">
            <div className="section" id="overview">
                <h2>Overview</h2>
                <p>The wellness and fitness center aboard the spaceship is designed to ensure the physical and mental health of passengers during their long journey to Mars. Our state-of-the-art facilities include zero-gravity exercise machines, relaxation pods, and advanced monitoring systems.</p>
                <img src="images/image.png" alt="Wellness Overview" className="image"/>
            </div>

            <div className="section" id="equipment">
                <h2>Fitness Equipment</h2>
                <div className="equipment-list">
                    <ul>
                        <li>
                            <strong>Treadmill:</strong>
                            <p>Stay active with our high-quality treadmills, designed for cardio workouts and endurance training. Features adjustable speed and incline settings.</p>
                        </li>
                        <li>
                            <strong>Stationary Bike:</strong>
                            <p>A great way to improve cardiovascular health and build leg strength. Offers various resistance levels to suit all fitness levels.</p>
                        </li>
                        <li>
                            <strong>Free Weights:</strong>
                            <p>Includes dumbbells and kettlebells for strength training, allowing a wide variety of exercises targeting different muscle groups.</p>
                        </li>
                        <li>
                            <strong>Resistance Machines:</strong>
                            <p>Focus on specific muscle groups with easy-to-use machines for chest press, leg curls, and more. Perfect for both beginners and advanced users.</p>
                        </li>
                        <li>
                            <strong>Yoga Mats:</strong>
                            <p>Essential for stretching, yoga, and floor exercises to improve flexibility and core strength.</p>
                        </li>
                    </ul>
                </div>
                <div className="w-full aspect-video">
                    <Canvas className='hover:cursor-move' camera={{ position: [-20, 24, 20], zoom: 2 }} >
                        <ambientLight intensity={1.5}  />
                        <pointLight position={[10, 10, 10]} />
                        <RotatingModel />
                        <OrbitControls panSpeed={0.5} maxDistance={100}  minDistance={1} rotateSpeed={0.5} />
                    </Canvas>
                </div>
            </div>


            <div className="section" id="relaxation">
                <h2>Relaxation & Wellness Zone</h2>
                <p>The wellness zone provides passengers with access to meditation chambers, therapeutic light therapy, and spa-like treatments designed to enhance relaxation. Experience a tranquil environment to relieve stress and rejuvenate your body and mind during the voyage.</p>
                <img src="images/welness.png" alt="Wellness Zone" className="image"/>
            </div>

    
        </div>
        </div>
        
        </>
    )
}