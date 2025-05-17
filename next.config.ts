/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // {
      //   source: '/',
      //   destination: '/login', // 일단 바로 로그인으로 리다이렉션션
      //   permanent: true, // 캐쉬에 남도록 하는 기능
      // },
    ];
  },
  webpack: (config: any) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
