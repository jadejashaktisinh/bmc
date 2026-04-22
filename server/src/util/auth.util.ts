import type { Role } from "../@types/auth.types.js";
import { prisma } from "../provider/database/db.js";
import bcrypt from 'bcrypt'

export async function Login(userId: number, password: string) {
    const user = await prisma.user.findFirst({
        where: {
            id: userId
        }
    })

    if (user) {
        const match = await bcrypt.compare(password, user.password);
        if (match) {
            return {
                success: true,
                message: "login up successfull",
                status: 200
            };
        }

        return {
            success: false,
            message: "Passowrd is wrong",
            status: 400
        };
    }

    return {
        success: false,
        message: "User not found login or wrong username",
        status: 400
    };
}


export async function Signup(userEmail: string, password: string, name: string, role: Role) {
    const user = await prisma.user.findFirst({
        where: {
            email: userEmail
        }
    })

    if (user) {
        return {
            success: false,
            message: "user already exists please login or try different email",
            status: 400
        }
    }


    const encyptedPassword = await bcrypt.hash(password, 10);

    const createUser = await prisma.user.create({
        data: {
            email: userEmail,
            password: encyptedPassword,
            role: role,
            name: name
        }
    });

    if (createUser) {
        return {
            success: true,
            message: "Login Successfull",
            status: 200
        }
    }

    return {
        success: false,
        message: "Something went wrong",
        status: 500
    }
}