// components/Skills.tsx
import { useState, useEffect, useRef } from 'react';

// Updated style definitions with spacing adjustments
const styles = {
  skillsSection: `relative overflow-hidden py-24 bg-gradient-to-br from-blue-50 to-gray-100 dark:from-blue-950 dark:to-gray-900`, // Removed min-h-screen, increased py-16 to py-24
  floatingBubble1: `absolute top-1/5 left-1/5 w-64 h-64 bg-blue-300/20 dark:bg-blue-600/15 rounded-full blur-3xl`,
  floatingBubble2: `absolute bottom-1/5 right-1/5 w-80 h-80 bg-cyan-300/20 dark:bg-cyan-600/15 rounded-full blur-3xl opacity-80`, // Adjusted positioning
  triangle: `absolute w-0 h-0 border-l-[20px] border-r-[20px] border-b-[34px] border-l-transparent border-r-transparent border-b-blue-200 dark:border-b-blue-800`,
  square: `absolute w-16 h-16 rotate-45 border-4 border-cyan-200 dark:border-cyan-800`,
  terminalContainer: `relative w-full max-w-3xl bg-gray-800/95 dark:bg-gray-900/95 rounded-lg shadow-2xl p-8 backdrop-blur-sm border border-blue-200 dark:border-blue-700`, // Increased p-6 to p-8
  terminalHeader: `flex items-center justify-between mb-6`, // Increased mb-4 to mb-6
  terminalDot: `w-3 h-3 rounded-full mr-2`,
  terminalOutput: `font-mono text-sm text-blue-200 dark:text-cyan-300 leading-relaxed h-[28rem] overflow-y-auto`, // Adjusted h-96 to h-[28rem] for consistency
  commandLine: `flex items-center mb-3`, // Increased mb-2 to mb-3
  prompt: `text-cyan-400 dark:text-blue-400 mr-3`, // Increased mr-2 to mr-3
  commandText: `text-blue-200 dark:text-cyan-200`,
  categoryButton: `px-8 py-4 text-sm font-medium rounded-md transition-all text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-500`, // Increased px-6 py-3 to px-8 py-4
  activeCategoryButton: `bg-blue-600 text-white shadow-md`,
};

interface SkillCategories {
  [key: string]: string[];
}

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('technical');
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const skillCategories: SkillCategories = {
    technical: [
      'Python - Backend & scripting powerhouse',
      'JavaScript - Dynamic web development',
      'React.js - Interactive UI components',
      'Node.js - Server-side JavaScript',
      'Django - Rapid Python web framework',
      'Flask - Lightweight Python backend',
      'HTML/CSS - Web structure & style',
      'SQL - Database management',
      'Git - Version control mastery',
      'Docker - Containerized deployment',
    ],
    soft: [
      'Problem Solving - Tackling complex challenges',
      'Communication - Clear & concise articulation',
      'Teamwork - Collaborative success',
      'Time Management - Efficient task handling',
      'Adaptability - Thriving in change',
      'Leadership - Guiding teams forward',
    ],
    tools: [
      'VS Code - Code editing perfection',
      'GitHub - Code collaboration hub',
      'Jira - Project tracking',
      'Postman - API testing',
      'AWS - Cloud infrastructure',
      'Linux - System administration',
    ],
  };

  useEffect(() => {
    // Parallax effect
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.2}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Typing animation for skills
    setDisplayedLines([]);
    let lineIndex = 0;
    const typeSkills = () => {
      if (lineIndex < skillCategories[activeCategory].length) {
        setDisplayedLines((prev) => [
          ...prev,
          skillCategories[activeCategory][lineIndex],
        ]);
        lineIndex++;
        setTimeout(typeSkills, 300); // Typing speed
      }
    };
    setTimeout(typeSkills, 500); // Initial delay
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [activeCategory]);

  return (
    <section id="skills" className={styles.skillsSection}>
      {/* Parallax Background */}
      <div ref={parallaxRef} className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-40">
        <div className={`${styles.floatingBubble1} animate-pulse`} style={{ animationDuration: '6s' }}></div>
        <div className={`${styles.floatingBubble2} animate-pulse`} style={{ animationDuration: '8s' }}></div>
        <div className={`${styles.triangle} top-1/4 left-1/8 animate-bounce`} style={{ animationDuration: '5s' }}></div> {/* Adjusted positioning */}
        <div className={`${styles.square} bottom-1/4 right-1/5 animate-pulse`} style={{ animationDuration: '7s' }}></div> {/* Adjusted positioning */}
        <div className={`${styles.triangle} bottom-1/5 left-1/4 animate-bounce`} style={{ animationDuration: '4s' }}></div> {/* Adjusted positioning */}
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10"> {/* Increased padding */}
        <div className="text-center mb-16"> {/* Increased mb-12 to mb-16 */}
          <div className="inline-block px-5 py-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6"> {/* Increased px-4 py-2 to px-5 py-3, mb-4 to mb-6 */}
            <p className="text-blue-600 dark:text-blue-400 font-medium">Command Center</p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
            Skills <span className="text-blue-600 dark:text-blue-500">Terminal</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-6"></div> {/* Increased mt-4 to mt-6 */}
        </div>

        <div className="flex justify-center mb-12"> {/* Increased mb-10 to mb-12 */}
          <div className="flex bg-white/90 dark:bg-gray-800/90 rounded-lg p-3 shadow-md backdrop-blur-sm border border-gray-200 dark:border-gray-700 gap-4"> {/* Increased p-2 to p-3, added gap-4 */}
            {Object.keys(skillCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`${styles.categoryButton} ${
                  activeCategory === category ? styles.activeCategoryButton : ''
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <div className={styles.terminalContainer}>
            <div className={styles.terminalHeader}>
              <div className="flex items-center">
                <span className={`${styles.terminalDot} bg-red-500`}></span>
                <span className={`${styles.terminalDot} bg-yellow-500`}></span>
                <span className={`${styles.terminalDot} bg-green-500`}></span>
              </div>
              <span className="text-xs text-blue-400 dark:text-cyan-400">skills@ketan:~$</span>
            </div>
            <div ref={terminalRef} className={styles.terminalOutput}>
              {displayedLines.map((line, index) => (
                <div key={index} className={styles.commandLine}>
                  <span className={styles.prompt}>$</span>
                  <span className={styles.commandText}>{line}</span>
                </div>
              ))}
              <div className={styles.commandLine}>
                <span className={styles.prompt}>$</span>
                <span className="animate-blink text-cyan-400 dark:text-blue-400">|</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;