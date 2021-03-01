import {Vector2} from "../types";
import {CSSProperties} from "react";

export const CalculateCssTransform = (position:Vector2): Record<string, unknown> => {
    return {
        position: "absolute",
        transform: `translate(${position.x}px, ${position.y}px)`
    };
}
