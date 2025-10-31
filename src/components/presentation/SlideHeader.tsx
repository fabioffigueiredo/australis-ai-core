interface SlideHeaderProps {
  slideNumber: number;
  totalSlides: number;
  light?: boolean;
}

export const SlideHeader = ({ slideNumber, totalSlides, light = false }: SlideHeaderProps) => {
  return (
    <div className={`flex justify-between items-center px-16 py-8 ${light ? 'text-white' : 'text-primary'}`}>
      <div className="font-bold text-xl tracking-wide">AUSTRALIS</div>
      <div className="text-sm opacity-70">{slideNumber} / {totalSlides}</div>
    </div>
  );
};
