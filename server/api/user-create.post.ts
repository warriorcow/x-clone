import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)
export default defineEventHandler(async (event) => {
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
