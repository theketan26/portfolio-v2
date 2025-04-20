// components/Skills.tsx
import { useState, useEffect, useRef } from "react";
import CustomFollower from "../common/CursorFollower";

// Updated style definitions with spacing adjustments
const styles = {
  skillsSection: `relative overflow-hidden py-24 bg-gradient-to-br from-blue-50 to-gray-100 dark:from-blue-950 dark:to-gray-900`,
  floatingBubble1: `absolute top-1/5 left-1/5 w-64 h-64 bg-blue-300/20 dark:bg-blue-600/15 rounded-full blur-3xl`,
  floatingBubble2: `absolute bottom-1/5 right-1/5 w-80 h-80 bg-cyan-300/20 dark:bg-cyan-600/15 rounded-full blur-3xl opacity-80`,
  triangle: `absolute w-0 h-0 border-l-[20px] border-r-[20px] border-b-[34px] border-l-transparent border-r-transparent border-b-blue-200 dark:border-b-blue-800`,
  square: `absolute w-16 h-16 rotate-45 border-4 border-cyan-200 dark:border-cyan-800`,
  terminalContainer: `font-(family-name:--font-geist-mono) relative w-full max-w-2xl bg-gray-800/95 dark:bg-gray-900/95 rounded-lg shadow-2xl p-8 backdrop-blur-sm border border-blue-200 dark:border-blue-700`,
  terminalHeader: `flex items-center justify-between mb-6`,
  terminalDot: `w-3 h-3 rounded-full mr-2 cursor-pointer`,
  terminalOutput: `font-mono text-sm text-blue-200 dark:text-cyan-300 leading-relaxed h-[16rem] overflow-y-auto`,
  commandLine: `flex items-center mb-3`,
  prompt: `text-cyan-400 dark:text-blue-400 mr-3`,
  commandText: `text-blue-200 dark:text-cyan-200`,
  categoryButton: `px-8 py-4 text-sm font-medium rounded-md transition-all text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-500`,
  activeCategoryButton: `bg-blue-600 text-white shadow-md`,
};

interface SkillCategories {
  [key: string]: string[];
}

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("technical");
  const [displayedLines, setDisplayedLines] = useState<SkillCategories>({
    technical: [],
    soft: [],
    tools: [],
  });
  const [isTerminalOpen, setIsTerminalOpen] = useState(true);
  const [isTerminalMinimized, setIsTerminalMinimized] = useState(false);
  const [isTerminalHidden, setIsTerminalHidden] = useState(false);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const skillCategories: SkillCategories = {
    technical: [
      "Python - Backend & scripting powerhouse",
      "JavaScript - Dynamic web development",
      "React.js - Interactive UI components",
      "Node.js - Server-side JavaScript",
      "Django - Rapid Python web framework",
      "SQL - Database management",
    ],
    soft: [
      "Problem Solving - Tackling complex challenges",
      "Communication - Clear & concise articulation",
      "Teamwork - Collaborative success",
      "Time Management - Efficient task handling",
      "Adaptability - Thriving in change",
      "Leadership - Guiding teams forward",
    ],
    tools: [
      "VS Code - Code editing perfection",
      "Git - Version control mastery",
      "GitHub - Code collaboration hub",
      "AWS - Cloud infrastructure",
      "Linux - System administration",
    ],
  };

  useEffect(() => {
    // Parallax effect
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${
          scrollPosition * 0.2
        }px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Typing animation for skills
    if (!isTerminalOpen || isTerminalHidden) return;

    setDisplayedLines({ technical: [], soft: [], tools: [] });
    let lineIndex = 0;
    const typeSkills = () => {
      if (lineIndex < skillCategories[activeCategory].length) {
        setDisplayedLines((prev: SkillCategories) => ({
          ...prev,
          [activeCategory]: [
            ...prev[activeCategory],
            skillCategories[activeCategory][lineIndex - 1],
          ],
        }));
        lineIndex++;
        setTimeout(typeSkills, 200);
      }
    };
    typeSkills();
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [activeCategory, isTerminalOpen, isTerminalHidden]);

  return (
    <section id="skills" className={styles.skillsSection}>
      <CustomFollower
        key="skill-section"
        cursor="/ts-icon.svg"
        parentElementId="skills"
      />

      {/* Parallax Background */}
      <div
        ref={parallaxRef}
        className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-40"
      >
        <div
          className={`${styles.floatingBubble1} animate-pulse`}
          style={{ animationDuration: "6s" }}
        ></div>
        <div
          className={`${styles.floatingBubble2} animate-pulse`}
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className={`${styles.triangle} top-1/4 left-1/8 animate-bounce`}
          style={{ animationDuration: "5s" }}
        ></div>
        <div
          className={`${styles.square} bottom-1/4 right-1/5 animate-pulse`}
          style={{ animationDuration: "7s" }}
        ></div>
        <div
          className={`${styles.triangle} bottom-1/5 left-1/4 animate-bounce`}
          style={{ animationDuration: "4s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-5 py-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
            <p className="text-blue-600 dark:text-blue-400 font-medium">
              Command Center
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-linear-to-r from-gray-900 dark:from-white to-indigo-400 w-fit mx-auto bg-clip-text text-transparent">
            Skills Terminal
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-6"></div>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex bg-white/90 dark:bg-gray-800/90 rounded-lg p-3 shadow-md backdrop-blur-sm border border-gray-200 dark:border-gray-700 gap-4">
            {Object.keys(skillCategories).map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setIsTerminalOpen(true);
                }}
                className={`${styles.categoryButton} ${
                  activeCategory === category ? styles.activeCategoryButton : ""
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          {isTerminalOpen && (
            <div className={styles.terminalContainer}>
              <div className={styles.terminalHeader}>
                <div className="flex items-center">
                  <button
                    className={`${styles.terminalDot} bg-red-500`}
                    onClick={() => setIsTerminalOpen(false)}
                  ></button>
                  <button
                    className={`${styles.terminalDot} bg-yellow-500`}
                    onClick={() => setIsTerminalMinimized(!isTerminalMinimized)}
                  ></button>
                  <span
                    className={`${styles.terminalDot} bg-green-500`}
                    onClick={() => setIsTerminalHidden(!isTerminalHidden)}
                  ></span>
                </div>
                <span className="text-xs text-blue-400 dark:text-cyan-400">
                  skills@ketan:~$
                </span>
              </div>
              {!isTerminalHidden && (
                <div ref={terminalRef} className={styles.terminalOutput}>
                  {!isTerminalMinimized &&
                    displayedLines[activeCategory].map((line, index) => (
                      <div key={index} className={styles.commandLine}>
                        <span className={styles.prompt}>$</span>
                        <span className={styles.commandText}>{line}</span>
                      </div>
                    ))}
                  {!isTerminalMinimized && (
                    <div className={styles.commandLine}>
                      <span className={styles.prompt}>$</span>
                      <span className="animate-blink text-cyan-400 dark:text-blue-400">
                        |
                      </span>
                    </div>
                  )}
                  {isTerminalMinimized && (
                    <div className={styles.commandLine}>
                      <span className={styles.prompt}>$</span>
                      <span className={styles.commandText}>[Minimized]</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
