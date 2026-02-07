import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Github, Cpu, Layout, BarChart3 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function PersonalLabSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const label = labelRef.current;
    const headline = headlineRef.current;
    const card = cardRef.current;
    const bg = bgRef.current;

    if (!section || !label || !headline || !card || !bg) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=140%',
          pin: true,
          scrub: 0.6,
        }
      });

      // Phase 1: ENTRANCE (0%-30%)
      scrollTl.fromTo(headline,
        { x: '-60vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(label,
        { y: '-20vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(card,
        { x: '60vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(bg,
        { scale: 1.08, opacity: 0.7 },
        { scale: 1, opacity: 1, ease: 'none' },
        0
      );

      // Phase 3: EXIT (70%-100%)
      scrollTl.fromTo(headline,
        { x: 0, opacity: 1 },
        { x: '-40vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(card,
        { x: 0, opacity: 1 },
        { x: '40vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(bg,
        { scale: 1 },
        { scale: 1.05, ease: 'none' },
        0.7
      );

    }, section);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      icon: BarChart3,
      title: 'DevTools Dashboard',
      desc: 'Metrics for side projects'
    },
    {
      icon: Cpu,
      title: 'AI Agent Experiments',
      desc: 'LangChain + RAG pipelines'
    },
    {
      icon: Layout,
      title: 'UI Component Kit',
      desc: 'Accessible, animatable blocks'
    }
  ];

  return (
    <section ref={sectionRef} className="section-pinned" style={{ zIndex: 90 }}>
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover-center"
        style={{ backgroundImage: 'url(/lab_interior.jpg)' }}
      >
        <div className="absolute inset-0 gradient-overlay-dark" />
      </div>

      {/* Label */}
      <p
        ref={labelRef}
        className="absolute font-mono text-sm text-[#A7B1D8] tracking-[0.12em]"
        style={{ left: '6vw', top: '14vh' }}
      >
        OWN WORK
      </p>

      {/* Headline */}
      <h2
        ref={headlineRef}
        className="absolute font-heading font-bold uppercase text-[#F2F5FF]"
        style={{
          left: '6vw',
          top: '26vh',
          width: '60vw',
          fontSize: 'clamp(42px, 5vw, 84px)',
          letterSpacing: '0.08em',
          lineHeight: 1.05
        }}
      >
        PERSONAL / LAB
      </h2>

      {/* Paragraph Card */}
      <div
        ref={cardRef}
        className="absolute glass-card p-6 md:p-8"
        style={{
          right: '6vw',
          bottom: '10vh',
          width: '38vw',
          minWidth: '320px',
          maxWidth: '500px'
        }}
      >
        <p className="text-[#A7B1D8] leading-relaxed mb-6">
          Experiments in AI, agents, and UI. Most are WIP; all are lessons.
        </p>

        {/* Project List */}
        <div className="space-y-4 mb-6">
          {projects.map((project, i) => (
            <div key={i} className="flex items-start gap-3">
              <project.icon size={18} className="text-[#4F6DFF] mt-1 flex-shrink-0" />
              <div>
                <p className="text-[#F2F5FF] font-medium text-sm">{project.title}</p>
                <p className="text-[#A7B1D8] text-xs">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <a 
          href="https://github.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-link text-[#4F6DFF] font-medium flex items-center gap-2 hover:gap-3 transition-all"
        >
          <Github size={18} />
          See GitHub
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
