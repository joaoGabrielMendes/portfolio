import { Canvas } from "react-three-fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Float, Stars } from "@react-three/drei";
import { Model } from "./React_logo";

const StarsScene = () => {
  return (
    <Canvas
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        zIndex: "-1",
      }}
      camera={{ position: [0, 0, 20] }}
    >
      <Stars saturation={0} count={500} speed={0.9} />
    </Canvas>
  );
};

export default StarsScene;
