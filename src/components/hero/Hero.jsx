const Hero = props => {
  return (
    <section className="container text-center mb-8 md:mb-16 lg:mb-20">
      <h1
        className="text-black font-bold text-[2.25rem] leading-[2.835rem] mb-4
        md:text-[2.75rem] md:leading-[3.465rem] md:mb-[1.6875rem]
        lg:text-[3.5rem] lg:leading-[4.41rem] lg:mb-[1.4375rem]"
      >
        Design solutions made easy
      </h1>
      <p className="text-grey max-w-[730px] mx-auto">
        With over ten years of experience in various design
        disciplines, I’m your one-stop shop for your design needs.
      </p>
    </section>
  );
};

export default Hero;
