import { motion } from "framer-motion";

import React, { useContext } from 'react';
import { useTranslation, withTranslation } from "next-i18next";
import Image from "next/image";
import { ThemeContext } from '../contexts/ThemeContext';
import { useRouter } from "next/router";
import { useRef, useState, useEffect } from "react";
import CustomLink from "./CustomLink";
import CustomMobileLink from "../components/CustomMobileLink";
import { SunIcon, MoonIcon } from "./Icons";
import { IoCloseOutline } from "react-icons/io5";
import Layout from "./Layout";
import { BsFacebook, BsGoogle, BsLinkedin } from 'react-icons/bs';
import logoDark from '../../public/logoDark.svg';


function NavBar() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );
  const node = useRef();
  const { t } = useTranslation("common");
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState(router.locale);
  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    const currentPath = router.pathname;
    router.push(currentPath, currentPath, { locale: lang });
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    router.push('/');
  };


  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth >= 1024) {
      setIsOpen(false);
    }
  }, [windowWidth]);




  return (
    <Layout>
      <header className="flex justify-between items-center py-3 md:px-2">


        <nav className="w-full flex justify-between items-center">
        <div className="flex-1  hidden md:flex">
<button
        
        className="flex-col justify-center items-center hidden md:flex "
        onClick={handleClick}>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"
            }`}></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}></span>
      </button>

</div>
       
          <div className="flex-1 flex justify-start items-center text-center font-medium md:hidden space-x-5 xl:text-sm">
            <CustomLink href="/" title={t("Navbar.Home")} />
            <CustomLink href="/example" title={t("Navbar.Example")} />
          </div>

          <div className="flex-1 flex justify-center cursor-pointer" onClick={handleLogoClick}>
            <Image
              src={isDarkMode ? "/logoDark.png" : "/logoLight.png"}
              alt="Logo"
              width={200}
              height={120}
            />
          </div>

          <div className="flex-1 flex justify-end items-center">
            <button
              onClick={toggleTheme}
              className={`w-6 h-6 ml-3 flex items-center justify-center rounded-full p-1 ${isDarkMode ? "bg-light text-dark" : "bg-dark text-light"}`}>
              {isDarkMode ? (
                <SunIcon className="fill-dark" />
              ) : (
                <MoonIcon className="fill-light" />
              )}
            </button>

            <select
              className="bg-light dark:bg-dark text-dark dark:text-light border-none outline-none focus:ring-0"
              onChange={(e) => handleLanguageChange(e.target.value)}
              value={selectedLanguage}
              id="languageSelect">
              <option value={"es"}>Español</option>
              <option value={"en"}>Inglés</option>
            </select>
          </div>

        </nav>


        {isOpen && (
          <>
            <div
              className="fixed inset-0 bg-black opacity-50 z-10"
              style={{ pointerEvents: "auto" }}
            ></div>
            <motion.div
              initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
              animate={{ scale: 1, opacity: 1 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 min-w-[70vw] sm:min-w-[90vw] bg-dark/90 dark:bg-light/90 rounded-lg backdrop-blur-md  flex flex-col items-center"
              ref={node}
            >
              <div>
                <button
                  onClick={handleClick}
                  className="absolute  top-4 left-4 p-1 text-light dark:text-dark"
                >
                  <IoCloseOutline size={24} />
                </button>
              </div>


              <div className="pb-12">
                <Image
                  src={isDarkMode ? "/logoLight.png" : "/logoDark.png"}
                  alt="Logo"
                  width={150}
                  height={64}
                  className="py-14"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>

              <nav className="flex flex-col items-center  relative">

                <CustomMobileLink
                  href="/"
                  title={t("Navbar.Home")}
                  className=""
                  toggle={handleClick}
                />
                <CustomMobileLink
                  href="/example"
                  title={t("Navbar.Example")}
                  className=""
                  toggle={handleClick}
                />
                <section className='flex flex-col items-center justify-end text-light dark:text-dark pt-28'>
                  <motion.button

                    onClick={toggleTheme}
                    className={`w-6 h-6 ml-3 flex items-center justify-center rounded-full p-1 ${isDarkMode ? "bg-light text-dark" : "bg-dark text-light"}`}
                  >
                    {isDarkMode ? (
                      <SunIcon className="fill-dark" />
                    ) : (
                      <MoonIcon className="fill-light" />
                    )}

                  </motion.button>
                  <div>©  2022 BrainPlay, S.L.</div>
                  <div className='p-4 flex space-x-2 text-center'>

                    <a href="direccion facebook" target="_blank" rel="noopener noreferrer">
                      <BsFacebook fontSize={24} /></a>
                    <a href="direccion facebook" target="_blank" rel="noopener noreferrer">
                      <BsGoogle fontSize={24} /></a>
                    <a href="direccion facebook" target="_blank" rel="noopener noreferrer">
                      <BsLinkedin fontSize={24} /></a>
                  </div>
                </section>
              </nav>
            </motion.div>
          </>
        )}
        {!isOpen && (
          <div style={{ pointerEvents: "none" }}></div>
        )}
      </header>
    </Layout>
  );

}


export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default withTranslation("common")(NavBar);