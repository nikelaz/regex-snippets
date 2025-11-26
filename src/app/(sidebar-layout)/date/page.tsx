import type { Metadata } from 'next';
import Script from 'next/script';
import { generatePageMetadata, generateHowToJsonLd } from '../../lib/seo';
import DateComponent from './Content';

export const metadata: Metadata = generatePageMetadata('date');

const jsonLd = generateHowToJsonLd('date');

export default function DatePage() {
  return (
    <>
      {jsonLd && (
        <Script
          id="date-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <DateComponent />
    </>
  );
}
