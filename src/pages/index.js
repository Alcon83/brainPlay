import Head from 'next/head';
import Home from '../pages/home';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '../components/Layout';


export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Brain Play</title>
          <meta name="description" content="Brain Play es una página de juegos para estimular la inteligencia y la memoria" />
        </Head>
        <Home />
      </Layout>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...await serverSideTranslations(locale, ['common']),
    },
  };
}