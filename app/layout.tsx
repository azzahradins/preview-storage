import './globals.css';
import { Providers } from './providers';

export const metadata = {
  title: 'Structuring NextJS',
  description: 'Structuring NextJS',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="spacing">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
