import { Schema, model } from "mongoose";
import crypto from 'crypto';

type Role = {
    id: string;
    name: string;
    color: string;
    members: string[];
    permissions: string[];
}

const shcema = new Schema<Role>({
    id: {
        type: String,
        unique: true,
        default: crypto.randomUUID
    },
    name: {
        type: String,
        require: true
    },
    color: {
        type: String,
        require: true,
        default: 'default',
    },
    members: {
        type: [String],
        require: true,
        default: [],
    },
    permissions: {
        type: [String],
        require: true,
        default: [],
    },

})