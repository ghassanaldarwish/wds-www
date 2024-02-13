"use client";

import { motion } from "framer-motion-3d";
const spaceStationScene = "/3d/space_station.glb";
import { useGLTF, Text3D, Center, RoundedBox } from "@react-three/drei";
import { extend, useLoader } from "@react-three/fiber";
import { TextureLoader, PlaneGeometry } from "three";
import { memo, useMemo } from "react";

import * as THREE from "three";

// 3D Model from: https://sketchfab.com/3d-models/stylized-ww1-plane-c4edeb0e410f46e8a4db320879f0a1db
function SpaceStation(props: any) {
  useMemo(() => extend(THREE), []);
  const { nodes, materials }: any = useGLTF(spaceStationScene);
  const texture = useLoader(TextureLoader, "/logo.png");

  return (
    <motion.group
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 0.1, opacity: 1 }}
      transition={{ duration: 1 }}
      position={[-0.2, -2, 12]}
      rotation={[0, 0, 0]}
      {...props}
      dispose={null}
    >
      <motion.group
        position={[-0.152, 3.743, 8.482]}
        rotation={[-2.152, 0.01, 0.007]}
      >
        <motion.group rotation={[Math.PI / 2, 0, 0]}>
          <Center
            scale={3}
            position={[28, 22, 2.2]}
            rotation={[0.5, 0.11, 0.2]}
          >
            <Text3D
              curveSegments={12}
              bevelSize={0.01}
              bevelThickness={0.02}
              height={0.1}
              lineHeight={0.5}
              letterSpacing={0.025}
              size={0.25}
              font="/Inter_Bold.json"
            >
              Web Drei Scene
              <meshBasicMaterial color="black" />
            </Text3D>
            <RoundedBox
              position={[-0.3, 0.12, 0.09]}
              args={[1.4, 1.4, 0.2]}
              radius={0.2}
              smoothness={4}
              scale={0.35}
              rotation={[0.15, 0, 0]}
            >
              <meshBasicMaterial
                color="white"
                attach="material"
                map={texture}
                opacity={1} // Adjust as needed
                transparent={true}
              />
            </RoundedBox>
          </Center>
          <motion.mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface14371_phong4_0.geometry}
            material={materials.phong4}
          />
          <motion.mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface14371_blinn3_0.geometry}
            material={materials.blinn3}
          />
          <motion.mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface14371_TestSpaceman_0.geometry}
            material={materials.TestSpaceman}
          />
          <motion.mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface14371_FinalTexture_0.geometry}
            material={materials.FinalTexture}
          />
          <motion.mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface14371_lambert1_0.geometry}
            material={materials.lambert1}
          />
          <motion.mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface14371_Scaffold1_0.geometry}
            material={materials.Scaffold1}
          />
        </motion.group>
      </motion.group>
    </motion.group>
  );
}
useGLTF.preload(spaceStationScene);
export default SpaceStation;
