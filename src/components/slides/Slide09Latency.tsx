import { SlideContainer } from "../presentation/SlideContainer";
import { SlideHeader } from "../presentation/SlideHeader";
import { SlideFooter } from "../presentation/SlideFooter";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { slideData } from "@/data/slides";
import { Wifi } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Slide09Latency = () => {
  const { t } = useTranslation();
  const colors = ['#FF6B35', '#1A3B5C', '#1A3B5C', '#1A3B5C', '#1A3B5C'];
  
  return (
    <SlideContainer className="bg-background">
      <SlideHeader slideNumber={9} totalSlides={29} />
      <div className="flex-1 container-responsive pb-8 xs:pb-10 sm:pb-12 md:pb-14 lg:pb-16">
        <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2 xs:gap-3 sm:gap-4 mb-6 xs:mb-8 sm:mb-10">
          <Wifi className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-accent" />
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-primary">{t('slides.latency.title')}</h2>
        </div>
        
        <div className="h-[250px] xs:h-[300px] sm:h-[350px] md:h-[400px] mb-6 xs:mb-8 min-w-0 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={slideData.latency}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="city" 
                stroke="hsl(var(--muted-foreground))"
                style={{ fontSize: 'clamp(10px, 2vw, 16px)', fontWeight: 'bold' }}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                style={{ fontSize: 'clamp(10px, 1.5vw, 14px)' }}
                label={{ 
                  value: t('slides.latency.chart.yAxisLabel'), 
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
                formatter={(value) => [`${value}ms`, t('slides.latency.chart.tooltipLabel')]}
              />
              <Bar dataKey="rtt" radius={[8, 8, 0, 0]}>
                {slideData.latency.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-5 md:gap-6">
          {(t('slides.latency.metrics', { returnObjects: true }) as Array<{value: string, description: string, color: string}>).map((metric, index) => (
            <div key={index} className={`bg-${metric.color}-50 border-2 border-${metric.color}-200 p-4 xs:p-5 sm:p-6 rounded-lg`}>
              <div className={`text-2xl xs:text-2xl sm:text-3xl font-bold text-${metric.color}-700 mb-1 xs:mb-2`}>{metric.value}</div>
              <div className={`text-xs xs:text-sm text-${metric.color}-900`}>{metric.description}</div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 xs:mt-8 text-center text-muted-foreground">
          <p className="text-sm xs:text-base sm:text-lg">
            {t('slides.latency.footer')}
          </p>
        </div>
      </div>
      <SlideFooter />
    </SlideContainer>
  );
};
