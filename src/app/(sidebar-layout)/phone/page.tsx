import type { Metadata } from 'next';
import Script from 'next/script';
import { generatePageMetadata, generateHowToJsonLd } from '../../lib/seo';
import Phone from './Content';

export const metadata: Metadata = generatePageMetadata('phone');

const jsonLd = generateHowToJsonLd('phone');

export default function PhonePage() {
  return (
    <>
      {jsonLd && (
        <Script
          id="phone-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <Phone />
    </>
  );
}
