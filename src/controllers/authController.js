import bcrypt from "bcryptjs";
import { prisma } from "../config/db.js";
import { generateToken } from "../utils/generateToken.js";

const register = async (req, res) =>{
    const{name, email, password} = req.body;
    if(!name || !email || !password){
        return res.status(400).json({message: "Please provide all required fields"});
    }
    const existingUser = await prisma.user.findUnique({
        where: {email}
    });
    if(existingUser){
        return res.status(400).json({message: "User already exists"});
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await prisma.user.create({
        data: {
            name: name,
            email: email,
            password: hashedPassword
        }
    });
    const token = await generateToken(user.id);
    res.status(201).json({message: "User registered successfully", user: {id: user.id, name: user.name, email: user.email}, token}); 
};

const login = async (req, res) =>{
    const {email, password} = req.body;
    if(!email || !password){
        return res.status(400).json({message: "Please provide email and password"});
    }
    const user = await prisma.user.findUnique({
        where: {email}
    });
    if(!user){
        return res.status(400).json({message: "Invalid credentials"});
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        return res.status(400).json({message: "Invalid credentials"});
    }
    const token = await generateToken(user.id);
    res.status(200).json({message: "Login successful", user: {id: user.id, name: user.name, email: user.email}, token});
}
export {
    register,
    login
};