import { useContext } from "react";
import InvisibleContext from "../../../context/InvisibleBoxContext";

const BlockConhecimentos = () => {
    const { setSelectedObject, setSelectedTopic } = useContext(InvisibleContext);

    return (
        <mesh position={[-1.25, 0.3, -3.7]} onClick={() => { setSelectedObject('Conhecimentos'); setSelectedTopic('Conhecimentos'); }}>
            <boxGeometry args={[3.1, 2.5, 1.5]} />
            <meshStandardMaterial visible={false} />
        </mesh>
    );
}

export default BlockConhecimentos;