import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { userId } = await readBody(event);

  return prisma.post.findMany({
    where: {
      userId
    }
  });
})
