import express, {Express} from "express";
import { Request } from "express";
import { Response } from "express";

class Application {
    private app : Express;
    private port : number;

    constructor () {
        this.app = express();
        this.port = 3000;
    }

    private useRoute() : void{
        this.app.get('/', (req : Request, res: Response) =>{
            res.json({
                "message" : "hello world"
            })
        })
    }

    private listen() : void{
        console.log(`connected successfully on port ${this.port}`)
        this.app.listen(this.port)
    }

    public run() : void {
        this.useRoute()
        this.listen()
    }
}

export default Application;