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
  const navItemStyle = { textDecoration: 'none', color: '#222', fontSize: '1.1rem', fontFamily: 'Avenir, Avenir Next, Arial, sans-serif' };
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Avenir Light, Avenir, Arial, sans-serif', background: '#e7e4dd', scrollBehavior: 'smooth' }}>
        <style>{`html { scroll-behavior: smooth; }`}</style>
        {/* Top Navigation */}
        <nav style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem 0 1rem 0', background: '#e7e4dd', position: 'sticky', top: 0, zIndex: 10 }}>
          <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', margin: 0, padding: 0, fontSize: '1.1rem', letterSpacing: '0.1em' }}>
            <li><Link href="/" style={{ ...navItemStyle, fontWeight: 600 }}>HOME</Link></li>
            <li><a href="/#timeline" style={navItemStyle}>WEDDING STORIES</a></li>
            <li><a href="/#about" style={navItemStyle}>ABOUT</a></li>
            <li><a href="/#contact" style={navItemStyle}>CONTACT</a></li>
            <li><Link href="/services" style={navItemStyle}>SERVICES</Link></li>
          </ul>
        </nav>
        {/* Side Navigation Dots (Client Component) */}
        <SideDotNav />
        {children}
      </body>
    </html>
  );
}
