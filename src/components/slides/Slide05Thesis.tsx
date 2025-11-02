import { SlideContainer } from "../presentation/SlideContainer";
import { SlideHeader } from "../presentation/SlideHeader";
import { SlideFooter } from "../presentation/SlideFooter";
import { Snowflake, DollarSign } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Slide05Thesis = () => {
  const { t } = useTranslation();
  
  return (
    <SlideContainer className="bg-background">
      <SlideHeader slideNumber={5} totalSlides={29} />
      <div className="flex-1 container-responsive pb-8 xs:pb-10 sm:pb-12 md:pb-14 lg:pb-16">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 xs:mb-8 sm:mb-10 md:mb-12">{t('slides.thesis.title')}</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 lg:gap-12">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 xs:p-8 sm:p-10 rounded-lg border-2 border-blue-200">
            <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 mb-4 xs:mb-6 sm:mb-8">
              <Snowflake className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-600" />
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-blue-900">{t('slides.thesis.climateEfficiency.title')}</h3>
            </div>
            <ul className="space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6">
              {(t('slides.thesis.climateEfficiency.items', { returnObjects: true }) as any[]).map((item, index) => (
                <li key={index} className="flex items-start gap-2 xs:gap-3 sm:gap-4">
                  <span className="text-xl xs:text-2xl sm:text-3xl text-blue-600 font-bold">•</span>
                  <div>
                    <div className="font-bold text-base xs:text-lg sm:text-xl text-blue-900">{item.title}</div>
                    <div className="text-sm xs:text-base text-blue-700">{item.description}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 xs:p-8 sm:p-10 rounded-lg border-2 border-orange-200">
            <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 mb-4 xs:mb-6 sm:mb-8">
              <DollarSign className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-orange-600" />
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-orange-900">{t('slides.thesis.fiscalAdvantage.title')}</h3>
            </div>
            <ul className="space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6">
              {(t('slides.thesis.fiscalAdvantage.items', { returnObjects: true }) as any[]).map((item, index) => (
                <li key={index} className="flex items-start gap-2 xs:gap-3 sm:gap-4">
                  <span className="text-xl xs:text-2xl sm:text-3xl text-orange-600 font-bold">•</span>
                  <div>
                    <div className="font-bold text-base xs:text-lg sm:text-xl text-orange-900">{item.title}</div>
                    <div className="text-sm xs:text-base text-orange-700">{item.description}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <SlideFooter />
    </SlideContainer>
  );
};
