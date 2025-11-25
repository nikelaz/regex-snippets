import type { Metadata } from 'next';
import Script from 'next/script';
import { generatePageMetadata, generateHowToJsonLd } from '../../lib/seo';
import ISBN from './Content';

export const metadata: Metadata = generatePageMetadata('isbn');

const jsonLd = generateHowToJsonLd('isbn');

export default function ISBNPage() {
  return (
    <>
      {jsonLd && (
        <Script
          id="isbn-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <ISBN />
    </>
  );
}
