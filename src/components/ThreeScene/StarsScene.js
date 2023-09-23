import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { Stars } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

const StarsScene = () => {
  const cameraRef = useRef();

  return (
    <Canvas
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        zIndex: "-1",
      }}
      camera={{ position: [0, 0, 20], ref: cameraRef }}
    >
      <StarsComponent />
      <EffectComposer>
        <Bloom luminanceThreshold={0.7} luminanceSmoothing={0.9} />
      </EffectComposer>
    </Canvas>
  );
};

const StarsComponent = () => {
  const starsRef = useRef();

  useFrame(({ clock }) => {
    if (starsRef.current) {
      starsRef.current.position.z = -Math.sin(clock.elapsedTime * 0.2) * 50;
    }
  });

  return (
    <Stars
      ref={starsRef}
      saturation={0}
      count={1000}
      radius={100}
      depth={50}
      factor={4}
      fade={true}
      materialType="PointsMaterial"
    />
  );
};

export default StarsScene;
