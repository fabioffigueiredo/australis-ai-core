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
      <div className="flex-1 px-16 pb-16 flex flex-col justify-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <AlertCircle className="w-12 h-12 text-accent" />
            <h2 className="text-5xl font-bold text-primary">{t('slides.disclaimer.title')}</h2>
          </div>
          <div className="bg-muted p-12 rounded-lg space-y-6">
            {(t('slides.disclaimer.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
              <p key={index} className="text-lg text-foreground leading-relaxed flex items-start gap-4">
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
