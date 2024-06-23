import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";

import CanvasLoader from "../loader";

type ComputersProps = {
  isMobile: boolean;
};

// Computers
const Computers = ({ isMobile }: ComputersProps) => {
  // Import scene
  const computer = useGLTF("./desk-opt.glb");

  return (
    // Mesh
    <mesh>
      {/* Light */}
      <hemisphereLight intensity={isMobile ? 0.2 : 0.3} groundColor="black" />
      <pointLight intensity={isMobile ? 8 : 12} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={isMobile ? 0.8 : 1}
        castShadow
        shadow-mapSize={isMobile ? 512 : 1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 1.5 : 2.2}
        position={isMobile ? [-0.3, -4.5, 0.3] : [-0.3, -5.25, 0.3]}
        rotation={[0, 1.3, 0]}
      />
    </mesh>
  );
};

// Computer Canvas
const ComputersCanvas = () => {
  // state to check mobile
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is Mobile
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    // handle screen size change
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event?.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: isMobile ? [15, 3, 5] : [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true, alpha: true }}
      style={{
        touchAction:"pan-y !important"
      }}
    >
      {/* Canvas Loader show on fallback */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {/* Show Model */}
        <Computers isMobile={isMobile} />
      </Suspense>

      {/* Preload all */}
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
