import { useState, useEffect, useRef } from 'react';
import CarouselSlide from './CarouselSlide';
import CarouselBtn from './CarouselBtn';
import { previous, next } from './helpers';
import images from './images';
import './carousel.css';

const Carousel = props => {
  const [prevSlide, setPrevSlide] = useState(images[1]);
  const [activeSlide, setActiveSlide] = useState(images[2]);
  const [nextSlide, setNextSlide] = useState(images[3]);

  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);

  const handlePrevClick = e => {
    prevBtnRef.current.focus();
    previous(prevSlide, setPrevSlide);
    previous(activeSlide, setActiveSlide);
    previous(nextSlide, setNextSlide);
  };

  const handleNextClick = e => {
    nextBtnRef.current.focus();
    next(prevSlide, setPrevSlide);
    next(activeSlide, setActiveSlide);
    next(nextSlide, setNextSlide);
  };

  // Allows the left and right arrow keys to operate and focus the next and previous buttons
  useEffect(() => {
    const handleKeyDown = e => {
      e.key === 'ArrowLeft' && handlePrevClick();
      e.key === 'ArrowRight' && handleNextClick();
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [prevSlide, activeSlide, nextSlide]);

  return (
    <div>
      <div
        className="mx-auto max-w-[350px] relative w-screen h-[180px]
        md:h-[360px] md:max-w-[750px]"
      >
        <CarouselSlide
          src={prevSlide}
          className="fade-secondary h-[90%] w-[243px] opacity-60 left-[-130px]
          md:left-[-237px]  md:w-[486px]"
        />
        <CarouselSlide
          src={activeSlide}
          className="fade-active h-full w-[270px] left-0 right-0 mx-auto z-50 shadow-lg shadow-peach
          md:w-[540px]"
          current
        />
        <CarouselSlide
          src={nextSlide}
          className="fade-secondary h-[90%] w-[243px] opacity-60 right-[-130px] 
            md:right-[-237px]  md:w-[486px]"
        />
      </div>
      <div className="w-max space-x-4 mx-auto mt-8">
        <CarouselBtn
          label="Click to view previous project."
          prev
          onClick={handlePrevClick}
          ref={prevBtnRef}
        />
        <CarouselBtn
          label="Click to view next project."
          onClick={handleNextClick}
          ref={nextBtnRef}
        />
      </div>
    </div>
  );
};

export default Carousel;
