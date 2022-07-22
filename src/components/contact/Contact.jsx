import SharedLink from '../shared/SharedLink';

const Contact = props => {
  return (
    <section
      className="container py-12 px-6 bg-black text-cream 
      text-center rounded-[0.625rem] mb-10
      md:pt-14 md:pb-16 md:px-[4.6875rem] md:mb-14"
    >
      <h4
        className="font-bold text-[1.625rem] leading-[2.0475rem] mb-6
        md:text-[2rem] md:leading-[2.52rem] md:mb-[1.625rem]"
      >
        Book a call with me
      </h4>
      <p className="mb-6 max-w-[540px] mx-auto md:mb-[1.625rem]">
        I’d love to have a chat to see how I can help you. The best
        first step is for us to discuss your project during a free
        consultation. Then we can move forward from there.
      </p>
      <SharedLink light />
    </section>
  );
};

export default Contact;
