import React from "react"
import "./image-dimensions.css"

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ResponsiveImage({ 
  src, 
  alt,
  className = '' 
}: ResponsiveImageProps) {
  return (
    <div className="image-container">
      <img
        src={src}
        alt={alt}
        className={`responsive-image ${className}`}
      />
    </div>
  );
}