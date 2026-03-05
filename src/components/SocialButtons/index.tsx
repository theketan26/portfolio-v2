'use client';

import React from 'react';

interface SocialButtonProps {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface SocialButtonsProps {
  buttons: SocialButtonProps[];
  className?: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon, href, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="p-5 rounded-full backdrop-blur-lg border border-white/10 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-white/20 hover:scale-110 hover:rotate-3 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-white/30 hover:bg-gradient-to-tr hover:from-white/10 hover:to-black/40 group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
      <div className="relative z-10">
        {icon}
      </div>
    </a>
  );
};

const SocialButtons: React.FC<SocialButtonsProps> = ({ buttons, className = '' }) => {
  return (
    <div className={`flex gap-4 ${className}`}>
      {buttons.map((button, index) => (
        <SocialButton
          key={index}
          icon={button.icon}
          href={button.href}
          label={button.label}
        />
      ))}
    </div>
  );
};

export default SocialButtons;
