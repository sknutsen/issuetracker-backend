import { Router } from "express";
import { isAuth } from "../middleware/isAuth";
import groups from "./groups";
import issues from "./issues";
import users from "./users";

const routes = Router();

routes.get("/", async (req, res) => {
    res.send("Hello");
});

routes.use("/groups", [isAuth], groups);

routes.use("/issues", [isAuth], issues);

routes.use("/users", [isAuth], users);

export default routes;