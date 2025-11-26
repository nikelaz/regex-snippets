import type { Metadata } from 'next';
import Script from 'next/script';
import { generatePageMetadata, generateHowToJsonLd } from '../../lib/seo';
import Domain from './Content';

export const metadata: Metadata = generatePageMetadata('domain');

const jsonLd = generateHowToJsonLd('domain');

export default function DomainPage() {
  return (
    <>
      {jsonLd && (
        <Script
          id="domain-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <Domain />
    </>
  );
}
