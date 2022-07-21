import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Skills from './components/skills/Skills';
import About from './components/about/About';

const App = props => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <About />
      </main>
    </>
  );
};

export default App;
