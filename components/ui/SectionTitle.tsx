import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, centered = false, light = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className={`text-3xl md:text-4xl font-serif font-bold mb-4 ${light ? 'text-white' : 'text-neutral-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl font-light max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-stone-300' : 'text-stone-600'}`}>
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 bg-terracotta-600 mt-6 ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionTitle;