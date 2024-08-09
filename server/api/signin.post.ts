import { serverSupabaseClient } from '#supabase/server';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event);
  const body = await readBody(event);
  const { email, password } = body;

  const { data, error } = await client.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return {
      success: false,
      message: error.message,
      redirectUrl: ''
    };
  }

  const { nickname } = await prisma.userProfile.findUnique({
    where: {
      id: data.user?.id
    }
  })

  return {
    success: true,
    message: '',
    redirectUrl: `/@${nickname}`
  };
});
