// app/layout.js
import './globals.css';
import { Raleway, Geist, Geist_Mono, Lustria, Playfair_Display } from 'next/font/google';
import { Navbar } from './utilities/Navbar';
import Footer from './utilities/Footer';

// Font setups
const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });
const raleway = Raleway({ subsets: ['latin'], weight: ['400', '600', '700'], variable: '--font-raleway' });
const lustria = Lustria({ weight: '400', subsets: ['latin'], variable: '--font-lustria' });
const playfair = Playfair_Display({ weight: ['400', '500', '600', '700'], subsets: ['latin'], variable: '--font-playfair' });

export const metadata = {
  title: 'Muina',
  description: 'Muina Cosmetics',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
         <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
        {/* <script src="https://cdn.tailwindcss.com/4.0.0"></script> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable} ${lustria.variable} ${playfair.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}