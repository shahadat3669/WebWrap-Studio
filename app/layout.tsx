import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WebWrap Studio',
  description:
    "WebWrap Studio's portfolio website is a showcase of our web development agency's expertise. Crafted using Next.js, React, TypeScript, ESLint, and Tailwind CSS, this dynamic platform exemplifies our commitment to innovation. Our interactive user interface offers seamless navigation and highlights our successful projects, incorporating the power of cutting-edge technologies. Join us in exploring the world of modern web development as we demonstrate the artistry of code and design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
