interface SlideFooterProps {
  light?: boolean;
}

export const SlideFooter = ({ light = false }: SlideFooterProps) => {
  return (
    <div className={`px-16 py-8 text-sm ${light ? 'text-white/70' : 'text-muted-foreground'}`}>
      PROJETO AUSTRALIS | Confidencial | Dezembro 2024
    </div>
  );
};
