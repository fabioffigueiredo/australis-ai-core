// Slides 13-30 - Continuação da apresentação
import { SlideContainer } from "../presentation/SlideContainer";
import { SlideHeader } from "../presentation/SlideHeader";
import { SlideFooter } from "../presentation/SlideFooter";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip } from "recharts";
import { slideData } from "@/data/slides";
import { Building2, Thermometer, DollarSign, Calendar, TrendingUp, Users, AlertTriangle, Shield, Target, Rocket, Leaf, Phone } from "lucide-react";
import ushuaiaSunrise from "@/assets/ushuaia-sunrise.jpg";
import aiNetwork from "@/assets/ai-network.jpg";

export const Slide13Facility = () => (
  <SlideContainer className="bg-background">
    <SlideHeader slideNumber={13} totalSlides={30} />
    <div className="flex-1 px-16 pb-16">
      <div className="flex items-center gap-4 mb-12">
        <Building2 className="w-10 h-10 text-accent" />
        <h2 className="text-5xl font-bold text-primary">Arquitetura da Instalação</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="bg-primary text-primary-foreground p-10 rounded-lg">
            <h3 className="text-3xl font-bold mb-8">Dimensões</h3>
            <div className="space-y-6">
              <div>
                <div className="text-sm uppercase tracking-wider opacity-80 mb-2">Área Total</div>
                <div className="text-5xl font-bold">50.000 m²</div>
              </div>
              <div>
                <div className="text-sm uppercase tracking-wider opacity-80 mb-2">Data Halls</div>
                <div className="text-5xl font-bold">2.500 m²</div>
              </div>
              <div>
                <div className="text-sm uppercase tracking-wider opacity-80 mb-2">Racks</div>
                <div className="text-5xl font-bold">1.000</div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-card border-2 border-border p-8 rounded-lg">
            <h4 className="text-2xl font-bold text-primary mb-6">Especificações</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl">✓</span>
                <div>
                  <div className="font-bold">Piso elevado</div>
                  <div className="text-sm text-muted-foreground">80cm para cabeamento</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl">✓</span>
                <div>
                  <div className="font-bold">Segurança Tier III</div>
                  <div className="text-sm text-muted-foreground">Múltiplas zonas de acesso</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl">✓</span>
                <div>
                  <div className="font-bold">Sistema de incêndio</div>
                  <div className="text-sm text-muted-foreground">Supressão por gás inerte</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl">✓</span>
                <div>
                  <div className="font-bold">NOC 24/7</div>
                  <div className="text-sm text-muted-foreground">Centro de operações</div>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-accent text-accent-foreground p-6 rounded-lg">
            <div className="text-2xl font-bold mb-2">Densidade de Rack</div>
            <div className="text-4xl font-bold">30-50 kW</div>
            <div className="text-sm opacity-90 mt-2">Por rack (otimizado para GPUs)</div>
          </div>
        </div>
      </div>
    </div>
    <SlideFooter />
  </SlideContainer>
);

export const Slide14Cooling = () => (
  <SlideContainer className="bg-background">
    <SlideHeader slideNumber={14} totalSlides={30} />
    <div className="flex-1 px-16 pb-16">
      <div className="flex items-center gap-4 mb-12">
        <Thermometer className="w-10 h-10 text-accent" />
        <h2 className="text-5xl font-bold text-primary">Sistemas de Resfriamento</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 p-10 rounded-lg">
          <h3 className="text-3xl font-bold text-blue-900 mb-8">Free-Air Cooling</h3>
          <div className="space-y-6 text-blue-900">
            <div className="flex items-start gap-4">
              <span className="text-3xl text-blue-600">❄️</span>
              <div>
                <div className="font-bold text-xl mb-2">Ar Externo Natural</div>
                <div className="text-blue-700">Temperatura média anual: 5.5°C</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-3xl text-blue-600">🌡️</span>
              <div>
                <div className="font-bold text-xl mb-2">365 Dias/Ano</div>
                <div className="text-blue-700">Resfriamento passivo contínuo</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-3xl text-blue-600">💰</span>
              <div>
                <div className="font-bold text-xl mb-2">-40% Custos</div>
                <div className="text-blue-700">vs resfriamento mecânico tradicional</div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-card border-2 border-border p-8 rounded-lg">
            <h4 className="text-2xl font-bold text-primary mb-6">Direct Liquid Cooling</h4>
            <div className="space-y-4">
              <p className="text-foreground">Para GPUs de alta densidade:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">✓</span>
                  <span>Placas cold-plate em contato direto</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">✓</span>
                  <span>Líquido dielétrico circulante</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">✓</span>
                  <span>Eficiência {'>'} 95% na remoção de calor</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 border-2 border-green-200 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-green-700 mb-2">PUE 1.08</div>
              <div className="text-sm text-green-900">Meta de eficiência</div>
            </div>
            <div className="bg-orange-50 border-2 border-orange-200 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-orange-700 mb-2">60 MW</div>
              <div className="text-sm text-orange-900">Capacidade térmica</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SlideFooter />
  </SlideContainer>
);

export const Slide15Capex = () => {
  const COLORS = ['#1A3B5C', '#FF6B35', '#4A90E2', '#50C878', '#FFB84D'];
  
  return (
    <SlideContainer className="bg-background">
      <SlideHeader slideNumber={15} totalSlides={30} />
      <div className="flex-1 px-16 pb-16">
        <div className="flex items-center gap-4 mb-12">
          <DollarSign className="w-10 h-10 text-accent" />
          <h2 className="text-5xl font-bold text-primary">Plano de Investimento - CAPEX</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="h-[500px] min-w-0 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={slideData.capexBreakdown}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={(entry) => `${entry.percent}%`}
                  outerRadius={180}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {slideData.capexBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-4">
            {slideData.capexBreakdown.map((item, index) => (
              <div key={index} className="bg-card border-2 border-border p-6 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <div className="font-bold text-xl text-primary">{item.category}</div>
                  <div 
                    className="w-4 h-4 rounded-full" 
                    style={{ backgroundColor: COLORS[index] }}
                  />
                </div>
                <div className="flex justify-between items-end">
                  <div className="text-3xl font-bold text-accent">
                    USD {item.value}M
                  </div>
                  <div className="text-2xl font-bold text-muted-foreground">
                    {item.percent}%
                  </div>
                </div>
              </div>
            ))}
            <div className="bg-primary text-primary-foreground p-6 rounded-lg mt-6">
              <div className="text-sm uppercase tracking-wider opacity-80 mb-2">Total de Investimento</div>
              <div className="text-5xl font-bold">USD 500M</div>
            </div>
          </div>
        </div>
      </div>
      <SlideFooter />
    </SlideContainer>
  );
};

export const Slide16Timeline = () => (
  <SlideContainer className="bg-background">
    <SlideHeader slideNumber={16} totalSlides={30} />
    <div className="flex-1 px-16 pb-16">
      <div className="flex items-center gap-4 mb-12">
        <Calendar className="w-10 h-10 text-accent" />
        <h2 className="text-5xl font-bold text-primary">Cronograma do Projeto</h2>
      </div>
      <div className="space-y-8">
        {slideData.timeline.map((phase, index) => (
          <div key={index} className="relative">
            <div className="flex items-center gap-6">
              <div className="w-48 text-right">
                <div className="font-bold text-xl text-primary">{phase.phase}</div>
                <div className="text-sm text-muted-foreground">
                  Meses {phase.start}-{phase.start + phase.duration}
                </div>
              </div>
              <div className="flex-1 h-20 bg-muted rounded-lg overflow-hidden relative">
                <div 
                  className="h-full bg-accent transition-all"
                  style={{ 
                    width: `${(phase.duration / 37) * 100}%`,
                    marginLeft: `${(phase.start / 37) * 100}%`
                  }}
                />
              </div>
              <div className="w-32 text-center">
                <div className="text-2xl font-bold text-accent">{phase.duration}m</div>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-12 grid grid-cols-3 gap-6">
          <div className="bg-green-50 border-2 border-green-200 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-green-700 mb-2">36 meses</div>
            <div className="text-sm text-green-900">Construção total</div>
          </div>
          <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-blue-700 mb-2">Q2 2028</div>
            <div className="text-sm text-blue-900">Lançamento operacional</div>
          </div>
          <div className="bg-orange-50 border-2 border-orange-200 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-orange-700 mb-2">Fase 1</div>
            <div className="text-sm text-orange-900">2.6 ExaFLOPS</div>
          </div>
        </div>
      </div>
    </div>
    <SlideFooter />
  </SlideContainer>
);

// Continua nos próximos componentes...
