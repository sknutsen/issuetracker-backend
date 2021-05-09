import "reflect-metadata";
import { NextFunction, Request, Response } from "express";
import { authUrl } from "../constants";
import fetch from "node-fetch";

export const isAuth = async (req: Request, res: Response, next: NextFunction) => {
    const auth = req.headers['authorization'];
    if (!auth) {
        throw new Error("Not authenticated");
    }

    const response = await fetch(`${authUrl}/me`, {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json; charset=UTF-8', 
            'authorization': auth
        }
    });
    
    switch (response.status) {
        case 200:
            console.log("Login successful");
            const data = await response.json();
            res.locals.name = data.name;
            console.log(data.name);
            break;
        default:
            console.log(`Server responded with code ${response.status}`);
            res.status(response.status);
            return res.send();
    };

    return next();
};