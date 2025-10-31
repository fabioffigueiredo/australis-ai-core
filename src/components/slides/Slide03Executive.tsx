import { SlideContainer } from "../presentation/SlideContainer";
import { SlideHeader } from "../presentation/SlideHeader";
import { SlideFooter } from "../presentation/SlideFooter";
import { slideData } from "@/data/slides";
import { useTranslation } from "react-i18next";

export const Slide03Executive = () => {
  const { t } = useTranslation();
  
  return (
    <SlideContainer className="bg-background">
      <SlideHeader slideNumber={3} totalSlides={29} />
      <div className="flex-1 container-responsive pb-8 xs:pb-10 sm:pb-12 md:pb-14 lg:pb-16">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 xs:mb-8 sm:mb-10 md:mb-12">{t('slides.executive.title')}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xs:gap-6 sm:gap-8 md:gap-10">
          {(t('slides.executive.stats', { returnObjects: true }) as any[]).map((stat, index) => (
            <div
              key={index}
              className={`slide-card-responsive rounded-lg ${
                index % 2 === 0 ? 'bg-primary text-primary-foreground' : 'bg-card border-2 border-border'
              }`}
              style={index % 2 === 0 ? {} : { boxShadow: 'var(--shadow-lg)' }}
            >
              <div className="text-xs xs:text-sm sm:text-base font-semibold uppercase tracking-wider mb-2 xs:mb-3 sm:mb-4 opacity-70">
                {stat.label}
              </div>
              <div className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 xs:mb-3 sm:mb-4">
                {stat.value}
              </div>
              <div className="text-sm xs:text-base sm:text-lg md:text-xl opacity-80">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
      <SlideFooter />
    </SlideContainer>
  );
};
