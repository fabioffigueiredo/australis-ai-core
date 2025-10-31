import { SlideContainer } from "../presentation/SlideContainer";
import { useTranslation } from "react-i18next";
import ushuaiaHero from "@/assets/ushuaia-hero.jpg";

export const Slide01Cover = () => {
  const { t } = useTranslation();
  return (
    <SlideContainer bgImage={ushuaiaHero} bgOverlay priority>
      <div className="flex-1 flex flex-col items-center justify-center text-white container-responsive">
        <div className="max-w-5xl text-center space-y-4 xs:space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
          <h1 className="slide-title-responsive tracking-tight mb-2 xs:mb-3 sm:mb-4">
            USHUAIA
          </h1>
          <p className="slide-subtitle-responsive font-light opacity-90">
            {t('slides.cover.subtitle')}
          </p>
          <div className="mt-6 xs:mt-8 sm:mt-10 md:mt-12 pt-6 xs:pt-8 sm:pt-10 md:pt-12 border-t border-white/30">
            <p className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gradient" style={{ WebkitTextFillColor: 'white' }}>
              {t('slides.cover.investment')}
            </p>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl mt-2 xs:mt-3 sm:mt-4 opacity-75">{t('slides.cover.opportunity')}</p>
          </div>
        </div>
      </div>
      <div className="text-white/70 text-center pb-6 xs:pb-8 sm:pb-10 md:pb-12 text-xs xs:text-sm sm:text-base">
        {t('slides.cover.confidential')}
      </div>
    </SlideContainer>
  );
};
