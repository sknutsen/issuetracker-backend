import { Issue } from "../../entities/Issue";

export const issuesGet = async () => {
    return await Issue.find();
};

export const issueGet = async (id: number) => {
    return await Issue.findOne({Id: id});
};