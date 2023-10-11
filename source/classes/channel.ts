import ChannelModel from '../models/channel';

export default class Channel {

    public static Create(name: string, type: 'text' | 'voice') {
        return ChannelModel.create({ name, type });
    };

    public static findById(id: string) {
        return ChannelModel.find({ id });
    };
        
};