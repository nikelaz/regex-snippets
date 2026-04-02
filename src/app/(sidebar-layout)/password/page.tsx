import type { Metadata } from "next";
import Script from "next/script";
import { generatePageMetadata, generateHowToJsonLd } from "../../lib/seo";
import Password from "./Content";

export const metadata: Metadata = generatePageMetadata("password");

const jsonLd = generateHowToJsonLd("password");

export default function PasswordPage() {
  return (
    <>
      {jsonLd && (
        <Script
          id="password-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <Password />
    </>
  );
}
