import Footer from "../components/Footer";
import Header from "../components/Header";
import { Store } from "../redux/Store";
import "../styles/globals.css";
import localFont from "next/font/local";
import { Provider } from "react-redux";

export const iranSanseWeb = localFont({
  src: "../public/fonts/IRANSansWeb.woff",
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={Store}>
        <main className={iranSanseWeb.className}>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </main>
      </Provider>
    </>
  );
}

export default MyApp;
