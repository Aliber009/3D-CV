import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState, useMemo } from "react";

import CanvasLoader from "../loader";

type ComputersProps = {
  isMobile: boolean;
};

// Computers
const Computers = ({ isMobile }: ComputersProps) => {
  // Import scene
  const { scene } = useGLTF("./desk_ali/desk.gltf");

  return (
    <mesh>
      {/* Light */}
      <hemisphereLight intensity={0.3} groundColor="black" />
      <pointLight intensity={10} />
      <spotLight
        position={[-10, 20, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={512}
      />
      <primitive
        object={scene}
        scale={isMobile ? 1.6 : 2.0}
        position={isMobile ? [-0.3, -5, 0.3] : [-0.3, -5.25, 0.3]}
        rotation={[0, 1.3, 0]}
      />
    </mesh>
  );
};

// Computer Canvas
const ComputersCanvas = () => {
  // State to check mobile
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is Mobile
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    // Handle screen size change
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // Optimize camera and lights settings
  const cameraProps = useMemo(
    () => ({
      position: [20, 3, 5],
      fov: isMobile ? 35 : 25,
    }),
    [isMobile]
  );

  //const shadowMapSize = useMemo(() => (isMobile ? 512 : 1024), [isMobile]);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={cameraProps}
      gl={{ preserveDrawingBuffer: true, alpha: true }}
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
