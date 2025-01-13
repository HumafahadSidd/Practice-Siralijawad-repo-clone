import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   configimages:{
        remotePatterns: [
            {
                hostname: 'cdn.sanity.io',
            }
        ]
    },

};

export default nextConfig;
