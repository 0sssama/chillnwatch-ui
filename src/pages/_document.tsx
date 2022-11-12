import { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "@/styles/theme";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="theme-color" content="#0084E1" />
        <meta name="author" content="WebMastry" />
        <meta property="og:site_name" content="Chill N' Watch" />
        <meta property="og:site" content="www.chillnwatch.com" />
        <meta
          property="og:title"
          content="Chill N' Watch - Watch random high rated YouTube videos"
        />
        <meta
          property="og:description"
          content="Chill N' Watch is a website that allows you to watch random, high-rated, top-quality and hand-picked YouTube videos by category."
        />
        <meta property="og:url" content="www.chillnwatch.com" />
        <meta property="og:type" content="article" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="relative">
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
