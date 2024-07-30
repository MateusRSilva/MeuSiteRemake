import React from 'react';
import { useGLTF } from '@react-three/drei';

const Room = () => {
  const room = useGLTF('/Room/scene.gltf');

  return (
    <primitive
      object={room.scene}
      scale={1.5}
      position={[0, -1, 0]}
      rotation={[0, 0, 0]}
    />
  );
};

useGLTF.preload('/Room/scene.gltf');

export default Room;