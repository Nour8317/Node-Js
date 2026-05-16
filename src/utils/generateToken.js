import jwt from "jsonwebtoken";
import { prisma } from "../config/db.js";

const generateToken = async (userId) => {
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
    return token;
}

export {
    generateToken
};