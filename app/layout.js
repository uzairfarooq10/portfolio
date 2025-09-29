import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata = {
  title: 'Uzair Farooq | Programmatic Advertising Specialist',
  description:
    'Personal portfolio of Uzair Farooq, a programmatic advertising specialist with over 5 years of experience.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} bg-[#0a192f] text-[#ccd6f6]`}>
        {children}
      </body>
    </html>
  );
}
