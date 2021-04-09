import { Group } from "../../entities/Group";

export const groupsGet = async () => {
    return await Group.find();
};

export const groupGet = async (id: number) => {
    return await Group.findOne({Id: id});
};