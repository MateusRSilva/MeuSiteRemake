// Text3D.js
import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

const Text3D = ({ position, size, text, height, arrow  }) => {
  const [geometry, setGeometry] = useState(null);
  const ref = useRef();
  const [yOffset, setYOffset] = useState(0); // Variável para controlar a animação de subida e descida
  const [scale, setScale] = useState(0.1);

  useEffect(() => {
    const fontLoader = new FontLoader();

    fontLoader.load('/fonts/font.json', (font) => {
      // Cria duas geometrias de texto separadas
      const textGeometry1 = new TextGeometry(text, {
        font: font,
        size: size,
        depth: 0.02, // Espessura do texto
      });
      const textGeometry2 = new TextGeometry('↓', {
        font: font,
        size: size,
        depth: 0.02, // Espessura do texto
      });

      // Combina as geometrias em uma única usando BufferGeometry
      const combinedGeometry = new THREE.BufferGeometry();
      combinedGeometry.setAttribute(
        'position',
        new THREE.BufferAttribute(
          new Float32Array([...textGeometry1.attributes.position.array, ...textGeometry2.attributes.position.array]),
          3
        )
      );
      combinedGeometry.setAttribute(
        'uv',
        new THREE.BufferAttribute(
          new Float32Array([...textGeometry1.attributes.uv.array, ...textGeometry2.attributes.uv.array]),
          2
        )
      );
      combinedGeometry.setAttribute(
        'normal',
        new THREE.BufferAttribute(
          new Float32Array([...textGeometry1.attributes.normal.array, ...textGeometry2.attributes.normal.array]),
          3
        )
      );

      // Centraliza a seta horizontalmente (após calcular o boundingBox)
      combinedGeometry.computeBoundingBox(); // Calcula o boundingBox
      const secondLineOffset = textGeometry1.attributes.position.array.length / 3;
      const textWidth = combinedGeometry.boundingBox.max.x - combinedGeometry.boundingBox.min.x;
      
      // Calcula o boundingBox da segunda geometria após o offset
      textGeometry2.computeBoundingBox();
      const arrowWidth = textGeometry2.boundingBox.max.x - textGeometry2.boundingBox.min.x;
      const horizontalOffset = (textWidth - arrowWidth) / arrow; 

      for (let i = secondLineOffset; i < combinedGeometry.attributes.position.array.length / 3; i++) {
        combinedGeometry.attributes.position.array[i * 3] += horizontalOffset; // Offset horizontal
        combinedGeometry.attributes.position.array[i * 3 + 1] -= 0.3; // Offset vertical
      }

      combinedGeometry.computeVertexNormals();
      setGeometry(combinedGeometry);
    }, undefined, (error) => {
      console.error('Erro ao carregar a fonte:', error);
    });
  }, []);

  useFrame(({ clock }) => {
    if (ref.current) {
      // Animação de subida e descida
      const time = clock.getElapsedTime();
      const amplitude = 0.3; // Amplitude da animação
      const frequency = 2; // Frequência da animação
      setYOffset(amplitude * Math.sin(time * frequency));

      // Animação de escala proporcional à altura
      setScale(1 + (yOffset / amplitude) * 0.05); // 0.2 é o fator de escala

      ref.current.position.y = height + yOffset; // Adicionando o yOffset à altura inicial
      ref.current.scale.set(scale, scale, scale);
    }
  });

  return (
    geometry && (
      <mesh position={[position[0], position[1], position[2]]} ref={ref} geometry={geometry}>
        <meshStandardMaterial color="black" side={THREE.DoubleSide} />
      </mesh>
    )
  );
};

export default Text3D;