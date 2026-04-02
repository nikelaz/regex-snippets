import type { Metadata } from "next";
import Script from "next/script";
import { generatePageMetadata, generateHowToJsonLd } from "../../lib/seo";
import HexColorCode from "./Content";

export const metadata: Metadata = generatePageMetadata("hex-color-code");

const jsonLd = generateHowToJsonLd("hex-color-code");

export default function HexColorCodePage() {
  return (
    <>
      {jsonLd && (
        <Script
          id="hex-color-code-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <HexColorCode />
    </>
  );
}
