import { Request, Response } from "express";
import regex from "../utils/regex";
import User from "../classes/user";


export default async function (req: Request, res: Response) {

    const { username, email, password } = req.body;

    if (!username || !email || !password)
        return res.status(400).send('Missing Fields');
    if (!regex.email.test(email))
        return res.status(400).send('Invalid email');

    if (!regex.password.test(password))
        return res.status(400).send('Invalid password');

    if (await User.findByEmail(email))
        return res.status(400).send('Email already in use');

    const user = await User.Create(username, password, email);

    if (!user) return res.status(500).send('internal server error');
    return res.status(200).send();

};