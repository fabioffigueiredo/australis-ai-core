import { ReactNode } from "react";

interface TwoColumnLayoutProps {
  left: ReactNode;
  right: ReactNode;
  title?: string;
  light?: boolean;
}

export const TwoColumnLayout = ({ left, right, title, light = false }: TwoColumnLayoutProps) => {
  return (
    <div className="flex-1 px-4 sm:px-8 md:px-12 lg:px-16 pb-8 md:pb-12 min-h-0 overflow-auto">
      {title && (
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 ${light ? 'text-white' : 'text-primary'}`}>
          {title}
        </h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
        <div className="min-w-0">{left}</div>
        <div className="min-w-0">{right}</div>
      </div>
    </div>
  );
};
