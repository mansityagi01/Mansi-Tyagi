import { useEffect, useRef, useState } from 'react';
import { Trophy, Award, Code } from 'lucide-react';

export default function Honors() {
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

  const achievements = [
    {
      title: 'LeetCode 800+ Problems Solved',
      description:
        'Advanced proficiency in Dynamic Programming, Graphs, Trees, and algorithmic problem solving.',
      icon: Code,
    },
    {
      title: 'University Academic Excellence Award – 2024',
      description:
        'Maintained 9.50 TGPA with top-tier standing in CS coursework.',
      icon: Award,
    },
    {
      title: 'Oracle Dual Professional Certification – Oct 2025',
      description:
        'OCI Data Science Professional & OCI Developer Professional',
      icon: Trophy,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="honors"
      className="py-24 px-6 md:px-12 lg:px-24 bg-black/50 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`transform transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-[#F1F5F9] mb-16">
            Honors & Achievements
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div
                key={index}
                className={`group bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 rounded-2xl p-8 transform transition-all duration-700 hover:-translate-y-3 hover:border-white/30 hover:shadow-[0_0_50px_rgba(255,255,255,0.15),inset_0_0_20px_rgba(255,255,255,0.05)] hover:scale-105 backdrop-blur-sm ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-white/10 rounded-full group-hover:bg-white/20 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-500 group-hover:scale-110">
                    <IconComponent className="w-8 h-8 text-white transition-transform group-hover:rotate-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-white/90 transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                    {achievement.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
