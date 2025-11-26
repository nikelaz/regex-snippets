import type { Metadata } from 'next';
import Script from 'next/script';
import { generatePageMetadata, generateHowToJsonLd } from '../../lib/seo';
import Numbers from './Content';

export const metadata: Metadata = generatePageMetadata('numbers');

const jsonLd = generateHowToJsonLd('numbers');

export default function NumbersPage() {
  return (
    <>
      {jsonLd && (
        <Script
          id="numbers-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <Numbers />
    </>
  );
}
