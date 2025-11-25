import type { Metadata } from 'next';
import Script from 'next/script';
import { generatePageMetadata, generateHowToJsonLd } from '../../lib/seo';
import Affirmation from './Content';

export const metadata: Metadata = generatePageMetadata('affirmation');

const jsonLd = generateHowToJsonLd('affirmation');

export default function AffirmationPage() {
  return (
    <>
      {jsonLd && (
        <Script
          id="affirmation-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <Affirmation />
    </>
  );
}
