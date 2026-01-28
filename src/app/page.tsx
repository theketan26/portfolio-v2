'use client';

// pages/index.tsx
import About from '@/components/About';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer'; 
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { showCustomToast } from '@/components/common/CustomToast';
import { useAppSelector } from '@/store/hooks';
import Taskbar from '@/components/common/Taskbar';

export default function Home() {
  const darkMode = useAppSelector((state) => state.theme.darkMode);

  useEffect(() => {
    showCustomToast(
      "Try clicking on the red, yellow and green dots on the top left of information windows.",
      2000
    );
  }, [])

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Toaster />

      <div className="bg-white dark:bg-gray-900 min-h-screen font-(family-name:--font-geist-sans)">
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>
      
      <Taskbar />
    </div>
  );
}