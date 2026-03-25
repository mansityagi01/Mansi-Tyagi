import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';

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
  ];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const subject = String(formData.get('subject') || 'Portfolio Contact').trim();
    const message = String(formData.get('message') || '').trim();

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    const mailtoUrl = `mailto:mansityagi472@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    window.location.href = mailtoUrl;
  };

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
            Let&apos;s connect and build something remarkable together.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 items-stretch">
          <div
            className={`h-full flex flex-col bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-sm transform transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } lg:self-start`}
          >
            <h3 className="text-2xl font-semibold text-white mb-3">Get In Touch</h3>
            <p className="text-[#94A3B8] mb-8 leading-relaxed">
              Have a project idea, internship opportunity, or collaboration in mind? Send a message and I&apos;ll get back quickly.
            </p>

            <div className="space-y-4">
              {contactLinks.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <a
                    key={index}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-[#93C5FD]/60 hover:bg-white/[0.06]"
                  >
                    <div className="p-3 bg-white/10 rounded-xl group-hover:bg-[#93C5FD]/20 transition-all duration-300">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wide text-[#7C8896] mb-1">
                        {contact.label}
                      </p>
                      <p className="text-[#F1F5F9] group-hover:text-[#BAE6FD] transition-colors duration-300 break-all">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className={`h-full flex flex-col bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-sm transform transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } lg:self-start`}
          >
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <label className="block">
                <span className="text-sm text-[#9AA8B8] mb-2 block">Full Name</span>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-white/15 bg-slate-900/70 px-4 py-3 text-[#F1F5F9] placeholder:text-slate-500 outline-none focus:border-[#93C5FD]/70 focus:ring-2 focus:ring-[#93C5FD]/30 transition-all"
                />
              </label>

              <label className="block">
                <span className="text-sm text-[#9AA8B8] mb-2 block">Email Address</span>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-white/15 bg-slate-900/70 px-4 py-3 text-[#F1F5F9] placeholder:text-slate-500 outline-none focus:border-[#93C5FD]/70 focus:ring-2 focus:ring-[#93C5FD]/30 transition-all"
                />
              </label>
            </div>

            <label className="block mb-5">
              <span className="text-sm text-[#9AA8B8] mb-2 block">Subject</span>
              <input
                name="subject"
                type="text"
                required
                placeholder="How can I help you?"
                className="w-full rounded-xl border border-white/15 bg-slate-900/70 px-4 py-3 text-[#F1F5F9] placeholder:text-slate-500 outline-none focus:border-[#93C5FD]/70 focus:ring-2 focus:ring-[#93C5FD]/30 transition-all"
              />
            </label>

            <label className="block mb-6">
              <span className="text-sm text-[#9AA8B8] mb-2 block">Message</span>
              <textarea
                name="message"
                rows={6}
                required
                placeholder="Write your message..."
                className="w-full resize-none rounded-xl border border-white/15 bg-slate-900/70 px-4 py-3 text-[#F1F5F9] placeholder:text-slate-500 outline-none focus:border-[#93C5FD]/70 focus:ring-2 focus:ring-[#93C5FD]/30 transition-all"
              />
            </label>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-[#0EA5E9] px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-[#0284C7] hover:shadow-[0_0_24px_rgba(14,165,233,0.45)]"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </div>

        <div
          className={`mt-8 bg-gradient-to-r from-white/[0.06] to-white/[0.02] border border-white/10 rounded-2xl px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 transform transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '180ms' }}
        >
          <p className="text-[#9FB2C8] text-sm md:text-base">
            Professional Profiles
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm md:text-base">
            <a
              href="https://github.com/mansityagi01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F1F5F9] hover:text-[#93C5FD] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/mansi011"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F1F5F9] hover:text-[#93C5FD] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://leetcode.com/u/Mansi_Tyagi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F1F5F9] hover:text-[#93C5FD] transition-colors"
            >
              LeetCode
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
