import React from "react";
import {render, fireEvent, } from "@testing-library/react";
import {MyJumpComponent} from "./MyJumpComponent";
import {TransformProvider} from "./transform";
import {CalculateCssTransform} from "./transform/utils";
import {AudioSystemBuilder} from "./audio/test";

describe("MyJumpComponent", () => {
    const JUMP_HEIGHT = 10;

    let audioMock: AudioSystemBuilder;

    beforeEach(() => {
        audioMock = AudioSystemBuilder.create();
    });

    it("should move up the y axis, when jumping", () => {
        // Arrange
        const dom = render(
            <TransformProvider>
                <MyJumpComponent jumpHeight={JUMP_HEIGHT}/>
            </TransformProvider>
        );
        const jumpComp = dom.getByTestId("jump");
        const sut = dom.queryByTestId("transform-placement");

        // Act
        fireEvent.keyUp(jumpComp, {key: 32, code: "Space"});

        // Assert
        expect(sut).toHaveStyle(CalculateCssTransform({x: 0, y: JUMP_HEIGHT}));
    });

    it("should play a jump sound, when jumping", () => {
        // Arrange
        const Sut = audioMock.build();

        const dom = render(
            <Sut>
                <MyJumpComponent jumpHeight={JUMP_HEIGHT}/>
            </Sut>
        );

        const jumpComp = dom.getByTestId("jump");

        // Act
        /* key/code, should be processed from a different system */
        fireEvent.keyUp(jumpComp, {key: 32, code: "Space"});

        // Assert
        expect(audioMock.play).toHaveBeenCalledTimes(1);
    });
})
