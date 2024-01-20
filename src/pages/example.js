import React from 'react';
import AnimatedText from '../components/AnimatedText';
import Layout from '../components/Layout';
import { Trans, useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import CustomLink from '../components/CustomLink';

function Tornillo() {
    const { t } = useTranslation('common');

    return (
        <main className="pt-4 lg:pt-2 h-screen lg:h-full">
            <Layout>
                <section className='bg-white dark:bg-dark text-dark dark:text-light rounded-lg shadow-lg p-3 mb-5'>

                    <AnimatedText text={t('brainChallenge.title')} className=""

                    />

                    <p className='bg-primary w-full text-center text-light mb-5'>
                        <Trans i18nKey="brainChallenge.subTitle" />
                    </p>

                    <div className="mb-5">
                        <p>{t('brainChallenge.description')}</p>
                    </div>
                    <div className=" mx-auto text-center">
                        <Image
                            src="/images/example.png"
                            alt="Descripción de la imagen 1"
                            width={500}
                            height={500}
                            className="mx-auto"
                        />
                    </div>


                </section>

            </Layout>
        </main>
    );
}


export default Tornillo;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...await serverSideTranslations(locale, ['common']),
        },
    };
}