import { useContext } from "react";
import InvisibleContext from "../../../context/InvisibleBoxContext";

const BlockProjetos = () => {
    const { setSelectedObject, setSelectedTopic } = useContext(InvisibleContext);

    const handleClick = () => {
        setTimeout(() => {
            setSelectedObject('Projetos');
            setSelectedTopic('Projetos');
        }, 0); // Delay de 500ms, ajuste conforme necessário
    };

    return (
        <mesh name="Projetos" position={[0.6, 0.2, -0.4]} onClick={handleClick}>
            <boxGeometry args={[1.3, 1.3, 1.3]} />
            <meshStandardMaterial visible={false} />
        </mesh>
    );
}

export default BlockProjetos;
