'use client';

// pages/index.tsx
import About from '@/components/About';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer'; // Add this import
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  return (
    <div className={darkMode ? 'dark' : ''}>

      <div className="bg-white dark:bg-gray-900 min-h-screen font-(family-name:--font-geist-sans)">
        <Head>
          <title>Ketan Solanki | Software Engineer</title>
          <meta name="description" content="Portfolio of Ketan Solanki - Software Engineer specializing in Python and JavaScript" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>

        <Footer /> {/* Uncomment this line */}
      </div>
    </div>
  );
}