import { Router } from "express";
import { userDelete } from "./delete";
import { usersGet, userGet } from "./get";
import { userPost } from "./post";
import { userPut } from "./put";

const users = Router();

users.param("user", (req: any, res, next, user) => {
    req.user = user;
    next();
});

users.get("/", async (req, res) => {
    const result = await usersGet();

    res.status(200);
    res.send(result);
});
users.get("/:user", async (req: any, res) => {
    const result = await userGet(req.user);

    res.status(200);
    res.send(result);
});
users.put("/:user", async (req: any, res) => {
    const result = await userPut(req.user, req.body);

    res.status(200);
    res.send(result);
});
users.post("/", async (req, res) => {
    const result = await userPost(req.body);

    res.status(200);
    res.send(result);
});
users.delete("/:user", async (req: any, res) => {
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

export default users;