import { Express } from 'express';
import { register } from '../controllers/user';


export default function userRoute(r : Express) {
    r.get("/api/", register)
}