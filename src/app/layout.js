import { REM, Mr_Dafoe } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

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
  title: "Sabor Delights",
  description: "Experience Authentic Portuguese Flavors",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
