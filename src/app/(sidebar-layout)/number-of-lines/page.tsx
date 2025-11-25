import type { Metadata } from 'next';
import Script from 'next/script';
import { generatePageMetadata, generateHowToJsonLd } from '../../lib/seo';
import NumberOfLines from './Content';

export const metadata: Metadata = generatePageMetadata('number-of-lines');

const jsonLd = generateHowToJsonLd('number-of-lines');

export default function NumberOfLinesPage() {
  return (
    <>
      {jsonLd && (
        <Script
          id="number-of-lines-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <NumberOfLines />
    </>
  );
}
