import React from "react";
import {AudioContext} from "./AudioContext";

export const useAudio = () => {
    return React.useContext(AudioContext);
}
