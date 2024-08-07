import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  return prisma.user.findMany({
    include: { posts: true },
  });
})
