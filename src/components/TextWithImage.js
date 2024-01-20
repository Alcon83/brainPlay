import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';

export function TextWithImage({ imageUrl, imageAlt, titleKey, descriptionKey }) {
    const { t } = useTranslation('common');

    return (

        <div className="flex items-center justify-center lg:flex-col">
            <motion.img
                src={imageUrl}
                alt={imageAlt}
                className="w-1/4  lg:w-2/3 sm:mt-0 lg:p-10 md:p-0 "
            />
            <div className="w-3/4 pl-4 lg:pl-0 lg:w-full flex flex-col mb-2 sm:pt-5">
                <p className="font-bold !text-2xl !text-left lg:!text-xl">
                    {t(titleKey)}
                </p>
                <div className="mb-2  text-base font-medium lg:text-sm sm:text-xs">
                    <p>{t(descriptionKey)}</p>
                </div>
            </div>
        </div>

    )
}