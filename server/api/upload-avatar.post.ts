import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient(event);

  try {
    const body = await readBody(event);

    const filePath = `${body.name}`

    const res = await fetch(body.file)
    const blob = await res.blob()

    const response = await supabase.storage
      .from("avatars")
      .upload(filePath, blob, {
        contentType: body.type,
        upsert: true,
      })

    return {
      data: response.data,
      error: response.error?.message,
    }
  } catch (error: any) {
    return { error: error.message }
  }
})
