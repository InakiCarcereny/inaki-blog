import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Header } from './components/Header';

export const metadata: Metadata = {
  title: 'Inaki Carcereny | Blog',
  description: 'Every week I write about my experiences as a developer.',
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${poppins.className} antialiased bg-black`}
      >
        <main className="w-full h-screen flex flex-col">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
