import React, { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  const controlsRef = useRef();
  const [isDragging, setIsDragging] = useState(false);

  const handlePointerDown = () => {
    setIsDragging(true);
    if (controlsRef.current) controlsRef.current.autoRotate = false;
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    if (controlsRef.current) controlsRef.current.autoRotate = true;
  };

  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          ref={controlsRef}
          autoRotate={!isDragging} // Auto-rotate only when not dragging
          autoRotateSpeed={2.0}
          enableZoom={false}
          enableDamping={true}
          dampingFactor={0.1}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
