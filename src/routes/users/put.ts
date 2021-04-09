import { User } from "../../entities/User";
import { userGet } from "./get";

export const userPut = async (id: number, group: User) => {
    const exists: boolean = await userGet(id) != undefined;

    if (!exists) {
        return undefined;
    }

    return await User.update({Id: id}, group);
}