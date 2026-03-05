// components/Navbar.tsx
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toggleTheme } from '@/store/slices/themeSlice';
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import TorchToggle from '../TorchToggle';

interface NavLink {
  name: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const darkMode = useAppSelector((state) => state.theme.darkMode);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 dark:bg-white/10 bg-indigo-900/10 dark: backdrop-blur-md rounded-full mt-5`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <a
                  href="https://ketanpersonal.blob.core.windows.net/resume/ketan-solanki-resume.pdf?sp=r&st=2026-03-04T07:33:43Z&se=2027-03-04T15:48:43Z&spr=https&sv=2024-11-04&sr=b&sig=mSQrfxmG87Z%2Fqct9lu0nugdt47RXSn%2FrqkcEAlGGNuo%3D"
                  download="Ketan-Solanki-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 px-4 py-2 rounded-full transition-colors"
                >
                  <Download size={16} />
                  Resume
                </a>
                {/* <button
                  onClick={toggleDarkMode}
                  className="text-gray-700 dark:text-gray-300"
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button> */}
              </div>
            </div>

            <div className="flex md:hidden">
              <button
                onClick={toggleDarkMode}
                className="mr-2 text-gray-700 dark:text-gray-300"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
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
              <a
                href="https://ketanpersonal.blob.core.windows.net/resume/ketan-solanki-resume.pdf?sp=r&st=2026-03-04T07:33:43Z&se=2027-03-04T15:48:43Z&spr=https&sv=2024-11-04&sr=b&sig=mSQrfxmG87Z%2Fqct9lu0nugdt47RXSn%2FrqkcEAlGGNuo%3D"
                download="Ketan-Solanki-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>
          </div>
        )}
      </nav>

      <div className="fixed top-10 right-10 z-20 hidden md:block">
        <TorchToggle 
          checked={darkMode} 
          onChange={toggleDarkMode}
        />
      </div>
    </div>
  );
};

export default Navbar;
