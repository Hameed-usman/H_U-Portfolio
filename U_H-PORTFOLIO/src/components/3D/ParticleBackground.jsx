// File: src/components/3D/ParticleBackground.js
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const StarField = ({ mousePosition }) => {
  const ref = useRef();
  
  // Generate random positions for stars
  const positions = useMemo(() => {
    const positions = new Float32Array(3000);
    for (let i = 0; i < positions.length; i += 3) {
      positions[i] = (Math.random() - 0.5) * 50; // x
      positions[i + 1] = (Math.random() - 0.5) * 50; // y
      positions[i + 2] = (Math.random() - 0.5) * 50; // z
    }
    return positions;
  }, []);

  // Animate the star field
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
      
      // Mouse interaction
      ref.current.rotation.y += mousePosition.x * 0.00005;
      ref.current.rotation.x += mousePosition.y * 0.00005;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00f5ff"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const FloatingGeometry = ({ mousePosition }) => {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
      
      // Mouse interaction
      meshRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2 + mousePosition.x * 2;
      meshRef.current.position.y = Math.cos(state.clock.elapsedTime) * 2 + mousePosition.y * 2;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -5]}>
      <torusGeometry args={[3, 0.5, 8, 24]} />
      <meshBasicMaterial color="#ff0080" wireframe transparent opacity={0.1} />
    </mesh>
  );
};

const ParticleBackground = ({ mousePosition }) => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1
    }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%)' }}
      >
        <StarField mousePosition={mousePosition} />
        <FloatingGeometry mousePosition={mousePosition} />
        
        {/* Additional floating elements */}
        <mesh position={[-8, 3, -10]} rotation={[0.5, 0.5, 0]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshBasicMaterial color="#9333ea" wireframe transparent opacity={0.15} />
        </mesh>
        
        <mesh position={[8, -3, -8]} rotation={[0.2, 0.8, 0.1]}>
          <octahedronGeometry args={[0.8]} />
          <meshBasicMaterial color="#00f5ff" wireframe transparent opacity={0.1} />
        </mesh>
      </Canvas>
    </div>
  );
};

export default ParticleBackground;