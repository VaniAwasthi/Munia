// app/layout.js
import "./globals.css";
import {
  Raleway,
  Geist,
  Geist_Mono,
  Lustria,
  Playfair_Display,
} from "next/font/google";
import { Navbar } from "./utilities/Navbar";
import Footer from "./utilities/Footer";

// Font setups
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-raleway",
});
const lustria = Lustria({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lustria",
});
const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "Muina",
  description: "Muina Cosmetics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        <script
  dangerouslySetInnerHTML={{
    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-T3HV4QT9');`,
  }}
/>


        {/* Tailwind CDN */}
        <script src="https://cdn.tailwindcss.com"></script>

        {/* Tailwind Config for CDN mode */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            tailwind.config = {
              theme: {
                extend: {
                  fontFamily: {
                    raleway: ['Raleway', 'sans-serif'],
                    lustria: ['Lustria', 'serif'],
                    playfair: ['"Playfair Display"', 'serif'],
                  },
                },
              },
            }
          `,
          }}
        />

        {/* Google Fonts CDN */}
        <link
          href="https://fonts.googleapis.com/css2?family=Lustria&family=Raleway:wght@400;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable} ${lustria.variable} ${playfair.variable} antialiased`}
      >

     <noscript
  dangerouslySetInnerHTML={{
    __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T3HV4QT9"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>`
  }}
></noscript>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
