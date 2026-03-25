import { useEffect, useRef, useState } from 'react';

type Achievement = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  alt: string;
  accent: string;
};

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

  const achievements: Achievement[] = [
    {
      title: 'LeetCode - 934 Problems Solved',
      subtitle: 'Contest Rating 1781',
      description:
        'Built strong DSA depth across graphs, trees, dynamic programming, greedy, and advanced problem-solving patterns through disciplined practice.',
      image: '/images/projects/leetcode.png',
      alt: 'LeetCode profile stats image',
      accent: 'text-emerald-300',
    },
    {
      title: 'GATE Achievement - AIR 1735',
      subtitle: 'Score 56.74',
      description:
        'Secured AIR 1735 with a score of 56.74, demonstrating strong fundamentals, speed, and accuracy under high-pressure exam conditions.',
      image: '/images/honors/gate-score.svg',
      alt: 'GATE achievement visual with AIR and score',
      accent: 'text-cyan-300',
    },
    {
      title: 'University Academic Excellence Award - 2024',
      subtitle: '9.50 TGPA',
      description:
        'Recognized for consistent top-tier academic performance with a 9.50 TGPA and sustained excellence throughout the academic year.',
      image: '/images/projects/Academic%20Achiever.jpeg',
      alt: 'Academic achiever award image',
      accent: 'text-sky-300',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="honors"
      className="relative overflow-hidden py-24 px-6 md:px-12 lg:px-24 bg-black/50 backdrop-blur-md"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-24 w-72 h-72 rounded-full bg-cyan-400/20 blur-3xl animate-pulse" />
        <div className="absolute top-1/4 -right-24 w-80 h-80 rounded-full bg-emerald-400/20 blur-3xl animate-pulse [animation-delay:700ms]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div
          className={`transform transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-[#F1F5F9] mb-5">
            Honors & Achievements
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mb-14">
            A snapshot of discipline, consistency, and performance across competitive coding, academics, and certifications.
          </p>
        </div>

        <div className="space-y-10">
          {achievements.map((achievement, index) => {
            const imageBlock = (
              <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.08] to-white/[0.02]">
                <img
                  src={achievement.image}
                  alt={achievement.alt}
                  className="w-full h-full min-h-[260px] md:min-h-[300px] object-cover"
                />
              </div>
            );

            const contentBlock = (
              <div className="rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.09] to-white/[0.03] p-6 md:p-8 backdrop-blur-sm h-full">
                <p className="text-xs uppercase tracking-[0.16em] text-gray-300 mb-3">
                  Achievement {index + 1}
                </p>
                <h3 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
                  {achievement.title}
                </h3>
                <p className={`mt-3 text-lg md:text-xl font-semibold ${achievement.accent}`}>
                  {achievement.subtitle}
                </p>
                <div className="my-5 h-px bg-gradient-to-r from-white/30 to-transparent" />
                <p className="text-gray-200 leading-relaxed text-base md:text-lg">
                  {achievement.description}
                </p>
              </div>
            );

            return (
              <div
                key={achievement.title}
                className={`group relative rounded-3xl border border-cyan-100/15 bg-gradient-to-br from-slate-900/80 to-slate-800/60 p-4 md:p-5 shadow-[0_20px_70px_rgba(0,0,0,0.35)] transform transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(16,185,129,0.16)] ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 1) * 170}ms` }}
              >
                <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-5 lg:gap-6 items-stretch">
                  {index % 2 === 0 ? imageBlock : contentBlock}

                  <div className="hidden lg:flex items-center justify-center">
                    <div className="h-[84%] w-px bg-gradient-to-b from-transparent via-cyan-200/65 to-transparent" />
                  </div>

                  {index % 2 === 0 ? contentBlock : imageBlock}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
