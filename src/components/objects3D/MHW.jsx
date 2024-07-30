import React from 'react';
import { useGLTF } from '@react-three/drei';

const MHW = () => {
  const mhw = useGLTF('/MHW/scene.gltf');

  return (
    <primitive
      object={mhw.scene}
      scale={2}
      position={[4.5, 0.55, -4.5]}
      rotation={[0, 0, 0]}
    />
  );
};

useGLTF.preload('/MHW/scene.gltf');

export default MHW;