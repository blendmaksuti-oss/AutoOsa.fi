import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AutoOsa.fi | Auto Spare Parts Finland',
  description: 'Modern Finnish ecommerce for high-quality auto spare parts, batteries, oils and accessories.',
  keywords: ['auto parts', 'varaosat', 'Suomi', 'auton varaosat', 'akut', 'öljyt'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fi">
      <body>{children}</body>
    </html>
  );
}
