module.exports = {
  reactStrictMode: true,
  assetPrefix: "/aptos-wallet-adapter",
  basePath: "/deploy-nextjs-gh",
  images: {unoptimized: true},
  experimental: {
    transpilePackages: ["wallet-adapter-react", "wallet-adapter-plugin"],
  },
  webpack: (config) => {
    config.resolve.fallback = {"@solana/web3.js": false};
    return config;
  },
};
