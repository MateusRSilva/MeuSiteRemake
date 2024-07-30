import React, { useRef, useState } from 'react';
import InvisibleContext from './InvisibleBoxContext';

const InvisibleProvider = ({ children }) => {
  const lightTargetZelda = useRef();
  const lightTargetSword = useRef();
  const lightTargetMHW = useRef();
  const [selectedObject, setSelectedObject] = useState();
  const [selectedTopic, setSelectedTopic] = useState();
  const [selectedTitle, setSelectedTitle] = useState();
  const [link, setLink] = useState(null);
  const [isToggled, setIsToggled] = useState(false);
  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  return (
    <InvisibleContext.Provider value={{lightTargetMHW, lightTargetZelda, lightTargetSword, selectedObject, setSelectedObject, selectedTopic, setSelectedTopic, selectedTitle, setSelectedTitle, link, setLink, handleClick, isToggled }}>
      {children}
    </InvisibleContext.Provider>
  );
};

export default InvisibleProvider;