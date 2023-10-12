 import React from 'react'
 import { Canvas } from '@react-three/fiber'
 import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
 import { Suspense } from 'react'
 
 import CanvasLoader from '../Loader'

 const Dna = () => {
    const dna = useGLTF('./dna/scene.gltf')

    // dna.scene.rotateX(180); 
    // dna.scene.rotateY(180); 
    // dna.scene.rotateZ(Math.PI / 1);
    dna.scene.rotation.set(0, 0, Math.PI / 2);
    // dna.scene.rotation.set(0, 0.01, 0);
   return (

    <mesh>
      <hemisphereLight intensity={5.15} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight  position={[0, 10, 0]} color="blue" intensity={2} distance={20} decay={2} />
      <primitive 
        object={dna.scene}
        scale={40}
   />
    </mesh>
 
   )
 }
 

 const DnaCanvas = () => {
    return (
        <Canvas
        shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 75,
        near: 0.1,
        far: 2000,
        position: [-4, 10, 6]
      }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls 
                autoRotate  
                autoRotateSpeed={6.0}
                enablePan={false}
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
                />
                <Dna />
            </Suspense>
                
        </Canvas>
    )
}
 export default DnaCanvas