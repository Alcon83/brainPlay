import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { MdFlashOn } from 'react-icons/md';
import { FaPuzzlePiece } from "react-icons/fa6";
import { GiBrainTentacle } from "react-icons/gi";
import { TbEyePin } from "react-icons/tb";

const features = [
  {
    icon: TbEyePin,
    iconBgColor: "#d7b607", // Color para Memoria Visual
    title: 'homepage.FeatureModule.m1',
    description: 'homepage.FeatureModule.d1',
  },
  {
    icon: GiBrainTentacle,
    iconBgColor: "#008000", // Color para Concentración
    title: 'homepage.FeatureModule.m2',
    description: 'homepage.FeatureModule.d2',
  },
  {
    icon: MdFlashOn,
    iconBgColor: "#FF4500", // Color para Reflejos Rápidos
    title: 'homepage.FeatureModule.m3',
    description: 'homepage.FeatureModule.d3',
  },
  {
    icon: FaPuzzlePiece,
    iconBgColor: "#1E90FF", // Color para Puzzle Cognitivo
    title: 'homepage.FeatureModule.m4',
    description: 'homepage.FeatureModule.d4',
  },
];



const FeatureCard = ({ icon: Icon, title, description, iconBgColor }) => {
  const { t } = useTranslation('common');
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -5 }}
        className="relative flex flex-col items-center justify-center border p-6 space-y-4 rounded-lg bg-white dark:bg-dark text-dark dark:text-light shadow-md hover:shadow-lg hover:text-transparent hover:dark:text-transparent"
        style={{ cursor: 'default' }}
      >
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: isHovered ? "-90%" : 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="w-16 h-16 rounded-lg flex items-center justify-center text-light"
          style={{ backgroundColor: iconBgColor }}
        >
          <Icon size={32} />
        </motion.div>
        <h3 className="text-xl md:text-lg font-semibold text-center">{t(title)}</h3>

        {isHovered && (
          <div className="absolute inset-0 flex justify-center z-10 w-full h-full p-4">
            <p className="text-center text-dark dark:text-white">{t(description, "Descripción no encontrada")}</p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

const FeatureModule = () => {
  const { t } = useTranslation('common');
  return (
    <div className="py-10">
      <div className="grid grid-cols-4 gap-8 md:gap-2 lg:gap-4 md:grid-cols-2">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default FeatureModule;