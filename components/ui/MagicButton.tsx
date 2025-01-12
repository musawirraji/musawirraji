'use client';

import React from 'react';

interface MagicButtonProps {
  title: string;
  icon: React.ReactNode;
  position?: 'left' | 'right';
  handleClick?: () => void;
  otherClasses?: string;
}

const MagicButton: React.FC<MagicButtonProps> = ({
  title,
  icon,
  position = 'right',
  handleClick,
  otherClasses = '',
}) => {
  return (
    <button
      type='button'
      className={`w-full relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-green-400 md:w-60 md:mt-10 ${otherClasses}`}
      onClick={handleClick}
    >
      {/* Animated gradient background */}
      <span
        className='absolute inset-[-1000%]'
        style={{
          animation: 'spin 2s linear infinite',
          background:
            'conic-gradient(from 90deg at 50% 50%, #a3e341 0%, #b0c332 50%, #f4f4f1 100%)',
        }}
      />

      {/* Button content */}
      <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#17343C] px-7 text-sm font-semibold text-white backdrop-blur-3xl gap-2 relative z-10'>
        {position === 'left' && icon}
        <span className='whitespace-nowrap'>{title}</span>
        {position === 'right' && icon}
      </span>

      {/* Add keyframes for the spin animation */}
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </button>
  );
};

export default MagicButton;
