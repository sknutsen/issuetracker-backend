import { Router } from "express";
import groups from "./groups";
import issues from "./issues";
import users from "./users";

const routes = Router();

routes.get("/", async (req, res) => {
    res.send("Hello");
});

routes.use("/groups", groups);

routes.use("/issues", issues);

routes.use("/users", users);

export default routes;