import type { Metadata } from 'next';
import Script from 'next/script';
import { generatePageMetadata, generateHowToJsonLd } from '../../lib/seo';
import Time from './Content';

export const metadata: Metadata = generatePageMetadata('time');

const jsonLd = generateHowToJsonLd('time');

export default function TimePage() {
  return (
    <>
      {jsonLd && (
        <Script
          id="time-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <Time />
    </>
  );
}
