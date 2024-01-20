import Layout from '../components/Layout';
import Slider from '../components/Slider/Slider';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import FeatureModule from '../components/Home/FeatureModule';
import NuestraHistoia from '../components/Home/NuestraHistoria';
function Home() {

    return (
        <>
            <Slider />
            <Layout>
                <FeatureModule />
                <NuestraHistoia />
            </Layout>

        </>
    );
};

export default Home;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...await serverSideTranslations(locale, ['common']),
        },
    };
}