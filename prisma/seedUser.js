import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedUsers() {
  const user = {
    firstName: 'Иван',
    lastName: 'Петров',
    nickName: 'petrov',
    birthDate: new Date('May 1, 1945 23:15:30'),
    created_at: new Date()
  }
  try {
    await prisma.user.create({ data: user });
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

await seedUsers();
