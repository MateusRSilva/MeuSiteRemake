import { useContext, useRef } from "react";
import { useFrame } from '@react-three/fiber';
import InvisibleContext from "../../../context/InvisibleBoxContext";

const BlockContato = () => {
    const { setSelectedObject, setSelectedTopic } = useContext(InvisibleContext);

    const rotate = useRef();

    useFrame(() => {
        rotate.current.rotation.y = 0.5;

    });

    return (
        <mesh position={[-1.8, -1, 2]} ref={rotate} onClick={() => { setSelectedObject('Contato'); setSelectedTopic('Contato'); }}>
            <boxGeometry args={[0.6, 0.4, 1.2]} />
            <meshStandardMaterial visible={false} />
        </mesh>
    );
}

export default BlockContato;