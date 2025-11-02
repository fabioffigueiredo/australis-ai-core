import { SlideContainer } from "../presentation/SlideContainer";
import { SlideHeader } from "../presentation/SlideHeader";
import { SlideFooter } from "../presentation/SlideFooter";
import { AlertCircle } from "lucide-react";
import { slideData } from "@/data/slides";
import { useTranslation } from "react-i18next";

export const Slide02Disclaimer = () => {
  const { t } = useTranslation();

  return (
    <SlideContainer className="bg-background">
      <SlideHeader slideNumber={2} totalSlides={29} />
      <div className="flex-1 container-responsive pb-8 xs:pb-10 sm:pb-12 md:pb-14 lg:pb-16 flex flex-col justify-center">
        <div className="max-w-4xl mx-auto w-full">
          <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 mb-6 xs:mb-8 sm:mb-10 md:mb-12">
            <AlertCircle className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-accent" />
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-primary">{t('slides.disclaimer.title')}</h2>
          </div>
          <div className="bg-muted p-4 xs:p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6">
            {(t('slides.disclaimer.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
              <p key={index} className="text-sm xs:text-base sm:text-lg text-foreground leading-relaxed flex items-start gap-2 xs:gap-3 sm:gap-4">
                <span className="text-accent font-bold">•</span>
                <span>{item}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
      <SlideFooter />
    </SlideContainer>
  );
};
