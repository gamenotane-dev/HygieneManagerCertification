import Script from "next/script";

export function GoogleAdsense() {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT?.trim();

  if (process.env.NODE_ENV !== "production" || !client) {
    return null;
  }

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
