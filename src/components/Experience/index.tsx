// components/Experience.tsx
import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, Award } from 'lucide-react';

// Style definitions matching previous components
const styles = {
  experienceSection: `min-h-screen relative overflow-hidden flex items-center py-16 bg-gradient-to-br from-gray-800 to-cyan-900 dark:from-gray-950 dark:to-cyan-950`,
  floatingBubble1: `absolute top-1/5 left-1/5 w-72 h-72 bg-blue-300/20 dark:bg-blue-600/15 rounded-full blur-3xl`,
  floatingBubble2: `absolute bottom-1/4 right-1/5 w-96 h-96 bg-cyan-300/20 dark:bg-cyan-600/15 rounded-full blur-3xl opacity-80`,
  triangle: `absolute w-0 h-0 border-l-[20px] border-r-[20px] border-b-[34px] border-l-transparent border-r-transparent border-b-blue-200 dark:border-b-cyan-800`,
  square: `absolute w-16 h-16 rotate-45 border-4 border-cyan-200 dark:border-cyan-800`,
  codeContainer: `font-(family-name:--font-geist-mono) relative bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-xl p-6 backdrop-blur-sm border border-gray-200 dark:border-gray-700 transform max-w-2xl w-full`,
  codeContainerExp: `rotate-3`,
  codeContainerEducation: `-rotate-3`,
  codeHeader: `flex items-center justify-between mb-4`,
  codeDot: `w-3 h-3 rounded-full mr-2 cursor-pointer`,
  codeBlock: `font-mono text-sm text-gray-800 dark:text-gray-300 leading-relaxed`,
  codeLine: `block mb-1 pl-4 border-l-2 border-blue-400 dark:border-cyan-600`,
  codeHighlight: `text-blue-600 dark:text-cyan-400`,
  techTag: `inline-block px-2 py-0.5 bg-blue-100 dark:bg-cyan-900/30 text-blue-800 dark:text-cyan-300 rounded-full text-xs mr-2 mb-1`,
};

const Experience: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [isSeniorOpen, setIsSeniorOpen] = useState(true);
  const [isSeniorMinimized, setIsSeniorMinimized] = useState(false);
  const [isSeniorHidden, setIsSeniorHidden] = useState(false);
  // const [isJuniorOpen, setIsJuniorOpen] = useState(true);
  // const [isJuniorMinimized, setIsJuniorMinimized] = useState(false);
  // const [isJuniorHidden, setIsJuniorHidden] = useState(false);
  const [isEducationOpen, setIsEducationOpen] = useState(true);
  const [isEducationMinimized, setIsEducationMinimized] = useState(false);
  const [isEducationHidden, setIsEducationHidden] = useState(false);

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
          {isSeniorOpen && (
            <div className={`${styles.codeContainer} ${styles.codeContainerExp}`}>
              <div className={styles.codeHeader}>
                <div className="flex items-center">
                  <button 
                    className={`${styles.codeDot} bg-red-500`}
                    onClick={() => setIsSeniorOpen(false)}
                  ></button>
                  <button 
                    className={`${styles.codeDot} bg-yellow-500`}
                    onClick={() => setIsSeniorMinimized(!isSeniorMinimized)}
                  ></button>
                  <span 
                    className={`${styles.codeDot} bg-green-500`}
                    onClick={() => setIsSeniorHidden(!isSeniorHidden)}
                  ></span>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">techdomeSolutions.js</span>
              </div>
              {!isSeniorHidden && (
                <div className={styles.codeBlock}>
                  <span className={`${styles.codeLine} pl-4`}>
                    <Briefcase size={16} className="inline mr-2 text-blue-600 dark:text-cyan-500" />
                    <span className={styles.codeHighlight}>const</span> techdomeSolutions = {`{`}{isSeniorMinimized && ('...};')}
                  </span>
                  {!isSeniorMinimized && (
                    <>
                      <span className={`${styles.codeLine} pl-8`}>
                        title: <span className={styles.codeHighlight}>&apos;Software Developer Engineer&apos;</span>,
                      </span>
                      <span className={`${styles.codeLine} pl-8`}>
                        company: <span className={styles.codeHighlight}>&apos;Techdome Solutions Pvt. Ltd.&apos;</span>,
                      </span>
                      <span className={`${styles.codeLine} pl-8`}>
                        duration: <span className={styles.codeHighlight}>&apos;Feb 2024 - Present&apos;</span>,
                      </span>
                      <span className={`${styles.codeLine} pl-8`}>
                        description: <span className={styles.codeHighlight}>&apos;Full stack development on various projects&apos;</span>,
                      </span>
                      <span className={`${styles.codeLine} pl-8`}>
                        contributions: [
                      </span>
                      <span className={`${styles.codeLine} pl-12`}>
                        <span className={styles.codeHighlight}>&apos;Helped fellows in things I know better&apos;</span>
                      </span>
                      <span className={`${styles.codeLine} pl-12`}>
                        <span className={styles.codeHighlight}>&apos;Helped to improve and refactor Sparrow in Svelte and Nest JS&apos;</span>,
                      </span>
                      <span className={`${styles.codeLine} pl-12`}>
                        <span className={styles.codeHighlight}>&apos;Enhanced the Bookmarked in React and TSOA, communicating with clients&apos;</span>,
                      </span>
                      <span className={`${styles.codeLine} pl-12`}>
                        <span className={styles.codeHighlight}>&apos;Re-developing Polytox Web Application&apos;</span>,
                      </span>
                      <span className={`${styles.codeLine} pl-8`}>
                        ],
                      </span>
                      <span className={`${styles.codeLine} pl-8`}>
                        techStack: [
                          <span className={styles.techTag}>React</span>
                          <span className={styles.techTag}>Svelte</span>
                          <span className={styles.techTag}>Next</span>
                          <span className={styles.techTag}>Express</span>
                          <span className={styles.techTag}>PostgreSQL</span>
                          <span className={styles.techTag}>Numpy & Pandas</span>
                        ]
                      </span>
                      <span className={`${styles.codeLine} pl-4`}>{`}`}</span>
                    </>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Education */}
          <div className="mt-12">
            <h3 className="text-center text-2xl font-bold text-white mb-6">Education</h3>
            {isEducationOpen && (
              <div className={`${styles.codeContainer} ${styles.codeContainerEducation}`}>
                <div className={styles.codeHeader}>
                  <div className="flex items-center">
                    <button 
                      className={`${styles.codeDot} bg-red-500`}
                      onClick={() => setIsEducationOpen(false)}
                    ></button>
                    <button 
                      className={`${styles.codeDot} bg-yellow-500`}
                      onClick={() => setIsEducationMinimized(!isEducationMinimized)}
                    ></button>
                    <span 
                      className={`${styles.codeDot} bg-green-500`}
                      onClick={() => setIsEducationHidden(!isEducationHidden)}
                    ></span>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">education.js</span>
                </div>
                {!isEducationHidden && (
                  <div className={styles.codeBlock}>
                    <span className={styles.codeLine}>
                      <Award size={16} className="inline mr-2 text-blue-600 dark:text-cyan-500" />
                      <span className={styles.codeHighlight}>const</span> collegeEducation = {`{`}
                    </span>
                    {!isEducationMinimized && (
                      <>
                        <span className={`${styles.codeLine} pl-8`}>
                          degree: <span className={`${styles.codeHighlight}`}>&apos;Bachelor of Technology&apos;</span>,
                        </span>
                        <span className={`${styles.codeLine} pl-8`}>
                          institution: <span className={`${styles.codeHighlight}`}>&apos;Sushila Devi Bansal College of Technology&apos;</span>,
                        </span>
                        <span className={`${styles.codeLine} pl-8`}>
                          years: <span className={`${styles.codeHighlight}`}>&apos;2020 - 2024&apos;</span>
                        </span>
                      </>
                    )}
                    <span className={styles.codeLine}>{`}`}</span>
                  </div>
                )}

                {!isEducationHidden && (
                  <div className={styles.codeBlock}>
                    <span className={styles.codeLine}>
                      <Award size={16} className="inline mr-2 text-blue-600 dark:text-cyan-500" />
                      <span className={styles.codeHighlight}>const</span> schoolEducation = {`{`}
                    </span>
                    {!isEducationMinimized && (
                      <>
                        <span className={`${styles.codeLine} pl-8`}>
                          school: <span className={`${styles.codeHighlight}`}>&apos;Sarafa Vidya Niketan&apos;</span>,
                        </span>
                        <span className={`${styles.codeLine} pl-8`}>
                          passingYears: <span className={`${styles.codeHighlight}`}>&apos;2020&apos;</span>
                        </span>
                        <span className={`${styles.codeLine} pl-8`}>
                          board: <span className={`${styles.codeHighlight}`}>&apos;Central Board of Education&apos;</span>
                        </span>
                        <span className={`${styles.codeLine} pl-8`}>
                          percentageIn10&12th: <span className={`${styles.codeHighlight}`}>&apos;74%&apos;</span>
                        </span>
                      </>
                    )}
                    <span className={styles.codeLine}>{`}`}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;