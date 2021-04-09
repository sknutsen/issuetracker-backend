import { User } from "../../entities/User";

export const userDelete = async (id: number) => {
    return await User.delete({Id: id});
}