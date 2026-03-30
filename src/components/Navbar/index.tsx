// components/Navbar.tsx
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toggleTheme } from '@/store/slices/themeSlice';
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import TorchToggle from '../TorchToggle';
import ResumeButton from '../ResumeButton';

interface NavLink {
  name: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLElement | null>(null);
  const darkMode = useAppSelector((state) => state.theme.darkMode);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleDarkMode = () => {
    dispatch(toggleTheme());
  };

  const navLinks: NavLink[] = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div>
      <nav
        ref={navRef}
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 dark:bg-white/10 bg-indigo-900/10 dark: backdrop-blur-md md:rounded-full rounded-3xl mt-5`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pe-3">
          <div className="flex justify-between h-16 items-center">
            {/* <div className="flex-shrink-0 font-bold text-xl text-gray-900 dark:text-white">
              <Link href="#home">
                <img src="/logo.png" alt="KS" className="h-[3rem] " />
              </Link>
            </div> */}

            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <ResumeButton />
              </div>
            </div>

            <div className="flex w-full md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 cursor-pointer"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-trasparent rounded-b-3xl shadow-lg">
            <div className="px-6 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              
              <div onClick={() => setIsOpen(false)} className='mt-5'>
                <ResumeButton />
              </div>
            </div>
          </div>
        )}
      </nav>

      <div className="fixed top-10 right-10 z-20">
        <TorchToggle 
          checked={darkMode} 
          onChange={toggleDarkMode}
        />
      </div>
    </div>
  );
};

export default Navbar;
