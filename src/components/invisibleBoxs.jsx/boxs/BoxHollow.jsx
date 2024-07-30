import { useContext } from "react";
import InvisibleContext from "../../../context/InvisibleBoxContext";

const BlockHollow = () =>{
    const {setSelectedObject, setSelectedTopic, setSelectedTitle, setLink } = useContext(InvisibleContext);

    return(
        <mesh position={[-5.4, 0.5, -4]} onClick={() => { 
            setSelectedObject('Hollow');setSelectedTopic('Referencias') ;setSelectedTitle('Hollow'); setLink() }}>
            <boxGeometry args={[0.5, 0.7, 0.5]} />
            <meshStandardMaterial visible={false} />
        </mesh>
    );
}

export default BlockHollow;