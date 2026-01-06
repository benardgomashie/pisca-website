import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pisca Sports Management & Agency | Unleashing Potential",
  description: "Professional athlete representation, world-class event management, and strategic sports marketing across Africa.",
  keywords: ["sports management", "athlete representation", "sports marketing", "Africa sports", "event management"],
  openGraph: {
    title: "Pisca Sports Management & Agency",
    description: "Professional athlete representation, world-class event management, and strategic sports marketing across Africa.",
    url: "https://www.piscasports.com",
    siteName: "Pisca Sports",
    images: [
      {
        url: "/piscaLogoBW.jpeg",
        width: 1200,
        height: 630,
        alt: "Pisca Sports Management Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pisca Sports Management & Agency",
    description: "Professional athlete representation, world-class event management, and strategic sports marketing across Africa.",
    images: ["/piscaLogoBW.jpeg"],
  },
  icons: {
    icon: "/piscaLogoNullbg.png",
    apple: "/piscaLogoNullbg.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
