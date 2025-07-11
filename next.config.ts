/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      'k.kakaocdn.net',
      'ssl.pstatic.net',
      'lh3.googleusercontent.com',
      'b-cube-web.s3.ap-northeast-2.amazonaws.com', // ✅ 여기에 추가
    ],
  },

  async redirects() {
    return [
      // {
      //   source: '/',
      //   destination: '/login',
      //   permanent: true,
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
