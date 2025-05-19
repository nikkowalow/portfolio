import { MeshLineMaterial, MeshLineGeometry } from "meshline";
import { MaterialNode, Object3DNode } from "@react-three/fiber";

declare module "@react-three/fiber" {
  interface ThreeElements {
    meshLineMaterial: MaterialNode<MeshLineMaterial, typeof MeshLineMaterial>;
    meshLineGeometry: Object3DNode<MeshLineGeometry, typeof MeshLineGeometry>;
  }
}
