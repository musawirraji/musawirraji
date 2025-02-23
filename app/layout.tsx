import type { Metadata } from 'next';
import { Geist, Azeret_Mono as Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/provider';
import StructuredData from '@/components/StructuredData';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Musawir Raji's Portfolio",
  description:
    'Experienced React, Webflow & Next.js Developer specializing in creating responsive, performant websites and web applications.',
  keywords: [
    'Webflow',
    'Next.js',
    'React',
    'Web Development',
    'Frontend Development',
  ],
  authors: [{ name: 'Musawir Raji' }],
  creator: 'Musawir Raji',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.musawirraji.pro/',
    siteName: "Musawir Raji's Portfolio",
    title: "Musawir Raji's Portfolio - React, Webflow & Next.js Developer",
    description:
      'Experienced React, Webflow & Next.js Developer specializing in creating responsive, performant websites and web applications.',
    images: [
      {
        url: 'https://www.musawirraji.pro/logo.svg',
        width: 1200,
        height: 630,
        alt: "Musawir Raji's Portfolio",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Musawir Raji's Portfolio - React, Webflow & Next.js Developer",
    description:
      'Experienced React, Webflow & Next.js Developer specializing in creating responsive, performant websites and web applications.',
    images: ['https://www.musawirraji.pro/twit.svg'],
    creator: '@MusawirRaji',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-main-pattern`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <StructuredData />
      </body>
    </html>
  );
}
