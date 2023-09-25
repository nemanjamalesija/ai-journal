import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { lato } from './utils/fonts';

const metadata = {
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
