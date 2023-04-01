import express, {Express} from "express";
import cors, { CorsOptions } from "cors";
import userRoute from "./component/routes/user";
class Application {
    private app : Express;
    private port : number;
    private cors : CorsOptions

    constructor () {
        this.app = express();
        this.port = 3001 || process.env.PORT;
        this.cors = {
            credentials: true,
            origin: true,
        }
    }

    private useRoute() : void{
        userRoute(this.app)
    }

    private listen() : void{
        console.log(`connected successfully on port ${this.port}`)
        this.app.listen(this.port)
    }

    private useMiddleware() : void {
        this.app.use(cors(this.cors))
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        // this.app.use(deserializeUser)
    }

    public run() : void {
        this.useMiddleware()
        this.useRoute()
        this.listen()
    }
}

export default Application;