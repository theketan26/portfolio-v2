// components/Hero.tsx
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

// Updated style definitions with increased spacing
const styles = {
  heroSection: `min-h-screen relative overflow-hidden flex items-center py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950`, // Increased py-16 to py-24
  
  // Animated background elements with adjusted positioning
  floatingBubble1: `absolute top-1/5 left-1/5 w-64 h-64 bg-blue-300/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse`,
  floatingBubble2: `absolute bottom-1/5 right-1/5 w-80 h-80 bg-indigo-300/20 dark:bg-indigo-600/10 rounded-full blur-3xl opacity-80 animate-pulse`, // Adjusted positioning
  floatingBubble3: `absolute -top-20 -right-20 w-64 h-64 bg-purple-300/10 dark:bg-purple-600/10 rounded-full blur-3xl opacity-70 animate-pulse`, // Increased offset
  
  // Geometric shapes with more spread
  circle: `absolute w-32 h-32 rounded-full border-4 border-blue-200 dark:border-blue-800 animate-bounce`,
  square: `absolute w-16 h-16 rotate-45 border-4 border-indigo-200 dark:border-indigo-800 animate-pulse`,
  triangle: `absolute w-0 h-0 border-l-[30px] border-r-[30px] border-b-[52px] border-l-transparent border-r-transparent border-b-blue-200 dark:border-b-blue-800 animate-bounce`,
  
  // Button styles with increased padding and gap
  primaryButton: `px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full shadow-lg transition-colors flex items-center`, // Increased px-8 py-4 to px-10 py-5
  secondaryButton: `px-10 py-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-500 font-medium rounded-full shadow-md hover:shadow-lg transition-all`, // Increased px-8 py-4 to px-10 py-5
  
  // Social icon styles with more padding
  socialIcon: `p-4 bg-white dark:bg-gray-800 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500 rounded-full shadow-md hover:shadow-lg transition-all`, // Increased p-3 to p-4
  
  // Visual element container with adjusted height
  visualContainer: `relative w-full h-72 md:h-96 lg:h-[28rem] flex items-center justify-center`, // Increased heights for more space
  codeContainer: `min-w-xl md:w-full font-(family-name:--font-geist-mono) relative w-full max-w-lg bg-white/50 dark:bg-gray-800/50 rounded-lg shadow-xl p-8 backdrop-blur-sm border border-gray-200 dark:border-gray-700`, // Increased max-w-md to max-w-lg, p-6 to p-8
  codeHeader: `flex items-center mb-6`, // Increased mb-4 to mb-6
  codeDot: `w-3 h-3 rounded-full mr-2 cursor-pointer`,
  codeBlock: `font-mono text-sm text-gray-800 dark:text-gray-300`,
  codeLine: `block mb-2`, // Increased mb-1 to mb-2
  codeHighlight: `text-blue-600 dark:text-blue-400`,
};

const Hero: React.FC = () => {
  const typingRef = useRef<HTMLSpanElement>(null);
  const [isCodeWindowOpen, setIsCodeWindowOpen] = useState(true);
  const [isCodeWindowMinimized, setIsCodeWindowMinimized] = useState(false);
  const [isCodeWindowHidden, setIsCodeWindowHidden] = useState(false);

  useEffect(() => {
    if (!typingRef.current) return;

    const skills: string[] = ['Code', 'Build', 'Create', 'Design', 'Solve'];
    let skillIndex: number = 0;
    let charIndex: number = 0;
    let isDeleting: boolean = false;
    let typingSpeed: number = 150;

    const type = () => {
      const currentSkill = skills[skillIndex];
      
      if (isDeleting) {
        if (typingRef.current) {
          typingRef.current.innerText = currentSkill.substring(0, charIndex - 1);
        }
        charIndex--;
        typingSpeed = 80;
      } else {
        if (typingRef.current) {
          typingRef.current.innerText = currentSkill.substring(0, charIndex + 1);
        }
        charIndex++;
        typingSpeed = 150;
      }

      if (!isDeleting && charIndex === currentSkill.length) {
        isDeleting = true;
        typingSpeed = 1500; // Pause at the end
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        skillIndex = (skillIndex + 1) % skills.length;
      }

      setTimeout(type, typingSpeed);
    };

    setTimeout(type, 1000);
  }, []);

  return (
    <section id="home" className={styles.heroSection}>
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className={styles.floatingBubble1}></div>
        <div className={styles.floatingBubble2}></div>
        <div className={styles.floatingBubble3}></div>
        
        {/* Geometric animated shapes with more spread */}
        <div className={`${styles.circle} top-1/4 left-1/8 animate-bounce`} style={{ animationDuration: '4s' }}></div>
        <div className={`${styles.circle} bottom-1/4 left-1/4 animate-bounce`} style={{ animationDuration: '7s' }}></div>
        <div className={`${styles.circle} bottom-1/3 right-1/4 animate-bounce`} style={{ animationDuration: '2s' }}></div>
        <div className={`${styles.square} top-1/5 right-1/5 animate-pulse`} style={{ animationDuration: '3s' }}></div>
        <div className={`${styles.square} bottom-1/3 right-1/2 animate-pulse`} style={{ animationDuration: '2s' }}></div>
        <div className={`${styles.triangle} bottom-1/3 left-1/8 animate-spin`} style={{ animationDuration: '12s' }}></div>
        <div className={`${styles.triangle} bottom-1/5 right-1/8 animate-spin`} style={{ animationDuration: '15s' }}></div>
        <div className={`${styles.triangle} top-1/3 right-1/3 animate-spin`} style={{ animationDuration: '8s' }}></div>
      </div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10"> {/* Increased padding */}
        <div className="flex flex-col xl:flex-row items-center justify-between gap-12"> {/* Added gap-12 */}
          <div className="w-full md:w-1/2 mb-16 md:mb-0"> {/* Increased mb-12 to mb-16 */}
            <div className="inline-block px-5 py-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6"> {/* Increased px-4 py-2 to px-5 py-3, mb-4 to mb-6 */}
              <p className="text-blue-600 dark:text-blue-400 font-medium">Hello, I&apos;m</p>
            </div>
            
            <h1 className="md:w-2xl text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8"> {/* Increased mb-6 to mb-8 */}
              Ketan <span className="text-blue-600 dark:text-blue-500">Solanki</span>
            </h1>
            
            <div className="h-14 mb-8"> {/* Increased h-12 to h-14, mb-6 to mb-8 */}
              <span className="text-2xl sm:text-3xl font-bold text-gray-700 dark:text-gray-300 flex items-center">
                I<span ref={typingRef} className="text-blue-600 dark:text-blue-500 ml-4"></span> {/* Increased ml-3 to ml-4 */}
                <span className="animate-blink ml-2 text-blue-600 dark:text-blue-500">|</span> {/* Increased ml-1 to ml-2 */}
              </span>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mb-10 leading-relaxed"> {/* Increased mb-8 to mb-10 */}
              Making clean code and reliable apps with Programming Language(s).
            </p>
            
            <div className="flex flex-wrap gap-6 mb-10"> {/* Increased gap-4 to gap-6, mb-8 to mb-10 */}
              <Link 
                href="#contact" 
                className={styles.primaryButton}
              >
                Contact Me <ArrowRight className="ml-3" size={18} /> {/* Increased ml-2 to ml-3 */}
              </Link>
              <Link 
                href="#projects" 
                className={styles.secondaryButton}
              >
                View Projects
              </Link>
            </div>
            
            <div className="flex space-x-8"> {/* Increased space-x-6 to space-x-8 */}
              <a 
                href={process.env.NEXT_PUBLIC_GITHUB_URL}
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialIcon}
              >
                <Github size={24} />
              </a>
              <a 
                href={process.env.NEXT_PUBLIC_LINKEDIN_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialIcon}
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:ketangsolanki129@example.com" 
                className={styles.socialIcon}
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          {
            isCodeWindowOpen && 
              <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <div className={styles.visualContainer}>
                  {/* Animated code element */}
                  <div className={styles.codeContainer}>
                    <div className={styles.codeHeader}>
                      <button className={`${styles.codeDot} bg-red-500`} onClick={() => setIsCodeWindowOpen(false)}></button>
                      <button className={`${styles.codeDot} bg-yellow-500`} onClick={() => setIsCodeWindowMinimized(!isCodeWindowMinimized)}></button>
                      <span className={`${styles.codeDot} bg-green-500`} onClick={() => setIsCodeWindowHidden(!isCodeWindowHidden)}></span>
                      <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">myCode.js</span>
                    </div>
                      
                    {
                      !isCodeWindowHidden && (
                        <>
                          <div className={styles.codeBlock}>
                            <span className={`${styles.codeLine}`}><span className={styles.codeHighlight}>const</span> developer = {`{`}{isCodeWindowMinimized && '...};'}</span>
                            
                            {
                              !isCodeWindowMinimized && (
                                <>
                                  <span className={`ms-4 ${styles.codeLine}`}>name: <span className={styles.codeHighlight}>&apos;Ketan Solanki&apos;</span>,</span>
                                  <span className={`ms-4 ${styles.codeLine}`}>skills: [<span className={styles.codeHighlight}>&apos;Python&apos;</span>, <span className={styles.codeHighlight}>&apos;JavaScript&apos;</span>, <span className={styles.codeHighlight}>&apos;React&apos;</span>],</span>
                                  <span className={`ms-4 ${styles.codeLine}`}>passion: <span className={styles.codeHighlight}>&apos;Building useful apps&apos;</span>,</span>
                                  <span className={`ms-4 ${styles.codeLine}`}>coffee: <span className={styles.codeHighlight}>true</span></span>
                                  <span className={`${styles.codeLine}`}>{`}`};</span>
                                </>
                              )
                            }

                            <span className={`${styles.codeLine} mt-4`}><span className={styles.codeHighlight}>function </span>createAwesomeProject() {`{`}{isCodeWindowMinimized && '...};'}</span> {/* Increased mt-2 to mt-4 */}
                            
                            {
                              !isCodeWindowMinimized && (
                                <>
                                  <span className={`ms-8 ${styles.codeLine}`}><span className={styles.codeHighlight}>return </span>developer.skills.map(<span className={styles.codeHighlight}>s</span> =&gt; {`{`}</span>
                                  <span className={`ms-12 ${styles.codeLine}`}><span className={styles.codeHighlight}>return </span><span>s + &apos; magic&apos;</span>;</span>
                                  <span className={`ms-8 ${styles.codeLine}`}>{`}`}</span>
                                  <span className={`ms-4 ${styles.codeLine}`}>);</span>
                                  <span className={`${styles.codeLine}`}>{`}`}</span>
                                </>
                              )
                            }
                          </div>
                        </>
                      )
                    }
                  </div>
                </div>
              </div>
          }
        </div>
      </div>
    </section>
  );
};

export default Hero;