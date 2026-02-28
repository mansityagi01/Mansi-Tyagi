import { useEffect, useRef, useState } from 'react';
import { GraduationCap } from 'lucide-react';

export default function Education() {
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

  const education = [
    {
      institution: 'Lovely Professional University, Phagwara, India',
      degree: 'B.Tech in Computer Science & Engineering',
      grade: 'CGPA: 9.3 / 10',
      timeline: 'Expected Graduation: June 2027',
    },
    {
      institution: 'Jain Academy, Khekra, UP',
      degree: 'Senior Secondary (Class XII)',
      grade: '',
      timeline: 'March 2022',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="education"
      className="py-24 px-6 md:px-12 lg:px-24 bg-black/50 backdrop-blur-md"
    >
      <div className="max-w-5xl mx-auto">
        <div
          className={`transform transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-[#F1F5F9] mb-16">
            Education
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#7C8896]/50 via-[#7C8896]/30 to-transparent" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`relative pl-8 md:pl-20 transform transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="absolute left-0 md:left-[1.75rem] top-1 w-4 h-4 rounded-full bg-[#93C5FD] border-4 border-[#0A0F1E]" />

                <div className="group bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-6 hover:border-white/30 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300">
                      <GraduationCap className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-white/90 transition-colors">
                        {edu.institution}
                      </h3>
                      <p className="text-[#93C5FD] mb-1">{edu.degree}</p>
                      {edu.grade && (
                        <p className="text-[#94A3B8] mb-1">{edu.grade}</p>
                      )}
                      <p className="text-sm text-[#7C8896]">{edu.timeline}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
