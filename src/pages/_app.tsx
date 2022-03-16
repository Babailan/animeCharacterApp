// import App from 'next/app'
import { useEffect, useState } from "react";
import "../style/index.css";
import "../style/navbar.module.css";
import Navbar from "../components/navbar/navbar";

function MyApp({ Component, pageProps }) {
  const [width, setWidth] = useState(undefined);
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  return (
    <div>
      <Navbar width={width} />
      <Component {...pageProps} width={width} />
    </div>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
