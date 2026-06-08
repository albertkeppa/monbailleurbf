import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xdsnxhvltjescwwpetas.supabase.co'

const supabaseKey = 'sb_publishable_MjLXPrzlI7Rb2wRPPn-43Q_VSkH46Vs'

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)
