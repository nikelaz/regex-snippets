import type { Metadata } from 'next';
import Script from 'next/script';
import { generatePageMetadata, generateHowToJsonLd } from '../../lib/seo';
import Alphanumeric from './Content';

export const metadata: Metadata = generatePageMetadata('alphanumeric');

const jsonLd = generateHowToJsonLd('alphanumeric');

export default function AlphanumericPage() {
  return (
    <>
      {jsonLd && (
        <Script
          id="alphanumeric-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <Alphanumeric />
    </>
  );
}
