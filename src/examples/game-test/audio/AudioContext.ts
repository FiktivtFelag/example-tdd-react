import React from "react";
import {AudioPlay} from "./types/AudioPlay";
export const AudioContext = React.createContext<AudioPlay>({
    play: name => {}
});
