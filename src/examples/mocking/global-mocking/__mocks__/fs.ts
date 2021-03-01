import fs from "fs";

const mock = jest.fn(() => ({
    readFile: (path: number | fs.PathLike, options: string | { encoding: string, flag?: string | undefined }, callback: (err: (NodeJS.ErrnoException | null), data: string) => void) => {
        callback(null,"hello");
    }
}));

export default mock();

