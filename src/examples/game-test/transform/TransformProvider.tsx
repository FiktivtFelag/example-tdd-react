import React, {PropsWithChildren, useCallback, useState} from "react";
import {TransformContext} from "./TransformContext";
import {Vector2} from "./types";
import {CalculateCssTransform} from "./utils";


export const TransformProvider = (props: PropsWithChildren<{}>) => {
    const [position, setPosition] = useState<Vector2>({x: 0, y: 0});

    const buildStyle = useCallback(() => {
      return CalculateCssTransform(position);
    }, [position]);

    const translate = (newPos: Partial<Vector2>) => {
        const x = newPos?.x || 0;
        const y = newPos?.y || 0;

        let deltaPos: Vector2 = {
            x: position.x + x,
            y: position.y + y
        };
        setPosition(deltaPos);
    }

    return <TransformContext.Provider value={{position, translate}}>
        <div data-testid={"transform-placement"} style={buildStyle()}>
            {props.children}
        </div>
    </TransformContext.Provider>
}
