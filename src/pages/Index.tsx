import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
import { Slide23Risks, Slide24CSF, Slide25Moat, Slide26Roadmap, Slide27ESG, Slide28NextSteps, Slide29CTA, Slide30Contact } from "@/components/slides/SlidesFinal";

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
  <Slide29CTA />,
  <Slide30Contact />
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
    <div className="relative w-screen h-screen overflow-hidden bg-background">
      <div className="w-full h-full">
        {slides[currentSlide]}
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-50">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          style={{ boxShadow: 'var(--shadow-lg)' }}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <div className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold text-lg" style={{ boxShadow: 'var(--shadow-lg)' }}>
          {currentSlide + 1} / {slides.length}
        </div>
        
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          style={{ boxShadow: 'var(--shadow-lg)' }}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Instructions */}
      <div className="fixed top-8 right-8 bg-muted/90 backdrop-blur-sm px-6 py-3 rounded-lg text-sm text-muted-foreground z-50">
        Use ← → ou Espaço para navegar
      </div>
    </div>
  );
};

export default Index;
