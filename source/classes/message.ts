import MessageModel from "../models/message";

export default class Message {


    public static Create(sender: string, receiver: string, content: string) {
        return MessageModel.create({ sender, receiver, content });
    };

    public static findById(id: string) {
        return MessageModel.find({ id });
    };

    public static findBySender(sender: string) {
        return MessageModel.find({ sender });
    };

    public static findByReceiver(receiver: string) {
        return MessageModel.find({ receiver });
    };

}