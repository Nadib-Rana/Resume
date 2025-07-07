import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Stars, Text, Float, Sparkles, useCursor, Environment } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import { Mesh, Vector3, Color } from "three";
import { EffectComposer, Bloom, Glitch } from "@react-three/postprocessing";

// 🌟 3D Resume Model (Interactive & Glowing)
const InteractiveResume = () => {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);
  const { viewport } = useThree();
  
  useCursor(hovered, 'pointer', 'auto');
  
  useFrame((state) => {
    if (meshRef.current) {
      // Mouse-follow effect
      meshRef.current.rotation.y = state.mouse.x / 4;
      meshRef.current.rotation.x = state.mouse.y / 8;
      
      // Pulse effect when clicked
      if (clicked) {
        meshRef.current.scale.x = Math.sin(state.clock.getElapsedTime() * 5) * 0.05 + 1;
        meshRef.current.scale.y = Math.sin(state.clock.getElapsedTime() * 5) * 0.05 + 1;
      }
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        onClick={() => setClicked(!clicked)}
        scale={hovered ? [1.1, 1.1, 1.1] : [1, 1, 1]}
      >
        <boxGeometry args={[2, 2.8, 0.1]} />
        <meshStandardMaterial 
          color={hovered ? "#FF6B6B" : "#FFFFFF"} 
          emissive={hovered ? "#FF6B6B" : "#000000"}
          emissiveIntensity={hovered ? 0.8 : 0}
          metalness={0.9}
          roughness={0.1}
        />
        <Text
          position={[0, 0, 0.06]}
          fontSize={0.2}
          color="#000000"
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        >
          {clicked ? "✨ EDIT ME! ✨" : "MY RESUME"}
        </Text>
        {hovered && (
          <Sparkles count={30} scale={[2.2, 2.9, 0.2]} size={4} speed={0.2} color="#FF6B6B" />
        )}
      </mesh>
    </Float>
  );
};

// 🎨 Floating Templates (Vibrant & Clickable)
const FloatingTemplates = ({ navigate }: { navigate: any }) => {
  const templates = useRef<Mesh[]>([]);
  const [activeTemplate, setActiveTemplate] = useState<number | null>(null);

  useFrame((state) => {
    templates.current.forEach((template, i) => {
      // Gentle floating animation
      template.position.y = Math.sin(state.clock.getElapsedTime() + i * 2) * 0.3;
      
      // Highlight active template
      if (i === activeTemplate) {
        template.rotation.x += 0.03;
        template.rotation.y += 0.05;
        template.scale.setScalar(1.2);
      } else {
        template.rotation.x += 0.01;
        template.rotation.y += 0.02;
        template.scale.setScalar(1);
      }
    });
  });

  const colors = ['#6366F1', '#EC4899', '#10B981', '#F59E0B']; // Purple, Pink, Emerald, Amber

  return (
    <>
      {[1, 2, 3, 4].map((_, i) => (
        <group key={i} position={[i * 2.5 - 3.75, 0, -5]}>
          <mesh
            ref={(el) => (templates.current[i] = el!)}
            onPointerOver={() => setActiveTemplate(i)}
            onPointerOut={() => setActiveTemplate(null)}
            onClick={() => navigate(`/template/${i + 1}`)}
          >
            <boxGeometry args={[1.5, 1.8, 0.1]} />
            <meshStandardMaterial 
              color={colors[i]} 
              emissive={colors[i]}
              emissiveIntensity={activeTemplate === i ? 0.5 : 0}
              metalness={0.8}
              roughness={0.1}
            />
            <Text
              position={[0, 0, 0.06]}
              fontSize={0.15}
              color="#FFFFFF"
              anchorX="center"
              anchorY="middle"
              font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
            >
              {`Theme ${i + 1}`}
            </Text>
            {activeTemplate === i && (
              <Sparkles count={15} scale={[1.6, 1.9, 0.2]} size={3} speed={0.1} color={colors[i]} />
            )}
          </mesh>
        </group>
      ))}
    </>
  );
};

// ✨ Background Particles (Floating & Colorful)
const BackgroundParticles = () => {
  const particles = useRef<Mesh[]>([]);
  
  useFrame((state) => {
    particles.current.forEach((particle, i) => {
      particle.position.x = Math.sin(state.clock.getElapsedTime() * 0.5 + i) * 15;
      particle.position.y = Math.cos(state.clock.getElapsedTime() * 0.7 + i) * 8;
      particle.position.z = Math.sin(state.clock.getElapsedTime() * 0.3 + i) * 10;
    });
  });

  const colors = ['#FF6B6B', '#48BB78', '#4299E1', '#9F7AEA', '#ED8936']; // Red, Green, Blue, Purple, Orange

  return (
    <>
      {Array.from({ length: 30 }).map((_, i) => (
        <mesh
          key={i}
          ref={(el) => (particles.current[i] = el!)}
          position={[
            Math.random() * 30 - 15,
            Math.random() * 10 - 5,
            Math.random() * -20
          ]}
        >
          <sphereGeometry args={[0.1 + Math.random() * 0.2, 16, 16]} />
          <meshStandardMaterial 
            color={new Color(colors[Math.floor(Math.random() * colors.length)])} 
            emissive={new Color(colors[Math.floor(Math.random() * colors.length)])}
            emissiveIntensity={0.3}
            roughness={0.1}
            metalness={0.7}
          />
        </mesh>
      ))}
    </>
  );
};

const HomePage = () => {
  const navigate = useNavigate();
  const [isExploring, setIsExploring] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 25px rgba(255, 107, 107, 0.5)",
      transition: {
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-slate-900 to-purple-900">
      {/* ✨ 3D Background Canvas */}
      <div className="absolute inset-0 z-0 h-screen">
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <color attach="background" args={["#0F172A"]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          
          <Environment preset="city" />
          
          <InteractiveResume />
          <FloatingTemplates navigate={navigate} />
          <BackgroundParticles />
          <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
          
          <EffectComposer>
            <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
            <Glitch delay={[1, 10]} duration={[0.1, 0.3]} strength={[0.01, 0.03]} active={isExploring} />
          </EffectComposer>
          
          <OrbitControls 
            enableZoom={false} 
            autoRotate={isExploring} 
            autoRotateSpeed={0.5}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>

      {/* 🎨 Content Overlay */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* 🌟 Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-24 min-h-screen pt-24">
          <motion.div className="lg:w-1/2" variants={containerVariants}>
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-xl"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500">
                Stand Out
              </span>{" "}
              with a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                3D Resume
              </span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-blue-100 mb-8 drop-shadow-md max-w-lg"
            >
              Create an interactive, animated resume that recruiters will remember.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex gap-4 flex-wrap"
            >
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-8 py-4 rounded-xl font-bold shadow-xl text-lg backdrop-blur-sm"
                onClick={() => navigate("/create")}
              >
                🚀 Start Building Free
              </motion.button>
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-xl font-bold shadow-xl text-lg backdrop-blur-sm"
                onClick={() => setIsExploring(!isExploring)}
              >
                {isExploring ? "🔴 Stop Exploring" : "✨ Explore Templates"}
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* 🎨 Features Section */}
        <motion.div
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 mb-24 border border-white/20 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-white"
            variants={itemVariants}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Why Choose Us?
            </span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌈",
                title: "Vibrant Themes",
                description: "Choose from 20+ colorful designs"
              },
              {
                icon: "🎮",
                title: "Interactive Elements",
                description: "Add 3D models, videos & animations"
              },
              {
                icon: "⚡",
                title: "One-Click Export",
                description: "Download as PDF, GIF, or Web Link"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-pink-500/50 transition-all group"
                variants={itemVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.03,
                  boxShadow: "0 10px 25px -5px rgba(255, 107, 107, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className="text-5xl mb-4 inline-block"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-cyan-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-blue-100">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ✨ CTA Section */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block mb-8"
          >
            <div className="bg-gradient-to-r from-pink-500 to-red-500 p-5 rounded-full shadow-xl">
              <svg
                className="h-14 w-14 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </motion.div>
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Transform</span> Your Resume?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Join <span className="font-bold text-pink-400">10,000+ professionals</span> who got hired faster with interactive resumes.
          </p>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-10 py-5 rounded-xl font-bold shadow-xl text-xl"
            onClick={() => navigate("/create")}
          >
            🚀 Create Yours Now — 100% Free
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomePage;