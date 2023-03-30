export default function Experience() {
    return (
        <>
            <mesh position-x={ -2.0 }>
                <sphereGeometry />
                <meshBasicMaterial color="orange" />
            </mesh>
            <mesh rotation-y={ Math.PI * 0.25 } position-x={ 2.0 } scale={ 1.5 }>
                <boxGeometry args={[1.5, 1.5, 1.5]}/>
                <meshBasicMaterial color="mediumpurple" />
            </mesh>
            <mesh position-y={ - 1.0 } rotation-x={ - Math.PI * 0.5 } scale={ 10.0 }>
                <planeGeometry />
                <meshBasicMaterial color="greenyellow" />
            </mesh>
        </>
    );
}