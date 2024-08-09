import { PrismaClient } from "@prisma/client";
import {serverSupabaseClient} from "#supabase/server";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient(event);
  const authUserId = (await supabase.auth.getSession()).data.session?.user.id;

  return prisma.userProfile.findUnique({
    where: {
      id: authUserId
    }
  });
})
