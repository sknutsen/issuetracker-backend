import { Router } from "express";
import { groupDelete } from "./delete";
import { groupsGet, groupGet } from "./get";
import { groupPost } from "./post";
import { groupPut } from "./put";

const groups = Router();

groups.param("group", (req: any, res, next, group: number) => {
    req.group = group;
    next();
});

groups.get("/", async (req, res) => {
    const result = await groupsGet();

    res.status(200);
    res.send(result);
});
groups.get("/:group", async (req: any, res) => {
    const result = await groupGet(req.group);

    res.status(200);
    res.send(result);
});
groups.put("/:group", async (req: any, res) => {
    const result = await groupPut(req.group, req.body);

    res.status(200);
    res.send(result);
});
groups.post("/", async (req, res) => {
    const result = await groupPost(req.body);

    res.status(200);
    res.send(result);
});
groups.delete("/:group", async (req: any, res) => {
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

export default groups;