import { SlideContainer } from "../presentation/SlideContainer";
import { SlideHeader } from "../presentation/SlideHeader";
import { SlideFooter } from "../presentation/SlideFooter";
import { slideData } from "@/data/slides";

export const Slide03Executive = () => {
  return (
    <SlideContainer className="bg-background">
      <SlideHeader slideNumber={3} totalSlides={30} />
      <div className="flex-1 px-16 pb-16">
        <h2 className="text-5xl font-bold text-primary mb-12">Executive Summary</h2>
        <div className="grid grid-cols-2 gap-8">
          {slideData.executiveSummary.map((stat, index) => (
            <div
              key={index}
              className={`p-10 rounded-lg ${
                index % 2 === 0 ? 'bg-primary text-primary-foreground' : 'bg-card border-2 border-border'
              }`}
              style={index % 2 === 0 ? {} : { boxShadow: 'var(--shadow-lg)' }}
            >
              <div className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-70">
                {stat.label}
              </div>
              <div className="text-6xl font-bold mb-4">
                {stat.value}
              </div>
              <div className="text-lg opacity-80">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
      <SlideFooter />
    </SlideContainer>
  );
};
