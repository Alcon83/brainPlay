import React from 'react';
import CustomLink from '../components/CustomLink';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '../components/Layout';

function Custom404() {
    const { t } = useTranslation('common');

    return (

        <Layout>
            <div className="min-h-screen flex items-center justify-center bg-light dark:bg-dark pb-32">
                <div className="p-4 space-y-4">
                    <h1 className="text-8xl font-bold text-red-600 text-center">404</h1>
                    <p className="text-lg text-dark dark:text-light pt-10">{t('error404.message')}</p><br />
                    <div className="flex items-center justify-center">
                        <CustomLink
                            href="/"
                            title={t('error404.return')}
                            className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-red-600 rounded shadow ripple hover:shadow-lg hover:bg-red-800 focus:outline-none"
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...await serverSideTranslations(locale, ['common']),
        },
    };
}

export default Custom404;