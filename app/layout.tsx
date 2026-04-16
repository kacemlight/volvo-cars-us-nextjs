import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Volvo Cars US | Luxury Vehicles & Safety Innovation',
  description: 'Explore Volvo Cars luxury vehicles with cutting-edge safety features and Swedish design.',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Volvo Cars US',
    description: 'Swedish Safety and Innovation',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
