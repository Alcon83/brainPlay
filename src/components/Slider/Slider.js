import { useState, useEffect, useCallback } from 'react';
import SliderItem from './SliderItem';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function Slider() {


    const slides = [
        {
            id: 1,
            title: 'JUEGA CON TUS AMIGOS',
            description: 'Juegos de muchos estilos',
            imageUrl:
                '/images/slider/banner6.png',
            link:
                '/example/',
        },
        {
            id: 2,
            title: 'MEJORA TU NIVEL',
            description: 'Porque mejorar y divertirse es posible',
            imageUrl:
                '/images/slider/banner7.png',
            link:
                '/example/',
        },

    ];

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const [autoSlide, setAutoSlide] = useState(true);
    const [isAnimating, setIsAnimating] = useState(false);
    const [previousSlideIndex, setPreviousSlideIndex] = useState(null);


    const handleManualSlide = useCallback((nextSlideIndex) => {
        setAutoSlide(false);
        setPreviousSlideIndex(currentSlideIndex); 
        setCurrentSlideIndex(nextSlideIndex);
        setTimeout(() => setAutoSlide(true), 2000);
    }, [currentSlideIndex]);

    const handleNextSlide = useCallback(() => {
        setIsAnimating(true);
        setDirection(1);
        handleManualSlide((prevIndex) => (prevIndex + 1) % slides.length);
        setTimeout(() => setIsAnimating(false), 500);
    }, [handleManualSlide, slides.length]);

    const handlePrevSlide = useCallback(() => {
        setIsAnimating(true);
        setDirection(-1);
        handleManualSlide((prevIndex) => prevIndex === 0 ? slides.length - 1 : prevIndex - 1);
        setTimeout(() => setIsAnimating(false), 500);
    }, [handleManualSlide, slides.length]);

    useEffect(() => {
        const slideInterval = autoSlide ? setInterval(handleNextSlide, 2000) : null;
        return () => clearInterval(slideInterval);
    }, [autoSlide, handleNextSlide]);

    return (
        <div className="relative overflow-x-hidden" style={{ zIndex: 1 }}>
            <button onClick={handlePrevSlide} className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 text-dark dark:text-light rounded-lg dark:bg-dark bg-light p-1">
                <IoIosArrowBack size={40} />
            </button>

            <SliderItem
                slide={slides[currentSlideIndex]}
                direction={direction}
                isAnimating={isAnimating}
                slides={slides}
                currentSlideIndex={currentSlideIndex}
            />

            <button onClick={handleNextSlide} className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 text-dark dark:text-light rounded-lg dark:bg-dark bg-light p-1">
                <IoIosArrowForward size={40} />
            </button>
        </div>
    );
};

export default Slider;