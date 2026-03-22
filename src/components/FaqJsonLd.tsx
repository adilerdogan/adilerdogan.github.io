import { faqPageJsonLd } from '@/lib/site';

export default function FaqJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqPageJsonLd),
      }}
    />
  );
}
