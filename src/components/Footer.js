import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import CustomLink from './CustomLink';
import Layout from './Layout';
import { HiOutlineMail } from 'react-icons/hi';
import { SiGooglemaps } from 'react-icons/si';
import { BsCalendar, BsFacebook, BsGoogle, BsLinkedin, BsTelephone } from 'react-icons/bs';


function Footer() {
  const { isDarkMode } = useContext(ThemeContext);
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Cambia el estado una vez que el componente está montado
  }, []);

  return (

    <footer className="border-t-2 border-solid border-dark dark:border-light  bg-dark dark:bg-light">
      <Layout className=''>
        <div className=' bg-dark dark:bg-light text-light dark:text-dark !important '>
          <div className="flex justify-center pt-5 ">
            <Image
              src={isDarkMode ? "/logoLight.png" : "/logoDark.png"}
              alt="Logo"
              width={250}
              height={64}
            />
          </div>

          <div className=' grid grid-cols-3 py-8 xs:grid-cols-1  text-center '>

          <div>
              <a
                href="https://maps.app.goo.gl/iF9FK4hLehQGmco36"

              >
                <SiGooglemaps fontSize={24} className='mx-auto my-2' />
                <div>
                  <span> Carrer Del VideoJocs <br />
                    (Valencia) ESPAÑA</span>
                </div>
              </a>

            </div>
            <div >
              <HiOutlineMail fontSize={24} className='mx-auto my-2' />
              <span>
                <a href="mailto:ambaron@gmail.com">ambaron@gmail.com</a><br />
                <a href="mailto:email@example.com">info@example.com</a>
              </span>
            </div>
            <div className='sm:pt-4'>
              <BsTelephone fontSize={22} className='mx-auto my-2' />
              <span>
                (+34) 96 222 2222<br />
                (+34) 676 676 676
              </span>
            </div>


          </div>
          <section className='flex space-x-8 justify-center '>

            <CustomLink href="/terms-of-service/politica-de-cookies" title="Política de cookies" className='text-center' />
            <CustomLink href="/terms-of-service/politica-de-privacidad" title="Política de Privacidad" className='text-center' />
            <CustomLink href="/terms-of-service/politica-de-calidad" title="Política de calidad" className='text-center' />
          </section>
          <section className='flex flex-col py-4 items-center justify-center'>

            <div>©Diseño y desarrollo Rafa Gandia, full stack</div>
            <div>©  2023 Brain Play</div>
            <div className='p-4 flex space-x-2 text-center'>

              <a href="" target="_blank" rel="noopener noreferrer">
                <BsFacebook fontSize={24} /></a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <BsGoogle fontSize={24} /></a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <BsLinkedin fontSize={24} /></a>

            </div>
          </section>
        </div>
      </Layout>
    </footer>
  );
}

export default Footer;
