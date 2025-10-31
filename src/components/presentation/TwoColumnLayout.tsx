import { ReactNode } from "react";

interface TwoColumnLayoutProps {
  left: ReactNode;
  right: ReactNode;
  title?: string;
  light?: boolean;
}

export const TwoColumnLayout = ({ left, right, title, light = false }: TwoColumnLayoutProps) => {
  return (
    <div className="flex-1 px-4 sm:px-8 md:px-12 lg:px-16 pb-12 md:pb-16 min-h-0">
      {title && (
        <h2 className={`text-3xl md:text-4xl font-bold mb-6 md:mb-12 ${light ? 'text-white' : 'text-primary'}`}>
          {title}
        </h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 h-full min-h-0">
        <div className="min-w-0">{left}</div>
        <div className="min-w-0">{right}</div>
      </div>
    </div>
  );
};
