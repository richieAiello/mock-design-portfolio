import images from './images';

const previous = (slide, setSlide) => {
  let index = images.indexOf(slide);
  index = index - 1;
  index < 0
    ? setSlide(images[images.length - 1])
    : setSlide(images[index]);
};

const next = (slide, setSlide) => {
  let index = images.indexOf(slide);
  index = index + 1;
  index > images.length - 1
    ? setSlide(images[0])
    : setSlide(images[index]);
};

export { previous, next };
