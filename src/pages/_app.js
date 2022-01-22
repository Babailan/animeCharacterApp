import Head from "next/head";
import "../style/index.css";
import Navbar from "../components/navbar";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;300;500;700&family=Ubuntu+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
