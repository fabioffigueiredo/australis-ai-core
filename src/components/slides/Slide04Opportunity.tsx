import { SlideContainer } from "../presentation/SlideContainer";
import { SlideHeader } from "../presentation/SlideHeader";
import { SlideFooter } from "../presentation/SlideFooter";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { slideData } from "@/data/slides";
import { TrendingUp } from "lucide-react";

export const Slide04Opportunity = () => {
  return (
    <SlideContainer className="bg-background">
      <SlideHeader slideNumber={4} totalSlides={30} />
      <div className="flex-1 px-16 pb-16">
        <div className="flex items-center gap-4 mb-8">
          <TrendingUp className="w-10 h-10 text-accent" />
          <h2 className="text-5xl font-bold text-primary">O Imperativo Global da Computação de IA</h2>
        </div>
        
        <div className="h-96 mb-8 min-w-0 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={slideData.marketGrowth}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="year" 
                stroke="hsl(var(--muted-foreground))"
                style={{ fontSize: '14px' }}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                style={{ fontSize: '14px' }}
                label={{ value: 'Bilhões USD', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-accent text-accent-foreground p-6 rounded-lg">
            <div className="text-3xl font-bold mb-2">USD 100B+</div>
            <div className="text-sm">Projeto Stargate (Microsoft/OpenAI)</div>
          </div>
          <div className="bg-card border-2 border-border p-6 rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">40-60%</div>
            <div className="text-sm text-muted-foreground">Custos de energia em DCs tradicionais</div>
          </div>
          <div className="bg-card border-2 border-border p-6 rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">26% CAGR</div>
            <div className="text-sm text-muted-foreground">Crescimento mercado IA LATAM</div>
          </div>
        </div>
      </div>
      <SlideFooter />
    </SlideContainer>
  );
};
