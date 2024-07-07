import React from 'react'
import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from "./Loader"

const Spaceships = ({ isMobile }) => {
  const Spaceship = useGLTF("./bbb_andromeda/scene.gltf")
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={10} />
      <spotLight position={[-50, 50, 20]} angle={0.12} penumbra={1} intensity={5} castShadow shadow-mapSize={1024} />
      <spotLight position={[50, 50, -40]} angle={0.12} penumbra={1} intensity={5} castShadow shadow-mapSize={1024} />
      <primitive object={Spaceship.scene} scale={isMobile ? 0.1 : 0.2} position={isMobile ? [0, -1.25, 0] : [0, -1, 0]} rotation={[-0.0, -0.75, -0.0]} />
    </mesh>
  )
}

const SpaceshipsCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])

  return (
    <Canvas frameloop='demand' shadows camera={{ position: [25, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={0} />
        <Spaceships isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
export default SpaceshipsCanvas;