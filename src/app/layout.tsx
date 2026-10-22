import type { Metadata } from 'next';
import '@/styles/theme.css';
import AosProvider from '@/components/common/AosProvider';
import ScrollToTop from '@/components/common/ScrollToTop';


export const metadata: Metadata = {
  title: 'Zascomcs',
  description: 'Zascomcs official website.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" id="top">
      <body>
        <AosProvider>
          {children}
          <ScrollToTop />
        </AosProvider>
      </body>
    </html>
  );
}
