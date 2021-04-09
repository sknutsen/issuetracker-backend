import { User } from "../../entities/User";

export const usersGet = async () => {
    return await User.find();
};

export const userGet = async (id: number) => {
    return await User.findOne({Id: id});
};