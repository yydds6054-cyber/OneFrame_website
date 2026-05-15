"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Environment,
  MeshDistortMaterial,
  OrbitControls,
} from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

/**
 * A garden of floating pastel 3D shapes. Each shape drifts and rotates
 * gently. The group tilts subtly with the cursor for parallax depth.
 */
function ParallaxGroup({ children }: { children: React.ReactNode }) {
  const ref = useRef<THREE.Group>(null);
  const target = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    if (!ref.current) return;
    // Cap parallax range so shapes never swing out of frame.
    target.current.x = state.pointer.x * 0.22;
    target.current.y = state.pointer.y * 0.14;
    ref.current.rotation.y += (target.current.x - ref.current.rotation.y) * 0.04;
    ref.current.rotation.x += (-target.current.y - ref.current.rotation.x) * 0.04;
  });

  return <group ref={ref}>{children}</group>;
}

type Shape = {
  position: [number, number, number];
  scale: number;
  color: string;
  geo: "sphere" | "torus" | "icosahedron" | "capsule" | "cone" | "blob";
};

// Composition is intentionally clustered toward center so the scene
// reads as one balanced piece in the new full-width showcase section.
const shapes: Shape[] = [
  { position: [-2.0, 1.0, 0], scale: 0.85, color: "#d4c5ff", geo: "blob" },
  { position: [2.1, 0.7, -0.3], scale: 0.55, color: "#ffc8e0", geo: "torus" },
  { position: [1.5, -1.5, 0.4], scale: 0.7, color: "#b8f0d8", geo: "icosahedron" },
  { position: [-1.6, -1.1, 0.6], scale: 0.5, color: "#ffd4c2", geo: "capsule" },
  { position: [1.8, 1.7, 0.2], scale: 0.42, color: "#fff0a8", geo: "cone" },
  { position: [-0.3, 0.0, 1.1], scale: 0.4, color: "#b8e3ff", geo: "sphere" },
];

function ShapeMesh({ shape, index }: { shape: Shape; index: number }) {
  const standardMat = (
    <meshStandardMaterial
      color={shape.color}
      metalness={0.08}
      roughness={0.32}
    />
  );

  if (shape.geo === "blob") {
    return (
      <Float
        speed={1.2 + (index % 3) * 0.2}
        rotationIntensity={0.3}
        floatIntensity={0.55}
      >
        <mesh position={shape.position} scale={shape.scale}>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshDistortMaterial
            color={shape.color}
            speed={1.6}
            distort={0.32}
            metalness={0.05}
            roughness={0.3}
          />
        </mesh>
      </Float>
    );
  }

  let geo: React.ReactNode;
  switch (shape.geo) {
    case "sphere":
      geo = <sphereGeometry args={[1, 48, 48]} />;
      break;
    case "torus":
      geo = <torusGeometry args={[1, 0.35, 24, 80]} />;
      break;
    case "icosahedron":
      geo = <icosahedronGeometry args={[1, 0]} />;
      break;
    case "capsule":
      geo = <capsuleGeometry args={[0.6, 1, 12, 24]} />;
      break;
    case "cone":
      geo = <coneGeometry args={[0.8, 1.6, 32]} />;
      break;
  }

  return (
    <Float
      speed={1.2 + (index % 3) * 0.25}
      rotationIntensity={0.4}
      floatIntensity={0.5}
    >
      <mesh position={shape.position} scale={shape.scale}>
        {geo}
        {standardMat}
      </mesh>
    </Float>
  );
}

export default function BloomScene() {
  const items = useMemo(() => shapes, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 8.5], fov: 42 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      {/* Soft three-point lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 5]} intensity={1.2} color="#ffffff" />
      <directionalLight position={[-3, -2, 4]} intensity={0.5} color="#d4c5ff" />
      <pointLight position={[0, 0, 4]} intensity={0.4} color="#ffd4c2" />

      <Environment preset="dawn" />

      <ParallaxGroup>
        <group scale={0.92}>
          {items.map((shape, i) => (
            <ShapeMesh key={i} shape={shape} index={i} />
          ))}
        </group>
      </ParallaxGroup>

      {/* Click + drag to rotate the entire scene. Zoom + pan disabled
          so the user can scroll the page normally. */}
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableDamping
        dampingFactor={0.08}
        rotateSpeed={0.6}
      />
    </Canvas>
  );
}
