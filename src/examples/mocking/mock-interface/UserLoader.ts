import {IUserLoader} from "./IUserLoader";

export class UserLoader implements  IUserLoader {
    async loadAge(): Promise<number> {
        return 16;
    }

    async loadUsername(): Promise<string> {
        return "Dave";
    }


}
