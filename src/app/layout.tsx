import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileFloatingMenu } from "@/components/MobileFloatingMenu";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Online Casino",
  description: "Online casino for gambling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased text-white bg-casino-mid pb-[60px] md:pb-0`}
      >
        <Header />
        {children}
        <Footer />
        <MobileFloatingMenu />
      </body>
    </html>
  );
}
