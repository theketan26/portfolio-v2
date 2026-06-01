// components/Skills.tsx
import { useState, useEffect, useRef } from "react";
import CustomFollower from "../common/CursorFollower";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  closeTerminal,
  toggleTerminalMinimized,
  toggleTerminalHidden,
  openTerminal,
} from "@/store/slices/terminalSlice";
import BashWindow from "../BashWindow";

// Updated style definitions with spacing adjustments
const styles = {
  skillsSection: `relative overflow-hidden py-24 bg-gradient-to-br from-blue-50 to-gray-100 dark:from-blue-950 dark:to-gray-900`,
  floatingBubble1: `absolute top-1/5 left-1/5 w-64 h-64 bg-blue-300/20 dark:bg-blue-600/15 rounded-full blur-3xl`,
  floatingBubble2: `absolute bottom-1/5 right-1/5 w-80 h-80 bg-cyan-300/20 dark:bg-cyan-600/15 rounded-full blur-3xl opacity-80`,
  triangle: `absolute w-0 h-0 border-l-[20px] border-r-[20px] border-b-[34px] border-l-transparent border-r-transparent border-b-blue-200 dark:border-b-blue-800`,
  square: `absolute w-16 h-16 rotate-45 border-4 border-cyan-200 dark:border-cyan-800`,
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
  const dispatch = useAppDispatch();
  const { isOpen: isTerminalOpen, isHidden: isTerminalHidden } = useAppSelector(
    (state) => state.terminal,
  );
  const [activeCategory, setActiveCategory] = useState<string>("technical");
  const [displayedLines, setDisplayedLines] = useState<SkillCategories>({
    technical: [],
    soft: [],
    tools: [],
  });
  const parallaxRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const skillCategories: SkillCategories = {
    language: ["TypeScript", "JavaScript", "Python", "Java", "SQL"],
    Frontend: [
      "React JS",
      "Next JS",
      "Svelte JS",
      "Tailwind CSS",
      "Framer Motion",
      "Redux",
      "Zod",
    ],
    Backend: [
      "Node JS",
      "Express JS",
      "TSOA",
      "PostgreSQL",
      "MongoDB",
      "Prisma ORM",
      "Django",
    ],
    "Cloud_&_Tools": [
      "AWS (Lambda, S3, SES)",
      "Azure (Blob)",
      "Firebase",
      "Git",
      "Github",
      "Linux",
      "Figma",
      "Docker",
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

  // useEffect(() => {
  //   // Typing animation for skills
  //   if (!isTerminalOpen || isTerminalHidden) return;

  //   setDisplayedLines({ technical: [], soft: [], tools: [] });
  //   let lineIndex = 0;
  //   const typeSkills = () => {
  //     if (lineIndex < skillCategories[activeCategory].length) {
  //       setDisplayedLines((prev: SkillCategories) => ({
  //         ...prev,
  //         [activeCategory]: [
  //           ...prev[activeCategory],
  //           skillCategories[activeCategory][lineIndex - 1],
  //         ],
  //       }));
  //       lineIndex++;
  //       setTimeout(typeSkills, 200);
  //     }
  //   };
  //   typeSkills();
  //   if (terminalRef.current) {
  //     terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
  //   }
  // }, [activeCategory, isTerminalOpen, isTerminalHidden]);

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

        <div className="flex justify-center">
          <BashWindow
            selector="terminal"
            title="skills@ketan:~$"
            onClose={() => dispatch(closeTerminal())}
            onMinimized={() => dispatch(toggleTerminalMinimized())}
            onHidden={() => dispatch(toggleTerminalHidden())}
            containerClass="md:w-full md:justify-center h-auto"
            codeContainerClass="h-auto max-w-full !min-w-full md:w-auto"
            codeBlockClass="h-auto"
            visualContainerClass="h-auto"
          >
            {(isMinimized) => (
              <>
                <div ref={terminalRef}>
                  <div className="grid md:grid-cols-2 h-full gap-5">
                    {Object.keys(skillCategories).map((category) => (
                      <div key={category} className={`flex h-full flex-col`}>
                        <div className="flex gap-2">
                          <span className="text-cyan-400">$</span>
                          <span className="text-white">
                            {(
                              category.charAt(0).toUpperCase() +
                              category.slice(1)
                            ).replaceAll("_", " ")}
                          </span>
                        </div>
                        {isMinimized ? (
                          <>[...]</>
                        ) : (
                          <div className="flex-wrap gap-3 flex mt-5 mb-8">
                            {skillCategories[category].map((skill) => (
                              <div key={skill} className="p-2 bg-gray-700/50">
                                {skill}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </BashWindow>
        </div>
      </div>
    </section>
  );
};

export default Skills;
