import {IUserLoader} from "./IUserLoader";
import {UserLoader} from "./UserLoader";
import {UserLoaderBuilder} from "./UserLoaderBuilder";

describe("UserLoader", () => {

    describe("example of mocking an interface", () => {
        it("should return a username and password", async () => {
            // Arrange
            const username_output = "Dave";
            const age_output = 18;
            const MockUserLoader = jest.fn<IUserLoader, any[]>().mockImplementation(() => ({
                loadUsername: async () => username_output,
                loadAge: async () => age_output
            }));
            const sut = new MockUserLoader();

            // Act
            const name = await sut.loadUsername();
            const age = await sut.loadAge();

            // Assert
            expect(name).toBe(username_output);
            expect(age).toBe(age_output);
        });
    });

    describe("example of mocking part of an object", () => {
        it("should return a username and password", async () => {
            // Arrange
            const username_output = "John";
            const sut = new UserLoader();
            jest.spyOn(sut, "loadUsername").mockResolvedValueOnce(username_output);

            // Act
            const name = await sut.loadUsername();
            const age = await sut.loadAge();

            // Assert
            expect(name).toBe(username_output);
            expect(age).toBe(16);
        });
    });

    describe("example of a mocking with class builder", () => {
        it("should return a username and password", async () => {
            // Arrange
            const username_output = "John";
            const age_output = 20;
            const sut = UserLoaderBuilder.create().withName(username_output).withAge(age_output).build();

            // Act
            const name = await sut.loadUsername();
            const age = await sut.loadAge();

            // Assert
            expect(name).toBe(username_output);
            expect(age).toBe(age_output);
        });
    });


});
