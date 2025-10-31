import { ReactNode } from "react";

interface TwoColumnLayoutProps {
  left: ReactNode;
  right: ReactNode;
  title?: string;
  light?: boolean;
}

export const TwoColumnLayout = ({ left, right, title, light = false }: TwoColumnLayoutProps) => {
  return (
    <div className="flex-1 px-16 pb-16">
      {title && (
        <h2 className={`text-4xl font-bold mb-12 ${light ? 'text-white' : 'text-primary'}`}>
          {title}
        </h2>
      )}
      <div className="grid grid-cols-2 gap-12 h-full">
        <div>{left}</div>
        <div>{right}</div>
      </div>
    </div>
  );
};
