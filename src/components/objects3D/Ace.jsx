import React from 'react';
import { useGLTF } from '@react-three/drei';

const Hollow = () => {
  const hollow = useGLTF('/Hollow/scene.gltf');

  return (
    <primitive
      object={hollow.scene}
      scale={0.8}
      position={[-5.4, 0.55, -4]}
      rotation={[0, 0, 0]}
    />
  );
};

useGLTF.preload('/Hollow/scene.gltf');

export default Hollow;