import { useContext } from "react";
import InvisibleContext from "../../../context/InvisibleBoxContext";

const BlockCama = () => {
    const { handleClick } = useContext(InvisibleContext);

    return (
        <mesh position={[-5.7, -0.2, 2.7]} onClick={handleClick}>
            <boxGeometry args={[2.2, 1.4, 4]} />
            <meshStandardMaterial visible={false} />
        </mesh>
    );
}

export default BlockCama;