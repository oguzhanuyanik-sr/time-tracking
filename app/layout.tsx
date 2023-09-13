import './globals.css';
import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import { GlobalContextProvider } from './context/store';

const rubik = Rubik({
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  fallback: ['sans-serif'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Time Tracking',
  description: 'Time is money.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={rubik.className}>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
