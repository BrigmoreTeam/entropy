import { Request, Response } from "express";
import regex from '../utils/regex';
import User from "../classes/user";
import { tUser } from '../types';
import JWT from 'jsonwebtoken';
import crypto from 'crypto';

export default async function (req: Request, res: Response) {

    const { email, password } = req.body;

    if (!email || !password) return res.status(400).send("Missing email or password");

    if (!regex.email.test(email)) return res.status(400).send("Invalid email");

    const user = await User.findByEmail(email) as unknown as tUser;

    if (!user) return res.status(400).send("User not found");

    const [salt, hash] = user.saltedHash.split(':');

    const newHash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');

    if (newHash !== hash) return res.status(400).send("Invalid password");

    const nUser = {
        id: user.id,
        email: user.email,
        guilds: user.guilds,
        avatar: user.avatar,
        friends: user.friends,
        username: user.username,
        createdAt: user.createdAt,
    };

    const token = JWT.sign(nUser, process.env.JWT_SECRET as string);

    return res.status(200).send({ token, user: nUser });

};