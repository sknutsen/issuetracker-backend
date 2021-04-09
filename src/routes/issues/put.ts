import { Issue } from "../../entities/Issue";
import { issueGet } from "./get";

export const issuePut = async (id: number, issue: Issue) => {
    const exists: boolean = await issueGet(id) != undefined;

    if (!exists) {
        return undefined;
    }

    return await Issue.update({Id: id}, issue);
};