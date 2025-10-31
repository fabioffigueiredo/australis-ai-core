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
      <div className="flex-1 px-16 pb-16">
        <div className="flex items-center gap-4 mb-12">
          <Target className="w-10 h-10 text-accent" />
          <h2 className="text-5xl font-bold text-primary">{t('slides.marketDef.title')}</h2>
        </div>
        
        <div className="grid grid-cols-2 gap-8 mb-12">
          <div className="bg-green-50 border-2 border-green-200 p-10 rounded-lg">
            <div className="flex items-center gap-3 mb-6">
              <Check className="w-8 h-8 text-green-600" />
              <h3 className="text-3xl font-bold text-green-900">{t('slides.marketDef.targetMarket.title')}</h3>
            </div>
            <ul className="space-y-4">
              {(t('slides.marketDef.targetMarket.items', { returnObjects: true }) as string[]).map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-2xl text-green-600">✓</span>
                  <span className="text-lg text-green-900">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-red-50 border-2 border-red-200 p-10 rounded-lg">
            <div className="flex items-center gap-3 mb-6">
              <X className="w-8 h-8 text-red-600" />
              <h3 className="text-3xl font-bold text-red-900">{t('slides.marketDef.outOfScope.title')}</h3>
            </div>
            <ul className="space-y-4">
              {(t('slides.marketDef.outOfScope.items', { returnObjects: true }) as string[]).map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-2xl text-red-600">✗</span>
                  <span className="text-lg text-red-900">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="bg-accent text-accent-foreground p-8 rounded-lg text-center">
          <p className="text-2xl font-bold">
            {t('slides.marketDef.conclusion.title')}
          </p>
          <p className="text-lg mt-2 opacity-90">
            {t('slides.marketDef.conclusion.subtitle')}
          </p>
        </div>
      </div>
      <SlideFooter />
    </SlideContainer>
  );
};
