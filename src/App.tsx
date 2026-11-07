import React, { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Research } from './components/Research';
import { Education } from './components/Education';
import { Vision } from './components/Vision';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { Toast } from './components/Toast';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleNotify = (message: string) => {
    setToastMessage(message);
  };

  return (
    <div className="min-h-screen bg-[#F7F8FC] dark:bg-[#080B14] text-[#172033] dark:text-[#F8FAFC] transition-colors duration-300 flex flex-col selection:bg-violet-600/30 selection:text-cyan-400">
      {/* Sticky Top Navigation Bar */}
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onNotify={handleNotify} />
        <About />
        <Skills />
        <Projects />
        <Research onNotify={handleNotify} />
        <Education />
        <Vision />
        <Contact onNotify={handleNotify} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to top floating button */}
      <BackToTop />

      {/* Toast Notification Container */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
