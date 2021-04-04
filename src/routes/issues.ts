import { Issue } from "../entities/Issue";

export const issuesGet = async () => {
    return await Issue.find();
};

export const issueGet = async (id: number) => {
    return await Issue.findOne({Id: id});
};

export const issuePut = async (id: number, issue: Issue) => {
    const exists: boolean = await issueGet(id) != undefined;

    if (!exists) {
        return undefined;
    }

    return await Issue.update({Id: id}, issue);
}

export const issuePost = async (issue: Issue) => {
    return await Issue.create(issue).save();
}

export const issueDelete = async (id: number) => {
    return await Issue.delete({Id: id});
}