interface SlideFooterProps {
  light?: boolean;
}

export const SlideFooter = ({ light = false }: SlideFooterProps) => {
  return (
    <div className={`px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8 text-xs sm:text-sm ${light ? 'text-white/70' : 'text-muted-foreground'}`}>
      PROJETO AUSTRALIS | Confidencial | Dezembro 2024
    </div>
  );
};
