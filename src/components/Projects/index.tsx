// components/Projects.tsx
import { useEffect, useRef } from 'react';
import { Code } from 'lucide-react';

// Style definitions matching previous components
const styles = {
  projectsSection: `min-h-screen relative overflow-hidden flex items-center py-16 bg-gradient-to-br from-blue-50 to-gray-100 dark:from-blue-950 dark:to-gray-900`,
  floatingBubble1: `absolute top-1/5 left-1/4 w-64 h-64 bg-blue-300/20 dark:bg-blue-600/15 rounded-full blur-3xl`,
  floatingBubble2: `absolute bottom-1/4 right-1/5 w-80 h-80 bg-cyan-300/20 dark:bg-cyan-600/15 rounded-full blur-3xl opacity-80`,
  triangle: `absolute w-0 h-0 border-l-[20px] border-r-[20px] border-b-[34px] border-l-transparent border-r-transparent border-b-blue-200 dark:border-b-cyan-800`,
  square: `absolute w-16 h-16 rotate-45 border-4 border-cyan-200 dark:border-cyan-800`,
  codeContainer: `relative bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-xl p-6 backdrop-blur-sm border border-gray-200 dark:border-gray-700 transform max-w-2xl w-full`,
  codeHeader: `flex items-center justify-between mb-4`,
  codeDot: `w-3 h-3 rounded-full mr-2`,
  codeBlock: `font-mono text-sm text-gray-800 dark:text-gray-300 leading-relaxed`,
  codeLine: `block mb-1 pl-4 border-l-2 border-blue-400 dark:border-cyan-600`,
  codeHighlight: `text-blue-600 dark:text-cyan-400`,
  techTag: `inline-block px-2 py-0.5 bg-blue-100 dark:bg-cyan-900/30 text-blue-800 dark:text-cyan-300 rounded-full text-xs mr-2 mb-1`,
};

const Projects: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.2}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="projects" className={styles.projectsSection}>
      {/* Parallax Background */}
      <div ref={parallaxRef} className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-40">
        <div className={`${styles.floatingBubble1} animate-pulse`} style={{ animationDuration: '6s' }}></div>
        <div className={`${styles.floatingBubble2} animate-pulse`} style={{ animationDuration: '8s' }}></div>
        <div className={`${styles.triangle} top-1/4 left-1/6 animate-bounce`} style={{ animationDuration: '5s' }}></div>
        <div className={`${styles.square} bottom-1/3 right-1/4 animate-pulse`} style={{ animationDuration: '7s' }}></div>
        <div className={`${styles.triangle} bottom-1/5 left-1/3 animate-bounce`} style={{ animationDuration: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-cyan-900/30 rounded-full mb-4">
            <p className="text-blue-600 dark:text-cyan-400 font-medium">Code Creations</p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
            Projects <span className="text-blue-600 dark:text-cyan-500">Showcase</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Project 1: IoT Dashboard */}
          <div className={styles.codeContainer + ' rotate-3'}>
            <div className={styles.codeHeader}>
              <div className="flex items-center">
                <span className={`${styles.codeDot} bg-red-500`}></span>
                <span className={`${styles.codeDot} bg-yellow-500`}></span>
                <span className={`${styles.codeDot} bg-green-500`}></span>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">iotDashboard.js</span>
            </div>
            <div className={styles.codeBlock}>
              <span className={styles.codeLine}>
                <Code size={16} className="inline mr-2 text-blue-600 dark:text-cyan-500" />
                <span className={styles.codeHighlight}>const</span> iotDashboard = {`{`}
              </span>
              <span className={styles.codeLine}>
                name: <span className={styles.codeHighlight}>'IoT Control Dashboard'</span>,
              </span>
              <span className={styles.codeLine}>
                description: <span className={styles.codeHighlight}>'Real-time monitoring system for IoT devices'</span>,
              </span>
              <span className={styles.codeLine}>
                features: [
              </span>
              <span className={styles.codeLine}>
                <span className={styles.codeHighlight}>'Live hardware status updates via WebSocket'</span>,
              </span>
              <span className={styles.codeLine}>
                <span className={styles.codeHighlight}>'Responsive React interface with Next.js'</span>,
              </span>
              <span className={styles.codeLine}>
                <span className={styles.codeHighlight}>'Python backend for device communication'</span>,
              </span>
              <span className={styles.codeLine}>
                ],
              </span>
              <span className={styles.codeLine}>
                techStack: [
                  <span className={styles.techTag}>Python</span>
                  <span className={styles.techTag}>React</span>
                  <span className={styles.techTag}>Next.js</span>
                  <span className={styles.techTag}>WebSocket</span>
                  <span className={styles.techTag}>Hardware</span>
                ]
              </span>
              <span className={styles.codeLine}>{`}`}</span>
            </div>
          </div>

          {/* Project 2: Task Manager */}
          <div className={styles.codeContainer + ' -rotate-3'}>
            <div className={styles.codeHeader}>
              <div className="flex items-center">
                <span className={`${styles.codeDot} bg-red-500`}></span>
                <span className={`${styles.codeDot} bg-yellow-500`}></span>
                <span className={`${styles.codeDot} bg-green-500`}></span>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">taskManager.js</span>
            </div>
            <div className={styles.codeBlock}>
              <span className={styles.codeLine}>
                <Code size={16} className="inline mr-2 text-blue-600 dark:text-cyan-500" />
                <span className={styles.codeHighlight}>const</span> taskManager = {`{`}
              </span>
              <span className={styles.codeLine}>
                name: <span className={styles.codeHighlight}>'TaskSync Manager'</span>,
              </span>
              <span className={styles.codeLine}>
                description: <span className={styles.codeHighlight}>'Team productivity app with real-time sync'</span>,
              </span>
              <span className={styles.codeLine}>
                features: [
              </span>
              <span className={styles.codeLine}>
                <span className={styles.codeHighlight}>'Task CRUD with Flask REST API'</span>,
              </span>
              <span className={styles.codeLine}>
                <span className={styles.codeHighlight}>'React frontend with drag-and-drop UI'</span>,
              </span>
              <span className={styles.codeLine}>
                <span className={styles.codeHighlight}>'Real-time updates using Socket.IO'</span>,
              </span>
              <span className={styles.codeLine}>
                ],
              </span>
              <span className={styles.codeLine}>
                techStack: [
                  <span className={styles.techTag}>Python</span>
                  <span className={styles.techTag}>Flask</span>
                  <span className={styles.techTag}>React</span>
                  <span className={styles.techTag}>Socket.IO</span>
                  <span className={styles.techTag}>JavaScript</span>
                ]
              </span>
              <span className={styles.codeLine}>{`}`}</span>
            </div>
          </div>

          {/* Project 3: Hardware Monitor */}
          <div className={styles.codeContainer + ' rotate-3'}>
            <div className={styles.codeHeader}>
              <div className="flex items-center">
                <span className={`${styles.codeDot} bg-red-500`}></span>
                <span className={`${styles.codeDot} bg-yellow-500`}></span>
                <span className={`${styles.codeDot} bg-green-500`}></span>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">hardwareMonitor.js</span>
            </div>
            <div className={styles.codeBlock}>
              <span className={styles.codeLine}>
                <Code size={16} className="inline mr-2 text-blue-600 dark:text-cyan-500" />
                <span className={styles.codeHighlight}>const</span> hardwareMonitor = {`{`}
              </span>
              <span className={styles.codeLine}>
                name: <span className={styles.codeHighlight}>'HardwareSync Monitor'</span>,
              </span>
              <span className={styles.codeLine}>
                description: <span className={styles.codeHighlight}>'System diagnostics tool for hardware'</span>,
              </span>
              <span className={styles.codeLine}>
                features: [
              </span>
              <span className={styles.codeLine}>
                <span className={styles.codeHighlight}>'Python scripts for hardware data collection'</span>,
              </span>
              <span className={styles.codeLine}>
                <span className={styles.codeHighlight}>'Next.js dashboard for metrics visualization'</span>,
              </span>
              <span className={styles.codeLine}>
                <span className={styles.codeHighlight}>'Cross-platform compatibility'</span>,
              </span>
              <span className={styles.codeLine}>
                ],
              </span>
              <span className={styles.codeLine}>
                techStack: [
                  <span className={styles.techTag}>Python</span>
                  <span className={styles.techTag}>Next.js</span>
                  <span className={styles.techTag}>JavaScript</span>
                  <span className={styles.techTag}>Hardware</span>
                ]
              </span>
              <span className={styles.codeLine}>{`}`}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;