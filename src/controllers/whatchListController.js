import prisma from "../prisma/client.js";

const addToWatchList = async (req, res) => {
    const userId = req.user.id;
    const { movieId, status } = req.body;
    if (!movieId || !status) {
        return res.status(400).json({ message: "Please provide movieId and status" });
    }
    const existingItem = await prisma.watchlistItem.findUnique({
        where: {
            userId_movieId: {
                userId,
                movieId
            }
        }
    });
    if (existingItem) {
        return res.status(400).json({ message: "Movie already in watchlist" });
    }
    const watchlistItem = await prisma.watchlistItem.create({
        data: {
            userId,
            movieId,
            status
        }
    });
    res.status(201).json({ message: "Movie added to watchlist", watchlistItem });
}

const getWatchList = async (req, res) => {
    const userId = req.user.id;
    const watchlist = await prisma.watchlistItem.findMany({
        where: { userId },
        include: { movie: true }
    });
    res.status(200).json({ watchlist });
}

const removeFromWatchList = async (req, res) => {
    const userId = req.user.id;
    const { movieId } = req.params;
    const existingItem = await prisma.watchlistItem.findUnique({
        where: {
            userId_movieId: {
                userId,
                movieId: parseInt(movieId)
            }
        }
    });
    if (!existingItem) {
        return res.status(404).json({ message: "Movie not found in watchlist" });
    }
    await prisma.watchlistItem.delete({
        where: {
            userId_movieId: {
                userId,
                movieId: parseInt(movieId)
            }
        }
    });
    res.status(200).json({ message: "Movie removed from watchlist" });
}

export default {
    addToWatchList,
    getWatchList,
    removeFromWatchList
}