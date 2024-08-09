import { serverSupabaseClient } from '#supabase/server';
import { useUserStore } from '~/stores/user';

export default defineEventHandler(async (event): Promise<{ success: boolean }> => {
  const supabase = await serverSupabaseClient(event);

  const { error } = await supabase.auth.signOut();

  if (error) {
    return {
      success: false
    };
  }

  return {
    success: true
  }
});
