import { ReactNode, useState, useEffect } from "react";

interface SlideContainerProps {
  children: ReactNode;
  bgImage?: string;
  bgOverlay?: boolean;
  className?: string;
  priority?: boolean;
}

export const SlideContainer = ({ 
  children, 
  bgImage, 
  bgOverlay = false,
  className = "",
  priority = false
}: SlideContainerProps) => {
  const [imageLoaded, setImageLoaded] = useState(!bgImage);

  useEffect(() => {
    if (bgImage) {
      const img = new Image();
      img.onload = () => setImageLoaded(true);
      img.onerror = () => setImageLoaded(true); // Still show content even if image fails
      img.src = bgImage;
      
      // Preload if priority
      if (priority) {
        img.loading = 'eager';
      }
    }
  }, [bgImage, priority]);

  return (
    <div 
      className={`w-full min-h-screen relative ${className}`}
    >
      {/* Background Image */}
      {bgImage && (
        <div 
          className={`absolute inset-0 transition-opacity duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      )}
      
      {/* Loading placeholder for background */}
      {bgImage && !imageLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
      
      {/* Overlay */}
      {bgOverlay && (
        <div 
          className="absolute inset-0 z-[1]" 
          style={{ background: 'var(--gradient-overlay)' }}
        />
      )}
      
      {/* Content */}
      <div className="relative z-10 w-full min-h-screen flex flex-col pb-8 md:pb-12">
        {children}
      </div>
    </div>
  );
};
