import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Malichis Group',
  description: 'Building a Better Future Together',
  icons: {
    icon: [
      { url: '/malichisgroup-icon.png', sizes: '16x16', type: 'image/png' },
      { url: '/malichisgroup-icon.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/malichisgroup-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/malichisgroup-icon.png', sizes: '192x192', type: 'image/png' },
      { url: '/malichisgroup-icon.png', sizes: '512x512', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Navbar />
        {children}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">About Us</h3>
                <p className="text-gray-400">
                  Malichis Group is committed to excellence across all our services,
                  from property management to community development.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="/properties" className="hover:text-white transition">Properties</a></li>
                  <li><a href="/cleaning" className="hover:text-white transition">Cleaning Services</a></li>
                  <li><a href="/foundation" className="hover:text-white transition">Foundation</a></li>
                  <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>malachisgroup@gmail.com</li>
                  <li>+234 806 461 0905</li>
                  <li>Happy Land Estate</li>
                  <li>Lekki, Lagos.</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>© {new Date().getFullYear()} Malichis Group. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}