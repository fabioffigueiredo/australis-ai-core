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
      <div className="flex-1 px-16 pb-16">
        <div className="flex items-center gap-4 mb-8">
          <Wifi className="w-10 h-10 text-accent" />
          <h2 className="text-5xl font-bold text-primary">{t('slides.latency.title')}</h2>
        </div>
        
        <div className="h-[400px] mb-8 min-w-0 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={slideData.latency}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="city" 
                stroke="hsl(var(--muted-foreground))"
                style={{ fontSize: '16px', fontWeight: 'bold' }}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                style={{ fontSize: '14px' }}
                label={{ value: t('slides.latency.chart.yAxisLabel'), angle: -90, position: 'insideLeft' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(t('slides.latency.metrics', { returnObjects: true }) as Array<{value: string, description: string, color: string}>).map((metric, index) => (
            <div key={index} className={`bg-${metric.color}-50 border-2 border-${metric.color}-200 p-6 rounded-lg`}>
              <div className={`text-3xl font-bold text-${metric.color}-700 mb-2`}>{metric.value}</div>
              <div className={`text-sm text-${metric.color}-900`}>{metric.description}</div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center text-muted-foreground">
          <p className="text-lg">
            {t('slides.latency.footer')}
          </p>
        </div>
      </div>
      <SlideFooter />
    </SlideContainer>
  );
};
