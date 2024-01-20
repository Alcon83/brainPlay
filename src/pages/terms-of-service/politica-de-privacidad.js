import React from 'react';

import Layout from '../../components/Layout';
import { Trans, useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import AnimatedText from '../../components/AnimatedText';


function TermsOfUse() {
    const { t } = useTranslation('common');

    return (
        <main className="py-4 lg:pt-2 lg:h-full ">
            <Layout>
                <div>
                    <div>
                        <AnimatedText
                            text="Política de Privacidad - BrainPlay"
                            className=""
                        />
                        <p className='bg-primary w-full text-center text-light mb-5'><Trans i18nKey="company.title2" /></p>
                    </div>
                    <p>En BrainPlay, respetamos y protegemos la privacidad de nuestros usuarios. Esta política de privacidad describe cómo recopilamos, usamos y protegemos tu información personal en nuestra web, la cual tiene fines educativos y es parte de un proyecto de clase.</p>

                    <h2>Recopilación de Información</h2>
                    <p>Recopilamos información que nos proporcionas al registrarte en nuestro sitio, como tu nombre, dirección de correo electrónico y edad. Esta información se utiliza para personalizar tu experiencia en nuestro sitio y para ofrecerte contenido adecuado a tu edad y preferencias de aprendizaje.</p>

                    <h2>Uso de la Información</h2>
                    <p>La información recopilada se utiliza para mejorar nuestros servicios educativos, responder a tus consultas y proporcionarte información relevante sobre nuestro proyecto de clase y novedades educativas.</p>

                    <h2>Compartición de Información</h2>
                    <p>No compartimos tu información personal con terceros, excepto cuando sea necesario para cumplir con la ley o proteger nuestros derechos.</p>

                    <h2>Seguridad de la Información</h2>
                    <p>Tomamos medidas de seguridad para proteger tu información personal. Sin embargo, ninguna transmisión de datos por Internet puede garantizarse como completamente segura.</p>

                    <h2>Cambios en la Política de Privacidad</h2>
                    <p>Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Cualquier cambio será publicado en esta página.</p>

                    <h2>Contacto</h2>
                    <p>Si tienes preguntas sobre esta política de privacidad, no dudes en contactarnos a través de nuestro formulario de contacto en la web.</p>
                </div>
            </Layout>
        </main>
    );
}

export default TermsOfUse;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...await serverSideTranslations(locale, ['common']),
        },
    };
}