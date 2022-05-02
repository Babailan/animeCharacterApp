// import App from 'next/app'
import "../style/index.css";
import "../style/footer.css";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [thereIs, setThereIs] = useState(undefined);
  useEffect(() => {
    if (thereIs) {
    }
  }, [router.route, thereIs]);

  return (
    <>
      {router.route.includes("/login") ||
      router.route.includes("/sign-up") ||
      router.route.includes("404") ? null : (
        <Navbar setThereIs={setThereIs} router={router} />
      )}

      <div className="parent">
        <Component {...pageProps} setThereIs={setThereIs} />
      </div>
      <Footer />
    </>
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
