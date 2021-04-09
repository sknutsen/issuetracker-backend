import { Group } from "../../entities/Group";

export const groupPost = async (group: Group) => {
    return await Group.create(group).save();
};