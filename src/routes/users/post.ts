import { User } from "../../entities/User";

export const userPost = async (group: User) => {
    return await User.create(group).save();
}