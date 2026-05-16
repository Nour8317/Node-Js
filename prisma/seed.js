import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  console.log("SEED STARTED");

  const user = await prisma.user.upsert({
    where: { email: "seed@test.com" },
    update: {},
    create: {
      name: "Seed User",
      email: "seed@test.com",
      password: "hashedpassword",
    },
  });

  console.log("USER READY");

  const m1 = await prisma.movie.create({
    data: {
      title: "Inception",
      releaseYear: 2010,
      createdBy: user.id,
    },
  });

  const m2 = await prisma.movie.create({
    data: {
      title: "Interstellar",
      releaseYear: 2014,
      createdBy: user.id,
    },
  });

  console.log("MOVIES CREATED");

  await prisma.watchlistItem.createMany({
    data: [
      {
        userId: user.id,
        movieId: m1.id,
        status: "PLANNED",
      },
      {
        userId: user.id,
        movieId: m2.id,
        status: "WATCHING",
      },
    ],
  });

  console.log("WATCHLIST DONE");

  console.log(await prisma.movie.findMany());
}

seed()
  .catch(console.error)
  .finally(() => prisma.$disconnect());