import { useContext } from "react";
import InvisibleContext from "../../../context/InvisibleBoxContext";

const BlockMHW = () =>{
    const { lightTargetMHW, setSelectedObject, setSelectedTopic, setSelectedTitle, setLink } = useContext(InvisibleContext);

    return(
        <mesh position={[4.5, 1.18, -4.4]} ref={lightTargetMHW} onClick={() => { 
            setSelectedObject('MHW');setSelectedTopic('Referencias') ;setSelectedTitle('MHW'); setLink() }}>
            <boxGeometry args={[1, 1.2, 0.1]} />
            <meshStandardMaterial visible={false} />
        </mesh>
    );
}

export default BlockMHW;