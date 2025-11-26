import type { Metadata } from 'next';
import Script from 'next/script';
import { generatePageMetadata, generateHowToJsonLd } from '../../lib/seo';
import EmailContent from './EmailContent';

export const metadata: Metadata = generatePageMetadata('email');

const jsonLd = generateHowToJsonLd('email');

export default function EmailPage() {
  return (
    <>
      {jsonLd && (
        <Script
          id="email-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <EmailContent />
    </>
  );
}
