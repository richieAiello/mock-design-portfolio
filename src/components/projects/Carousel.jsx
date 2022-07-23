import { useState, useEffect, useRef } from 'react';
import CarouselSlide from './CarouselSlide';
import CarouselBtn from './CarouselBtn';
import { previous, next } from './helpers';
import images from './images';
import './carousel.css';

const Carousel = props => {
  const [animate, setAnimate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [nextCard, setNextCard] = useState(false);
  const [prevCard, setPrevCard] = useState(false);
  const [prevImage, setPrevImage] = useState(images[1]);
  const [activeImage, setActiveImage] = useState(images[2]);
  const [nextImage, setNextImage] = useState(images[3]);

  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);

  const handlePrevClick = e => {
    setNextCard(false);
    setPrevCard(true);

    prevBtnRef.current.focus();

    previous(prevImage, setPrevImage);
    previous(activeImage, setActiveImage);
    previous(nextImage, setNextImage);
  };

  const handleNextClick = e => {
    setPrevCard(false);
    setNextCard(true);

    nextBtnRef.current.focus();

    next(prevImage, setPrevImage);
    next(activeImage, setActiveImage);
    next(nextImage, setNextImage);
  };

  const handleKeyDown = e => {
    e.key === 'ArrowLeft' && prevBtnRef.current.click();
    e.key === 'ArrowRight' && nextBtnRef.current.click();
  };

  // Allows the left and right arrow keys to operate and focus the next and previous buttons
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    setLoading(true);
    setAnimate(true);

    const timer = setTimeout(() => {
      setAnimate(false);
      setLoading(false);
      // Allows the current button to re focus asyncronously
      setTimeout(() => {
        nextCard && nextBtnRef.current.focus();
        prevCard && prevBtnRef.current.focus();
      }, 0);
    }, 250);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeImage]);

  return (
    <div>
      <div
        className="mx-auto max-w-[350px] relative w-screen h-[180px]
        md:h-[360px] md:max-w-[750px] md:mb-14"
      >
        <CarouselSlide
          src={prevImage}
          className="h-[90%] w-[243px] opacity-60 left-[-130px]
          md:left-[-237px]  md:w-[486px]"
          animate={animate}
          secondary
        />
        <CarouselSlide
          src={activeImage}
          className="h-full w-[270px] left-0 right-0 mx-auto z-50 shadow-lg shadow-peach
          md:w-[540px]"
          animate={animate}
          nextCard={nextCard}
          prevCard={prevCard}
        />
        <CarouselSlide
          src={nextImage}
          className="h-[90%] w-[243px] opacity-60 right-[-130px] 
            md:right-[-237px]  md:w-[486px]"
          animate={animate}
          secondary
        />
      </div>
      <div className="w-max space-x-4 mx-auto mt-8">
        <CarouselBtn
          label="Click to view previous project."
          prev
          onClick={handlePrevClick}
          ref={prevBtnRef}
          disabled={loading}
        />
        <CarouselBtn
          label="Click to view next project."
          onClick={handleNextClick}
          ref={nextBtnRef}
          disabled={loading}
        />
      </div>
    </div>
  );
};

export default Carousel;
