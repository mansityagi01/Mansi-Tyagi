import { useEffect, useRef, useState } from 'react';

export default function Certifications() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);

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
      image: '/images/projects/data Science OCI.png',
    },
    {
      title: 'Oracle Cloud Infrastructure Developer Professional',
      organization: 'Oracle',
      year: 'Oct 2025',
      url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=8CEC259C6AA504DD2A1FF8B6E275BFA0AAE82098072AAFF2E3D50E2F1F7B1E80',
      image: '/images/projects/Developer OCI.png',
    },
    {
      title: 'Social Networks',
      organization: 'Indian Institute of Technology (IIT) Madras',
      year: 'Aug 2024',
      url: 'https://drive.google.com/file/d/1Qv-1J7llaINrtcLWhJzXv8nnq8H0bL88/view?usp=sharing',
      image: '/images/projects/Social Networks.png',
    },
    {
      title: 'The Bits and Bytes of Computer Networking',
      organization: 'Google',
      year: 'Aug 2024',
      url: 'https://coursera.org/share/dea6fb1b5dbde0a72e18d02c5566cf66',
      image: '/images/projects/Bits and Bytes.png',
    },
    {
      title: 'Responsive Web Design',
      organization: 'freeCodeCamp',
      year: 'Nov 2023',
      url: 'https://drive.google.com/file/d/1tLekMpY9w1W-jWorJlCB-Bpw6ii6ke8Y/view?usp=sharing',
      image: '/images/projects/Responsive web.png',
    },
  ];

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    isDraggingRef.current = true;
    startXRef.current = event.pageX - sliderRef.current.offsetLeft;
    startScrollLeftRef.current = sliderRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDraggingRef.current = false;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current || !isDraggingRef.current) return;
    event.preventDefault();
    const x = event.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.2;
    sliderRef.current.scrollLeft = startScrollLeftRef.current - walk;
  };

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      event.preventDefault();
      sliderRef.current.scrollLeft += event.deltaY;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="certifications"
      className="py-24 bg-black/50 backdrop-blur-md overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div
          className={`transform transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-[#F1F5F9] mb-16">
            Certifications
          </h2>
        </div>
      </div>

      <div className="relative left-1/2 w-screen -translate-x-1/2 px-6 md:px-12 lg:px-16">
        <div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onWheel={handleWheel}
          className="no-scrollbar flex gap-7 overflow-x-auto overflow-y-hidden pb-6 snap-x snap-mandatory cursor-grab active:cursor-grabbing"
        >
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`group min-w-[340px] md:min-w-[480px] max-w-[520px] snap-start bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 rounded-2xl p-7 transform transition-all duration-700 hover:-translate-y-2 hover:border-[#93C5FD]/60 hover:shadow-[0_0_45px_rgba(147,197,253,0.25),inset_0_0_20px_rgba(147,197,253,0.08)] hover:scale-[1.02] backdrop-blur-sm ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="flex flex-col h-full gap-5">
                <div className="w-full rounded-xl bg-slate-950/65 border border-white/10 p-3 overflow-hidden">
                  <div className="aspect-[4/3] w-full rounded-lg bg-white/95 overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      loading="lazy"
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2 group-hover:text-[#E0F2FE] transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-200 mb-1 group-hover:text-white transition-colors">
                    {cert.organization}
                  </p>
                  <p className="text-xs md:text-sm text-gray-400 group-hover:text-gray-200 transition-colors">{cert.year}</p>
                </div>

                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto px-4 py-2 border border-white/20 text-white rounded-lg text-sm text-center transition-all duration-300 hover:border-[#93C5FD]/80 hover:shadow-[0_0_20px_rgba(147,197,253,0.35)] hover:bg-[#93C5FD]/10 hover:scale-105"
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
