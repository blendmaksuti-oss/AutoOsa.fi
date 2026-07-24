import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AutoOsa.fi | Varaosat ja huolto-osat',
  description: 'AutoOsa.fi tarjoaa varaosia, huolto-osia, öljyjä ja lisävarusteita autoille — suomalainen verkkokauppa.',
  keywords: ['auto parts', 'varaosat', 'Suomi', 'auton varaosat', 'akut', 'öljyt', 'huolto-osat'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fi">
      <body>{children}</body>
    </html>
  );
}
