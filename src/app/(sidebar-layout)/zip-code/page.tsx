import type { Metadata } from 'next';
import Script from 'next/script';
import { generatePageMetadata, generateHowToJsonLd } from '../../lib/seo';
import ZipCode from './Content';

export const metadata: Metadata = generatePageMetadata('zip-code');

const jsonLd = generateHowToJsonLd('zip-code');

export default function ZipCodePage() {
  return (
    <>
      {jsonLd && (
        <Script
          id="zip-code-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <ZipCode />
    </>
  );
}
