// TypingEffect.js
import React, { useContext, useEffect, useState } from 'react';
import './TypingEffect.css'; // Importa o arquivo CSS para o efeito
import InvisibleContext from '../../../context/InvisibleBoxContext';

const TypingEffect = ({ text }) => {
  const { setSelectedObject, link } = useContext(InvisibleContext)
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(displayedText + text[index]);
        setIndex(index + 1);
      }, 1); // Ajuste a velocidade do efeito aqui

      return () => clearTimeout(timeout);
    }
  }, [index, text, displayedText]);

  return (
    <div className="textBoxContainer">
      <div><a href={link} target="_blank">{displayedText}</a></div>
      <div className="triangle" onClick={() => { setSelectedObject('') }}></div>
    </div>
  );
};

export default TypingEffect;
