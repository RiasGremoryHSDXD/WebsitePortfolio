import type { Metadata } from 'next';
import { Inter, Space_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { personal } from '@/content/personal';

import { EasterEggProvider } from '@/components/layout/EasterEggProvider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceMono = Space_Mono({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-space-mono' });

export const metadata: Metadata = {
  title: {
    default: `${personal.name} | Portfolio`,
    template: `%s | ${personal.name}`,
  },
  description: personal.positioning,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: personal.name,
    title: personal.name,
    description: personal.positioning,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${spaceMono.variable} font-sans bg-background text-foreground min-h-screen flex flex-col selection:bg-primary/30`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <EasterEggProvider />
      </body>
    </html>
  );
}
