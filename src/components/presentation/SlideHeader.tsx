interface SlideHeaderProps {
  slideNumber: number;
  totalSlides: number;
  light?: boolean;
}

export const SlideHeader = ({ slideNumber, totalSlides, light = false }: SlideHeaderProps) => {
  return (
    <header 
      className={`container-responsive flex justify-between items-center py-4 xs:py-5 sm:py-6 md:py-8 ${light ? 'text-white' : 'text-primary'}`}
      aria-label="Cabeçalho da apresentação"
    >
      <h1 className="font-bold tracking-wide text-[clamp(16px,2.5vw,20px)]">USHUAIA</h1>
      <div className="opacity-70 text-[clamp(10px,2vw,14px)]" aria-label="Progresso do slide">
        {slideNumber} / {totalSlides}
      </div>
    </header>
  );
};
