import React from 'react';
import { motion } from 'framer-motion';

const quote = {
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08,
        },
    },
};

const singleWord = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        },
    },
};

const AnimatedText = ({ text, className = '' }) => {
    const words = text.split(' ');

    return (
        <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0">
            <motion.h1
                className={` w-full  font-bold capitalize !text-4xl text-left sm:!text-2xl lg:text-center sm:pb-1 ${className}`}
                variants={quote}
                initial="initial"
                animate="animate"
            >
                {words.map((word, index) => (
                    <motion.span key={index} className="inline-block" variants={singleWord}>
                        {word}&nbsp;
                    </motion.span>
                ))}
            </motion.h1>
        </div>
    );
};

export default AnimatedText;
