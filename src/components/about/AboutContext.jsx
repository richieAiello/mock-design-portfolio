import SharedLink from '../shared/SharedLink';

const AboutContext = props => {
  return (
    <div className="order-2 text-center md:max-w-[339px] md:ml-auto md:text-left">
      <h2
        className="font-bold text-black text-[1.625rem] leading-2.0475rem] mb-6
        md:text-[2rem] md:leading-[2.52rem]"
      >
        I’m Amy, and I’d love to work on your next project
      </h2>
      <p className="text-grey mb-6 ">
        I love working with others to create beautiful design
        solutions. I’ve designed everything from brand illustrations
        to complete mobile apps. I’m also handy with a camera!
      </p>
      <SharedLink light />
    </div>
  );
};

export default AboutContext;
