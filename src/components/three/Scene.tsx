'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

export function Scene() {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x += 0.005;
      sphereRef.current.rotation.y += 0.005;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} color="#c3d600" intensity={2} />
      
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <MeshDistortMaterial
            color="#183b4e"
            speed={3}
            distort={0.4}
            radius={1}
            emissive="#183b4e"
          />
      </Float>
      
      <gridHelper args={[20, 20, '#183b4e', '#183b4e']} position={[0, -2, 0]} rotation={[0, 0, 0]} />
    </>
  );
}
