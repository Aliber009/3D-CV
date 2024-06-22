import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import CanvasLoader from "../loader";

type BallProps = {
  imgUrl: string;
};

// Ball
const Ball = ({ imgUrl }: BallProps) => {
  // use texture from drei
  const [decal] = useTexture([imgUrl]);
  const cube = useGLTF("./cube/scene.gltf");
  
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      {/* Lights */}
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      {/* Mesh */}
      <mesh castShadow receiveShadow scale={2.75}>
      <meshBasicMaterial transparent opacity={0} />
        <icosahedronGeometry args={[1, 3]} />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

type BallCanvasProps = {
  icon: string;
};

// Ball Canvas
const BallCanvas = ({ icon }: BallCanvasProps) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      {/* Show canvas loader on fallback */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      {/* Preload all */}
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
