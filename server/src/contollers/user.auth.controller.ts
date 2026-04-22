import type { Request, Response } from "express";
import { Login, Signup } from "../util/auth.util.js";

export async function UserLoginController(req: Request, res: Response) {
    const userId = req.body.userId;
    const password = req.body.password;

    const result = await Login(userId, password);

    res.status(result.status).json(result);
}


export async function UserSignUpController(req: Request, res: Response) {

    const userEmail = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    const result = await Signup(userEmail, password, name, "USER");

    res.status(result.status).json(result);

}


export async function BussinessLoginController(req: Request, res: Response) {
    const userId = req.body.userId;
    const password = req.body.password;

    const result = await Login(userId, password);

    res.status(result.status).json(result);
}


export async function BussinessSignUpController(req: Request, res: Response) {

    const userEmail = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    const result = await Signup(userEmail, password, name, "BUSSINESS");

    res.status(result.status).json(result);

}
