import { MongoClient } from "mongodb";


class Databases {
    private conn : MongoClient
    private url : string

    constructor () {
        this.url = process.env.URL as string
        this.conn = new MongoClient(this.url)
    }

    public getCollection() : MongoClient {
        return this.conn
    }
}

export default Databases