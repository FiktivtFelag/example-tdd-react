import fs from "fs";

export class FileReader {
    readFile(path:string): Promise<string> {

        console.log(fs);

        return new Promise<string>((resolve, reject) => {
           fs.readFile(path, "utf8", (error, data) => {
               if(error) {
                   reject(error);
               }

               resolve(data)
           })
        });

    }

}
