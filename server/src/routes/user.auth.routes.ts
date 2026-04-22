import { Router } from "express";
import { UserLoginController, UserSignUpController,BussinessLoginController,BussinessSignUpController } from "../contollers/user.auth.controller.js";

const router = Router();

router.post("/user/login", UserLoginController);
router.post("/user/signup", UserSignUpController);
router.post("/bussiness/login", BussinessLoginController);
router.post("/bussiness/signup", BussinessSignUpController);
export default router;
