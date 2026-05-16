import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
});

const connectDB = async () => {
    try {
        await prisma.$connect();
        console.log("DB connected via Prisma");
    } catch (error) {
       console.log(`Database connection error: ${error.message}`);
       process.exit(1); 
    }
};

const disconnectDB = async () => {
    try {
        await prisma.$disconnect();
        console.log("Disconnected from DB");
    } catch (error) {
        console.log(`Error during disconnect: ${error.message}`);
    }
};

export {
    prisma,
    connectDB,
    disconnectDB
};
