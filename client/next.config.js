/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // For static export
  // output: 'export',
  // Optional: Add a trailing slash for static exports
  // trailingSlash: true,
  
  // Environment variables that should be exposed to the client
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000',
  },
  
  // Enable React DevTools in production
  reactStrictMode: true,
  
  // Enable SWC minification
  swcMinify: true,
  
  // Configure images if you're using next/image
  images: {
    domains: ['localhost'],
    unoptimized: true, // Required for static exports
  },
  
  // Configure webpack if needed
  webpack: (config, { isServer }) => {
    // Important: return the modified config
    return config;
  },
};

module.exports = nextConfig;
