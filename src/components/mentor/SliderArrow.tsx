import React from 'react';

interface ArrowProps {
  direction: 'left' | 'right';
  onClick?: () => void;
}

const SliderArrow: React.FC<ArrowProps> = ({ direction, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center justify-center
        absolute top-1/2 -translate-y-1/2 z-10
        w-12 h-12 md:w-14 md:h-14 rounded-full
        bg-gradient-to-r from-orange-500 to-red-500
        text-white shadow-lg
        hover:opacity-90 transition-opacity duration-300
        ${direction === 'left' ? 'left-2 md:-left-7' : 'right-2 md:-right-7'}
        focus:outline-none
        hover:scale-110 transform transition
      `}
      aria-label={`${direction} arrow`}
    >
      <span className="text-2xl md:text-3xl">{direction === 'left' ? '◄' : '►'}</span>
    </button>
  );
};

export default SliderArrow;