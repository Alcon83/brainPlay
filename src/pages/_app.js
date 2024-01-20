import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { ThemeProvider } from '../contexts/ThemeContext';
import Head from "next/head";
import "../styles/globals.css";
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <ThemeProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="noindex, nofollow" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="font-montserrat bg-light dark:bg-dark">
          <NavBar />


          <Component key={router.asPath} {...pageProps} />
          <ScrollToTop />
          <Footer />
        </main>
      </ThemeProvider>

    </>
  );
}

export default appWithTranslation(MyApp);
