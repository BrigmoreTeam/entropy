import GuildModel from '../models/guild';

export default class Guild {

    public static Create(name: string, owner: string) {
        return GuildModel.create({ name, owner });
    };

    public static findById(id: string) {
        return GuildModel.find({ id });
    };

}