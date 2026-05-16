import express from "express"
import { config } from "dotenv"
import { connectDB } from "./config/db.js";
import { disconnectDB } from "./config/db.js";
import swaggerui from "swagger-ui-express";
import fs from "fs";

import authRoutes from "./routers/authRoutes.js"
import movieRoutes from "./routers/movieRoutes.js"
import watchListRoutes from "./routers/watchListRoutes.js";

const app = express();

app.use(express.json());
connectDB();

const swaggerDocument = JSON.parse(fs.readFileSync("./swagger-output.json", "utf-8"));
app.use("/api-docs", swaggerui.serve, swaggerui.setup(swaggerDocument));
app.use("/movies", movieRoutes);
app.use("/auth", authRoutes);
app.use("/watchlist", watchListRoutes);

const PORT = 5001;
const server = app.listen(PORT, () =>{
    console.log(`The Server is Running on port ${PORT}`);
});

process.on("SIGINT", async () => {
    console.log("Shutting down server...");
    await disconnectDB();
    process.exit(0);
});

