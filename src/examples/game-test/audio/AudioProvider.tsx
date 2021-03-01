import React, {PropsWithChildren} from "react";
import {AudioContext} from "./AudioContext";

export const AudioProvider = (props: PropsWithChildren<{}>) => {

    const play = () => {
        // play sound
        // ...
    }

    return <AudioContext.Provider value={{play}}>
        {props.children}
    </AudioContext.Provider>
}
