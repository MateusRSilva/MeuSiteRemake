import React, { useContext } from "react";
import TypingEffect from '../typingEffect/TypingEffect';
import InvisibleContext from "../../../context/InvisibleBoxContext";
import Content from "../contentTexts";

const TextBox = () => {
    const { selectedTopic, selectedTitle } = useContext(InvisibleContext);

    const getFilteredText = () => {
        const topic = Content.find(t => t.topic === selectedTopic);

        if (topic) {
            if (['Contato', 'Referencias', 'Redes', 'SobreMim', 'Conhecimentos', 'Diplomas','Projetos','Experiencia'].includes(selectedTopic)) {
                const item = topic.information.find(i => i.title === selectedTitle);
                return item ? item.description : 'Título não encontrado';
            }
            return 'Tópico não encontrado';
        }
        return 'Tópico não encontrado';
    };

    const text = getFilteredText();
    return (
        <TypingEffect text={text} />
    );
}

export default TextBox;
