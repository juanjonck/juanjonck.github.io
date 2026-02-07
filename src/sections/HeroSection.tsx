import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const textPanelRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const portrait = portraitRef.current;
    const textPanel = textPanelRef.current;
    const headline = headlineRef.current;
    const cta = ctaRef.current;
    const bg = bgRef.current;

    if (!section || !portrait || !textPanel || !headline || !cta || !bg) return;

    const ctx = gsap.context(() => {
      // Initial load animation
      const loadTl = gsap.timeline({ delay: 0.2 });

      // Portrait card entrance
      loadTl.fromTo(portrait,
        { x: '-60vw', opacity: 0, rotateY: 8 },
        { x: 0, opacity: 1, rotateY: 0, duration: 1, ease: 'power2.out' },
        0
      );

      // Text panel entrance
      loadTl.fromTo(textPanel,
        { x: '60vw', opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power2.out' },
        0
      );

      // Headline words stagger
      const words = headline.querySelectorAll('.word');
      loadTl.fromTo(words,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.06, ease: 'power2.out' },
        0.3
      );

      // CTA buttons entrance
      loadTl.fromTo(cta.children,
        { y: 20, scale: 0.96, opacity: 0 },
        { y: 0, scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out' },
        0.6
      );

      // Scroll-driven animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            // Reset to visible when scrolling back to top
            gsap.set([portrait, textPanel], { x: 0, opacity: 1 });
            gsap.set(bg, { scale: 1, y: 0 });
          }
        }
      });

      // Phase 1: ENTRANCE (0%-30%) - subtle background parallax only
      scrollTl.fromTo(bg,
        { y: 0 },
        { y: '-3vh', ease: 'none' },
        0
      );

      // Phase 3: EXIT (70%-100%)
      scrollTl.fromTo(portrait,
        { x: 0, opacity: 1 },
        { x: '-55vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(textPanel,
        { x: 0, opacity: 1 },
        { x: '55vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(bg,
        { scale: 1 },
        { scale: 1.06, y: '-10vh', ease: 'none' },
        0.7
      );

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-pinned z-10">
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover-center"
        style={{ backgroundImage: 'url(/hero_city_bg.jpg)' }}
      >
        <div className="absolute inset-0 gradient-overlay-left" />
      </div>

      {/* Portrait Card */}
      <div
        ref={portraitRef}
        className="absolute glass-card overflow-hidden"
        style={{
          left: '6vw',
          top: '18vh',
          width: '34vw',
          height: '64vh',
          maxWidth: '480px'
        }}
      >
        <img
          src="/hero_portrait.jpg"
          alt="Juan Jonck"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Panel */}
      <div
        ref={textPanelRef}
        className="absolute"
        style={{
          left: '46vw',
          top: '22vh',
          width: '48vw',
          maxWidth: '680px'
        }}
      >
        {/* Label */}
        <p className="font-mono text-sm text-[#A7B1D8] tracking-[0.12em] mb-4">
          FULL STACK DEVELOPER
        </p>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="font-heading font-bold uppercase text-[#F2F5FF] mb-4"
          style={{
            fontSize: 'clamp(36px, 4.5vw, 72px)',
            letterSpacing: '0.08em',
            lineHeight: 1.1
          }}
        >
          <span className="word inline-block">FULL-STACK</span>{' '}
          <span className="word inline-block">CRAFT</span>
        </h1>

        {/* Subheadline */}
        <p className="font-mono text-sm text-[#4F6DFF] tracking-wider mb-6">
          PHP • Laravel • MySQL • Angular • AI/ML
        </p>

        {/* Body */}
        <p className="text-[#A7B1D8] leading-relaxed mb-8 max-w-lg">
          I'm Juan—a senior developer who designs systems, builds APIs, and ships interfaces 
          that stay fast as they grow. Ten years. 147 projects. Still obsessed with the details. 
          Currently exploring AI agents, LangChain, and RAG systems.
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="flex flex-wrap gap-4 mb-6">
          <button className="btn-primary flex items-center gap-2">
            Explore work
            <ArrowRight size={18} />
          </button>
          <button className="btn-secondary">
            Start a project
          </button>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
             className="text-[#A7B1D8] hover:text-[#4F6DFF] transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
             className="text-[#A7B1D8] hover:text-[#4F6DFF] transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:hello@juanjonck.dev"
             className="text-[#A7B1D8] hover:text-[#4F6DFF] transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
