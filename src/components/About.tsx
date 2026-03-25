import { useState, useEffect } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="about" className="bg-black/50 backdrop-blur-md py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-semibold text-center mb-10 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          About Me
        </h2>

        <div className={`space-y-6 text-lg leading-relaxed transform transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gray-200">
            I am a curious and growth-driven CS enthusiast with a strong interest in machine learning, data systems, and scalable software design. I enjoy solving complex problems with clear logic and creativity, while building technology that is impactful, reliable, and genuinely useful to people.
          </p>
        </div>
      </div>
    </section>
  );
}

