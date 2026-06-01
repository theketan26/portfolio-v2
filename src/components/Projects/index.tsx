// components/Projects.tsx
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Code } from "lucide-react";
import CustomFollower from "../common/CursorFollower";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  toggleProjectOpen,
  toggleProjectMinimized,
  toggleProjectHidden,
} from "@/store/slices/projectsOpenSlice";
import BashWindow from "../BashWindow";
import Image from "next/image";

// Style definitions matching previous components
const styles = {
  projectsSection: `min-h-screen relative flex items-center py-16 bg-gradient-to-br from-blue-50 to-gray-100 dark:from-blue-950 dark:to-gray-900`,
  floatingBubble1: `absolute top-1/5 left-1/4 w-64 h-64 bg-blue-300/20 dark:bg-blue-600/15 rounded-full blur-3xl`,
  floatingBubble2: `absolute bottom-1/4 right-1/5 w-80 h-80 bg-cyan-300/20 dark:bg-cyan-600/15 rounded-full blur-3xl opacity-80`,
  triangle: `absolute w-0 h-0 border-l-[20px] border-r-[20px] border-b-[34px] border-l-transparent border-r-transparent border-b-blue-200 dark:border-b-cyan-800`,
  square: `absolute w-16 h-16 rotate-45 border-4 border-cyan-200 dark:border-cyan-800`,
  techTag: `inline-block px-2 py-0.5 bg-blue-100 dark:bg-cyan-900/30 text-blue-800 dark:text-cyan-300 rounded-full text-xs mr-2 mb-1`,
};

const projects = [
  {
    fileName: "cricketDataAnalysis.js",
    constName: "cricketDataAnalysis",
    name: "Cricket Data Analysis",
    description:
      "Python project to analyse large cricket data set for insights such as average and strike-rate.",
    features: [
      "Analyze raw cricket data in json and csv format.",
      "Analyze data of any player.",
    ],
    techStack: ["Python", "Pandas"],
    githubLink: "https://github.com/theketan26/cricket-data-analysis",
    img: "/cda.png",
    tags: [
      {
        label: "Github",
        link: "https://github.com/theketan26/cricket-data-analysis",
        color: "bg-gray-500/50",
      },
      {
        label: "College Minor",
        color: "bg-orange-500/50",
      },
    ],
  },
  {
    fileName: "pmfbyFormFeeder.js",
    constName: "pmbfyFormFeeder",
    name: "PMFBY Form Feeder",
    description:
      "Automatic form feeder from extracting data from excel.(Client project)",
    features: [
      "Extract useful data from multiple excel files.",
      "Feeds 3 step form, having multiple verifications and options.",
      "GUI too provide details of the processes.",
      "Multiple processes and instances at once, for efficiency.",
    ],
    techStack: ["Python", "Selenium", "Tkinter"],
    tags: [
      {
        label: "Client Project",
        link: "https://github.com/theketan26/cricket-data-analysis",
        color: "bg-cyan-500/50",
      },
    ],
  },
  {
    fileName: "gearlog.js",
    constName: "gearlog",
    name: "GearLog",
    description:
      "Easy to use bike maintenance and service management software. In progress.",
    features: [
      "Track and manage bike maintenance schedules.",
      "Manage service records and history.",
      "User-friendly interface for easy navigation.",
      "Supports multiple bikes and users.",
    ],
    techStack: ["Typescript", "NextJS", "TailwindCSS", "PostgreSQL"],
    link: "https://gearlog.in/",
    img: "/gearlog.png",
    tags: [
      {
        label: "Live",
        link: "https://www.gearlog.in/",
        color: "bg-green-500/50",
      },
      {
        label: "In Progress",
        color: "bg-red-500/50",
      },
    ],
  },
  {
    fileName: "yourStoryApps.tsx",
    constName: "yourStoryApps",
    name: "Your Story Apps",
    description:
      "Full-stack web application for creating and sharing personalized experiences using customizable templates.",
    features: [
      "Dynamic HTML template engine with live preview.",
      "Secure authentication and passkey-protected sharing.",
      "Azure Blob Storage for image uploads.",
      "Analytics dashboard with visitor tracking.",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "PostgreSQL",
      "Azure Blob Storage",
      "Radix UI",
    ],
    githubLink: "https://github.com/theketan26/v-day",
    link: "https://yourstoryapps.vercel.app",
    img: "/ysa.png",
    tags: [
      {
        label: "Github",
        link: "https://github.com/theketan26/your-story-apps",
        color: "bg-gray-500/50",
      },
      {
        label: "Live",
        link: "https://yourstoryapps.vercel.app/",
        color: "bg-green-500/50",
      },
    ],
  },
];

const Projects: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [openedFeatures, setOpenedFeatures] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  const { openedProjects, minimizedProjects, hiddenProjects } = useAppSelector(
    (state) => state.projectsOpen,
  );

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.2}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="projects" className={styles.projectsSection}>
      <CustomFollower parentElementId="projects" cursor="/python-icon.svg" />

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
          className={`${styles.triangle} top-1/4 left-1/6 animate-bounce`}
          style={{ animationDuration: "5s" }}
        ></div>
        <div
          className={`${styles.square} bottom-1/3 right-1/4 animate-pulse`}
          style={{ animationDuration: "7s" }}
        ></div>
        <div
          className={`${styles.triangle} bottom-1/5 left-1/3 animate-bounce`}
          style={{ animationDuration: "4s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-cyan-900/30 rounded-full mb-4">
            <p className="text-blue-600 dark:text-cyan-400 font-medium">
              Code Creations
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-linear-to-r from-gray-900 dark:from-white to-blue-600 dark:to-cyan-500 w-fit mx-auto bg-clip-text text-transparent">
            Projects Showcase
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
        </div>

        <div className="mx-auto grid grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <BashWindow
              onClose={() => dispatch(toggleProjectOpen(project.constName))}
              onHidden={() => dispatch(toggleProjectHidden(project.constName))}
              onMinimized={() =>
                dispatch(toggleProjectMinimized(project.constName))
              }
              selector="projectsOpen"
              title={project.fileName}
              key={index}
              isOpenProp={!openedProjects.includes(project.constName)}
              isHiddenProp={hiddenProjects.includes(project.constName)}
              isMinimizedProp={minimizedProjects.includes(project.constName)}
              containerClass="md:w-full md:justify-center h-auto"
              codeContainerClass="h-auto max-w-full"
              codeBlockClass="h-auto relative"
              visualContainerClass="h-full md:h-full lg:h-full"
              actions={[
                {
                  label: "Go to App",
                  href: project.link,
                },
                {
                  label: "Go to Github",
                  href: project.githubLink,
                },
              ]}
            >
              {(isMinimized, codeStyle) => (
                <>
                  <div
                    className={`flex flex-col gap-4 ${!isMinimized && "mt-40"}`}
                  >
                    <div>
                      <div className="text-xl font-bold">{project.name}</div>
                    </div>

                    {isMinimized ? (
                      <>[...]</>
                    ) : (
                      <>
                        <div className="flex flex-col gap-y-2">
                          {project.description}
                        </div>

                        <div className="flex flex-col gap-y-2">
                          <span>TECH STACK</span>

                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((stack, i) => (
                              <span
                                key={i}
                                className="px-1 py-0.5 bg-gray-50/20 text-xs"
                              >
                                {stack}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className={"flex flex-col relative"}>
                          <button
                            onClick={() =>
                              openedFeatures.includes(project.constName)
                                ? setOpenedFeatures((prev) =>
                                    prev.filter(
                                      (predicate) =>
                                        predicate !== project.constName,
                                    ),
                                  )
                                : setOpenedFeatures((prev) => [
                                    ...prev,
                                    project.constName,
                                  ])
                            }
                            className="cursor-pointer absolute top-0.5 -left-5.5"
                          >
                            <ChevronDown
                              className={`h-4 ${
                                openedFeatures.includes(project.constName)
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          </button>
                          <span className={`${codeStyle.codeLine}`}>
                            features:{" "}
                            {!openedFeatures.includes(project.constName) ? (
                              <button
                                onClick={() => {
                                  setOpenedFeatures((prev) => [
                                    ...prev,
                                    project.constName,
                                  ]);
                                }}
                                className="cursor-pointer"
                              >
                                {"[...]"}
                              </button>
                            ) : (
                              "["
                            )}
                          </span>
                          {openedFeatures.includes(project.constName) && (
                            <>
                              {project.features.map((feature, index) => (
                                <span
                                  key={index}
                                  className={`${codeStyle.codeLine} pl-4`}
                                >
                                  <span className={codeStyle.codeHighlight}>
                                    &apos;{feature}&apos;
                                  </span>
                                  ,
                                </span>
                              ))}
                              <span className={`${codeStyle.codeLine}`}>
                                ],
                              </span>
                            </>
                          )}
                        </div>
                      </>
                    )}
                  </div>

                  {isMinimized ? (
                    <></>
                  ) : (
                    <>
                      <img
                        src={project.img}
                        alt={project.constName}
                        className="absolute top-0 left-0 -z-1 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_75%)]"
                      />

                      <div className="absolute top-3 right-3 flex gap-2">
                        {project.tags.map((tag) => (
                          <a
                            key={tag.label}
                            className={`rounded-full px-2.5 py-1 ${tag.color} text-xs`}
                            href={tag.link}
                            target="_blank"
                          >
                            {tag.label}
                          </a>
                        ))}
                      </div>
                    </>
                  )}
                </>
              )}
            </BashWindow>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
