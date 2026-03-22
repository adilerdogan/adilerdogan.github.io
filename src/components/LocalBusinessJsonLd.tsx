import { localBusinessJsonLd } from '@/lib/site';

export default function LocalBusinessJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessJsonLd),
      }}
    />
  );
}
