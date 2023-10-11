import { Schema, model } from "mongoose";
import crypto from 'crypto';

type Guild = {
    id: string;
    name: string;
    owner: string;
    roles: string[];
    members: string[];
    channels: string[];
};

const schema = new Schema<Guild>({

    id: {
        type: String,
        unique: true,
        default: crypto.randomUUID
    },
    name: {
        type: String,
        require: true
    },
    owner: {
        type: String,
        require: true,
    },
    roles: {
        type: [String],
        require: true,
        default: [],
    },
    members: {
        type: [String],
        require: true,
        default: [],
    },
    channels: {
        type: [String],
        require: true,
        default: [],
    },

});

export default model('Guild', schema);
