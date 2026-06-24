import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LegacyMotion from '../components/LegacyMotion';

export const metadata = {
  title: 'Ubhi - Magic & Ritual',
  description: 'Breathwork, rituals, snail mail, and sacred geometry by Chelsea Kaur Ubhi.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="light-mode">
        <LegacyMotion />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
