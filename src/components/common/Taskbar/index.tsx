'use client';

import { Code2, Wand2, Terminal, Briefcase, Award, FolderOpen } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { openMyCode } from '@/store/slices/myCodeSlice';
import { openCodeWizard } from '@/store/slices/codeWizardSlice';
import { openTerminal } from '@/store/slices/terminalSlice';
import { openSenior } from '@/store/slices/seniorOpenSlice';
import { openEducation } from '@/store/slices/educationOpenSlice';
import { openAllProjects } from '@/store/slices/projectsOpenSlice';

const Taskbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isOpen: isMyCodeOpen } = useAppSelector((state) => state.myCode);
  const { isOpen: isCodeWizardOpen } = useAppSelector((state) => state.codeWizard);
  const { isOpen: isTerminalOpen } = useAppSelector((state) => state.terminal);
  const { isOpen: isSeniorOpen } = useAppSelector((state) => state.seniorOpen);
  const { isOpen: isEducationOpen } = useAppSelector((state) => state.educationOpen);
  const { openedProjects } = useAppSelector((state) => state.projectsOpen);

  // Only show taskbar when at least one window is closed
  if (isMyCodeOpen && isCodeWizardOpen && isTerminalOpen && isSeniorOpen && isEducationOpen && openedProjects.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 gap-2">
          {/* myCode.js window button */}
          {!isMyCodeOpen && (
            <button
              onClick={() => dispatch(openMyCode())}
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
              title="Open myCode.js"
            >
              <Code2 size={20} />
              <span className="text-sm font-medium">myCode.js</span>
            </button>
          )}
          
          {/* codeWizard.js window button */}
          {!isCodeWizardOpen && (
            <button
              onClick={() => dispatch(openCodeWizard())}
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-500 transition-colors"
              title="Open codeWizard.js"
            >
              <Wand2 size={20} />
              <span className="text-sm font-medium">codeWizard.js</span>
            </button>
          )}
          
          {/* Terminal window button */}
          {!isTerminalOpen && (
            <button
              onClick={() => dispatch(openTerminal())}
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-500 transition-colors"
              title="Open Terminal"
            >
              <Terminal size={20} />
              <span className="text-sm font-medium">skills@ketan:~$</span>
            </button>
          )}
          
          {/* Senior Experience window button */}
          {!isSeniorOpen && (
            <button
              onClick={() => dispatch(openSenior())}
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
              title="Open Senior Experience"
            >
              <Briefcase size={20} />
              <span className="text-sm font-medium">techdomeSolutions.js</span>
            </button>
          )}
          
          {/* Education window button */}
          {!isEducationOpen && (
            <button
              onClick={() => dispatch(openEducation())}
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-500 transition-colors"
              title="Open Education"
            >
              <Award size={20} />
              <span className="text-sm font-medium">education.js</span>
            </button>
          )}
          
          {/* Projects window button */}
          {openedProjects.length > 0 && (
            <button
              onClick={() => dispatch(openAllProjects())}
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 transition-colors"
              title="Open All Projects"
            >
              <FolderOpen size={20} />
              <span className="text-sm font-medium">Projects ({openedProjects.length})</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Taskbar;
