/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ['k.kakaocdn.net', 'ssl.pstatic.net', 'lh3.googleusercontent.com'], // ✅ 외부 이미지 도메인 추가
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
