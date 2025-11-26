import type { Metadata } from 'next';
import Script from 'next/script';
import { generatePageMetadata, generateHowToJsonLd } from '../../lib/seo';
import TextLength from './Content';

export const metadata: Metadata = generatePageMetadata('text-length');

const jsonLd = generateHowToJsonLd('text-length');

export default function TextLengthPage() {
  return (
    <>
      {jsonLd && (
        <Script
          id="text-length-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <TextLength />
    </>
  );
}
