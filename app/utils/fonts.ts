import { Playfair_Display } from 'next/font/google';
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
