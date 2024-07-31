import React, { useContext, useState, useEffect } from 'react';
import Content from '../contentTexts';
import InvisibleContext from '../../../context/InvisibleBoxContext';
import TextBox from '../textBox/TextBox';
import './OptionsBallon.css';

const OptionsBallon = () => {
    const { selectedTopic, setSelectedTitle, setLink } = useContext(InvisibleContext);
    const [hoveredItem, setHoveredItem] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const [key, setKey] = useState(0);
    const [isVisible, setIsVisible] = useState(true); 

    const getFilteredText = () => {
        const topic = Content.find(t => t.topic === selectedTopic);

        if (topic) {
            if (['Contato', 'Referencias', 'Redes', 'SobreMim', 'Conhecimentos', 'Diplomas', 'Projetos', 'Experiencia'].includes(selectedTopic)) {
                return topic.information;
            }
        }
        return [];
    };

    const items = getFilteredText();

    const handleClick = (item) => {
        setSelectedTitle(item.title);
        setSelectedItem(item);
        setLink(item.link || null);
        setKey(prevKey => prevKey + 1); 
    };

    const handleExitClick = () => {
        setIsVisible(false); 
    };

    if (!isVisible) {
        return null; 
    }

    return (
        <>
            <div className="optionsBallonContainer">
                <div className='ballon'>
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className='optionItem'
                            onMouseEnter={() => setHoveredItem(index)}
                            onMouseLeave={() => setHoveredItem(null)}
                            onClick={() => handleClick(item)}
                        >
                            <div className={`selectTriangle ${hoveredItem === index ? 'blink' : ''}`} />
                            <div className="optionTitle">{item.title}</div>
                        </div>
                    ))}
                    <div
                        className='optionItem'
                        onMouseEnter={() => setHoveredItem(items.length)}
                        onMouseLeave={() => setHoveredItem(null)}
                        onClick={handleExitClick}
                    >
                        <div className={`selectTriangle ${hoveredItem === items.length ? 'blink' : ''}`} />
                        <div className="optionTitle">Sair</div>
                    </div>
                </div>
            </div>
            {selectedItem && (
                <TextBox key={key} item={selectedItem} />
            )}
        </>
    );
};

export default OptionsBallon;
