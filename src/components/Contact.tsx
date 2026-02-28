import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, Linkedin, Code2 } from 'lucide-react';

export default function Contact() {
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

  const contactLinks = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-9368809472',
      href: 'tel:+919368809472',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'mansityagi472@gmail.com',
      href: 'mailto:mansityagi472@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/mansi011',
      href: 'https://linkedin.com/in/mansi011',
    },
    {
      icon: Code2,
      label: 'GitHub',
      value: 'github.com/mansityagi01',
      href: 'https://github.com/mansityagi01',
    },
    {
      icon: Code2,
      label: 'LeetCode',
      value: 'leetcode.com/u/Mansi_Tyagi',
      href: 'https://leetcode.com/u/Mansi_Tyagi',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 px-6 md:px-12 lg:px-24 bg-black/50 backdrop-blur-md"
    >
      <div className="max-w-5xl mx-auto">
        <div
          className={`transform transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-[#F1F5F9] mb-4">
            Contact
          </h2>
          <p className="text-lg text-[#94A3B8] mb-12">
            Let's connect and build something remarkable together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {contactLinks.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <a
                key={index}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`group bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 rounded-2xl p-6 transform transition-all duration-700 hover:-translate-y-2 hover:border-white/30 hover:shadow-[0_0_40px_rgba(255,255,255,0.15),inset_0_0_15px_rgba(255,255,255,0.05)] hover:scale-[1.02] backdrop-blur-sm ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 group-hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-all duration-500 group-hover:scale-110">
                    <IconComponent className="w-6 h-6 text-white transition-transform group-hover:rotate-12" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-[#7C8896] mb-1">
                      {contact.label}
                    </p>
                    <p className="text-[#F1F5F9] group-hover:text-[#93C5FD] transition-colors duration-300 relative inline-block">
                      {contact.value}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-[#93C5FD] group-hover:w-full transition-all duration-300" />
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
