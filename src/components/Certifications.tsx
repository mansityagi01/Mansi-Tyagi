import { useEffect, useRef, useState } from 'react';
import { FileCheck } from 'lucide-react';

export default function Certifications() {
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

  const certifications = [
    {
      title: 'Oracle Cloud Infrastructure Data Science Professional',
      organization: 'Oracle',
      year: 'Oct 2025',
      url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=40695D784721EB70512EF37CCF32743C322F1A2F8D33DD4F4E932505B94B72D0',
    },
    {
      title: 'Oracle Cloud Infrastructure Developer Professional',
      organization: 'Oracle',
      year: 'Oct 2025',
      url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=8CEC259C6AA504DD2A1FF8B6E275BFA0AAE82098072AAFF2E3D50E2F1F7B1E80',
    },
    {
      title: 'Social Networks',
      organization: 'Indian Institute of Technology (IIT) Madras',
      year: 'Aug 2024',
      url: 'https://drive.google.com/file/d/1Qv-1J7llaINrtcLWhJzXv8nnq8H0bL88/view?usp=sharing',
    },
    {
      title: 'The Bits and Bytes of Computer Networking',
      organization: 'Google',
      year: 'Aug 2024',
      url: 'https://coursera.org/share/dea6fb1b5dbde0a72e18d02c5566cf66',
    },
    {
      title: 'Responsive Web Design',
      organization: 'freeCodeCamp',
      year: 'Nov 2023',
      url: 'https://drive.google.com/file/d/1tLekMpY9w1W-jWorJlCB-Bpw6ii6ke8Y/view?usp=sharing',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="certifications"
      className="py-24 px-6 md:px-12 lg:px-24 bg-black/50 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`transform transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-[#F1F5F9] mb-16">
            Certifications
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 rounded-2xl p-6 transform transition-all duration-700 hover:-translate-y-2 hover:border-white/30 hover:shadow-[0_0_40px_rgba(255,255,255,0.15),inset_0_0_15px_rgba(255,255,255,0.05)] hover:scale-[1.02] backdrop-blur-sm ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="flex flex-col h-full space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white/10 rounded-xl flex-shrink-0 group-hover:bg-white/20 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-500 group-hover:scale-110">
                    <FileCheck className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white/90 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-gray-200 mb-1 group-hover:text-white transition-colors">
                      {cert.organization}
                    </p>
                    <p className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors">{cert.year}</p>
                  </div>
                </div>

                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto px-4 py-2 border border-white/20 text-white rounded-lg text-sm text-center transition-all duration-300 hover:border-white/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:bg-white/10 hover:scale-105"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
