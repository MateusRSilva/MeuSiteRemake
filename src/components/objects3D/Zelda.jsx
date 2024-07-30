import React from 'react';
import { useGLTF } from '@react-three/drei';

const Zelda = () => {
  const zelda = useGLTF('/LinkSword/scene.gltf');

  return (
    <primitive
      object={zelda.scene}
      scale={0.05}
      position={[1.5, 0.7, -4]}
      rotation={[0, 1.5, 0]}
    />
  );
};

useGLTF.preload('/LinkSword/scene.gltf');

export default Zelda;