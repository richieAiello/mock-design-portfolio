import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Skills from './components/skills/Skills';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = props => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
