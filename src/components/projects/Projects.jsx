import Carousel from './Carousel';

const Projects = props => {
  return (
    <section className="mb-[6.25rem] w-screen md:mb-[7.5rem]">
      <h3
        className="text-black text-[1.5rem] font-bold leading-[1.89rem] mb-8 text-center
        md:text-[2rem] md:leading-[2.52rem] md:mb-14"
      >
        My Work
      </h3>
      <Carousel />
    </section>
  );
};

export default Projects;
