import { useContext } from "react";
import InvisibleContext from "../../../context/InvisibleBoxContext";

const BlockRedes = () => {
    const { setSelectedObject, setSelectedTopic } = useContext(InvisibleContext);

    return (
        <mesh position={[-6.5, 0.8, -3.5]} onClick={() => { setSelectedObject('Redes'); setSelectedTopic('Redes'); }}>
            <boxGeometry args={[1.2, 1.4, 0.8]} />
            <meshStandardMaterial visible={false} />
        </mesh>
    );
}

export default BlockRedes;