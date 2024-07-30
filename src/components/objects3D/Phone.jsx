import React from 'react';
import { useGLTF } from '@react-three/drei';

const Phone = () => {
  const phone = useGLTF('/Phone/scene.gltf');

  return (
    <primitive
      object={phone.scene}
      scale={0.9}
      position={[-1.5, -1, 2.5]}
      rotation={[-1.6, 0, 0.5]}
    />
  );
};

useGLTF.preload('/Phone/scene.gltf');

export default Phone;