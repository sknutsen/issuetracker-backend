import { Group } from "../../entities/Group";
import { groupGet } from "./get";

export const groupPut = async (id: number, group: Group) => {
    const exists: boolean = await groupGet(id) != undefined;

    if (!exists) {
        return undefined;
    }

    return await Group.update({Id: id}, group);
};