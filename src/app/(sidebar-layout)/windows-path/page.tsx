import type { Metadata } from 'next';
import Script from 'next/script';
import { generatePageMetadata, generateHowToJsonLd } from '../../lib/seo';
import WindowsPath from './Content';

export const metadata: Metadata = generatePageMetadata('windows-path');

const jsonLd = generateHowToJsonLd('windows-path');

export default function WindowsPathPage() {
  return (
    <>
      {jsonLd && (
        <Script
          id="windows-path-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <WindowsPath />
    </>
  );
}
