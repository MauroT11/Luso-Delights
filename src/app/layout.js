import { REM, Mr_Dafoe } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import CookieConsent from '../components/CookieConsent';

const rem = REM({
  variable: "--font-rem",
  subsets: ["latin"],
});

const mrDafoe = Mr_Dafoe({ 
  subsets: ['latin'], 
  weight:'400', 
  variable: "--font-mrDafoe",
});

export const metadata = {
  title: "Luso Delights",
  description: "Experience Authentic Portuguese Flavors",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${rem.variable} ${mrDafoe.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}