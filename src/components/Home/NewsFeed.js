import newsData from '../../data/news.json';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const TICKER_SPEED = 500;  // Puedes ajustar este valor según necesites

function NewsFeed() {
  const [news, setNews] = useState([]);
  const [tickerWidth, setTickerWidth] = useState(0);
  const tickerRef = useRef(null);

  useEffect(() => {
    setNews(newsData.items);
  }, []);

  useEffect(() => {
    if (tickerRef.current && news.length > 0) {
      const width = tickerRef.current.clientWidth;
      setTickerWidth(-width);
    }
  }, [news]);

  const tickerVariants = {
    animate: {
      x: [0, tickerWidth],
      transition: {
        x: {
          repeat: Infinity,
          duration: TICKER_SPEED,
          ease: "linear"
        },
      },
    },
  };

  return (
    <div className="relative overflow-x-hidden h-[50px] dark:bg-dark bg-light text-dark dark:text-light">
      <motion.div
        ref={tickerRef}
        className="absolute flex space-x-4 whitespace-nowrap"
        variants={tickerVariants}
        initial={{ x: 0 }}
        animate='animate'
      >
        {Array(5).fill().map((_, i) => (
          news.map((item, index) => (
            <div key={i * news.length + index} className="flex-none">
              <span className="mr-4">{new Date(item.pubDate).toLocaleDateString()}</span>
              <strong className="mr-4">{item.title}</strong>
              <a href={item.link} className="text-blue-500 hover:underline">Leer más</a>
            </div>
          ))
        ))}
      </motion.div>
    </div>
  );
}

export default NewsFeed;
