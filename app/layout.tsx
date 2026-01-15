import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hustlz - Find work that\'ll make you chop life',
  description: 'The marketplace connecting Nigerian talent with opportunities. From tailors to tech—everyone deserves work that pays.',
  keywords: ['Nigeria', 'jobs', 'freelance', 'gig', 'hustle', 'talent', 'marketplace'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream-50 text-gray-800">{children}</body>
    </html>
  );
}

