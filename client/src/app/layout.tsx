import { Inter } from 'next/font/google';
import './globals.css';

// Initialize the Inter font with the 'latin' subset
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'MorphinGrid',
  description: 'Ranger Bio-Telemetry Processing Platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}