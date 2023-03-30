import { useThree, extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// import testVertexShader from './vertex.glsl'
// import testFragmentShader from './fragment.glsl'

extend({ OrbitControls });

export default function Experience() {

    const { camera, gl } = useThree();
    const cubeRef = useRef();
    const groupRef = useRef();

    useFrame((state, delta) => {
        cubeRef.current.rotation.y += delta;
        // groupRef.current.rotation.y += delta;
    });

    return (
        <>
            <orbitControls args={[ camera, gl.domElement ]} />
            <group ref={ groupRef }>
                <mesh position-x={ -2.0 }>
                    <sphereGeometry />
                    <meshBasicMaterial color="orange" />
                </mesh>
                <mesh ref={ cubeRef } rotation-y={ Math.PI * 0.25 } position-x={ 2.0 } scale={ 1.5 }>
                    <boxGeometry args={[1.5, 1.5, 1.5]}/>
                    <meshBasicMaterial color="mediumpurple" />
                </mesh>
            </group>
            <mesh position-y={ - 1.0 } rotation-x={ - Math.PI * 0.5 } scale={ 10.0 }>
                <planeGeometry />
                <meshBasicMaterial color="greenyellow" />
                {/* <shaderMaterial 
                    attach="material"
                    vertexShader={ testVertexShader }
                    fragmentShader={ testFragmentShader }
                    uniforms={
                        uFrequency: { value: new THREE.Vector2(10, 5) }
                        uTime: { value: 0 }
                        uColor: { value: new THREE.Color('orange') }
                    }
                /> */}
            </mesh>
        </>
    );
}