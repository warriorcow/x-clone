import { serverSupabaseClient } from '#supabase/server';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event);
  const body = await readBody(event);
  const { email, password } = body;

  const { data, error } = await client.auth.signUp({
    email,
    password,
  });

  if (error) {
    return {
      success: false,
      message: error.message,
      data
    };
  }

  console.log(
    {
      data: {
        userId: data.user?.id,
        firstName: 'Илья',
        lastName: 'Борисов',
        birthDate: new Date(),
        nickName: 'fj'
      }
    }
  )

  await prisma.userProfile.create({
    data: {
      id: data.user?.id,
      firstName: 'Жопа',
      lastName: 'Ручка',
      nickName: 'jopa_ruchka',
      birthDate: new Date('May 1, 1945 23:15:30'),
      created_at: new Date()
    }
  })

  return {
    success: true,
    data
  };
});
