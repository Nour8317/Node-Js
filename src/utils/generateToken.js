import jwt from "jsonwebtoken";
import { prisma } from "../config/db.js";

const generateToken = async (userId, res) => {
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { id: true, name: true, email: true }
    }); 
    if (!user) {
        throw new Error("User not found");
    }
    const token = jwt.sign(
        {id: user.id},
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
    );
    res.cookie("jwt", token,{
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000
    });
    return token;
}

export {
    generateToken
};