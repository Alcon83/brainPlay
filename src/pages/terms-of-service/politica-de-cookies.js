import React from 'react';

import Layout from '../../components/Layout';
import { Trans, useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import AnimatedText from '../../components/AnimatedText';


function TermsOfUse() {
    const { t } = useTranslation('common');

    return (
        <main className="py-4 lg:pt-2  lg:h-full ">
            <Layout>
                <div class="elementor-widget-container">
                    <AnimatedText
                        text="Política de Cookies - BrainPlay"
                        className=""
                    />
                    <p className='bg-primary w-full text-center text-light mb-5'><Trans i18nKey="company.title2" /></p>

                    <p>En BrainPlay, utilizamos cookies para mejorar tu experiencia en nuestra web educativa. Esta política explica qué son las cookies, cómo las usamos en nuestro sitio, que es parte de un proyecto final de clase, y cómo gestionarlas.</p>

                    <h2>¿Qué son las Cookies?</h2>
                    <p>Las cookies son pequeños archivos de texto que los sitios web colocan en tu dispositivo. Sirven para hacer que la experiencia del usuario sea más eficiente y para proporcionar información a los propietarios del sitio.</p>

                    <h2>Uso de Cookies en BrainPlay</h2>
                    <p>Utilizamos cookies principalmente para entender cómo interactúas con nuestro contenido educativo y mejorar así tu experiencia de aprendizaje. Estas cookies son esenciales para el funcionamiento técnico del sitio y no recopilan información personal.</p>

                    <h2>Tipos de Cookies que Utilizamos</h2>
                    <ul>
                        <li><strong>Cookies Técnicas:</strong> Necesarias para la navegación y el buen funcionamiento de nuestra web.</li>
                        <li><strong>Cookies de Sesión:</strong> Nos permiten recordar tus preferencias durante tu visita.</li>
                    </ul>

                    <h2>Tu Privacidad</h2>
                    <p>Respetamos tu privacidad. Las cookies que utilizamos son solo para fines educativos y de funcionalidad en el marco de nuestro proyecto final de clase. No compartimos ninguna información recopilada con terceros.</p>

                    <h2>Gestión de Cookies</h2>
                    <p>Puedes controlar y gestionar las cookies a través de la configuración de tu navegador. Ten en cuenta que eliminar o bloquear cookies puede afectar tu experiencia en nuestro sitio.</p>

                    <h2>Cambios en la Política de Cookies</h2>
                    <p>Podemos modificar esta política de cookies en cualquier momento. Te recomendamos revisarla periódicamente.</p>

                    <h2>Contacto</h2>
                    <p>Si tienes preguntas sobre nuestra política de cookies, no dudes en contactarnos a través de nuestro formulario de contacto en la web.</p>	</div>
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