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
      .from(body.image_type)
      .upload(filePath, blob, {
        contentType: body.type,
        upsert: true
      })

    const { data: { publicUrl } } = supabase.storage
      .from(body.image_type)
      .getPublicUrl(filePath)


    await prisma.userProfile.update({
      where: {
        id: body.id
      },
      data: {
        [body.image_type]: publicUrl
      },
    })

    return {
      data: publicUrl
    }
  } catch (error: any) {
    return { error: error.message }
  }
})
