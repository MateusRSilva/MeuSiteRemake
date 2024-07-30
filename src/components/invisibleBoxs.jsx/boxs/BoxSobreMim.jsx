import { useContext } from "react";
import InvisibleContext from "../../../context/InvisibleBoxContext";

const BlockSobreMim = () => {
    const { setSelectedObject, setSelectedTopic, setSelectedTitle, setLink } = useContext(InvisibleContext);

    return (
        <mesh position={[-3.6, 0.9, -3.8]} onClick={() => { setSelectedObject('SobreMim'); setSelectedTopic('SobreMim'); setSelectedTitle('SobreMim'), setLink() }}>
            <boxGeometry args={[1, 0.2, 0.8]} />
            <meshStandardMaterial visible={false} />
        </mesh>
    );
}

export default BlockSobreMim;