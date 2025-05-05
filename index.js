// Bybit proxy using Deno Deploy
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

serve(async (_req) => {
  const res = await fetch("https://api.bybit.com/v5/market/tickers?category=linear", {
    headers: {
      "User-Agent": "Mozilla/5.0",
      "Accept": "application/json",
    },
  });

  const data = await res.text();

  return new Response(data, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
});
