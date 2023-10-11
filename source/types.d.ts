export type tUser = {
    id: string;
    email: string;
    avatar: string;
    createdAt: Date;
    guilds: string[];
    username: string;
    friends: string[];
    saltedHash: string;
}