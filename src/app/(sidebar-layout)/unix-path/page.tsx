import type { Metadata } from 'next';
import Script from 'next/script';
import { generatePageMetadata, generateHowToJsonLd } from '../../lib/seo';
import UnixPath from './Content';

export const metadata: Metadata = generatePageMetadata('unix-path');

const jsonLd = generateHowToJsonLd('unix-path');

export default function UnixPathPage() {
  return (
    <>
      {jsonLd && (
        <Script
          id="unix-path-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <UnixPath />
    </>
  );
}
