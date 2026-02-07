import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, GraduationCap, Code2, Database, Globe, Layers, Cpu, Wrench, BookOpen, Users, Lightbulb, Target } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const stats = statsRef.current;
    const content = contentRef.current;

    if (!section || !heading || !stats || !content) return;

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

      // Stats animation
      const statItems = stats.querySelectorAll('.stat-item');
      gsap.fromTo(statItems,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: stats,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Content blocks animation
      const contentBlocks = content.querySelectorAll('.content-block');
      gsap.fromTo(contentBlocks,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: content,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );

    }, section);

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '147', label: 'Projects Completed' },
    { value: '28', label: 'Years Old' }
  ];

  const coreSkills = [
    { name: 'Pure PHP', level: 100 },
    { name: 'MySQL / Database Design', level: 100 },
    { name: 'HTML5 / CSS3 / Bootstrap', level: 100 },
    { name: 'JavaScript / jQuery', level: 100 },
    { name: 'Git', level: 100 },
    { name: 'Laravel', level: 80 },
    { name: 'CodeIgniter', level: 80 },
    { name: 'Angular', level: 60 },
    { name: 'AWS', level: 60 },
    { name: 'Flutter', level: 60 }
  ];

  const aiSkills = [
    { icon: Cpu, label: 'AI Agents & Workflows' },
    { icon: Database, label: 'RAG Systems' },
    { icon: Code2, label: 'LangChain' },
    { icon: Wrench, label: 'Prompt Engineering' },
    { icon: Layers, label: 'Automation' }
  ];

  const softSkills = [
    { icon: Lightbulb, label: 'Quick Learning' },
    { icon: Target, label: 'Problem Solving' },
    { icon: Users, label: 'Team Leadership' },
    { icon: BookOpen, label: 'Technical Documentation' }
  ];

  return (
    <section ref={sectionRef} id="about" className="relative z-[100] bg-[#070A12] py-20 md:py-32">
      {/* Radial gradient background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 30% 0%, rgba(79, 109, 255, 0.06) 0%, transparent 50%)'
        }}
      />

      <div className="relative px-[6vw]">
        {/* Heading */}
        <div ref={headingRef} className="mb-12">
          <p className="font-mono text-sm text-[#4F6DFF] tracking-[0.12em] mb-3">ABOUT ME</p>
          <h2 
            className="font-heading font-bold uppercase text-[#F2F5FF] mb-4"
            style={{
              fontSize: 'clamp(28px, 3.5vw, 52px)',
              letterSpacing: '0.08em',
              lineHeight: 1.1
            }}
          >
            THE DEVELOPER BEHIND THE CODE
          </h2>
          <p className="text-[#A7B1D8] max-w-2xl leading-relaxed">
            Fullstack Developer with core strength in PHP development, including both pure PHP programming 
            and practical experience with Laravel and CodeIgniter frameworks. Proficient in building robust 
            web applications using MySQL, Git, HTML, CSS3, Bootstrap, and JavaScript/jQuery.
          </p>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-3 gap-6 mb-16 max-w-2xl">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item glass-card p-5 text-center">
              <p className="font-heading font-bold text-[#4F6DFF] text-3xl md:text-4xl mb-1">{stat.value}</p>
              <p className="text-[#A7B1D8] text-xs md:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div ref={contentRef} className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Core Skills */}
            <div className="content-block glass-card p-6">
              <div className="flex items-center gap-3 mb-5">
                <Code2 size={20} className="text-[#4F6DFF]" />
                <h3 className="font-heading font-bold text-[#F2F5FF] uppercase tracking-wider">Core Skills</h3>
              </div>
              <div className="space-y-3">
                {coreSkills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-[#A7B1D8]">{skill.name}</span>
                      <span className="text-[#4F6DFF] font-mono">{skill.level}%</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-bar-fill" 
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI & Emerging Tech */}
            <div className="content-block glass-card p-6">
              <div className="flex items-center gap-3 mb-5">
                <Cpu size={20} className="text-[#4F6DFF]" />
                <h3 className="font-heading font-bold text-[#F2F5FF] uppercase tracking-wider">AI & Emerging Tech</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {aiSkills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <skill.icon size={16} className="text-[#4F6DFF]" />
                    <span className="text-[#A7B1D8] text-sm">{skill.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="content-block glass-card p-6">
              <div className="flex items-center gap-3 mb-5">
                <Users size={20} className="text-[#4F6DFF]" />
                <h3 className="font-heading font-bold text-[#F2F5FF] uppercase tracking-wider">Soft Skills</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {softSkills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <skill.icon size={16} className="text-[#4F6DFF]" />
                    <span className="text-[#A7B1D8] text-sm">{skill.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Work Experience */}
            <div className="content-block glass-card p-6">
              <div className="flex items-center gap-3 mb-5">
                <Briefcase size={20} className="text-[#4F6DFF]" />
                <h3 className="font-heading font-bold text-[#F2F5FF] uppercase tracking-wider">Work Experience</h3>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-2 border-[#4F6DFF] pl-4">
                  <p className="font-mono text-xs text-[#4F6DFF] mb-1">Oct 2023 – Present</p>
                  <h4 className="text-[#F2F5FF] font-medium mb-1">Developer — Elemental Web Solutions</h4>
                  <p className="text-[#A7B1D8] text-sm mb-2">Cape Town, Western Cape, South Africa</p>
                  <ul className="text-[#A7B1D8] text-sm space-y-1 list-disc list-inside">
                    <li>Develop robust web applications using PHP, CodeIgniter, Laravel</li>
                    <li>Focus on scalable back-end solutions and database architecture</li>
                    <li>Own complete feature development cycles</li>
                  </ul>
                </div>

                <div className="border-l-2 border-[rgba(242,245,255,0.12)] pl-4">
                  <p className="font-mono text-xs text-[#4F6DFF] mb-1">Jan 2018 – Oct 2023</p>
                  <h4 className="text-[#F2F5FF] font-medium mb-1">Lead Developer — CRT Group</h4>
                  <p className="text-[#A7B1D8] text-sm mb-2">George, Western Cape, South Africa</p>
                  <ul className="text-[#A7B1D8] text-sm space-y-1 list-disc list-inside">
                    <li>Led development of web applications and custom software</li>
                    <li>Mentored and guided developers and interns</li>
                    <li>Managed email setup and technical support</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="content-block glass-card p-6">
              <div className="flex items-center gap-3 mb-5">
                <GraduationCap size={20} className="text-[#4F6DFF]" />
                <h3 className="font-heading font-bold text-[#F2F5FF] uppercase tracking-wider">Education</h3>
              </div>
              
              <div className="space-y-5">
                <div>
                  <p className="font-mono text-xs text-[#4F6DFF] mb-1">Jan 2017 – Dec 2017</p>
                  <h4 className="text-[#F2F5FF] font-medium mb-1">National Certificate: IT – Database Development</h4>
                  <p className="text-[#A7B1D8] text-sm">CTU Training Solutions, Port Elizabeth</p>
                </div>

                <div>
                  <p className="font-mono text-xs text-[#4F6DFF] mb-1">Jan 2016 – Dec 2016</p>
                  <h4 className="text-[#F2F5FF] font-medium mb-1">National Certificate: IT – Systems Development</h4>
                  <p className="text-[#A7B1D8] text-sm">CTU Training Solutions, Port Elizabeth</p>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="content-block glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Globe size={20} className="text-[#4F6DFF]" />
                <h3 className="font-heading font-bold text-[#F2F5FF] uppercase tracking-wider">Interests</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Music', 'Cooking', 'Technology', 'Film', 'Gaming', 'Pets', 'Fishing', 'Sports'].map((interest, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-[rgba(242,245,255,0.05)] border border-[rgba(242,245,255,0.08)] rounded-full text-[#A7B1D8] text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
