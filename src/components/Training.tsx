import { useEffect, useRef, useState } from 'react';
import { GraduationCap, ExternalLink } from 'lucide-react';

export default function Training() {
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

  const training = {
    title: 'Data Structures & Algorithms with C++',
    organization: 'Splen Technologies & Education Pvt Ltd',
    duration: '1 Month Intensive Program',
    year: '2024',
    description: 'Comprehensive training program covering expert-level Data Structures & Algorithms, advanced algorithmic techniques, optimization strategies, and problem-solving methodologies. Gained hands-on experience with complex data structures, algorithm design patterns, and competitive programming techniques.',
    skills: [
      'Advanced Data Structures',
      'Algorithm Design & Analysis',
      'Time & Space Complexity Optimization',
      'Problem Solving Techniques',
      'C++ STL',
      'Competitive Programming',
    ],
    certificateUrl: 'https://drive.google.com/file/d/174tE_NSb-Nc3epBdlRpZchZPRG_7v6-w/view?usp=drive_link',
  };

  return (
    <section
      ref={sectionRef}
      id="training"
      className="py-24 px-6 md:px-12 lg:px-24 bg-black/50 backdrop-blur-md"
    >
      <div className="max-w-5xl mx-auto">
        <div
          className={`transform transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-[#F1F5F9] mb-16">
            Professional Training
          </h2>
        </div>

        <div
          className={`group bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/20 rounded-2xl p-8 transform transition-all duration-700 hover:border-white/40 hover:shadow-[0_0_60px_rgba(255,255,255,0.2),inset_0_0_30px_rgba(255,255,255,0.05)] hover:scale-[1.02] backdrop-blur-md ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-start gap-6">
            <div className="p-4 bg-white/10 rounded-xl flex-shrink-0 group-hover:bg-white/20 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-500 group-hover:scale-110">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            
            <div className="flex-1 space-y-4">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-white/90 transition-colors">
                  {training.title}
                </h3>
                <p className="text-lg text-gray-200 mb-1 group-hover:text-white transition-colors">
                  {training.organization}
                </p>
                <div className="flex flex-wrap gap-3 text-sm text-[#7C8896]">
                  <span>{training.duration}</span>
                  <span>•</span>
                  <span>{training.year}</span>
                </div>
              </div>

              <p className="text-[#94A3B8] leading-relaxed">
                {training.description}
              </p>

              <div>
                <p className="text-sm font-semibold text-[#F1F5F9] mb-3">
                  Key Learning Areas:
                </p>
                <div className="flex flex-wrap gap-2">
                  {training.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-[#0F172A] border border-[#7C8896]/30 rounded-md text-[#93C5FD] text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={training.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-[#7C8896] text-[#F1F5F9] rounded-lg transition-all duration-300 hover:border-[#93C5FD] hover:shadow-[0_0_20px_rgba(147,197,253,0.3)] hover:bg-[#93C5FD]/5"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
