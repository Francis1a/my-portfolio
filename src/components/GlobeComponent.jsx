import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Globe from "three-globe";
import * as THREE from "three";

const GlobeComponent = () => {
  const globeRef = useRef();

  useEffect(() => {
    const globe = new Globe()
      .globeImageUrl("//unpkg.com/three-globe/example/img/earth-dark.jpg")
      .bumpImageUrl("//unpkg.com/three-globe/example/img/earth-topology.png");

    const group = new THREE.Group();
    group.add(globe);

    globeRef.current = group;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      globe.rotation.y += 0.001;
    };
    animate();

    return () => {
      globeRef.current.remove(globe);
    };
  }, []);

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 1]} intensity={1} />
      {globeRef.current && <primitive object={globeRef.current} />}
      <OrbitControls />
    </Canvas>
  );
};

export default GlobeComponent;
