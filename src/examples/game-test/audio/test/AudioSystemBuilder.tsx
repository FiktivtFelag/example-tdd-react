import React, {PropsWithChildren} from "react";
import {AudioContext, AudioPlay} from "..";

export class AudioSystemBuilder {
    static create() {
        return new AudioSystemBuilder();
    }

    private values: AudioPlay;

    constructor() {
        this.values = {
            play: jest.fn<string, any[]>()
        }
    }

    get play() {
        return this.values.play;
    }

    build() {
        return (props: PropsWithChildren<{}>) =>
            <AudioContext.Provider value={this.values}>
                {props.children}
            </AudioContext.Provider>
    }
}
