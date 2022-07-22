import { useState, useEffect, useRef } from 'react';
import CarouselSlide from './CarouselSlide';
import CarouselBtn from './CarouselBtn';
import clsx from 'clsx';
import images from './images';
import './carousel.css';

// store slide images in a state array
// use immutability ... to change state

// Swap src for images with clsx
// left slide = array.indexOf(active) - 1
// right slide = array.indexOf(active) + 1
// if
// prev btn condition - if active = 1, then active = 5, else active - 1
// next btn condition - if active = 5, then active = 1, else active + 1
// remember images.length - 1 to find the last index.

const Carousel = props => {
  const [slides, setSlides] = useState(images);

  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);

  const handlePrevClick = e => {
    prevBtnRef.current.focus();
  };

  const handleNextClick = e => {
    nextBtnRef.current.focus();
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
  }, []);

  return (
    <div>
      <div className="container relative w-screen h-[180px]">
        <CarouselSlide
          src="./image-slide-1.jpg"
          className="left-[-150px] opacity-75"
        />
        <CarouselSlide
          src="./image-slide-2.jpg"
          className="left-0 right-0 mx-auto z-50 drop-shadow-lg"
          current
        />
        <CarouselSlide
          src="./image-slide-3.jpg"
          className="right-[-150px] opacity-75"
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
