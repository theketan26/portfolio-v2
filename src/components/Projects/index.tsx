// components/Projects.tsx
import { useEffect, useRef, useState } from 'react';
import { Code } from 'lucide-react';
import CustomFollower from '../common/CursorFollower';

// Style definitions matching previous components
const styles = {
  projectsSection: `min-h-screen relative overflow-hidden flex items-center py-16 bg-gradient-to-br from-blue-50 to-gray-100 dark:from-blue-950 dark:to-gray-900`,
  floatingBubble1: `absolute top-1/5 left-1/4 w-64 h-64 bg-blue-300/20 dark:bg-blue-600/15 rounded-full blur-3xl`,
  floatingBubble2: `absolute bottom-1/4 right-1/5 w-80 h-80 bg-cyan-300/20 dark:bg-cyan-600/15 rounded-full blur-3xl opacity-80`,
  triangle: `absolute w-0 h-0 border-l-[20px] border-r-[20px] border-b-[34px] border-l-transparent border-r-transparent border-b-blue-200 dark:border-b-cyan-800`,
  square: `absolute w-16 h-16 rotate-45 border-4 border-cyan-200 dark:border-cyan-800`,
  codeContainer: `font-(family-name:--font-geist-mono) relative bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-xl p-6 backdrop-blur-sm border border-gray-200 dark:border-gray-700 transform max-w-2xl w-full`,
  codeHeader: `flex items-center justify-between mb-4`,
  codeDot: `w-3 h-3 rounded-full mr-2 cursor-pointer`,
  codeBlock: `font-mono text-sm text-gray-800 dark:text-gray-300 leading-relaxed`,
  codeLine: `block mb-1 pl-4 border-l-2 border-blue-400 dark:border-cyan-600`,
  codeHighlight: `text-blue-600 dark:text-cyan-400`,
  techTag: `inline-block px-2 py-0.5 bg-blue-100 dark:bg-cyan-900/30 text-blue-800 dark:text-cyan-300 rounded-full text-xs mr-2 mb-1`,
};

const projects = [{
    fileName: 'cricketDataAnalysis.js',
    constName: 'cricketDataAnalysis',
    name: 'Cricket Data Analysis',
    description: 'Python project to analyse large cricket data set for insights such as average and strike-rate.',
    features: [
      'Analyze raw cricket data in json and csv format.', 
      'Analyze data of any player.'
    ],
    techStack: ['Python', 'Pandas'],
    link: 'https://github.com/theketan26/cricket-data-analysis',
  }, {
    fileName: 'pmfbyFormFeeder.js',
    constName: 'pmbfyFormFeeder',
    name: 'PM Form Feeder',
    description: 'Automatic form feeder from extracting data from excel.(Client project)',
    features: [
      'Extract useful data from multiple excel files.', 
      'Feeds 3 step form, having multiple verifications and options.',
      'GUI too provide details of the processes.',
      'Multiple processes and instances at once, for efficiency.'
    ],
    techStack: ['Python', 'Selenium', 'Tkinter'],
    link: 'private',
  },
]

const Projects: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [openedProjects, setOpenedProjects] = useState<string[]>([]);
  const [minimizedProjects, setMinimizedProjects] = useState<string[]>([]);
  const [hiddenProjects, setHiddenProjects] = useState<string[]>([]);

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
      <CustomFollower 
        parentElementId='projects'
        cursor='/python-icon.svg'
      />

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
          <h2 className="text-4xl sm:text-5xl font-bold bg-linear-to-r from-gray-900 dark:from-white to-blue-600 dark:to-cyan-500 w-fit mx-auto bg-clip-text text-transparent">
            Projects Showcase
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Project 1: IoT Dashboard */}
          {
            projects.map((project, index) => (
              !openedProjects.includes(project.constName) && (
                <div key={index} className={styles.codeContainer + (index % 2 ? ' rotate-3' : ' -rotate-3')}>
                  <div className={styles.codeHeader}>
                    <div className="flex items-center">
                      <button 
                        className={`${styles.codeDot} bg-red-500`}
                        onClick={() => {
                          if (openedProjects.includes(project.constName))
                            setOpenedProjects(openedProjects.filter(p => p !== project.constName));
                          else
                            setOpenedProjects([...openedProjects, project.constName]);
                        }}
                      ></button>
                      <button 
                        className={`${styles.codeDot} bg-yellow-500`}
                        onClick={() => {
                          if (minimizedProjects.includes(project.constName))
                            setMinimizedProjects(minimizedProjects.filter(p => p!== project.constName));
                          else
                            setMinimizedProjects([...minimizedProjects, project.constName]);
                        }}
                      ></button>
                      <span 
                        className={`${styles.codeDot} bg-green-500`}
                        onClick={() => {
                          if (hiddenProjects.includes(project.constName))
                            setHiddenProjects(hiddenProjects.filter(p => p!== project.constName));
                          else
                            setHiddenProjects([...hiddenProjects, project.constName]);
                        }}
                      ></span>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{project.fileName}</span>
                  </div>
                  {
                    !hiddenProjects.includes(project.constName) && (
                    <div className={styles.codeBlock}>
                      <span className={styles.codeLine}>
                        <Code size={16} className="inline mr-2 text-blue-600 dark:text-cyan-500" />
                        <span className={styles.codeHighlight}>const</span> {project.constName} = {`{`}{minimizedProjects.includes(project.constName) && '...};'}
                      </span>
                      {
                        !minimizedProjects.includes(project.constName) && (
                        <>
                          <span className={`${styles.codeLine} pl-8`}>
                            name: <span className={styles.codeHighlight}>&apos;{project.name}&apos;</span>,
                          </span>
                          <span className={`${styles.codeLine} pl-8`}>
                            description: <span className={styles.codeHighlight}>&apos;{project.description}&apos;</span>,
                          </span>
                          <span className={`${styles.codeLine} pl-8`}>
                            features: [
                          </span>
                          {
                            project.features.map((feature, index) => (
                              <span key={index} className={`${styles.codeLine} pl-12`}>
                                <span className={styles.codeHighlight}>&apos;{feature}&apos;</span>,
                              </span>
                            ))
                          }
                          <span className={`${styles.codeLine} pl-8`}>
                            ],
                          </span>
                          <span className={`${styles.codeLine} pl-8`}>
                            techStack: [
                              {
                                project.techStack.map((tech) => (
                                  <span key={tech} className={`${styles.techTag}`}>{tech}</span>
                                ))
                              }
                            ]
                          </span>
                          <span className={`${styles.codeLine} pl-8`}>
                            link: {project.link === 'private' ? project.link : <a href={project.link}>{project.link}</a>} 
                          </span>
                          <span className={styles.codeLine}>{`}`}</span>
                        </>
                      )}
                    </div>
                  )}
                </div>
              )
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Projects;