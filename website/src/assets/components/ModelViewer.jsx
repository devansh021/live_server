import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Stage } from '@react-three/drei';
import * as THREE from 'three';

function RotatingLight() {
  const light = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    light.current.position.x = Math.sin(t) * 5;
    light.current.position.z = Math.cos(t) * 5;
  });
  return (
    <directionalLight
      ref={light}
      intensity={1}
      position={[5, 5, 5]}
      castShadow
    />
  );
}

function GlassesModel() {
  const gltf = useGLTF('/models/GLASSESV1.2.glb');
  const modelRef = useRef();

  // Slow down the rotation by decreasing the increment
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005; // Slower rotation
    }
  });

  return <primitive ref={modelRef} object={gltf.scene} scale={2.5} />;
}

const ModelViewer = () => {
  return (
    <div className="model-container p-10 m-10 w-full h-[80vh]"> {/* Adjusted padding, margin, and height */}
      <Canvas 
        shadows 
        camera={{ position: [0, 1, 6], fov: 50 }} 
        className="w-full h-full"
      >
        <ambientLight intensity={0.4} />
        <RotatingLight />
        <Stage environment="city" intensity={0.6}>
          <GlassesModel />
        </Stage>
        <OrbitControls enableZoom enablePan />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
