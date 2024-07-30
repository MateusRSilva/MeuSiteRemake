import React from 'react';
import { useGLTF } from '@react-three/drei';

const Sword = () => {
  const sword = useGLTF('/Sword/scene.gltf');

  return (
    <primitive
      object={sword.scene}
      scale={1.7}
      position={[-7.41, 1.2, 2.8]}
      rotation={[0, 1.6, 0]}
    />
  );
};

useGLTF.preload('/Sword/scene.gltf');

export default Sword;