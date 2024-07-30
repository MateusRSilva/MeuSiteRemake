import { useContext } from "react";
import InvisibleContext from "../../../context/InvisibleBoxContext";

const BlockSword = () => {
    const { lightTargetSword, setSelectedObject, setSelectedTopic, setSelectedTitle, setLink} = useContext(InvisibleContext);

    return (
        <mesh position={[-7.41, 1.4, 2.5]} ref={lightTargetSword} onClick={() => { setSelectedObject('Sword');setSelectedTopic('Referencias') ;setSelectedTitle('darkSouls'); setLink() }}>
            <boxGeometry args={[0.5, 0.5, 3]} />
            <meshStandardMaterial visible={false} />
        </mesh>
    );
}

export default BlockSword;