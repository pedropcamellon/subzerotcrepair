import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import type { Metadata } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Golden Coast",
  description: "Your next adventure awaits!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>

      <body className={poppins.className}>
        <main className="font-normal container mx-auto px-4">
          <Header />

          {children}

          <Footer />
        </main>
      </body>
    </html>
  );
}
