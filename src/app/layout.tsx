// app/layout.tsx
import React from 'react';
import { LingoProvider, loadDictionary } from "lingo.dev/react/rsc";
import './globals.css'; // Assuming you have a global CSS file for Tailwind

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // LingoProvider will load the correct dictionary based on the active locale.
    // The 'locale' parameter in loadDictionary is handled internally by Lingo.dev.
    <LingoProvider loadDictionary={(locale) => loadDictionary(locale)}>
      {/* Removed lang={locale} as 'locale' is not directly available here in a non-[locale] layout */}
      <html>
        <body>{children}</body>
      </html>
    </LingoProvider>
  );
}
