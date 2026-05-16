import express from "express";
const router = express.Router();
import { addToWatchList, getWatchList, removeFromWatchList } from "../controllers/watchListController.js";

router.post("/", addToWatchList);
router.get("/", getWatchList);
router.delete("/:movieId", removeFromWatchList);