import { Schema, model } from 'mongoose';
import crypto from 'crypto';

type Message = {
    id: string;
    sender: string;
    content: string;
    receiver: string;
    createAt: Date;
}

const schema = new Schema<Message>({
    id: {
        type: String,
        unique: true,
        default: crypto.randomUUID
    },
    sender: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    receiver: {
        type: String,
        require: true
    },
    createAt: {
        type: Date,
        default: Date.now
    }
});

export default model('Message', schema);
