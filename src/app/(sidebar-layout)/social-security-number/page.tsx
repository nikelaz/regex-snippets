import type { Metadata } from 'next';
import Script from 'next/script';
import { generatePageMetadata, generateHowToJsonLd } from '../../lib/seo';
import SocialSecurityNumber from './Content';

export const metadata: Metadata = generatePageMetadata('social-security-number');

const jsonLd = generateHowToJsonLd('social-security-number');

export default function SocialSecurityNumberPage() {
  return (
    <>
      {jsonLd && (
        <Script
          id="social-security-number-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <SocialSecurityNumber />
    </>
  );
}
