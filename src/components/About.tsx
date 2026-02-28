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
    <section id="about" className="min-h-screen bg-black/50 backdrop-blur-md py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          About Me
        </h2>

        <div className={`space-y-6 text-lg leading-relaxed transform transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gray-200">
            I am a B.Tech Computer Science & Engineering student at Lovely Professional University with a CGPA of 9.3/10, specializing in Machine Learning, Statistical Modeling, and System Design. I build data-intensive applications that combine predictive analytics, scalable architectures, and intuitive user experiences.
          </p>
          <p className="text-gray-200">
            My journey in tech is driven by a passion for solving real-world problems through intelligent systems. Whether it's developing ML-powered recommendation engines, crafting responsive web interfaces, or analyzing large datasets for actionable insights, I thrive on turning complex challenges into elegant solutions.
          </p>
          <p className="text-gray-200">
            I believe in continuous learning and staying updated with the latest technologies. My goal is to contribute to innovative projects that make a meaningful impact while growing as a versatile software engineer.
          </p>
        </div>
      </div>
    </section>
  );
}

