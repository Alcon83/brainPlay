import React from 'react';

import Layout from '../../components/Layout';
import { Trans, useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import AnimatedText from '../../components/AnimatedText';


function Calidad() {
    const { t } = useTranslation('common');

    return (
        <main className="py-4 lg:pt-2 h-screen lg:h-full ">
            <Layout>
                <div>
                    <AnimatedText
                        text="Política de Calidad - BrainPlay"
                        className=""
                    />
                    <p className='bg-primary w-full text-center text-light mb-5'><Trans i18nKey="company.title2" /></p>

               
    <p>En BrainPlay, nuestro compromiso con la calidad es firme. Nos esforzamos por ofrecer una experiencia enriquecedora, atractiva y educativa para nuestros usuarios. Nuestra política de calidad se centra en los siguientes principios clave:</p>

    <h2>1. Diseño Centrado en el Usuario</h2>
    <p>Priorizamos las necesidades y comentarios de nuestros usuarios. Nuestros juegos y características están diseñados para ser intuitivos, fáciles de usar y accesibles para un público diverso.</p>

    <h2>2. Valor Educativo</h2>
    <p>Cada juego en nuestra plataforma está creado no solo para entretener, sino también por su mérito educativo. Nuestro objetivo es estimular habilidades cognitivas como la memoria, la concentración, la resolución de problemas y el pensamiento rápido.</p>

    <h2>3. Mejora Continua</h2>
    <p>Estamos dedicados a la mejora continua de nuestro contenido y plataforma. Recopilamos y analizamos regularmente comentarios para realizar las mejoras necesarias.</p>

    <h2>4. Fiabilidad y Rendimiento</h2>
    <p>Aseguramos que nuestro sitio web y juegos sean fiables y funcionen sin problemas en diversos dispositivos y navegadores, minimizando tiempos de inactividad y problemas técnicos.</p>

    <h2>5. Privacidad y Seguridad de Datos</h2>
    <p>Proteger los datos de nuestros usuarios es primordial. Cumplimos con estrictos estándares de privacidad y seguridad de datos para asegurar que la información del usuario sea confidencial y segura.</p>

    <h2>6. Inclusividad y Diversidad</h2>
    <p>Nuestro contenido está diseñado para ser inclusivo y respetuoso con diferentes antecedentes y capacidades. Nuestro objetivo es crear un ambiente acogedor para todos los usuarios.</p>

    <h2>7. Cumplimiento de Normativas</h2>
    <p>Cumplimos con las normativas legales y éticas relevantes en los sectores digital y educativo.</p>

    <p>Al adherirse a esta política de calidad, BrainPlay aspira a ser líder en juegos educativos, proporcionando una plataforma que no solo sea agradable, sino también enriquecedora y beneficiosa para el desarrollo mental.</p>
                </div>
            </Layout>
        </main >
    );
}

export default Calidad;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...await serverSideTranslations(locale, ['common']),
        },
    };
}