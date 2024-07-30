import { useContext } from "react";
import InvisibleContext from "../../../context/InvisibleBoxContext";

const BlockDiploma = () => {
    const { setSelectedObject, setSelectedTopic } = useContext(InvisibleContext);

    return (
        <mesh position={[8.2, 0.85, -4.5]} onClick={() => { setSelectedObject('Diplomas'); setSelectedTopic('Diplomas'); }}>
            <boxGeometry args={[1.5, 1.2, 0.2]} />
            <meshStandardMaterial visible={false} />
        </mesh>
    );
}

export default BlockDiploma;