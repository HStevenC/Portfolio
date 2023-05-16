import React from 'react'
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Wifi_signs = () => {
  // import earth scene
  const signs = useGLTF('./public/signs/scene.gltf');

  //passed custom geometry and how its rendered
  return (
    <primitive
      object={signs.scene}
      scale={1.5}
      position-y={0}
      position-x={3}
      rotation-y={0}
    />
  );
};


const Wifi_signsCanvas = () => {
  return(
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{preserveDrawingBuffer : true}}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Wifi_signs/>
        <Preload all />
      </Suspense>
    </Canvas>
  );
};
export default Wifi_signsCanvas;