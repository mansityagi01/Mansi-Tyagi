import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 600);
    
    // Load Lottie animation
    fetch('/images/projects/woman teacher.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading animation:', error));
    
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      <div className="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6">
          <div
            className={`transform transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-5'
            }`}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,255,255,0.5)]">
                Mansi Tyagi
              </span>
            </h1>
          </div>

          <div
            className={`transform transition-all duration-700 delay-200 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-5'
            }`}
          >
            <h2 className="text-xl md:text-2xl text-gray-200 font-normal">
              Machine Learning Engineer | Data Scientist | Full-Stack Developer
            </h2>
          </div>

          <div
            className={`transform transition-all duration-700 delay-400 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-5'
            }`}
          >
            <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
              Building intelligent systems, predictive models, and high-performance data-driven applications.
            </p>
          </div>

          <div
            className={`flex gap-4 pt-4 transform transition-all duration-700 delay-600 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-5'
            }`}
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 border border-gray-500 text-white rounded-lg transition-all duration-300 hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:bg-white/5"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border border-[#7C8896] text-[#F1F5F9] rounded-lg transition-all duration-300 hover:border-[#93C5FD] hover:shadow-[0_0_20px_rgba(147,197,253,0.3)] hover:bg-[#93C5FD]/5"
            >
              Contact Me
            </button>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center">
          <div
            className={`w-full h-[500px] rounded-lg flex items-center justify-center relative transform transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            {/* Neural network background image */}
            <img 
              src="/images/projects/Neural1.jpg" 
              alt="Neural Network"
              className="absolute inset-0 w-full h-full object-contain opacity-80 rounded-2xl"
            />
            
            {/* Woman teacher Lottie animation on top */}
            {animationData ? (
              <Lottie
                animationData={animationData}
                loop={true}
                className="w-full h-full max-w-md relative z-10"
              />
            ) : (
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-white/20 to-transparent animate-pulse relative z-10" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
