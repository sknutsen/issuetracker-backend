import { Issue } from "../../entities/Issue";

export const issuePost = async (issue: Issue) => {
    return await Issue.create(issue).save();
};