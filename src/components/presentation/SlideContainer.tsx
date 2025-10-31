import { ReactNode } from "react";

interface SlideContainerProps {
  children: ReactNode;
  bgImage?: string;
  bgOverlay?: boolean;
  className?: string;
}

export const SlideContainer = ({ 
  children, 
  bgImage, 
  bgOverlay = false,
  className = "" 
}: SlideContainerProps) => {
  return (
    <div 
      className={`w-full h-screen relative overflow-hidden ${className}`}
      style={bgImage ? {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : {}}
    >
      {bgOverlay && (
        <div 
          className="absolute inset-0" 
          style={{ background: 'var(--gradient-overlay)' }}
        />
      )}
      <div className="relative z-10 w-full h-full flex flex-col pb-32">
        {children}
      </div>
    </div>
  );
};
