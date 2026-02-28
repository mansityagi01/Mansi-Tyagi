import { useEffect, useRef, useState } from 'react';
import { Code2, Layers, Wrench, Brain } from 'lucide-react';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      skills: ['Python', 'Java', 'C++', 'C', 'SQL', 'HTML5', 'CSS3', 'JavaScript'],
    },
    {
      title: 'Frameworks & Libraries',
      icon: Layers,
      skills: [
        'Scikit-learn',
        'XGBoost',
        'Pandas',
        'NumPy',
        'Matplotlib',
        'Plotly',
        'React.js',
      ],
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      skills: [
        'Git',
        'GitHub',
        'Power BI',
        'Tableau',
        'Excel',
        'VS Code',
        'REST APIs',
        'Oracle Cloud Infrastructure (OCI)',
      ],
    },
    {
      title: 'Core Concepts',
      icon: Brain,
      skills: [
        'Data Structures & Algorithms (800+ LeetCode problems solved)',
        'Machine Learning',
        'Statistical Modeling',
        'OOP',
        'DBMS',
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-24 px-6 md:px-12 lg:px-24 bg-black/50 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`transform transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-[#F1F5F9] mb-16">
            Technical Skills
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className={`group bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 rounded-2xl p-8 transform transition-all duration-700 hover:-translate-y-3 hover:border-white/30 hover:shadow-[0_0_50px_rgba(255,255,255,0.15),inset_0_0_20px_rgba(255,255,255,0.05)] hover:scale-105 backdrop-blur-sm ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 group-hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-all duration-500 group-hover:scale-110">
                    <IconComponent className="w-7 h-7 text-white transition-transform group-hover:rotate-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-white/90 transition-colors">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-sm text-gray-200 transition-all duration-300 hover:border-white/50 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:scale-105 hover:text-white cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
