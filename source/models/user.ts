import { Schema, model } from 'mongoose';
import { tUser } from '../types';
import crypto from 'crypto';

const schema = new Schema<tUser>({
    id: {
        type: String,
        unique: true,
        default: crypto.randomUUID
    },
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true,
    },
    saltedHash: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    avatar: {
        type: String,
        default: 'default'
    },
    guilds: {
        type: [String],
        default: []
    },
    friends: {
        type: [String],
        default: []
    },

});

export default model('User', schema);