import Banner from '@/modules/home/banner';
import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';
import React from 'react';

import '../globals.css';

const mulish = Mulish({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <Banner />
        {children}
      </body>
    </html>
  );
}
