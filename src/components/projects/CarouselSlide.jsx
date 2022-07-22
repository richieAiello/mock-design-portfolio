const CarouselSlide = props => {
  return (
    <div className="">
      <img
        src={props.src}
        alt=""
        loading="lazy"
        className={`
          absolute top-0 rounded-[0.625rem] w-[270px] h-[180px] 
          duration-[400ms] slide-animation
          ${props.className}
        `}
        aria-current={props.current}
      />
    </div>
  );
};

export default CarouselSlide;
