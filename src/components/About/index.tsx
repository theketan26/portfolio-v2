// components/About.tsx
import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  closeCodeWizard,
  toggleCodeWizardMinimized,
  toggleCodeWizardHidden,
} from "@/store/slices/codeWizardSlice";
import { Download } from "lucide-react";
import AnimatedButton from "../AnimatedButton";
import ResumeButton from "../ResumeButton";
import { calculateAge } from "@/utils/dateUtils";
import BashWindow from "../BashWindow";

const styles = {
  aboutSection: `min-h-screen relative overflow-hidden flex items-center py-16 bg-gradient-to-br from-gray-100 to-indigo-200 dark:from-gray-950 dark:to-indigo-950`,
  floatingBubble1: `absolute top-1/5 left-1/5 w-72 h-72 bg-indigo-300/20 dark:bg-indigo-600/15 rounded-full blur-3xl`,
  floatingBubble2: `absolute bottom-1/4 right-1/5 w-96 h-96 bg-purple-300/20 dark:bg-purple-600/15 rounded-full blur-3xl opacity-80`,
  floatingBubble3: `absolute top-1/3 right-1/4 w-64 h-64 bg-blue-300/20 dark:bg-blue-600/15 rounded-full blur-3xl`,
  circle: `absolute w-24 h-24 rounded-full border-4 border-indigo-200 dark:border-indigo-800`,
  square: `absolute w-12 h-12 rotate-45 border-4 border-purple-200 dark:border-purple-800`,
  triangle: `absolute w-0 h-0 border-l-[20px] border-r-[20px] border-b-[34px] border-l-transparent border-r-transparent border-b-indigo-200 dark:border-b-indigo-800`,
};

const About: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.scrollY;
        // Enhanced parallax effect with greater movement
        parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const age = calculateAge("2002-10-26");

  return (
    <section id="about" className={styles.aboutSection}>
      {/* Enhanced Parallax Background with more shapes */}
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
          className={`${styles.floatingBubble3} animate-pulse`}
          style={{ animationDuration: "6s" }}
        ></div>
        <div
          className={`${styles.circle} top-1/3 left-1/6 animate-bounce`}
          style={{ animationDuration: "4s" }}
        ></div>
        <div
          className={`${styles.circle} top-1/2 right-1/3 animate-bounce`}
          style={{ animationDuration: "5s" }}
        ></div>
        <div
          className={`${styles.circle} bottom-1/5 left-2/3 animate-bounce`}
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className={`${styles.square} bottom-1/3 right-1/4 animate-pulse`}
          style={{ animationDuration: "6s" }}
        ></div>
        <div
          className={`${styles.circle} bottom-1/4 left-1/3 animate-bounce`}
          style={{ animationDuration: "5s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-4">
            <p className="text-indigo-600 dark:text-indigo-400 font-medium">
              Get to Know Me
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-linear-to-r from-gray-500 to-indigo-400 w-fit mx-auto bg-clip-text text-transparent">
            Ketan <span className="">Solanki</span>
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              My Story
            </h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg mb-6 leading-relaxed">
              I&apos;m Ketan Solanki, a {age}-year-old tech enthusiast who
              turned my childhood curiosity about computers into a career in
              software engineering.
            </p>
            <p className="text-gray-800 dark:text-gray-200 text-lg mb-6 leading-relaxed">
              As a Software Developer Engineer at{" "}
              <a href="https://techdome.io/" target="_blank">
                Techdome Solutions
              </a>
              , I craft solutions with a strong focus on core skill in
              programming language. My love for technology extends beyond
              coding—I’m equally fascinated by computer hardware and how it
              powers our digital world.
            </p>

            <ResumeButton withoutIcon />
            {/* <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="flex items-center">
                <Code size={24} className="text-indigo-400 mr-3" />
                <span className="text-gray-200">Coding Expertise</span>
              </div>
              <div className="flex items-center">
                <Server size={24} className="text-indigo-400 mr-3" />
                <span className="text-gray-200">Server-Side Development</span>
              </div>
              <div className="flex items-center">
                <Monitor size={24} className="text-indigo-400 mr-3" />
                <span className="text-gray-200">UI/UX Development</span>
              </div>
              <div className="flex items-center">
                <Cpu size={24} className="text-indigo-400 mr-3" />
                <span className="text-gray-200">Tech Enthusiast</span>
              </div>
            </div> */}
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <BashWindow
              onClose={() => dispatch(closeCodeWizard())}
              onHidden={() => dispatch(toggleCodeWizardHidden())}
              onMinimized={() => dispatch(toggleCodeWizardMinimized())}
              selector="codeWizard"
              title="codeWizard.js"
              containerClass="-rotate-5"
            >
              {(isMinimized, codeStyles) => (
                <>
                  <span className={codeStyles.codeLine}>
                    <span className={codeStyles.codeHighlight}>class</span>{" "}
                    SoftwareEngineer {` {`}
                    {isMinimized && "...};"}
                  </span>
                  {!isMinimized && (
                    <>
                      <span className={`${codeStyles.codeLine} pl-8`}>
                        constructor() {` {`}
                      </span>
                      <span className={`${codeStyles.codeLine} pl-12`}>
                        this.name ={" "}
                        <span className={`${codeStyles.codeHighlight}`}>
                          &apos;Ketan Solanki&apos;
                        </span>
                        ;
                      </span>
                      <span className={`${codeStyles.codeLine} pl-12`}>
                        this.age ={" "}
                        <span className={`${codeStyles.codeHighlight}`}>
                          {age}
                        </span>
                        ;
                      </span>
                      <span className={`${codeStyles.codeLine} pl-12`}>
                        this.title ={" "}
                        <span className={`${codeStyles.codeHighlight}`}>
                          &apos;Software Developer Engineer&apos;
                        </span>
                        ;
                      </span>
                      <span
                        className={`${codeStyles.codeLine} pl-8`}
                      >{`}`}</span>
                      <span className={`${codeStyles.codeLine} pl-8`}>
                        skills() {` {`}
                      </span>
                      <span className={`${codeStyles.codeLine} pl-12`}>
                        <span className={`${codeStyles.codeHighlight}`}>
                          return
                        </span>{" "}
                        [
                        <span className={`${codeStyles.codeHighlight}`}>
                          &apos;Python&apos;
                        </span>
                        ,
                        <span className={`${codeStyles.codeHighlight}`}>
                          &apos;JS&apos;
                        </span>
                        ,
                        <span className={`${codeStyles.codeHighlight}`}>
                          &apos;SQL&apos;
                        </span>
                        ];
                      </span>
                      <span
                        className={`${codeStyles.codeLine} pl-8`}
                      >{`}`}</span>
                      <span className={`${codeStyles.codeLine} pl-8`}>
                        interests() {` {`}
                      </span>
                      <span className={`${codeStyles.codeLine} pl-12`}>
                        <span className={`${codeStyles.codeHighlight}`}>
                          return
                        </span>{" "}
                        {`{`}
                        hardware:{" "}
                        <span className={`${codeStyles.codeHighlight}`}>
                          true
                        </span>
                        , coding:{" "}
                        <span className={`${codeStyles.codeHighlight}`}>
                          true
                        </span>{" "}
                        {`}`}
                      </span>
                      <span
                        className={`${codeStyles.codeLine} pl-8`}
                      >{`}`}</span>
                      <span className={`${codeStyles.codeLine}`}>{`}`}</span>
                    </>
                  )}
                  <span className={codeStyles.codeLine}>
                    <span className={codeStyles.codeHighlight}>const</span> me ={" "}
                    <span className={codeStyles.codeHighlight}>new</span>{" "}
                    SoftwareEngineer();
                  </span>
                </>
              )}
            </BashWindow>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
