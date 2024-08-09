import { serverSupabaseClient } from '#supabase/server';
import { PrismaClient } from "@prisma/client";
import { transliterate } from "~/helpers/transliterate";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event);
  const body = await readBody(event);
  const { email, password, firstname, lastname } = body;

  const { data, error } = await client.auth.signUp({
    email,
    password
  });

  if (error) {
    return {
      success: false,
      message: error.message,
      redirectUrl: ''
    };
  }

  const GENERATED_NICKNAME = transliterate(`${firstname} ${lastname}`.toLowerCase().replace(/ /g, "_"));

  await prisma.userProfile.create({
    data: {
      id: data.user?.id,
      firstname,
      lastname,
      nickname: GENERATED_NICKNAME,
      created_at: new Date()
    }
  })

  return {
    success: true,
    redirectUrl: `/@${GENERATED_NICKNAME}`
  };
});
