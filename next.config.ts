// next.config.js (or next.config.ts)
import { createCivicAuthPlugin } from "@civic/auth/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['sallziojxjvncitwuwrb.supabase.co'],
  },
};

const withCivicAuth = createCivicAuthPlugin({

  clientId: process.env.NEXT_PUBLIC_CIVIC_CLIENT_ID!,
});

export default withCivicAuth(nextConfig);
