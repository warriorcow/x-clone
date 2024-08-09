import { PrismaClient } from "@prisma/client";
import { serverSupabaseClient } from "#supabase/server";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient(event);
  const authUserId = (await supabase.auth.getSession()).data.session?.user.id

  const body = await readBody(event);

  await prisma.userProfile.update({
    where: {
      id: authUserId
    },
    data: {
      ...body
    }
  });
});
