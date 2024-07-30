import { useContext } from "react";
import InvisibleContext from "../../../context/InvisibleBoxContext";

const BlockProjetos = () => {
    const { setSelectedObject, setSelectedTopic } = useContext(InvisibleContext);

    return (
        <mesh position={[0.6, 0.2, -0.4]} onClick={() => { setSelectedObject('Projetos'); setSelectedTopic('Projetos'); }}>
            <boxGeometry args={[1.3, 1.3, 1.3]} />
            <meshStandardMaterial visible={false} />
        </mesh>
    );
}

export default BlockProjetos;