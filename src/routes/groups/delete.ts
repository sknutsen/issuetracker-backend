import { Group } from "../../entities/Group";

export const groupDelete = async (id: number) => {
    return await Group.delete({Id: id});
};