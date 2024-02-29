/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from "@react-three/drei";
import { GLTFResult } from "./types";

export function Rail(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/props.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Esportsm_RailGuard_Ext_13_Dup_42_lambert2_0001.geometry}
        material={materials.lambert2}
        material-roughness={0.2}
      />
    </group>
  );
}