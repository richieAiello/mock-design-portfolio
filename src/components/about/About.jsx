import AboutContext from './AboutContext';
import AboutImage from './AboutImage';

const About = props => {
  return (
    <section className="container flex flex-col mb-[6.25rem]">
      <AboutContext />
      <AboutImage />
    </section>
  );
};

export default About;
