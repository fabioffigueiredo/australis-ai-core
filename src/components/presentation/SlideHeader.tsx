interface SlideHeaderProps {
  slideNumber: number;
  totalSlides: number;
  light?: boolean;
}

export const SlideHeader = ({ slideNumber, totalSlides, light = false }: SlideHeaderProps) => {
  return (
    <div className={`flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8 ${light ? 'text-white' : 'text-primary'}`}>
      <div className="font-bold text-lg sm:text-xl tracking-wide">AUSTRALIS</div>
      <div className="text-xs sm:text-sm opacity-70">{slideNumber} / {totalSlides}</div>
    </div>
  );
};
