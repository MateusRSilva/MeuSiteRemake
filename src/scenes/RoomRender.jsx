import React, { Suspense, useRef, useEffect, useState, useContext } from 'react';
import { Canvas } from '@react-three/fiber';
import Room from '../components/objects3D/Room';
import Text3D from '../components/objects3D/text3D/Text';
import Book from '../components/objects3D/Book';
import Sword from '../components/objects3D/Sword';
import Pokedex from '../components/objects3D/Pokedex';
import Zelda from '../components/objects3D/Zelda';
import InvisibleBox from '../components/invisibleBoxs.jsx/InvisibleBoxRender';
import InvisibleContext from '../context/InvisibleBoxContext';
import Phone from '../components/objects3D/Phone';
import MHW from '../components/objects3D/MHW';
import Hollow from '../components/objects3D/Ace';
import textPositions from '../components/objects3D/text3D/TextPositions';
import Loading from '../components/Loading';
import { OrbitControls } from '@react-three/drei';

const RoomScene = () => {
    const controlsRef = useRef();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const { lightTargetMHW, lightTargetZelda, lightTargetSword, isToggled } = useContext(InvisibleContext);
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const handleMouseMove = (event) => {
            const { clientWidth, clientHeight } = document.documentElement;
            setMousePosition({
                x: (event.clientX / clientWidth) * 1 - 1,
                y: -(event.clientY / clientHeight) * 1 + 1,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        if (controlsRef.current) {
            controlsRef.current.target.set(mousePosition.x * 1.1, mousePosition.y * 1.1, 0);
        }
    }, [mousePosition]);

    useEffect(() => {
        const handleResize = () => {
            const { innerWidth } = window;
            // Ajuste a escala com base na largura da janela
            if (innerWidth < 1900) {
                setScale(1);
            } else {
                setScale(0.70);
            }
        };

        handleResize(); // Chame a função para definir a escala inicial
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Suspense fallback={<Loading />}>
            <Canvas camera={{ position: [12, 10, 30], fov: 30 }}>
                <OrbitControls
                    ref={controlsRef}
                    enableZoom={false}
                    enablePan={false}
                    enableRotate={false}
                />
                <group scale={scale}>
                    <ambientLight intensity={isToggled ? 1 : 3.5} />
                    <spotLight target={lightTargetZelda.current} angle={0.5} position={[1.5, 3, -3]} intensity={isToggled ? 1 : 25} penumbra={1} />
                    <spotLight target={lightTargetSword.current} angle={0.5} position={[-4, 1.2, 2.6]} intensity={isToggled ? 1 : 25} penumbra={1} />
                    <spotLight target={lightTargetMHW.current} angle={0.1} position={[4, 1.2, 2.6]} intensity={isToggled ? 1 : 60} penumbra={1} />
                    <Zelda />
                    <InvisibleBox />
                    <Room />
                    <Book />
                    <Hollow />
                    <MHW />
                    <Sword />
                    <Phone />
                    <Pokedex />
                    {textPositions.map((props, index) => (
                        <Text3D key={index} {...props} />
                    ))}
                </group>
            </Canvas>
        </Suspense>
    );
};

export default RoomScene;
