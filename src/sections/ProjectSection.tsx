import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ProjectSectionProps {
  index: string;
  title: string;
  meta: string;
  description: string;
  image: string;
  zIndex: number;
}

export default function ProjectSection({ 
  index, 
  title, 
  meta, 
  description, 
  image, 
  zIndex 
}: ProjectSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageCardRef = useRef<HTMLDivElement>(null);
  const textPanelRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const imageCard = imageCardRef.current;
    const textPanel = textPanelRef.current;
    const indexEl = indexRef.current;

    if (!section || !imageCard || !textPanel || !indexEl) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      // Phase 1: ENTRANCE (0%-30%)
      scrollTl.fromTo(imageCard,
        { x: '-70vw', opacity: 0, rotateY: 10 },
        { x: 0, opacity: 1, rotateY: 0, ease: 'none' },
        0
      );

      scrollTl.fromTo(textPanel,
        { x: '70vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(indexEl,
        { y: '-20vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0
      );

      // Phase 3: EXIT (70%-100%)
      scrollTl.fromTo(imageCard,
        { x: 0, opacity: 1 },
        { x: '-55vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(textPanel,
        { x: 0, opacity: 1 },
        { x: '55vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(indexEl,
        { opacity: 1 },
        { opacity: 0, ease: 'power2.in' },
        0.7
      );

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-pinned" style={{ zIndex }}>
      {/* Background */}
      <div className="absolute inset-0 bg-[#070A12]" />

      {/* Project Index */}
      <span
        ref={indexRef}
        className="absolute font-heading font-bold text-[#4F6DFF]"
        style={{
          right: '6vw',
          top: '10vh',
          fontSize: 'clamp(48px, 6vw, 96px)',
          opacity: 0.3
        }}
      >
        {index}
      </span>

      {/* Image Card */}
      <div
        ref={imageCardRef}
        className="absolute glass-card overflow-hidden"
        style={{
          left: '6vw',
          top: '16vh',
          width: '44vw',
          height: '68vh',
          maxWidth: '600px'
        }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Panel */}
      <div
        ref={textPanelRef}
        className="absolute"
        style={{
          left: '54vw',
          top: '18vh',
          width: '40vw',
          maxWidth: '520px'
        }}
      >
        {/* Title */}
        <h2
          className="font-heading font-bold uppercase text-[#F2F5FF] mb-3"
          style={{
            fontSize: 'clamp(28px, 3.2vw, 52px)',
            letterSpacing: '0.08em',
            lineHeight: 1.1
          }}
        >
          {title}
        </h2>

        {/* Meta */}
        <p className="font-mono text-sm text-[#4F6DFF] tracking-wider mb-6">
          {meta}
        </p>

        {/* Description */}
        <p className="text-[#A7B1D8] leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
