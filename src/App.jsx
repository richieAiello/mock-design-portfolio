import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Skills from './components/skills/Skills';

const App = props => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
      </main>
    </>
  );
};

export default App;
