import {Providers} from './providers/providers';
import {Inter} from 'next/font/google';
import './globals.css';

const inter = Inter({subsets: ['latin']});

export const metadata = {
  title: 'Connex',
  description: 'Your ideas connected',
};

export default function RootLayout({children}) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
