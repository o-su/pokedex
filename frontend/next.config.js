/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.pokemondb.net",
        port: "",
        pathname: "/artwork/**",
      },
    ],
  },
};

module.exports = nextConfig;
