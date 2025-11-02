import { SlideContainer } from "../presentation/SlideContainer";
import { SlideHeader } from "../presentation/SlideHeader";
import { SlideFooter } from "../presentation/SlideFooter";
import { Target, X, Check } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Slide08MarketDef = () => {
  const { t } = useTranslation();
  return (
    <SlideContainer className="bg-background">
      <SlideHeader slideNumber={8} totalSlides={29} />
      <div className="flex-1 container-responsive pb-8 xs:pb-10 sm:pb-12 md:pb-14 lg:pb-16">
        <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 mb-6 xs:mb-8 sm:mb-10 md:mb-12">
          <Target className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-accent" />
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-primary">{t('slides.marketDef.title')}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-6 sm:gap-8 mb-6 xs:mb-8 sm:mb-10 md:mb-12">
          <div className="bg-green-50 border-2 border-green-200 p-6 xs:p-8 sm:p-10 rounded-lg">
            <div className="flex items-center gap-2 xs:gap-3 mb-4 xs:mb-5 sm:mb-6">
              <Check className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-green-600" />
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-green-900">{t('slides.marketDef.targetMarket.title')}</h3>
            </div>
            <ul className="space-y-2 xs:space-y-3 sm:space-y-4">
              {(t('slides.marketDef.targetMarket.items', { returnObjects: true }) as string[]).map((item, index) => (
                <li key={index} className="flex items-start gap-2 xs:gap-3">
                  <span className="text-lg xs:text-xl sm:text-2xl text-green-600">✓</span>
                  <span className="text-sm xs:text-base sm:text-lg text-green-900">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-red-50 border-2 border-red-200 p-6 xs:p-8 sm:p-10 rounded-lg">
            <div className="flex items-center gap-2 xs:gap-3 mb-4 xs:mb-5 sm:mb-6">
              <X className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-red-600" />
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-red-900">{t('slides.marketDef.outOfScope.title')}</h3>
            </div>
            <ul className="space-y-2 xs:space-y-3 sm:space-y-4">
              {(t('slides.marketDef.outOfScope.items', { returnObjects: true }) as string[]).map((item, index) => (
                <li key={index} className="flex items-start gap-2 xs:gap-3">
                  <span className="text-lg xs:text-xl sm:text-2xl text-red-600">✗</span>
                  <span className="text-sm xs:text-base sm:text-lg text-red-900">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="bg-accent text-accent-foreground p-4 xs:p-6 sm:p-8 rounded-lg text-center">
          <p className="text-lg xs:text-xl sm:text-2xl font-bold">
            {t('slides.marketDef.conclusion.title')}
          </p>
          <p className="text-sm xs:text-base sm:text-lg mt-2 opacity-90">
            {t('slides.marketDef.conclusion.subtitle')}
          </p>
        </div>
      </div>
      <SlideFooter />
    </SlideContainer>
  );
};
