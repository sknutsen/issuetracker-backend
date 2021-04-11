import { Issue } from "../../entities/Issue";

export const issuesGet = async () => {
    // const res =  await Issue.find();
    // return res;
    return await Issue.find();
};

export const issueGet = async (id: number) => {
    return await Issue.findOne({Id: id});
};