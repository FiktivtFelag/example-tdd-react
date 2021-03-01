import {IUserLoader} from "./IUserLoader";


export class UserLoaderBuilder {
    static create() {
        return new UserLoaderBuilder();
    }

    private _name:string;
    private _age: number;

    constructor() {
        this._name = "Bob";
        this._age = 16;
    }

    withName(name:string) {
        this._name = name;
        return this;
    }

    withAge(age:number) {
        this._age = age;
        return this;
    }

    build() {
        const Mock = jest.fn<IUserLoader, any[]>(() => ({
            loadAge: async () => this._age,
            loadUsername: async () => this._name
        }));

        return new Mock();
    }

}
