// import App from 'next/app'
import "../style/index.css";
import "../style/navbar.css";
import "../style/footer.css";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer";
import { AppProps } from "next/app";
import { Query, sizeQuery } from "../hooks/sizeQuery";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [previousCall, setPreviousCall] = useState();
  const [thereIs, setThereIs] = useState(undefined);
  useEffect(() => {
    clearTimeout(previousCall);
  }, [router.route]);

  return (
    <Query.Provider value={sizeQuery}>
      {router.route.includes("/login") ||
      router.route.includes("/sign-up") ||
      router.route.includes("404") ? null : (
        <Navbar
          thereIs={thereIs}
          setThereIs={setThereIs}
          setPreviousCall={setPreviousCall}
          previousCall={previousCall}
        />
      )}

      <div className="parent">
        <Component
          {...pageProps}
          setThereIs={setThereIs}
          previousCall={previousCall}
          setPreviousCall={setPreviousCall}
        />
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
