// components/Experience.tsx
import { useEffect, useRef } from "react";
import BashWindow from "../BashWindow";
import { Briefcase, Award } from "lucide-react";
import { useAppDispatch } from "@/store/hooks";
import {
  closeSenior,
  toggleSeniorMinimized,
  toggleSeniorHidden,
} from "@/store/slices/seniorOpenSlice";
import {
  closeEducation,
  toggleEducationMinimized,
  toggleEducationHidden,
} from "@/store/slices/educationOpenSlice";

// Style definitions matching previous components
const styles = {
  experienceSection: `min-h-screen relative overflow-hidden flex items-center justify-center py-16 bg-gradient-to-br from-gray-200 to-cyan-200 dark:from-gray-950 dark:to-cyan-950`,
  floatingBubble1: `absolute top-1/5 left-1/5 w-72 h-72 bg-blue-300/20 dark:bg-blue-600/15 rounded-full blur-3xl`,
  floatingBubble2: `absolute bottom-1/4 right-1/5 w-96 h-96 bg-cyan-300/20 dark:bg-cyan-600/15 rounded-full blur-3xl opacity-80`,
  triangle: `absolute w-0 h-0 border-l-[20px] border-r-[20px] border-b-[34px] border-l-transparent border-r-transparent border-b-blue-200 dark:border-b-cyan-800`,
  square: `absolute w-16 h-16 rotate-45 border-4 border-cyan-200 dark:border-cyan-800`,
  codeBlock: `font-mono text-sm text-gray-800 dark:text-gray-300 leading-relaxed`,
  codeLine: `block mb-1 pl-4 border-l-2 border-blue-400 dark:border-cyan-600`,
  codeHighlight: `text-blue-600 dark:text-cyan-400`,
  techTag: `inline-block px-2 py-0.5 bg-blue-100 dark:bg-cyan-900/30 text-blue-800 dark:text-cyan-300 rounded-full text-xs mr-2 mb-1`,
};

const Experience: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.25}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="experience" className={styles.experienceSection}>
      {/* Parallax Background */}
      <div
        ref={parallaxRef}
        className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-40"
      >
        <div
          className={`${styles.floatingBubble1} animate-pulse`}
          style={{ animationDuration: "5s" }}
        ></div>
        <div
          className={`${styles.floatingBubble2} animate-pulse`}
          style={{ animationDuration: "7s" }}
        ></div>
        <div
          className={`${styles.triangle} top-1/3 left-1/6 animate-bounce`}
          style={{ animationDuration: "4s" }}
        ></div>
        <div
          className={`${styles.square} bottom-1/3 right-1/4 animate-pulse`}
          style={{ animationDuration: "6s" }}
        ></div>
        <div
          className={`${styles.triangle} bottom-1/4 left-1/3 animate-bounce`}
          style={{ animationDuration: "5s" }}
        ></div>
      </div>

      <div className="relative z-10 flex flex-col gap-20">
        <div className="text-center">
          <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-cyan-900/30 rounded-full mb-4">
            <p className="text-blue-600 dark:text-cyan-400 font-medium">
              Work Log
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-linear-to-r from-gray-500 dark:from-gray-200 to-blue-600 dark:to-cyan-500 w-fit mx-auto bg-clip-text text-transparent">
            Experience Timeline
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
        </div>

        <div className="mx-auto flex gap-8 xl:flex-row flex-col">
          <div>
            <h3 className="xl:text-left text-center text-2xl font-bold text-white">
              Work Experience
            </h3>
            <BashWindow
              selector="seniorOpen"
              title="techdomeSolutions.js"
              onClose={() => dispatch(closeSenior())}
              onMinimized={() => dispatch(toggleSeniorMinimized())}
              onHidden={() => dispatch(toggleSeniorHidden())}
              containerClass="md:w-full md:justify-center"
            >
              {(isMinimized, codeStyle) => (
                <>
                  <span className={`${codeStyle.codeLine}`}>
                    <span className="text-gray-400">
                      guest@ksolanki:~/experience
                    </span>
                    <span className="text-cyan-400"> $ </span>cat techdome.info
                  </span>
                  {!isMinimized ? (
                    <>[...]</>
                  ) : (
                    <div className="flex flex-col gap-4">
                      <div>
                        <div className="text-2xl text-cyan-400 font-bold">
                          Software Development Engineer I
                        </div>
                        <div className="text-xl">
                          Techdome Solutions Pvt. Ltd.
                        </div>
                      </div>

                      <div>
                        {[
                          "Full stack development on various projects.",
                          "Helped fellows in areas of expertise.",
                          "Improved and refactored Sparrow in Svelte and Nest JS.",
                          "Enhanced Bookmarked in React and TSOA, client communication.",
                          "Re-developing Polytox Web Application.",
                        ].map((line, i) => (
                          <div key={i}>
                            <span className="text-cyan-400 font-extralight">
                              -
                            </span>{" "}
                            {line}
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col gap-y-2">
                        <span>TECH STACK</span>

                        <div className="flex flex-wrap gap-2">
                          {[
                            "React",
                            "Next",
                            "Nest",
                            "Node",
                            "Express",
                            "FastAPI",
                            "MongoDB",
                            "PostgreSQL",
                          ].map((stack, i) => (
                            <span
                              key={i}
                              className="px-1 py-0.5 bg-gray-50/20 text-xs"
                            >
                              {stack}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </BashWindow>
          </div>

          {/* Education */}
          <div>
            <h3 className="xl:text-left text-center text-2xl font-bold text-white">
              Education
            </h3>
            <BashWindow
              selector="educationOpen"
              title="education.js"
              onClose={() => dispatch(closeEducation())}
              onMinimized={() => dispatch(toggleEducationMinimized())}
              onHidden={() => dispatch(toggleEducationHidden())}
              containerClass="md:w-full md:justify-center"
            >
              {(isMinimized, codeStyle) => (
                <div className="flex flex-col gap-4">
                  <div>
                    <span className={codeStyle.codeLine + "mb-0"}>
                      <span className={`${codeStyle.codeLine}`}>
                        <span className="text-gray-400">
                          visitor@ketan:~/education
                        </span>
                        <span className="text-cyan-400"> $ </span>cat cat
                        btech.txt
                      </span>
                    </span>

                    {isMinimized ? (
                      <>[...]</>
                    ) : (
                      <div className="flex flex-col gap-4">
                        <div>
                          <div className="text-2xl text-cyan-400 font-bold">
                            Bachelor of Technology
                          </div>
                          <div className="text-xl">
                            Sushila Devi Bansal College of Technology
                          </div>
                        </div>

                        <div className="flex flex-row gap-y-2">
                          <span>Status: </span>

                          <div className="flex flex-wrap gap-2">
                            <span className="px-1 py-0.5 bg-gray-50/20 text-xs">
                              GRADUATE
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    <span className={codeStyle.codeLine + "mb-0"}>
                      <span className={`${codeStyle.codeLine}`}>
                        <span className="text-gray-400">
                          visitor@ketan:~/education
                        </span>
                        <span className="text-cyan-400"> $ </span>cat cat he.txt
                      </span>
                    </span>

                    {isMinimized ? (
                      <>[...]</>
                    ) : (
                      <div className="flex flex-col gap-4">
                        <div>
                          <div className="text-2xl text-cyan-400 font-bold">
                            Higher Secondary Education
                          </div>
                          <div className="text-xl">Sarafa Vidya Niketan</div>
                        </div>

                        <div className="flex flex-row gap-y-2">
                          <span>Status: </span>

                          <div className="flex flex-wrap gap-2">
                            <span className="px-1 py-0.5 bg-gray-50/20 text-xs">
                              Passed with 74% Score
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </BashWindow>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
