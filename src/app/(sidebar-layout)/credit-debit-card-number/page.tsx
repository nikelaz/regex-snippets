import type { Metadata } from 'next';
import Script from 'next/script';
import { generatePageMetadata, generateHowToJsonLd } from '../../lib/seo';
import CreditDebitCard from './Content';

export const metadata: Metadata = generatePageMetadata('credit-debit-card-number');

const jsonLd = generateHowToJsonLd('credit-debit-card-number');

export default function CreditDebitCardPage() {
  return (
    <>
      {jsonLd && (
        <Script
          id="credit-debit-card-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <CreditDebitCard />
    </>
  );
}
