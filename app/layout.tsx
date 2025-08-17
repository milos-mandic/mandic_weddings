import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import SideDotNav from './SideDotNav';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mandic Weddings",
  description: "Wedding videography portfolio and services by Mandic Weddings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Avenir Light, Avenir, Arial, sans-serif', background: '#e7e4dd', scrollBehavior: 'smooth' }}>
        <style>{`html { scroll-behavior: smooth; }`}</style>
        {/* Top Navigation */}
        <nav className="topNav">
          <ul className="topNavList">
            <li><Link href="/" className="navLink home">HOME</Link></li>
            <li><a href="/#timeline" className="navLink">WEDDING STORIES</a></li>
            <li><a href="/#about" className="navLink">ABOUT</a></li>
            <li><a href="/#contact" className="navLink">CONTACT</a></li>
            <li><Link href="/services" className="navLink">SERVICES</Link></li>
          </ul>
        </nav>
        {/* Side Navigation Dots (Client Component) */}
        <SideDotNav />
        {children}
      </body>
    </html>
  );
}
