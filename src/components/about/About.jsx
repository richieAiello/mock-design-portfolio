import AboutContext from './AboutContext';
import AboutImage from './AboutImage';

const About = props => {
  return (
    <section
      className="container relative flex flex-col mb-[6.25rem] 
      md:flex-row md:mb-[7.5rem] lg:mb-[5.5rem] lg:items-center"
    >
      <AboutContext />
      <AboutImage />
    </section>
  );
};

export default About;
