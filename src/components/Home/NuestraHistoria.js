import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import CustomLink from '../CustomLink';

const MyComponent = () => {
    const { t } = useTranslation('common');

    return (
        <div className="flex flex-row md:flex-col items-center justify-between border  bg-white dark:bg-dark text-dark dark:text-light rounded-lg shadow-lg mb-4">
            <div className='p-2'>
                <Image
                    src="/images/brainplay.webp"
                    alt="Descripción de la imagen"
                    width={500}
                    height={300}
                    className='rounded-lg'
                />
            </div>
            <div className="p-4">
                <h1 className="text-xl md:text-3xl font-bold mb-4">{t('homepage.OurStory.title')}</h1>
                <p className="mb-4 max-w-[800px]">
                    {t('homepage.OurStory.description.p1')}
                </p>
               
            </div>
        </div>
    );
};

export default MyComponent;
