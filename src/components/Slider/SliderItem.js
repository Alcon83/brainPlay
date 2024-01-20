import CustomLink from './../CustomLink';
import Image from 'next/image';
import { useEffect, useState } from 'react';

function SliderItem({ slide, direction, isAnimating, slides, currentSlideIndex }) {
    const [className, setClassName] = useState('');


    useEffect(() => {
        if (isAnimating) {
            setClassName(direction === 1 ? 'fade-in-slide-in' : 'fade-in-slide-out');
        } else {
            setClassName('');
        }
    }, [direction, isAnimating]);


    return (
        <div className='px-16 md:px-4'>
            <div className={`relative  bg-white dark:bg-dark  rounded-lg dark:text-light text-dark overflow-hidden  `}>

                <Image
                    src={slide.imageUrl}
                    alt="Slider Image"
                    width={400}
                    height={400}
                    className={`transition-all duration-500 ${className} transform scale-105 md:scale-105`}
                    layout="responsive"
                />
                <div className={`absolute bottom-0 w-full h-1/3 md:h-1/3 grid grid-cols-2 mx-auto items-center text-center bg-gray-800 bg-opacity-70 `}>
                    <div>
                        <h2 className="text-3xl md:text-sm xl:text-xl font-semibold text-white">{slide.title}</h2>
                        <p className="mt-2 mb-1 md:mt-0 text-lg md:text-sm text-white">{slide.description}</p>
                    </div>
                    <div>
                        <button
                            className="bg-primary hover:bg-secondary text-white font-bold py-1 px-3 rounded-lg"
                        >
                            <CustomLink
                                href={slide.link}
                                title="Leer más"
                                className=""
                                underline={false}
                            />

                        </button>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:translate-y-12 md:translate-y-8 sm:translate-y-6 flex space-x-3">
                        {slides.map((slide, index) => (
                            <div key={slide.id} className={`w-3 h-3 md:w-1.5 md:h-1.5 rounded-full ${index === currentSlideIndex ? 'bg-white dark:bg-light' : 'bg-gray-400'}`} onClick={() => handleManualSlide(index)} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderItem;