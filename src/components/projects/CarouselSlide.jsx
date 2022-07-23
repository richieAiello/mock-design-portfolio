import clsx from 'clsx';

const CarouselSlide = props => {
  return (
    <div>
      <img
        src={props.src}
        alt=""
        loading="lazy"
        className={`
          absolute top-0 bottom-0 my-auto rounded-[0.625rem]  
          duration-[400ms]
          ${props.className}
          ${clsx({
            'animate-next': props.nextCard && props.animate,
            'animate-prev': props.prevCard && props.animate,
            'animate-secondary': props.secondary && props.animate,
          })}
        `}
        aria-current={props.primary}
      />
    </div>
  );
};

export default CarouselSlide;
