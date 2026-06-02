// components/Hero.tsx
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Kaushan_Script } from "next/font/google";
import CustomFollower from "../common/CursorFollower";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  closeMyCode,
  toggleMyCodeMinimized,
  toggleMyCodeHidden,
} from "@/store/slices/myCodeSlice";
import SocialButtons from "../SocialButtons";
import BashWindow from "../BashWindow";

const bitcountSingle = Kaushan_Script({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

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
  primaryButton: `md:text-md text-sm text-nowrap w-max px-4 py-2 md:px-10 md:py-5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full shadow-lg transition-colors flex items-center`,
  secondaryButton: `md:text-md text-sm text-nowrap md:px-10 px-4 w-max md:py-5 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-500 font-medium rounded-full shadow-md hover:shadow-lg transition-all`,

  // Social icon styles with more padding
  socialIcon: `p-4 bg-white dark:bg-gray-800 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500 rounded-full shadow-md hover:shadow-lg transition-all`, // Increased p-3 to p-4
};

const Hero: React.FC = () => {
  const dispatch = useAppDispatch();

  const socialLinks = [
    {
      icon: <Github size={24} />,
      href: process.env.NEXT_PUBLIC_GITHUB_URL || "#",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={24} />,
      href: process.env.NEXT_PUBLIC_LINKEDIN_URL || "#",
      label: "LinkedIn",
    },
    {
      icon: <Mail size={24} />,
      href: `mailto:${process.env.NEXT_PUBLIC_EMAIL}` || "#",
      label: "Email",
    },
  ];

  return (
    <section id="home" className={styles.heroSection}>
      <CustomFollower cursor="/react-icon.svg" parentElementId="home" />

      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className={styles.floatingBubble1}></div>
        <div className={styles.floatingBubble2}></div>
        <div className={styles.floatingBubble3}></div>

        {/* Geometric animated shapes with more spread */}
        <div
          className={`${styles.circle} top-1/4 left-1/8 animate-bounce`}
          style={{ animationDuration: "4s" }}
        ></div>
        <div
          className={`${styles.circle} bottom-1/4 left-1/4 animate-bounce`}
          style={{ animationDuration: "7s" }}
        ></div>
        <div
          className={`${styles.circle} bottom-1/3 right-1/4 animate-bounce`}
          style={{ animationDuration: "2s" }}
        ></div>
        <div
          className={`${styles.square} top-1/5 right-1/5 animate-pulse`}
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className={`${styles.square} bottom-1/3 right-1/2 animate-pulse`}
          style={{ animationDuration: "2s" }}
        ></div>
        <div
          className={`${styles.triangle} bottom-1/3 left-1/8 animate-spin`}
          style={{ animationDuration: "12s" }}
        ></div>
        <div
          className={`${styles.triangle} bottom-1/5 right-1/8 animate-spin`}
          style={{ animationDuration: "15s" }}
        ></div>
        <div
          className={`${styles.triangle} top-1/3 right-1/3 animate-spin`}
          style={{ animationDuration: "8s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto pb-8 md:pb-0 px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 md:mt-0 mb-16 md:mb-0">
            <div className="inline-block px-5 py-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
              <p className="text-blue-600 dark:text-blue-400 sm:text-md text-xs font-medium">
                Hello, I&apos;m
              </p>
            </div>

            <h1
              className={`md:w-2xl text-5xl sm:text-6xl lg:text-7xl font-bold bg-linear-to-r from-gray-900 dark:from-white to-blue-800 bg-clip-text text-transparent mb-8 w-max ${bitcountSingle.className}`}
            >
              Ketan Solanki
            </h1>

            <div className="h-14">
              <span className="text-xl sm:text-3xl font-bold text-gray-700 dark:text-gray-300 flex items-center whitespace-nowrap">
                I am
                <span className="text-blue-600 dark:text-blue-500 mx-2">
                  Full-Stack
                </span>
                Developer
              </span>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-md max-w-2xl mb-10 leading-relaxed">
              {/* Increased mb-8 to mb-10 */}
              Writing clean and reliable code.
            </p>

            <div className="flex gap-6 mb-10 sm:flex-row flex-col">
              {/* Increased gap-4 to gap-6, mb-8 to mb-10 */}
              <Link href="#contact" className={styles.primaryButton}>
                Contact Me <ArrowRight className="ml-3" size={18} />{" "}
                {/* Increased ml-2 to ml-3 */}
              </Link>
              <Link href="#projects" className={styles.secondaryButton}>
                View Projects
              </Link>
            </div>

            <div className="flex space-x-8">
              <SocialButtons buttons={socialLinks} />
              {/* <a
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
                href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                className={styles.socialIcon}
              >
                <Mail size={24} />
              </a> */}
            </div>
          </div>

          <BashWindow
            title="myCode.js"
            selector="myCode"
            onClose={() => dispatch(closeMyCode())}
            onHidden={() => dispatch(toggleMyCodeHidden())}
            onMinimized={() => dispatch(toggleMyCodeMinimized())}
          >
            {(isMinimized, codeStyles) => (
              <>
                <span className={`${codeStyles.codeLine}`}>
                  <span className={codeStyles.codeHighlight}>const</span>{" "}
                  developer = {`{`}
                  {isMinimized && "...};"}
                </span>
                {!isMinimized && (
                  <>
                    <span className={`ms-4 ${codeStyles.codeLine}`}>
                      name:{" "}
                      <span className={codeStyles.codeHighlight}>
                        &apos;Ketan Solanki&apos;
                      </span>
                      ,
                    </span>
                    <span className={`ms-4 ${codeStyles.codeLine}`}>
                      skills: [
                      <span className={codeStyles.codeHighlight}>
                        &apos;Python&apos;
                      </span>
                      ,{" "}
                      <span className={codeStyles.codeHighlight}>
                        &apos;JavaScript&apos;
                      </span>
                      ,{" "}
                      <span className={codeStyles.codeHighlight}>
                        &apos;SQL&apos;
                      </span>
                      ],
                    </span>
                    <span className={`ms-4 ${codeStyles.codeLine}`}>
                      passion:{" "}
                      <span className={codeStyles.codeHighlight}>
                        &apos;building apps&apos;
                      </span>
                      ,
                    </span>
                    <span className={`ms-4 ${codeStyles.codeLine}`}>
                      tea:{" "}
                      <span className={codeStyles.codeHighlight}>true</span>
                    </span>
                    <span className={`${codeStyles.codeLine}`}>{`}`};</span>
                  </>
                )}
                <span className={`${codeStyles.codeLine} mt-4`}>
                  <span className={codeStyles.codeHighlight}>function </span>
                  createAwesomeProject() {`{`}
                  {isMinimized && "...};"}
                </span>{" "}
                {/* Increased mt-2 to mt-4 */}
                {!isMinimized && (
                  <>
                    <span className={`ms-8 ${codeStyles.codeLine}`}>
                      <span className={codeStyles.codeHighlight}>return </span>
                      developer.skills.map(
                      <span className={codeStyles.codeHighlight}>
                        s
                      </span> =&gt; {`{`}
                    </span>
                    <span className={`ms-12 ${codeStyles.codeLine}`}>
                      <span className={codeStyles.codeHighlight}>return </span>
                      <span>s + &apos; master&apos;</span>;
                    </span>
                    <span className={`ms-8 ${codeStyles.codeLine}`}>{`}`}</span>
                    <span className={`ms-4 ${codeStyles.codeLine}`}>);</span>
                    <span className={`${codeStyles.codeLine}`}>{`}`}</span>
                  </>
                )}
              </>
            )}
          </BashWindow>
        </div>
      </div>
    </section>
  );
};

export default Hero;
