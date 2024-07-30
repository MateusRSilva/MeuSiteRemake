import React, { useContext, useState, useEffect } from 'react';
import RoomScene from './scenes/RoomRender';
import TextBox from './components/texts/textBox/TextBox';
import OptionsBallon from './components/texts/optionBox/OptionsBallon';
import InvisibleContext from './context/InvisibleBoxContext';
import Button from './components/Button/Button';

const App = () => {
  const { selectedObject } = useContext(InvisibleContext);
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, [selectedObject]);

  const renderComponent = () => {
    switch (selectedObject) {
      case 'Sword':
      case 'MHW':
      case 'Hollow':
      case 'Zelda':
      case 'SobreMim':
        return <TextBox key={key} />;
      case 'Contato':
      case 'Diplomas':
      case 'Conhecimentos':
      case 'Redes':
      case 'Experiencia':
      case 'Projetos':
        return <OptionsBallon key={key} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className='bgAnimation'>
        <div>
          <RoomScene />
        </div>
      </div>
      {renderComponent()}
      <Button />
    </>
  );
};

export default App;
