import {Vector2} from "./Vector2";

export type Transform = {
    position: Vector2;
    translate: (newPosition: Partial<Vector2>) => void
}
