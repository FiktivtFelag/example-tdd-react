import {FileReader} from "./file-reader";
import fs from "fs";
jest.mock("fs");

describe("FileReader", () => {
    const PATH = "my-path";

    describe("example of using default mock", () => {
        it("should load file content, when found", async () => {
            // Arrange
            const sut = new FileReader();

            // Act
            const result = await sut.readFile(PATH);

            // Assert
            expect(result).toBe("hello");
        });
    });

    describe("example of changing mock value", () => {
        it("should load file content when found", async () => {
            // Arrange
            const content_output = "output";
            // @ts-ignore (could not be asked to sort out the dynamic types)
            jest.spyOn(fs, "readFile").mockImplementationOnce((path, options, callback) => {
                callback(null, content_output);
            });
            const sut = new FileReader();

            // Act
            const result = await sut.readFile(PATH);

            // Assert
            expect(result).toBe(content_output)
        });

        it("should fail to load content, when not found", async () => {
            // Arrange
            const error_output = "ERROR";
            // @ts-ignore (could not be asked to sort out the dynamic types)
            jest.spyOn(fs, "readFile").mockImplementationOnce((path, options, callback) => {
                callback(new Error(error_output), null);
            });
            const sut = new FileReader();

            // Act
            // Assert
            await expect(sut.readFile(PATH)).rejects.toThrowError(error_output);
        });
    });
});
