import type { Metadata } from 'next';
import Script from 'next/script';
import { generatePageMetadata, generateHowToJsonLd } from '../../lib/seo';
import IPAddress from './Content';

export const metadata: Metadata = generatePageMetadata('ip-address');

const jsonLd = generateHowToJsonLd('ip-address');

export default function IPAddressPage() {
  return (
    <>
      {jsonLd && (
        <Script
          id="ip-address-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <IPAddress />
    </>
  );
}
