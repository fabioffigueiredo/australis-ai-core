import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "@/components/LanguageSelector";
import { Slide01Cover } from "@/components/slides/Slide01Cover";
import { Slide02Disclaimer } from "@/components/slides/Slide02Disclaimer";
import { Slide03Executive } from "@/components/slides/Slide03Executive";
import { Slide04Opportunity } from "@/components/slides/Slide04Opportunity";
import { Slide05Thesis } from "@/components/slides/Slide05Thesis";
import { Slide06Comparison } from "@/components/slides/Slide06Comparison";
import { Slide07Location } from "@/components/slides/Slide07Location";
import { Slide08MarketDef } from "@/components/slides/Slide08MarketDef";
import { Slide09Latency } from "@/components/slides/Slide09Latency";
import { Slide10Energy } from "@/components/slides/Slide10Energy";
import { Slide11Connectivity } from "@/components/slides/Slide11Connectivity";
import { Slide12Hardware } from "@/components/slides/Slide12Hardware";
import { Slide13Facility, Slide14Cooling, Slide15Capex, Slide16Timeline } from "@/components/slides/SlidesRemaining";
import { Slide17Revenue, Slide18Market, Slide19Projections, Slide20Financials, Slide21Returns, Slide22Sensitivity } from "@/components/slides/SlidesFinancial";
import { Slide23Risks, Slide24CSF, Slide25Moat, Slide26Roadmap, Slide27ESG, Slide28NextSteps, Slide29CTA } from "@/components/slides/SlidesFinal";

const slides = [
  <Slide01Cover />,
  <Slide02Disclaimer />,
  <Slide03Executive />,
  <Slide04Opportunity />,
  <Slide05Thesis />,
  <Slide06Comparison />,
  <Slide07Location />,
  <Slide08MarketDef />,
  <Slide09Latency />,
  <Slide10Energy />,
  <Slide11Connectivity />,
  <Slide12Hardware />,
  <Slide13Facility />,
  <Slide14Cooling />,
  <Slide15Capex />,
  <Slide16Timeline />,
  <Slide17Revenue />,
  <Slide18Market />,
  <Slide19Projections />,
  <Slide20Financials />,
  <Slide21Returns />,
  <Slide22Sensitivity />,
  <Slide23Risks />,
  <Slide24CSF />,
  <Slide25Moat />,
  <Slide26Roadmap />,
  <Slide27ESG />,
  <Slide28NextSteps />,
  <Slide29CTA />
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useTranslation();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-y-auto bg-background">
      <div className="w-full min-h-full">
        {slides[currentSlide]}
      </div>

      {/* Navigation Controls - Lateral positioning */}
      {/* Previous Button - Left side */}
      <button
        onClick={prevSlide}
        disabled={currentSlide === 0}
        className="fixed left-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/80 backdrop-blur-sm text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed z-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
        aria-label={t('navigation.previous') || 'Slide anterior'}
        style={{ boxShadow: 'var(--shadow-lg)' }}
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Next Button - Right side */}
      <button
        onClick={nextSlide}
        disabled={currentSlide === slides.length - 1}
        className="fixed right-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/80 backdrop-blur-sm text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed z-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
        aria-label={t('navigation.next') || 'Próximo slide'}
        style={{ boxShadow: 'var(--shadow-lg)' }}
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>



      {/* Language Selector */}
      <div 
        className="fixed z-50"
        style={{ 
          top: 'calc(env(safe-area-inset-top) + 1rem)', 
          right: 'calc(env(safe-area-inset-right) + 1rem)'
        }}
      >
        <LanguageSelector />
      </div>

      {/* Instructions - moved to bottom center to avoid overlap */}
      <div 
        className="pointer-events-none fixed left-1/2 -translate-x-1/2 bg-muted/90 backdrop-blur-sm px-3 py-1.5 xs:px-4 xs:py-2 sm:px-6 sm:py-3 rounded-lg text-muted-foreground z-40 shadow-md max-w-[calc(100vw-8rem)] xs:max-w-[calc(100vw-10rem)] sm:max-w-none"
        style={{ bottom: 'calc(env(safe-area-inset-bottom) + 1rem)' }}
      >
        <span className="hidden xs:inline text-[clamp(10px,1.8vw,14px)]">{t('navigation.instructions')}</span>
        <span className="xs:hidden text-[clamp(10px,3.5vw,12px)]">← → Navegar</span>
      </div>
    </div>
  );
};

export default Index;
