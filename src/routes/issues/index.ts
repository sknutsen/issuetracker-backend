import { Router } from "express";
import { issueDelete } from "./delete";
import { issuesGet, issueGet } from "./get";
import { issuePost } from "./post";
import { issuePut } from "./put";

const issues = Router();

issues.param("issue", (req: any, res, next, issue: number) => {
    req.issue = issue;
    next();
});

issues.get("/", async (req, res) => {
    const result = await issuesGet();

    res.status(200);
    res.send(result);
});
issues.get("/:issue", async (req: any, res) => {
    const result = await issueGet(req.issue);

    res.status(200);
    res.send(result);
});
issues.put("/:issue", async (req:any, res) => {
    const result = await issuePut(req.issue, req.body);

    res.status(200);
    res.send(result);
});
issues.post("/", async (req:any, res) => {
    const result = await issuePost(req.body);

    res.status(200);
    res.send(result);
});
issues.delete("/:issue", async (req:any, res) => {
    const result = await issueDelete(req.issue);

    console.log(result);

    if (result.affected === 0) {
        res.status(404);
        res.send();
        return;
    }

    res.status(200);
    res.send(result);
});

export default issues;