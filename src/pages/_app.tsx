// import App from 'next/app'
import "../style/index.css";
import "../style/navbar.css";
import "../style/footer.css";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer";
import { AppProps } from "next/app";
import { Query, sizeQuery } from "../hooks/sizeQuery";
import { useEffect, useState } from "react";
import { browser } from "process";
function MyApp({ Component, pageProps }: AppProps) {
  const [thereIs, setThereIs] = useState(undefined);

  return (
    <Query.Provider value={sizeQuery}>
      <Navbar thereIs={thereIs} setThereIs={setThereIs} />
      <div className="parent">
        <Component {...pageProps} setThereIs={setThereIs} />
      </div>
      <Footer />
    </Query.Provider>
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
