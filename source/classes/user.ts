import UserModel from '../models/user';
import { tUser } from '../types';
import JWT from 'jsonwebtoken';
import crypto from 'crypto';

export default class User {

    public static Create(username: string, password: string, email: string) {

        const salt = crypto.randomBytes(16).toString('hex');
        const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
        const saltedHash = `${salt}:${hash}`;

        return UserModel.create({ username, email, saltedHash });

    };

    public static findByUsername(username: string) {
        return UserModel.find({ username: new RegExp(username, 'i') });
    };

    public static findByEmail(email: string) {
        return UserModel.findOne({ email })
    };


    public static findById(id: string) {
        return UserModel.findOne({ id });
    };


};