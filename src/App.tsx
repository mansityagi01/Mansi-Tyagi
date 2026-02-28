import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Training from './components/Training';
import Honors from './components/Honors';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
// import SpaceBackground from './components/SpaceBackground';

function App() {
  return (
    <div className="min-h-screen text-white antialiased relative bg-black">
      {/* <SpaceBackground /> */}
      <div className="relative z-10 bg-transparent">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Training />
        <Honors />
        <Certifications />
        <Contact />

        <footer className="py-8 px-6 border-t border-gray-800 bg-black/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-400 text-sm">
              © 2026 Mansi Tyagi. Built with precision and purpose.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
