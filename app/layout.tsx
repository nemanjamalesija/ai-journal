import './globals.css';
import { Playfair_Display } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { Lato } from 'next/font/google';

export const pDisplay = Playfair_Display({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const lato = Lato({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Ai journal',
  description: 'Ai powered journal application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={lato.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
