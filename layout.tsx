import React, { ReactNode } from 'react'; // Import React here
import './globals.css'; // Global styles

export const metadata = {
  title: 'SIDE KOPIJA',
  description: '',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
