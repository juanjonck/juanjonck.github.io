import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './components/Navigation';
import DownloadCVButton from './components/DownloadCVButton';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ProjectOverviewSection from './sections/ProjectOverviewSection';
import ProjectSection from './sections/ProjectSection';
import PersonalLabSection from './sections/PersonalLabSection';
import ContactSection from './sections/ContactSection';

gsap.registerPlugin(ScrollTrigger);

// Project data for client builds
const clientProjects = [
  {
    index: '01',
    title: 'E-COMMERCE PLATFORM',
    meta: 'Client build • Laravel + MySQL + Angular',
    description: 'A multi-tenant storefront with real-time inventory, discount engines, and a responsive checkout that stays snappy under load.',
    image: '/project_01.jpg'
  },
  {
    index: '02',
    title: 'BOOKING ENGINE',
    meta: 'Client build • PHP + CodeIgniter + Bootstrap',
    description: 'Custom scheduling logic, payment hooks, and admin dashboards—built to handle peak-day traffic without surprises.',
    image: '/project_02.jpg'
  },
  {
    index: '03',
    title: 'CRM INTEGRATION',
    meta: 'Client build • Laravel + REST APIs + MySQL',
    description: 'Unified customer data across three services: sync pipelines, conflict resolution, and a clean admin UI for support teams.',
    image: '/project_03.jpg'
  },
  {
    index: '04',
    title: 'ANALYTICS DASHBOARD',
    meta: 'Client build • Angular + PHP + Chart.js',
    description: 'Role-based views, exportable reports, and real-time widgets—designed to turn raw data into decisions.',
    image: '/project_04.jpg'
  },
  {
    index: '05',
    title: 'AUTOMATION LAYER',
    meta: 'Client build • PHP + Laravel Queue + Webhooks',
    description: 'Event-driven workflows, retry logic, and observability—so background jobs fail gracefully and recover quickly.',
    image: '/project_05.jpg'
  }
];

function App() {
  useEffect(() => {
    // Refresh ScrollTrigger after all components mount
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timeout);
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div className="relative bg-[#070A12]">
      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Navigation */}
      <Navigation />

      {/* Floating CV Download Button */}
      <DownloadCVButton />

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Project Overview */}
        <div id="work">
          <ProjectOverviewSection />
        </div>

        {/* Client Projects */}
        {clientProjects.map((project, i) => (
          <ProjectSection
            key={i}
            index={project.index}
            title={project.title}
            meta={project.meta}
            description={project.description}
            image={project.image}
            zIndex={30 + (i + 1) * 10}
          />
        ))}

        {/* Personal Lab */}
        <div id="lab">
          <PersonalLabSection />
        </div>

        {/* Contact */}
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
