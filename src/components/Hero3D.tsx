import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Grid } from '@react-three/drei';
import * as THREE from 'three';

function Target({ position, scannerXRef }: { position: [number, number, number], scannerXRef: { current: number } }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);
  
  useFrame(() => {
    if (!meshRef.current || !materialRef.current) return;
    
    const distance = Math.abs(position[0] - scannerXRef.current);
    
    if (distance < 0.4) {
      meshRef.current.scale.lerp(new THREE.Vector3(0.1, 0.1, 0.1), 0.2);
      materialRef.current.color.lerp(new THREE.Color('#16a34a'), 0.2);
    } else if (distance > 2) {
      meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.05);
      materialRef.current.color.lerp(new THREE.Color('#ef4444'), 0.05);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.3, 0.3, 0.3]} />
      <meshStandardMaterial ref={materialRef} color="#ef4444" />
    </mesh>
  );
}

function Scene() {
  const scannerXRef = useRef(0);
  const scannerGroupRef = useRef<THREE.Group>(null);

  const targets = useMemo(() => {
    return Array.from({ length: 15 }).map(() => {
      const x = (Math.random() - 0.5) * 6; 
      const z = (Math.random() - 0.5) * 5; 
      return [x, 0.15, z] as [number, number, number];
    });
  }, []);

  useFrame(({ clock }) => {
    scannerXRef.current = Math.sin(clock.elapsedTime * 1.5) * 3.5;
    if (scannerGroupRef.current) {
      scannerGroupRef.current.position.x = scannerXRef.current;
    }
  });

  return (
    <>
      <Grid
        position={[0, 0, 0]}
        args={[10.5, 10.5]}
        cellSize={0.5}
        cellThickness={1}
        cellColor="#cbd5e1"
        sectionSize={2.5}
        sectionThickness={1.5}
        sectionColor="#94a3b8"
        fadeDistance={10}
        fadeStrength={1}
      />

      <group ref={scannerGroupRef} position={[0, 0.5, 0]}>
        <mesh>
          <boxGeometry args={[0.05, 1.5, 7]} />
          <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={2} toneMapped={false} />
        </mesh>
        <pointLight color="#22c55e" intensity={4} distance={4} decay={2} />
      </group>

      {targets.map((pos, index) => (
        <Target key={index} position={pos} scannerXRef={scannerXRef} />
      ))}
    </>
  );
}

export default function Hero3D() {
  return (
    <Canvas camera={{ position: [0, 4, 7], fov: 45 }} className="w-full h-full cursor-grab active:cursor-grabbing">
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 8, 5]} intensity={1.5} />
      <Scene />
      <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2.1} minPolarAngle={Math.PI / 6} />
    </Canvas>
  );
}