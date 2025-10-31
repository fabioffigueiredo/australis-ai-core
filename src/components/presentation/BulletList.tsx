import { Check } from "lucide-react";

interface BulletListProps {
  items: string[];
  light?: boolean;
  checkmarks?: boolean;
}

export const BulletList = ({ items, light = false, checkmarks = false }: BulletListProps) => {
  return (
    <ul className="space-y-4">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-4">
          {checkmarks ? (
            <Check className={`w-6 h-6 flex-shrink-0 mt-1 ${light ? 'text-accent' : 'text-accent'}`} />
          ) : (
            <span className={`text-2xl ${light ? 'text-accent' : 'text-accent'}`}>•</span>
          )}
          <span className={`text-lg ${light ? 'text-white' : 'text-foreground'}`}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
};
