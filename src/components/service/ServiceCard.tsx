import "./Services.css";
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ResponsiveImage } from '../service/common/ResponsiveImage';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  isReversed?: boolean;
  imageSize?: 'small' | 'medium' | 'large' | 'custom';
  customHeight?: string;
  customWidth?: string;
}

export function ServiceCard({ 
  title, 
  description, 
  image, 
  imageAlt, 
  isReversed = false,
  imageSize = 'medium',
  customHeight,
  customWidth 
}: ServiceCardProps) {
  return (
    <div className={`flex flex-col-reverse gap-8 lg:gap-16 lg:flex-row ${isReversed ? 'lg:flex-row-reverse' : ''} items-center mb-16 lg:mb-24`}>
      <div className="w-full lg:w-1/2 space-y-6 px-4 lg:px-8">
        <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold  leading-tight">
          {title}
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          {description}
        </p>
        <button
          className="inline-flex items-center px-6 py-3 text-white rounded-lg transition-colors bg-gradient-to-r from-[#FF9422] to-[#D63715] hover:from-[#D63715] hover:to-[#FF9422]"
        >
          Know More
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
      <div className="w-full lg:w-1/2 p-4">
        <ResponsiveImage
          src={image}
          alt={imageAlt}
          className=""
  
        />
      </div>
    </div>
  );
}