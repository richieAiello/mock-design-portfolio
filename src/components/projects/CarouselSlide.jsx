const CarouselSlide = props => {
  return (
    <div className="">
      <img
        src={props.src}
        alt=""
        loading="lazy"
        className={`
          absolute top-0 bottom-0 my-auto rounded-[0.625rem]  
          duration-[400ms] slide-animation
          ${props.className}
        `}
        aria-current={props.current}
      />
    </div>
  );
};

export default CarouselSlide;
