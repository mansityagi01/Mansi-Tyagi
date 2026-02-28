import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Code2 } from 'lucide-react';

export default function Projects() {
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

  const projects = [
    {
      title: 'Space News Aggregator with AI Summarization',
      duration: 'Mar 2025 – Apr 2025',
      description:
        'Built a full-stack React application aggregating 50+ daily space news articles via REST APIs. Implemented NLP-based AI summarization engine reducing reading time by 30% while maintaining 95% accuracy. Designed responsive UI components with dynamic filtering and intelligent content organization.',
      tech: ['React', 'Python', 'NLP', 'REST APIs'],
      liveUrl: 'https://example.com/project3',
      githubUrl: 'https://github.com/mansityagi01/project3',
      image: '/images/projects/Space news .png',
    },
    {
      title: 'SBA Loan Default Risk Analytics Dashboard',
      duration: 'Mar 2025 – Apr 2025',
      description:
        'Developed a comprehensive Power BI dashboard analyzing 900,000+ SBA loan records across a $28B+ portfolio to identify default risk patterns. Engineered 25+ DAX measures including loan approval rates, risk scores, and YoY trend analysis with 98% data accuracy. Created drill-through reports for sector-wise and regional risk analysis.',
      tech: ['Power BI', 'DAX', 'SQL', 'Power Query'],
      liveUrl: 'https://drive.google.com/file/d/1LmviGsuyoeo6EvT6yxNLCwg32jq0UffJ/view?usp=sharing',
      githubUrl: 'https://github.com/mansityagi01',
      image: '/images/projects/PowerBi.png',
    },
    {
      title: 'ML-Powered Property Price Prediction System',
      duration: 'Feb 2025 – Apr 2025',
      description:
        'Engineered an end-to-end ML pipeline using XGBoost and Random Forest, achieving 92% R-squared accuracy on property price predictions across 20+ years of historical data. Implemented target encoding and outlier capping techniques, reducing preprocessing time by 45% while improving model generalization. Built interactive ROI heatmaps using Plotly/Dash for real-time investment analysis.',
      tech: ['Python', 'XGBoost', 'Scikit-learn', 'Dash', 'Pandas', 'NumPy'],
      liveUrl: 'https://www.linkedin.com/posts/mansi011_datascience-realestate-python-ugcPost-7316135789531144192-_AjL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEnAtBgBKgwPuTcjgRNg8am3LnAyb6PdX9M',
      githubUrl: 'https://github.com/mansityagi01/Real_Estate_Dashboard_Python',
      image: '/images/projects/Python.png',
    },
    {
      title: 'Real Estate Market Intelligence Dashboard',
      duration: 'Jan 2025 – Feb 2025',
      description:
        'Designed and developed a comprehensive Excel-based real estate dashboard providing real-time market trends, cross-location price comparisons, and data-driven investment insights. Created interactive visualizations and dynamic reports to help stakeholders make informed property investment decisions. Transformed raw market data into actionable business intelligence.',
      tech: ['Microsoft Excel', 'Data Visualization', 'Business Intelligence', 'Data Analytics'],
      liveUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7314879982940430336/?originTrackingId=yZ%2FeXwLTpzh6yDPEPBO4ow%3D%3D',
      githubUrl: 'https://github.com/mansityagi01/Excel_Dashboard',
      image: '/images/projects/Excel.png',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-24 px-6 md:px-12 lg:px-24 bg-black/50 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`transform transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-[#F1F5F9] mb-16">
            Projects
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#7C8896]/50 via-[#7C8896]/30 to-[#7C8896]/50 hidden lg:block transform -translate-x-1/2" />

          <div className="space-y-24">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`relative transform transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 top-1/2 w-4 h-4 rounded-full bg-[#93C5FD] border-4 border-[#0A0F1E] hidden lg:block transform -translate-x-1/2 -translate-y-1/2 z-10" />

                <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center`}>
                  {/* Content Side */}
                  <div className={`space-y-4 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className={`transform transition-all duration-700 delay-100 ${
                      isVisible ? 'opacity-100 translate-x-0' : index % 2 === 0 ? 'opacity-0 -translate-x-8' : 'opacity-0 translate-x-8'
                    }`}>
                      <h3 className="text-2xl md:text-3xl font-semibold text-[#F1F5F9] mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[#7C8896]">{project.duration}</p>
                    </div>

                    <p className={`text-[#94A3B8] leading-relaxed text-base transform transition-all duration-700 delay-200 ${
                      isVisible ? 'opacity-100 translate-x-0' : index % 2 === 0 ? 'opacity-0 -translate-x-8' : 'opacity-0 translate-x-8'
                    }`}>
                      {project.description}
                    </p>

                    <div className={`flex flex-wrap gap-2 pt-2 transform transition-all duration-700 delay-300 ${
                      isVisible ? 'opacity-100 translate-x-0' : index % 2 === 0 ? 'opacity-0 -translate-x-8' : 'opacity-0 translate-x-8'
                    }`}>
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1.5 bg-[#0F172A] border border-[#7C8896]/30 rounded-md text-[#93C5FD] text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className={`flex gap-4 pt-4 transform transition-all duration-700 delay-400 ${
                      isVisible ? 'opacity-100 translate-x-0' : index % 2 === 0 ? 'opacity-0 -translate-x-8' : 'opacity-0 translate-x-8'
                    }`}>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 border border-[#7C8896] text-[#F1F5F9] rounded-lg text-sm transition-all duration-300 hover:border-[#93C5FD] hover:shadow-[0_0_15px_rgba(147,197,253,0.3)] hover:bg-[#93C5FD]/5"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 border border-[#7C8896] text-[#F1F5F9] rounded-lg text-sm transition-all duration-300 hover:border-[#93C5FD] hover:shadow-[0_0_15px_rgba(147,197,253,0.3)] hover:bg-[#93C5FD]/5"
                      >
                        <Code2 className="w-4 h-4" />
                        Source Code
                      </a>
                    </div>
                  </div>

                  {/* Image Side */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block group transform transition-all duration-700 delay-100 ${
                        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}
                    >
                      <div className="relative overflow-hidden rounded-lg border border-[#7C8896]/20 bg-[#111827] aspect-video transition-all duration-300 hover:border-[#93C5FD]/40 hover:shadow-[0_0_30px_rgba(147,197,253,0.15)]">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            // Fallback to gradient if image doesn't exist
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement!.classList.add('bg-gradient-to-br', 'from-[#93C5FD]/20', 'to-[#0A0F1E]');
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="flex items-center gap-2 text-[#93C5FD] font-semibold">
                            <ExternalLink className="w-5 h-5" />
                            <span>View Project</span>
                          </div>
                        </div>
                      </div>
                    </a>
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
