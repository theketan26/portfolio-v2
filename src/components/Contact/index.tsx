// components/Contact.tsx
import { Mail, ArrowUpRight, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-blue-600 dark:text-blue-500 text-lg font-medium mb-2">Contact</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">Let's Connect</h2>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-full max-w-4xl">
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-10 shadow-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Connect With Me</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* GitHub */}
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex flex-col items-center p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-md group"
                >
                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-full mb-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                    <Github className="h-8 w-8 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors" />
                  </div>
                  <span className="text-gray-900 dark:text-white font-medium">GitHub</span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm mt-1">@ketansolanki</span>
                </a>
                
                {/* LinkedIn */}
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex flex-col items-center p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-md group"
                >
                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-full mb-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                    <Linkedin className="h-8 w-8 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors" />
                  </div>
                  <span className="text-gray-900 dark:text-white font-medium">LinkedIn</span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm mt-1">Ketan Solanki</span>
                </a>
                
                {/* Twitter */}
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex flex-col items-center p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-md group"
                >
                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-full mb-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                    <Twitter className="h-8 w-8 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors" />
                  </div>
                  <span className="text-gray-900 dark:text-white font-medium">Twitter</span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm mt-1">@ketandev</span>
                </a>
                
                {/* Instagram */}
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex flex-col items-center p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-md group"
                >
                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-full mb-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                    <Instagram className="h-8 w-8 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors" />
                  </div>
                  <span className="text-gray-900 dark:text-white font-medium">Instagram</span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm mt-1">@ketan.codes</span>
                </a>
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-gray-600 dark:text-gray-400">
                  Prefer email? Reach out directly at <a href="mailto:ketan@example.com" className="text-blue-600 dark:text-blue-500 font-medium hover:underline">ketan@example.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;