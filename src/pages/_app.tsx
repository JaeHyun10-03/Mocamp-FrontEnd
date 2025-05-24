import localFont from 'next/font/local';

import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { SpeedInsights } from '@vercel/speed-insights/next';

const pretendard = localFont({
  src: [
    {
      path: '../../public/fonts/PretendardVariable.woff2',
      style: 'normal',
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={pretendard.className}>
      <Component {...pageProps} />
      <SpeedInsights />
    </main>
  );
}
