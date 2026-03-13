import type { Metadata } from 'next';
import Script from 'next/script';
import { generatePageMetadata, generateHowToJsonLd } from '../../lib/seo';
import HtmlTag from './Content';

export const metadata: Metadata = generatePageMetadata('html-tag');

const jsonLd = generateHowToJsonLd('html-tag');

export default function HtmlTagPage() {
  return (
    <>
      {jsonLd && (
        <Script
          id="html-tag-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <HtmlTag />
    </>
  );
}
