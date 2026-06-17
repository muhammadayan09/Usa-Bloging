interface SeoJsonLdProps {
  schema: any;
}

export default function SeoJsonLd({ schema }: SeoJsonLdProps) {
  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
