import { Html, Head, Main, NextScript } from "next/document";
import { useEffect } from "react";
import Navbar from "../components/navbar";

export default function Document() {
  


  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300;500;600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Navbar />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
