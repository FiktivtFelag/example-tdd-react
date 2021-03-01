import React from "react";
import {Transform} from "./types";

export const TransformContext = React.createContext<Transform>({
    position: {
        x: 0, y: 0
    },
    translate: _newPosition => {}
});
