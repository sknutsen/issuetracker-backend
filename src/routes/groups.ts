import { Group } from "../entities/Group";

export const groupsGet = async () => {
    return await Group.find();
};

export const groupGet = async (id: number) => {
    return await Group.findOne({Id: id});
};

export const groupPut = async (id: number, group: Group) => {
    const exists: boolean = await groupGet(id) != undefined;

    if (!exists) {
        return undefined;
    }

    return await Group.update({Id: id}, group);
}

export const groupPost = async (group: Group) => {
    return await Group.create(group).save();
}

export const groupDelete = async (id: number) => {
    return await Group.delete({Id: id});
}