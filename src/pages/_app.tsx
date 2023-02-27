import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { MantineProvider } from '@mantine/core';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <main className={`${inter.variable} font-primary`}>
        <Component {...pageProps} />
      </main>
    </MantineProvider>
  );
}
