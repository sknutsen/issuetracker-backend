import { Router } from "express";
import { groupDelete, groupGet, groupPost, groupPut, groupsGet } from "./groups";
import { issueDelete, issueGet, issuePost, issuePut, issuesGet } from "./issues";
import { userDelete, userGet, userPost, userPut, usersGet } from "./users";

const routes = Router();

routes.get("/", async (req, res) => {
    res.send("Hello");
});

//////////////////////////////////////////////////
// Issues ////////////////////////////////////////
//////////////////////////////////////////////////

routes.param("issue", (req: any, res, next, issue: number) => {
    console.log(`issue id is ${issue}`);
    req.issue = issue;
    next();
});

routes.get("/issues", async (req, res) => {
    const result = await issuesGet();

    res.status(200);
    res.send(result);
});
routes.get("/issues/:issue", async (req: any, res) => {
    console.log(`req.issue is ${req.issue}`);
    const result = await issueGet(req.issue);

    res.status(200);
    res.send(result);
});
routes.put("/issues/:issue", async (req:any, res) => {
    const result = await issuePut(req.issue, req.body);

    res.status(200);
    res.send(result);
});
routes.post("/issues", async (req:any, res) => {
    const result = await issuePost(req.body);

    res.status(200);
    res.send(result);
});
routes.delete("/issues/:issue", async (req:any, res) => {
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

//////////////////////////////////////////////////
// Groups ////////////////////////////////////////
//////////////////////////////////////////////////

routes.param("group", (req: any, res, next, group: number) => {
    req.group = group;
    next();
});

routes.get("/groups", async (req, res) => {
    const result = await groupsGet();

    res.status(200);
    res.send(result);
});
routes.get("/groups/:group", async (req: any, res) => {
    const result = await groupGet(req.group);

    res.status(200);
    res.send(result);
});
routes.put("/groups/:group", async (req: any, res) => {
    const result = await groupPut(req.group, req.body);

    res.status(200);
    res.send(result);
});
routes.post("/groups", async (req, res) => {
    const result = await groupPost(req.body);

    res.status(200);
    res.send(result);
});
routes.delete("/groups/:group", async (req: any, res) => {
    const result = await groupDelete(req.group);

    console.log(result);

    if (result.affected === 0) {
        res.status(404);
        res.send();
        return;
    }

    res.status(200);
    res.send(result);
});

//////////////////////////////////////////////////
// Users /////////////////////////////////////////
//////////////////////////////////////////////////

routes.param("user", (req: any, res, next, user) => {
    req.user = user;
    next();
});

routes.get("/users", async (req, res) => {
    const result = await usersGet();

    res.status(200);
    res.send(result);
});
routes.get("/users/:user", async (req: any, res) => {
    const result = await userGet(req.user);

    res.status(200);
    res.send(result);
});
routes.put("/users/:user", async (req: any, res) => {
    const result = await userPut(req.user, req.body);

    res.status(200);
    res.send(result);
});
routes.post("/users", async (req, res) => {
    const result = await userPost(req.body);

    res.status(200);
    res.send(result);
});
routes.delete("/users/:user", async (req: any, res) => {
    const result = await userDelete(req.user);

    console.log(result);

    if (result.affected === 0) {
        res.status(404);
        res.send();
        return;
    }

    res.status(200);
    res.send(result);
});

export default routes;