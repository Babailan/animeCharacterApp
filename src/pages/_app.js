import "../style/index.css";
import "../style/home.css";
import Navbar from "../components/navbar";
export default function App({ Component, pageProps }) {
  const date = new Date();
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <footer style={{ fontSize: "1.3em", fontWeight: 600 }}>
        &copy; {date.getFullYear()} Babailan{" "}
      </footer>
    </>
  );
}
