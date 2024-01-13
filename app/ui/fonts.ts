import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

// TODO: どこで引数を見つければいいの？適当にググって指定されたものをコピペしただけ
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
