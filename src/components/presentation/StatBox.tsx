import { ReactNode } from "react";

interface StatBoxProps {
  label: string;
  value: string;
  icon?: ReactNode;
  accent?: boolean;
}

export const StatBox = ({ label, value, icon, accent = false }: StatBoxProps) => {
  return (
    <div 
      className={`p-8 rounded-lg ${accent ? 'bg-accent text-accent-foreground' : 'bg-card border-2 border-border'}`}
      style={accent ? {} : { boxShadow: 'var(--shadow-md)' }}
    >
      {icon && <div className="mb-4 text-3xl">{icon}</div>}
      <div className={`text-4xl font-bold mb-2 ${accent ? '' : 'text-primary'}`}>
        {value}
      </div>
      <div className={`text-sm font-medium ${accent ? 'opacity-90' : 'text-muted-foreground'}`}>
        {label}
      </div>
    </div>
  );
};
