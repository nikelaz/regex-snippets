import '@mantine/core/styles.css';
import '@mantine/code-highlight/styles.css';
import React from 'react';
import {
  MantineProvider,
  ColorSchemeScript,
  mantineHtmlProps,
} from '@mantine/core';
import { theme } from '../../theme';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'RegEx Snippets - Ready-to-Use Regular Expressions',
    template: '%s | RegEx Snippets',
  },
  description: 'Free collection of battle-tested regular expression snippets for email, phone, date, URL, and more. Copy-paste regex patterns with multi-language examples in JavaScript, Python, Rust, Go, and more.',
  keywords: ['regex', 'regular expressions', 'validation', 'patterns', 'snippets', 'email regex', 'phone regex', 'JavaScript', 'Python', 'Rust', 'Go'],
  authors: [{ name: 'RegEx Snippets' }],
  creator: 'RegEx Snippets',
  publisher: 'RegEx Snippets',
  metadataBase: new URL('https://regex-snippets.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'RegEx Snippets',
    title: 'RegEx Snippets - Ready-to-Use Regular Expressions',
    description: 'Free collection of battle-tested regular expression snippets for email, phone, date, URL, and more.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RegEx Snippets - Ready-to-Use Regular Expressions',
    description: 'Free collection of battle-tested regular expression snippets for common validation tasks.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const RootLayout = ({ children }: { children: any }) => {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
        <script data-goatcounter="https://regex-snippets.goatcounter.com/count"
          async src="//gc.zgo.at/count.js"></script>
      </body>
    </html>
  );
};

export default RootLayout;

