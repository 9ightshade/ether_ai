import type { Metadata } from "next";
import { Darker_Grotesque, Turret_Road } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/nav/navbar";

const turretRoad = Turret_Road({
  variable: "--font-turret_road",
  weight: ["700", "500", "800", "400", "300"],
  subsets: ["latin"],
});

const darkerGrotesque = Darker_Grotesque({
  variable: "--font-darker_Grotesque",
  weight: ["700", "500", "800", "400", "300"],
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Ether Ai",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${turretRoad.variable} ${darkerGrotesque.variable} antialiased max-h-[3392px]`}
        style={{
          backgroundImage: "url('/ethereclipse.png')",
          backgroundRepeat: "no-repeat",
          backgroundPositionY: "top",
        }}>
          <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
