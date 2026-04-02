import type { Metadata } from "next";
import Script from "next/script";
import { generatePageMetadata, generateHowToJsonLd } from "../../lib/seo";
import Username from "./Content";

export const metadata: Metadata = generatePageMetadata("username");

const jsonLd = generateHowToJsonLd("username");

export default function UsernamePage() {
  return (
    <>
      {jsonLd && (
        <Script
          id="username-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <Username />
    </>
  );
}
