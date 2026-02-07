import { Download } from 'lucide-react';

export default function DownloadCVButton() {
  return (
    <a
      href="/Juan_Jonck_CV.pdf"
      download
      className="fixed bottom-6 right-6 z-[300] group"
      aria-label="Download CV"
    >
      <div className="flex items-center gap-3 bg-[#4F6DFF] hover:bg-[#3d5ce6] text-white px-5 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <Download size={20} className="group-hover:animate-bounce" />
        <span className="font-medium text-sm hidden sm:inline">Download CV</span>
      </div>
    </a>
  );
}
