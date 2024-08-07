import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seedPost() {
  const post = {
    title: 'Привет Мир!',
    description: 'Это мой первый пост привязанный к пользователю в другой таблице! Ахуеть!',
    userId: 2
  }
  try {
    await prisma.post.create({ data: post });
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

await seedPost();
