import { SlideContainer } from "../presentation/SlideContainer";
import { SlideHeader } from "../presentation/SlideHeader";
import { SlideFooter } from "../presentation/SlideFooter";
import { Cpu, HardDrive, Share2 } from "lucide-react";
import datacenterInterior from "@/assets/datacenter-interior.jpg";
import { useTranslation } from "react-i18next";

export const Slide12Hardware = () => {
  const { t } = useTranslation();
  return (
    <SlideContainer bgImage={datacenterInterior} bgOverlay>
      <SlideHeader slideNumber={12} totalSlides={29} light />
      <div className="flex-1 container-responsive pb-8 xs:pb-10 sm:pb-12 md:pb-14 lg:pb-16">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 xs:mb-8 sm:mb-10 md:mb-12">{t('slides.hardware.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xs:gap-6 sm:gap-8">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 slide-card-responsive rounded-lg">
            <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2 xs:gap-3 mb-4 xs:mb-6">
              <Cpu className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 text-accent" />
              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-white">{t('slides.hardware.computation.title')}</h3>
            </div>
            <ul className="space-y-2 xs:space-y-3 sm:space-y-4 text-white">
              {(t('slides.hardware.computation.items', { returnObjects: true }) as any[]).map((item, index) => (
                <li key={index} className={index === 3 ? "pt-2 xs:pt-3 sm:pt-4 border-t border-white/20" : ""}>
                  <div className="text-xl xs:text-2xl sm:text-3xl font-bold text-accent mb-1">{item.value}</div>
                  <div className="text-xs xs:text-sm opacity-80">{item.description}</div>
                  {item.subtitle && (
                    <div className="text-xs opacity-70 mt-1">{item.subtitle}</div>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 slide-card-responsive rounded-lg">
            <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2 xs:gap-3 mb-4 xs:mb-6">
              <HardDrive className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 text-accent" />
              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-white">{t('slides.hardware.storage.title')}</h3>
            </div>
            <ul className="space-y-2 xs:space-y-3 sm:space-y-4 text-white">
              {(t('slides.hardware.storage.items', { returnObjects: true }) as any[]).map((item, index) => (
                <li key={index} className={index === 2 ? "pt-2 xs:pt-3 sm:pt-4 border-t border-white/20" : ""}>
                  <div className="text-xl xs:text-2xl sm:text-3xl font-bold text-accent mb-1">{item.value}</div>
                  <div className="text-xs xs:text-sm opacity-80">{item.description}</div>
                  {item.tiers && (
                    <div>
                      {item.tiers.map((tier: string, tierIndex: number) => (
                        <div key={tierIndex} className={`text-xs xs:text-sm font-semibold ${tierIndex > 0 ? 'mt-2' : ''}`}>
                          {tier}
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 slide-card-responsive rounded-lg md:col-span-2 xl:col-span-1">
            <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2 xs:gap-3 mb-4 xs:mb-6">
              <Share2 className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 text-accent" />
              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-white">{t('slides.hardware.network.title')}</h3>
            </div>
            <ul className="space-y-2 xs:space-y-3 sm:space-y-4 text-white">
              {(t('slides.hardware.network.items', { returnObjects: true }) as any[]).map((item, index) => (
                <li key={index} className={index === 2 ? "pt-2 xs:pt-3 sm:pt-4 border-t border-white/20" : ""}>
                  <div className="text-xl xs:text-2xl sm:text-3xl font-bold text-accent mb-1">{item.value}</div>
                  <div className="text-xs xs:text-sm opacity-80">{item.description}</div>
                  {item.subtitle && (
                    <div className="text-xs opacity-70 mt-1">{item.subtitle}</div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-6 xs:mt-8 bg-accent text-accent-foreground slide-card-responsive rounded-lg text-center">
          <p className="text-lg xs:text-xl sm:text-2xl font-bold">
            {t('slides.hardware.performance')}
          </p>
        </div>
      </div>
      <SlideFooter light />
    </SlideContainer>
  );
};
