import { Router } from "express";
import signUp from './controller/signup'
import signIn from "./controller/signIn";
export default
    Router()
        .post('/user', signUp)
        .get('/user', signIn);