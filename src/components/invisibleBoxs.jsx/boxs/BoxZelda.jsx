import { useContext } from "react";
import InvisibleContext from "../../../context/InvisibleBoxContext";

const BlockZelda = () =>{
    const { lightTargetZelda, setSelectedObject, setSelectedTopic, setSelectedTitle, setLink } = useContext(InvisibleContext);

    return(
        <mesh position={[1.5, 0.3, -4]} ref={lightTargetZelda} onClick={() => { 
            setSelectedObject('Zelda');setSelectedTopic('Referencias') ;setSelectedTitle('Zelda'); setLink() }}>
            <boxGeometry args={[0.5, 2.3, 0.3]} />
            <meshStandardMaterial visible={false} />
        </mesh>
    );
}

export default BlockZelda;