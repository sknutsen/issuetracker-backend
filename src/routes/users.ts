import { User } from "../entities/User";

export const usersGet = async () => {
    return await User.find();
};

export const userGet = async (id: number) => {
    return await User.findOne({Id: id});
};

export const userPut = async (id: number, group: User) => {
    const exists: boolean = await userGet(id) != undefined;

    if (!exists) {
        return undefined;
    }

    return await User.update({Id: id}, group);
}

export const userPost = async (group: User) => {
    return await User.create(group).save();
}

export const userDelete = async (id: number) => {
    return await User.delete({Id: id});
}