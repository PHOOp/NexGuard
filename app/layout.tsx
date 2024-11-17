// app/layout.tsx
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CartProvider } from '/Users/phoodit/glasses-store/context/CardContext';

export const metadata = {
  title: 'Glasses Store',
  description: 'Find your perfect pair of glasses!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          {/* Add padding to the main content to account for the Navbar's height */}
          <main className="container mx-auto pt-16">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
