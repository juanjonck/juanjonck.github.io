import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MapPin, Calendar, Twitter, Facebook, Instagram, Linkedin, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const details = detailsRef.current;
    const footer = footerRef.current;

    if (!section || !heading || !details || !footer) return;

    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(heading,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: heading,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Details stagger animation
      const detailItems = details.querySelectorAll('.detail-item');
      gsap.fromTo(detailItems,
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: details,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Footer fade
      gsap.fromTo(footer,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: footer,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      );

    }, section);

    return () => ctx.revert();
  }, []);

  const contactDetails = [
    { icon: Mail, label: 'Email', value: 'hello@juanjonck.dev', href: 'mailto:hello@juanjonck.dev' },
    { icon: MapPin, label: 'Location', value: 'South Africa (UTC+2)' },
    { icon: Calendar, label: 'Availability', value: 'Open for Q2 projects' }
  ];

  const socials = [
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' }
  ];

  return (
    <section ref={sectionRef} id="contact" className="relative z-[100] bg-[#070A12] py-20 md:py-32">
      {/* Radial gradient background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(79, 109, 255, 0.08) 0%, transparent 50%)'
        }}
      />

      <div className="relative px-[6vw]">
        {/* Heading Block */}
        <div ref={headingRef} className="max-w-[980px] mb-12">
          <p className="font-mono text-sm text-[#4F6DFF] tracking-[0.12em] mb-3">GET IN TOUCH</p>
          <h2 
            className="font-heading font-bold uppercase text-[#F2F5FF] mb-4"
            style={{
              fontSize: 'clamp(28px, 3.5vw, 52px)',
              letterSpacing: '0.08em',
              lineHeight: 1.1
            }}
          >
            LET'S BUILD SOMETHING SOLID.
          </h2>
          <p className="text-[#A7B1D8] text-lg max-w-xl">
            Tell me what you're shipping. I'll reply within 2 business days.
          </p>
        </div>

        {/* Contact Details */}
        <div ref={detailsRef} className="max-w-2xl mb-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {contactDetails.map((detail, i) => (
              <div key={i} className="detail-item glass-card p-5">
                <div className="w-10 h-10 rounded-lg bg-[rgba(79,109,255,0.1)] flex items-center justify-center mb-3">
                  <detail.icon size={18} className="text-[#4F6DFF]" />
                </div>
                <p className="text-[#A7B1D8] text-sm mb-1">{detail.label}</p>
                {detail.href ? (
                  <a 
                    href={detail.href}
                    className="text-[#F2F5FF] font-medium hover:text-[#4F6DFF] transition-colors"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <p className="text-[#F2F5FF] font-medium">{detail.value}</p>
                )}
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="glass-card p-6">
            <p className="text-[#A7B1D8] text-sm mb-4">Connect with me</p>
            <div className="flex items-center gap-4">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 rounded-xl bg-[rgba(242,245,255,0.05)] border border-[rgba(242,245,255,0.08)] flex items-center justify-center text-[#A7B1D8] hover:text-[#4F6DFF] hover:border-[#4F6DFF] transition-all"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer ref={footerRef} className="border-t border-[rgba(242,245,255,0.08)] px-[6vw] py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#A7B1D8] text-sm">
            © {new Date().getFullYear()} Juan Jonck. Built with React + GSAP.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[#A7B1D8] text-sm hover:text-[#4F6DFF] transition-colors">Privacy</a>
            <a href="#" className="text-[#A7B1D8] text-sm hover:text-[#4F6DFF] transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </section>
  );
}
