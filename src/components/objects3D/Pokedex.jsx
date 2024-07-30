import React from 'react';
import { useGLTF } from '@react-three/drei';

const Pokedex = () => {
  const pokedex = useGLTF('/Pokedex/scene.gltf');

  return (
    <primitive
      object={pokedex.scene}
      scale={8}
      position={[3, -1.17, 3]}
      rotation={[-1.3, -0.5, -0.7]}
    />
  );
};

useGLTF.preload('/Pokedex/scene.gltf');

export default Pokedex;