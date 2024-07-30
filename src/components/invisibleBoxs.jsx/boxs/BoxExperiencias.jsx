import { useContext, useRef } from "react";
import { useFrame } from '@react-three/fiber';
import InvisibleContext from "../../../context/InvisibleBoxContext";

const BlockExperiencia = () => {
    const { setSelectedObject, setSelectedTopic } = useContext(InvisibleContext);

    const rotate = useRef();

    useFrame(() => {
        rotate.current.rotation.y = -0.7;

    });

    return (
        <mesh position={[3.35, -0.8, 2.7]} ref={rotate} onClick={() => { setSelectedObject('Experiencia'); setSelectedTopic('Experiencia'); }}>
            <boxGeometry args={[0.6, 0.4, 1.2]} />
            <meshStandardMaterial visible={false} />
        </mesh>
    );
}

export default BlockExperiencia;