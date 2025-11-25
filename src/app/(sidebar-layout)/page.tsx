import type { Metadata } from 'next';
import Script from 'next/script';
import HomeContent from './HomeContent';

export const metadata: Metadata = {
  title: 'RegEx Snippets - Ready-to-Use Regular Expression Patterns',
  description: 'Your go-to resource for ready-to-use regular expressions for common validation tasks. Validate emails, phone numbers, dates, URLs, and more with well-tested regex patterns.',
  keywords: ['regex snippets', 'regular expressions', 'validation patterns', 'email regex', 'phone regex', 'JavaScript regex', 'Python regex'],
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'RegEx Snippets',
  description: 'Ready-to-use regular expression snippets for common validation tasks',
  url: 'https://regex-snippets.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://regex-snippets.com/?search={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

export default function HomePage() {
  return (
    <>
      <Script
        id="home-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeContent />
    </>
  );
}
