import React, { useState } from 'react';
import Image from 'next/image';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';
import { useTranslation } from 'next-i18next';
import CustomLink from '../CustomLink';
import AnimatedNumbers from '../AnimatedNumbers';

const MyComponent = () => {
    const { t } = useTranslation('common');
    const [isOpen, setOpen] = useState(false);

    return (

        <div className="flex flex-row md:flex-col items-center justify-between border  bg-white dark:bg-dark text-dark dark:text-light rounded-lg shadow-lg">
            <div className="p-2">
                <Image
                    src="/images/company/tornilloFundamento/Tornillo-467x270.jpg"
                    alt="Descripcion de la imagen"
                    width={500}
                    height={300}
                    className='rounded-lg'
                />
            </div>
            <div className="p-4">

                <h1 className="text-xl md:text-3xl font-bold mb-4">{t('homepage.whoWeAre.title')}</h1>
                <div className="mb-4 max-w-[800px] pr-2 md:pr-0">
                    <p>{t('homepage.whoWeAre.description.p1')}</p>
                </div>

                <div className="flex flex-row items-end justify-between xl:col-span-8 xl:items-center md:order-3 min-h-[70px]"> {/* Altura específica para el div */}
                    <div className="flex flex-col justify-center items-center">
                        <span className="text-dark dark:text-light inline-block text-5xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                            <AnimatedNumbers value={500} increment={10} speed={5} />+
                        </span>
                        <h2
                            className="text-xl  text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm"
                        >
                            {t('homepage.numbers.p1')}                            </h2>
                    </div>

                    <div className="flex flex-col  justify-center items-center ">
                        <span className="text-dark dark:text-light inline-block text-5xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                            <AnimatedNumbers value={5000} increment={100} speed={5} />+
                        </span>
                        <h2
                            className="text-xl  text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm"
                        >
                            {t('homepage.numbers.p2')}
                        </h2>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <span className="text-dark dark:text-light inline-block text-5xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                            <AnimatedNumbers value={30} increment={1} speed={5} />+
                        </span>
                        <h2
                            className="text-xl  text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm"
                        >
                            {t('homepage.numbers.p3')}
                        </h2>
                    </div>
                </div>


                <hr className="my-4 w-full border-light" />

                <div className='justify-around items-center flex'>
                    <button
                        className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4  rounded-lg"
                        onClick={() => setOpen(true)}
                    >
                        {t('homepage.whoWeAre.button1')}
                    </button>
                    <button className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4  m-3 rounded-lg">
                        <CustomLink
                            href="/ground-screw-aplicaciones"
                            title={t('homepage.whoWeAre.button2')}
                            className=""
                            underline={false}
                        />

                    </button>
                    <button
                        className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded-lg"
                    >
                        <CustomLink
                            href="/ground-screw-modelos"
                            title={t('homepage.whoWeAre.button3')}
                            className=""
                            underline={false}
                        />

                    </button>
                </div>

            </div>
            <ModalVideo
                channel='youtube'
                autoplay
                isOpen={isOpen}
                videoId="asc5Si5YtHw"
                onClose={() => setOpen(false)}
            />
        </div>

    );
};

export default MyComponent;

