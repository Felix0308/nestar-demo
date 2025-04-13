import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  console.log("DOCUMENT = PAGE ROUTER");

  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="title" content="Nestar, Demo" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" type="image/png" href="/img/logo/favicon.svg" />
        {/* SEO */}
        <meta
          name="keyword"
          content="nestar, nestar.uz, devex mern, mern nestjs fullstack"
        />
        <meta
          name="desctiption"
          content={
            "But and sell properties anywhere in South Korea. | " +
            "하지만 한국 어디에서나 부동산을 판매하세요"
          }
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
