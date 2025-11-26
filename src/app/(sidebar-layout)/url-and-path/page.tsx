import type { Metadata } from 'next';
import Script from 'next/script';
import { generatePageMetadata, generateHowToJsonLd } from '../../lib/seo';
import URLAndPath from './Content';

export const metadata: Metadata = generatePageMetadata('url-and-path');

const jsonLd = generateHowToJsonLd('url-and-path');

export default function URLAndPathPage() {
  return (
    <>
      {jsonLd && (
        <Script
          id="url-and-path-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <URLAndPath />
    </>
  );
}
