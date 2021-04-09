import { Issue } from "../../entities/Issue";

export const issueDelete = async (id: number) => {
    return await Issue.delete({Id: id});
};