// components/Experience.tsx
import { useEffect, useRef } from 'react';
import { Briefcase, Calendar, Award } from 'lucide-react';

// Style definitions matching previous components
const styles = {
  experienceSection: `min-h-screen relative overflow-hidden flex items-center py-16 bg-gradient-to-br from-gray-800 to-cyan-900 dark:from-gray-950 dark:to-cyan-950`,
  floatingBubble1: `absolute top-1/5 left-1/5 w-72 h-72 bg-blue-300/20 dark:bg-blue-600/15 rounded-full blur-3xl`,
  floatingBubble2: `absolute bottom-1/4 right-1/5 w-96 h-96 bg-cyan-300/20 dark:bg-cyan-600/15 rounded-full blur-3xl opacity-80`,
  triangle: `absolute w-0 h-0 border-l-[20px] border-r-[20px] border-b-[34px] border-l-transparent border-r-transparent border-b-blue-200 dark:border-b-cyan-800`,
  square: `absolute w-16 h-16 rotate-45 border-4 border-cyan-200 dark:border-cyan-800`,
  codeContainer: `relative bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-xl p-6 backdrop-blur-sm border border-gray-200 dark:border-gray-700 transform rotate-3 max-w-2xl w-full`,
  codeHeader: `flex items-center justify-between mb-4`,
  codeDot: `w-3 h-3 rounded-full mr-2`,
  codeBlock: `font-mono text-sm text-gray-800 dark:text-gray-300 leading-relaxed`,
  codeLine: `block mb-1 pl-4 border-l-2 border-blue-400 dark:border-cyan-600`,
  codeHighlight: `text-blue-600 dark:text-cyan-400`,
  techTag: `inline-block px-2 py-0.5 bg-blue-100 dark:bg-cyan-900/30 text-blue-800 dark:text-cyan-300 rounded-full text-xs mr-2 mb-1`,
};

const Experience: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.25}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="experience" className={styles.experienceSection}>
      {/* Parallax Background */}
      <div ref={parallaxRef} className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-40">
        <div className={`${styles.floatingBubble1} animate-pulse`} style={{ animationDuration: '5s' }}></div>
        <div className={`${styles.floatingBubble2} animate-pulse`} style={{ animationDuration: '7s' }}></div>
        <div className={`${styles.triangle} top-1/3 left-1/6 animate-bounce`} style={{ animationDuration: '4s' }}></div>
        <div className={`${styles.square} bottom-1/3 right-1/4 animate-pulse`} style={{ animationDuration: '6s' }}></div>
        <div className={`${styles.triangle} bottom-1/4 left-1/3 animate-bounce`} style={{ animationDuration: '5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-cyan-900/30 rounded-full mb-4">
            <p className="text-blue-600 dark:text-cyan-400 font-medium">Work Log</p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Experience <span className="text-blue-600 dark:text-cyan-500">Timeline</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Senior Software Engineer */}
          <div className={styles.codeContainer}>
            <div className={styles.codeHeader}>
              <div className="flex items-center">
                <span className={`${styles.codeDot} bg-red-500`}></span>
                <span className={`${styles.codeDot} bg-yellow-500`}></span>
                <span className={`${styles.codeDot} bg-green-500`}></span>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">seniorEngineer.js</span>
            </div>
            <div className={styles.codeBlock}>
              <span className={styles.codeLine}>
                <Briefcase size={16} className="inline mr-2 text-blue-600 dark:text-cyan-500" />
                <span className={styles.codeHighlight}>const</span> seniorRole = {`{`}
              </span>
              <span className={styles.codeLine}>
                title: <span className={styles.codeHighlight}>'Senior Software Engineer'</span>,
              </span>
              <span className={styles.codeLine}>
                company: <span className={styles.codeHighlight}>'Tech Innovations Inc.'</span>,
              </span>
              <span className={styles.codeLine}>
                <Calendar size={16} className="inline mr-2 text-blue-600 dark:text-cyan-500" />
                duration: <span className={styles.codeHighlight}>'Jun 2023 - Present'</span>,
              </span>
              <span className={styles.codeLine}>
                description: <span className={styles.codeHighlight}>'Leading development of innovative software solutions...'</span>,
              </span>
              <span className={styles.codeLine}>
                contributions: [
              </span>
              <span className={styles.codeLine}>
                <span className={styles.codeHighlight}>'Crafted scalable Python backends with Flask and Django'</span>,
              </span>
              <span className={styles.codeLine}>
                <span className={styles.codeHighlight}>'Developed responsive React/Next.js frontends'</span>,
              </span>
              <span className={styles.codeLine}>
                <span className={styles.codeHighlight}>'Optimized hardware-software integration for IoT'</span>,
              </span>
              <span className={styles.codeLine}>
                <span className={styles.codeHighlight}>'Mentored junior developers in agile practices'</span>
              </span>
              <span className={styles.codeLine}>
                ],
              </span>
              <span className={styles.codeLine}>
                techStack: [
                  <span className={styles.techTag}>Python</span>
                  <span className={styles.techTag}>JavaScript</span>
                  <span className={styles.techTag}>React</span>
                  <span className={styles.techTag}>Next.js</span>
                  <span className={styles.techTag}>Hardware</span>
                ]
              </span>
              <span className={styles.codeLine}>{`}`}</span>
            </div>
          </div>

          {/* Junior Software Engineer */}
          <div className={styles.codeContainer + ' -rotate-3'}>
            <div className={styles.codeHeader}>
              <div className="flex items-center">
                <span className={`${styles.codeDot} bg-red-500`}></span>
                <span className={`${styles.codeDot} bg-yellow-500`}></span>
                <span className={`${styles.codeDot} bg-green-500`}></span>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">juniorEngineer.js</span>
            </div>
            <div className={styles.codeBlock}>
              <span className={styles.codeLine}>
                <Briefcase size={16} className="inline mr-2 text-blue-600 dark:text-cyan-500" />
                <span className={styles.codeHighlight}>const</span> juniorRole = {`{`}
              </span>
              <span className={styles.codeLine}>
                title: <span className={styles.codeHighlight}>'Junior Software Engineer'</span>,
              </span>
              <span className={styles.codeLine}>
                company: <span className={styles.codeHighlight}>'Tech Innovations Inc.'</span>,
              </span>
              <span className={styles.codeLine}>
                <Calendar size={16} className="inline mr-2 text-blue-600 dark:text-cyan-500" />
                duration: <span className={styles.codeHighlight}>'Jan 2022 - May 2023'</span>,
              </span>
              <span className={styles.codeLine}>
                description: <span className={styles.codeHighlight}>'Began career building web applications...'</span>,
              </span>
              <span className={styles.codeLine}>
                achievements: [
              </span>
              <span className={styles.codeLine}>
                <span className={styles.codeHighlight}>'Built reusable React components for internal tools'</span>,
              </span>
              <span className={styles.codeLine}>
                <span className={styles.codeHighlight}>'Assisted in Python script automation for hardware'</span>,
              </span>
              <span className={styles.codeLine}>
                <span className={styles.codeHighlight}>'Improved app performance through optimization'</span>
              </span>
              <span className={styles.codeLine}>
                ],
              </span>
              <span className={styles.codeLine}>
                techStack: [
                  <span className={styles.techTag}>JavaScript</span>
                  <span className={styles.techTag}>React</span>
                  <span className={styles.techTag}>Python</span>
                  <span className={styles.techTag}>Hardware</span>
                ]
              </span>
              <span className={styles.codeLine}>{`}`}</span>
            </div>
          </div>

          {/* Education */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
            <div className={styles.codeContainer}>
              <div className={styles.codeHeader}>
                <div className="flex items-center">
                  <span className={`${styles.codeDot} bg-red-500`}></span>
                  <span className={`${styles.codeDot} bg-yellow-500`}></span>
                  <span className={`${styles.codeDot} bg-green-500`}></span>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">education.js</span>
              </div>
              <div className={styles.codeBlock}>
                <span className={styles.codeLine}>
                  <Award size={16} className="inline mr-2 text-blue-600 dark:text-cyan-500" />
                  <span className={styles.codeHighlight}>const</span> education = {`{`}
                </span>
                <span className={styles.codeLine}>
                  degree: <span className={styles.codeHighlight}>'B.S. in Computer Science'</span>,
                </span>
                <span className={styles.codeLine}>
                  institution: <span className={styles.codeHighlight}>'University of Technology'</span>,
                </span>
                <span className={styles.codeLine}>
                  <Calendar size={16} className="inline mr-2 text-blue-600 dark:text-cyan-500" />
                  years: <span className={styles.codeHighlight}>'2019 - 2022'</span>
                </span>
                <span className={styles.codeLine}>{`}`}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;