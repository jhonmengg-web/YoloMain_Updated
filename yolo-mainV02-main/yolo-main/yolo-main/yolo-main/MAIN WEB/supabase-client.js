/* SIERRA HAVEN Supabase setup. Replace the placeholder with your project's publishable key.
   Never put a service_role/secret key in browser code. */
(() => {
  const SUPABASE_URL = 'https://uranjhaewlkyzpveedvj.supabase.co';
  const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_ZPy3oOBCGAGWiVIwPKktBA_RTqpPRcR';
  if (!window.supabase || !window.supabase.createClient) {
    console.error('Supabase library did not load. Check your internet connection.');
    return;
  }
  if (SUPABASE_PUBLISHABLE_KEY.startsWith('PASTE_')) {
    console.warn('Set SUPABASE_PUBLISHABLE_KEY in MAIN WEB/supabase-client.js before using database features.');
    return;
  }
  window.sierraSupabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
})();
