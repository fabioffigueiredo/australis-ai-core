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
      <div className="flex-1 px-16 pb-16">
        <div className="flex items-center gap-4 mb-12">
          <MapPin className="w-10 h-10 text-accent" />
          <h2 className="text-5xl font-bold text-primary">{t('slides.location.title')}</h2>
        </div>
        
        <div className="grid grid-cols-2 gap-12 h-[500px]">
          <div className="bg-muted rounded-lg p-12 flex items-center justify-center">
            <div className="text-center space-y-8">
              <div className="text-7xl">🗺️</div>
              <div className="text-2xl font-bold text-primary">{t('slides.location.city')}</div>
              <div className="text-lg text-muted-foreground">{t('slides.location.coordinates')}</div>
              <div className="pt-6 border-t border-border">
                <div className="text-sm uppercase tracking-wider text-muted-foreground mb-2">{t('slides.location.uniquePosition')}</div>
                <div className="text-lg font-semibold">{t('slides.location.southernmostCity')}</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-card border-2 border-border p-6 rounded-lg">
              <div className="font-bold text-xl mb-2 text-primary">{t('slides.location.connectivity.title')}</div>
              <ul className="space-y-3 text-foreground">
                {(t('slides.location.connectivity.cities', { returnObjects: true }) as any[]).map((city, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span>{city.name}</span>
                    <span className="font-bold text-accent">{city.distance}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-accent text-accent-foreground p-6 rounded-lg">
              <div className="font-bold text-xl mb-4">{t('slides.location.infrastructure.title')}</div>
              <ul className="space-y-3">
                {(t('slides.location.infrastructure.items', { returnObjects: true }) as any[]).map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
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
