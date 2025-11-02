import { SlideContainer } from "../presentation/SlideContainer";
import { SlideHeader } from "../presentation/SlideHeader";
import { SlideFooter } from "../presentation/SlideFooter";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { slideData } from "@/data/slides";
import { TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Slide04Opportunity = () => {
  const { t } = useTranslation();
  
  return (
    <SlideContainer className="bg-background">
      <SlideHeader slideNumber={4} totalSlides={29} />
      <div className="flex-1 container-responsive pb-8 xs:pb-10 sm:pb-12 md:pb-14 lg:pb-16">
        <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2 xs:gap-3 sm:gap-4 mb-6 xs:mb-8 sm:mb-10">
          <TrendingUp className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-accent" />
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-primary">{t('slides.opportunity.title')}</h2>
        </div>
        
        <div className="h-[200px] xs:h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] mb-6 xs:mb-8 min-w-0 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={slideData.marketGrowth}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="year" 
                stroke="hsl(var(--muted-foreground))"
                style={{ fontSize: 'clamp(10px, 2vw, 14px)' }}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                style={{ fontSize: 'clamp(10px, 2vw, 14px)' }}
                label={{ 
                  value: t('slides.opportunity.chart.yAxisLabel'), 
                  angle: -90, 
                  position: 'insideLeft',
                  style: { fontSize: 'clamp(10px, 1.5vw, 14px)' }
                }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                  fontSize: 'clamp(12px, 2vw, 16px)'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="hsl(var(--accent-orange))" 
                strokeWidth={3}
                dot={{ fill: 'hsl(var(--accent-orange))', r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-5 md:gap-6">
          {(t('slides.opportunity.stats', { returnObjects: true }) as any[]).map((stat, index) => (
            <div 
              key={index}
              className={`p-4 xs:p-5 sm:p-6 md:p-8 rounded-lg ${
                index === 0 ? 'bg-accent text-accent-foreground' : 'bg-card border-2 border-border'
              }`}
            >
              <div className={`text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-2 xs:mb-3 ${index === 0 ? '' : 'text-primary'}`}>
                {stat.value}
              </div>
              <div className={`text-xs xs:text-sm sm:text-base ${index === 0 ? '' : 'text-muted-foreground'}`}>
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
