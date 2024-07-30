import React from 'react';
import { useGLTF } from '@react-three/drei';

const Book = () => {
  const book = useGLTF('/Book/scene.gltf');

  return (
    <primitive
      object={book.scene}
      scale={1.1}
      position={[-3.1, 0.85, -4]}
      rotation={[-1.6, 0, 1.6]}
    />
  );
};

useGLTF.preload('/Book/scene.gltf');

export default Book;