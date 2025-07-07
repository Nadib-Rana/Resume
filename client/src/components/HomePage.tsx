import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Text } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";

function RotatingText() {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Text
      ref={meshRef}
      position={[0, 0, 0]}
      fontSize={1.8}
      color="#00FFFF"
      anchorX="center"
      anchorY="middle"
    >
      Resume Maker
    </Text>
  );
}

function Overlay() {
  return (
    <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center z-10">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-xl">
        Resume Maker
      </h1>
      <p className="text-lg md:text-2xl mb-6 drop-shadow">
        Build your professional resume in minutes with stunning templates.
      </p>
      <button className="px-8 py-3 bg-cyan-500 rounded-full text-lg hover:bg-cyan-700 transition">
        Get Started
      </button>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="relative w-full h-screen bg-black">
      <Overlay />
      <Canvas>
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="cyan" />

        {/* 3D Animated Text */}
        <RotatingText />

        {/* Starry Background */}
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
        />

        {/* Camera Controls */}
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
    </div>
  );
}
