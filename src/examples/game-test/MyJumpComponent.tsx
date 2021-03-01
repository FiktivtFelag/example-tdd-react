import React, {useEffect} from "react";
import {useTransform} from "./transform";
import {useAudio} from "./audio";

export type MyJumpComponentProps = {
    jumpHeight: number
}

export const MyJumpComponent = (props: MyJumpComponentProps) => {
    const transform = useTransform();
    const audio = useAudio();

    useEffect(() => {
        /* Registering specific event types, should be handled in it's own system */
        document.addEventListener('keyup', onJumped);
        return () => document.removeEventListener('keyup', onJumped);
    }, []);

    const onJumped = (event: KeyboardEvent) => {
        /* Checking specific codes should be handled in it's own system */
        if (event.code === 'Space') {
            transform.translate({y: props.jumpHeight});
            audio.play("jump");
        }
    };

    return <p data-testid={"jump"}>Hello</p>;
}
