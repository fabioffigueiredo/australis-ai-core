import { SlideContainer } from "../presentation/SlideContainer";
import { SlideHeader } from "../presentation/SlideHeader";
import { SlideFooter } from "../presentation/SlideFooter";
import { MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Slide07Location = () => {
  const { t } = useTranslation();
  
  return (
    <SlideContainer className="bg-background">
      <SlideHeader slideNumber={7} totalSlides={29} />
      <div className="flex-1 container-responsive pb-8 xs:pb-10 sm:pb-12 md:pb-14 lg:pb-16">
        <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 mb-6 xs:mb-8 sm:mb-10 md:mb-12">
          <MapPin className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-accent" />
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-primary">{t('slides.location.title')}</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 lg:gap-12">
          <div className="bg-muted rounded-lg p-6 xs:p-8 sm:p-10 md:p-12 flex items-center justify-center">
            <div className="text-center space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-8">
              <div className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl">🗺️</div>
              <div className="text-lg xs:text-xl sm:text-2xl font-bold text-primary">{t('slides.location.city')}</div>
              <div className="text-sm xs:text-base sm:text-lg text-muted-foreground">{t('slides.location.coordinates')}</div>
              <div className="pt-4 xs:pt-5 sm:pt-6 border-t border-border">
                <div className="text-xs xs:text-sm uppercase tracking-wider text-muted-foreground mb-2">{t('slides.location.uniquePosition')}</div>
                <div className="text-sm xs:text-base sm:text-lg font-semibold">{t('slides.location.southernmostCity')}</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4 xs:space-y-5 sm:space-y-6">
            <div className="bg-card border-2 border-border p-4 xs:p-5 sm:p-6 rounded-lg">
              <div className="font-bold text-base xs:text-lg sm:text-xl mb-2 text-primary">{t('slides.location.connectivity.title')}</div>
              <ul className="space-y-2 xs:space-y-3 text-sm xs:text-base text-foreground">
                {(t('slides.location.connectivity.cities', { returnObjects: true }) as any[]).map((city, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span>{city.name}</span>
                    <span className="font-bold text-accent">{city.distance}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-accent text-accent-foreground p-4 xs:p-5 sm:p-6 rounded-lg">
              <div className="font-bold text-base xs:text-lg sm:text-xl mb-3 xs:mb-4">{t('slides.location.infrastructure.title')}</div>
              <ul className="space-y-2 xs:space-y-3 text-sm xs:text-base">
                {(t('slides.location.infrastructure.items', { returnObjects: true }) as any[]).map((item, index) => (
                  <li key={index} className="flex items-start gap-2 xs:gap-3">
                    <span className="text-lg xs:text-xl sm:text-2xl">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <SlideFooter />
    </SlideContainer>
  );
};
