import { PrismaClient } from "@prisma/client";
import { serverSupabaseClient } from "#supabase/server";

const prisma = new PrismaClient();

export default defineEventHandler(async event => {
  // const supabase = await serverSupabaseClient(event);
  // const { data: user, error } = await supabase.auth.getUser();
  //
  // if (error || !user) {
  //   return sendRedirect(event, '/signin');
  // }

  const nickname = getRouterParam(event, 'nickname');

  const data = await prisma.userProfile.findUnique({
    where: {
      nickname
    }
  })

  return {
    ...data
  }
});

