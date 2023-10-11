import { Schema, model } from 'mongoose';
import crypto from 'crypto';

type Channel = {
    id: string;
    name: string;
    messages: string[];
    type: 'text' | 'voice';
    connectedUsers: string[];
};

const schema = new Schema<Channel>({
    name: {
        type: String,
        require: true
    },
    id: {
        type: String,
        unique: true,
        require: true
    },
    type: {
        type: String,
        require: true,
        enum: ['text', 'voice'],
    },
    messages: {
        type: [String],
        default: []
    },
    connectedUsers: {
        default: [],
        type: [String],
    }
});

export default model('Channel', schema);