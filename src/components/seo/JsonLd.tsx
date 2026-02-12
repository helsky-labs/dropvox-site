export function JsonLd() {
  const baseUrl = "https://dropvox.app";

  const softwareApp = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "DropVox",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "macOS 14.0 (Sonoma) or later",
    processorRequirements: "Apple Silicon (M1, M2, M3, or later)",
    offers: [
      {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        name: "Free",
      },
      {
        "@type": "Offer",
        price: "9.99",
        priceCurrency: "USD",
        name: "Pro",
      },
      {
        "@type": "Offer",
        price: "49.90",
        priceCurrency: "BRL",
        name: "Pro",
      },
    ],
    description:
      "Native macOS app for transcribing WhatsApp voice messages and audio files using WhisperKit AI. Features full app window, menu bar access, floating drop zone, and history browser. 100% private and offline.",
    softwareVersion: "1.1.0",
    downloadUrl: `${baseUrl}`,
    screenshot: `${baseUrl}/icon.png`,
    author: {
      "@type": "Person",
      name: "Hel Rabelo",
    },
    publisher: {
      "@type": "Person",
      name: "Hel Rabelo",
    },
    featureList: [
      "WhisperKit AI transcription optimized for Apple Silicon",
      "13 language support with auto-detection",
      "Full app window with Dashboard and History",
      "Menu bar integration",
      "Floating Drop Zone for drag-and-drop",
      "Cmd+V clipboard paste support",
      "5 AI models from 75MB to 3GB",
      "100% offline and private",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "DropVox",
    url: baseUrl,
    description:
      "DropVox is a native macOS app that transcribes WhatsApp voice messages and audio files using WhisperKit AI.",
    publisher: {
      "@type": "Person",
      name: "Hel Rabelo",
    },
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DropVox",
    url: baseUrl,
    logo: `${baseUrl}/icon.png`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApp) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
    </>
  );
}
