// import App from 'next/app'
import "../style/index.css";
import "../style/navbar.css";
import "../style/footer.css";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer";
import { AppProps } from "next/app";
import LazyLoad from "react-lazyload";
import Greeting from "../components/greeting";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LazyLoad>
      <Navbar />
      <div className="parent">
        <Greeting />
        <Component {...pageProps} />
      </div>
      <Footer />
    </LazyLoad>
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
