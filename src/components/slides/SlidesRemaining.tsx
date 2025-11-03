// Slides 13-30 - Continuação da apresentação
import { SlideContainer } from "../presentation/SlideContainer";
import { SlideHeader } from "../presentation/SlideHeader";
import { SlideFooter } from "../presentation/SlideFooter";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip } from "recharts";
import { slideData } from "@/data/slides";
import { Building2, Thermometer, DollarSign, Calendar, TrendingUp, Users, AlertTriangle, Shield, Target, Rocket, Leaf, Phone, Wind, Zap, Cpu, Droplets } from "lucide-react";
import ushuaiaSunrise from "@/assets/ushuaia-sunrise.jpg";
import aiNetwork from "@/assets/ai-network.jpg";
import { useTranslation } from "react-i18next";

export const Slide13Facility = () => {
  const { t } = useTranslation();
  const dimensions = t('slides.facility.dimensions', { returnObjects: true }) as Array<{label: string, value: string}>;
  const specifications = t('slides.facility.specifications', { returnObjects: true }) as Array<{title: string, description: string}>;

  return (
    <SlideContainer className="bg-background">
      <SlideHeader slideNumber={13} totalSlides={29} />
      <div className="flex-1 container-responsive">
        <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 mb-6 xs:mb-8 sm:mb-10 lg:mb-12">
          <Building2 className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-accent" />
          <h2 className="slide-title-responsive text-primary">{t('slides.facility.title')}</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 lg:gap-12">
          <div className="space-y-4 xs:space-y-5 sm:space-y-6">
            <div className="bg-primary text-primary-foreground slide-card-responsive">
              <h3 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl font-bold mb-4 xs:mb-6 sm:mb-8">{t('slides.facility.dimensionsTitle')}</h3>
              <div className="space-y-4 xs:space-y-5 sm:space-y-6">
                {dimensions.map((dimension, index) => (
                  <div key={index}>
                    <div className="text-xs xs:text-sm uppercase tracking-wider opacity-80 mb-1 xs:mb-2">{dimension.label}</div>
                    <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold">{dimension.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-4 xs:space-y-5 sm:space-y-6">
            <div className="bg-card border-2 border-border slide-card-responsive">
              <h4 className="text-lg xs:text-xl sm:text-2xl font-bold text-primary mb-4 xs:mb-5 sm:mb-6">{t('slides.facility.specificationsTitle')}</h4>
              <ul className="space-y-3 xs:space-y-4">
                {specifications.map((spec, index) => (
                  <li key={index} className="flex items-start gap-2 xs:gap-3">
                    <span className="text-accent text-lg xs:text-xl">✓</span>
                    <div>
                      <div className="font-bold text-sm xs:text-base">{spec.title}</div>
                      <div className="text-xs xs:text-sm text-muted-foreground">{spec.description}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-accent text-accent-foreground p-6 rounded-lg">
              <div className="text-2xl font-bold mb-2">{t('slides.facility.rackDensity.title')}</div>
              <div className="text-4xl font-bold">{t('slides.facility.rackDensity.value')}</div>
              <div className="text-sm opacity-90 mt-2">{t('slides.facility.rackDensity.description')}</div>
            </div>
          </div>
        </div>
      </div>
      <SlideFooter />
    </SlideContainer>
  );
};

export const Slide14Cooling = () => {
  const { t } = useTranslation();
  const freeAirFeatures = t('slides.cooling.freeAir.features', { returnObjects: true }) as Array<{icon: string, title: string, description: string}>;
  const liquidCoolingFeatures = t('slides.cooling.liquidCooling.features', { returnObjects: true }) as Array<{icon: string, title: string, description: string}>;
  const metrics = t('slides.cooling.metrics', { returnObjects: true }) as Array<{value: string, label: string, color: string}>;

  // Mapeamento de ícones
  const iconMap: { [key: string]: React.ComponentType<any> } = {
    Wind,
    Thermometer,
    Zap,
    DollarSign,
    Cpu,
    Droplets,
    TrendingUp
  };

  return (
    <SlideContainer className="bg-background">
      <SlideHeader slideNumber={14} totalSlides={29} />
      <div className="flex-1 px-16 pb-16">
        <div className="flex items-center gap-4 mb-12">
          <Thermometer className="w-10 h-10 text-accent" />
          <h2 className="text-5xl font-bold text-primary">{t('slides.cooling.title')}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 p-10 rounded-lg">
            <h3 className="text-3xl font-bold text-blue-900 mb-8">{t('slides.cooling.freeAir.title')}</h3>
            <div className="space-y-6 text-blue-900">
              {freeAirFeatures.map((feature, index) => {
                const IconComponent = iconMap[feature.icon];
                return (
                  <div key={index} className="flex items-start gap-4">
                    <span className="text-3xl text-blue-600">
                      {IconComponent ? <IconComponent size={24} /> : feature.icon}
                    </span>
                    <div>
                      <div className="font-bold text-xl mb-2">{feature.title}</div>
                      <div className="text-blue-700">{feature.description}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-card border-2 border-border p-8 rounded-lg">
              <h4 className="text-2xl font-bold text-primary mb-6">{t('slides.cooling.liquidCooling.title')}</h4>
              <div className="space-y-4">
                <p className="text-foreground">{t('slides.cooling.liquidCooling.description')}</p>
                <ul className="space-y-3">
                  {liquidCoolingFeatures.map((feature, index) => {
                    const IconComponent = iconMap[feature.icon];
                    return (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-accent text-xl">
                          {IconComponent ? <IconComponent size={16} /> : "✓"}
                        </span>
                        <div>
                          <div className="font-semibold">{feature.title}</div>
                          <div className="text-sm text-muted-foreground">{feature.description}</div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric, index) => (
                <div key={index} className={`bg-${metric.color}-50 border-2 border-${metric.color}-200 p-6 rounded-lg text-center`}>
                  <div className={`text-4xl font-bold text-${metric.color}-700 mb-2`}>{metric.value}</div>
                  <div className={`text-sm text-${metric.color}-900`}>{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <SlideFooter />
    </SlideContainer>
  );
};

export const Slide15Capex = () => {
  const { t } = useTranslation();
  const COLORS = ['#1A3B5C', '#FF6B35', '#4A90E2', '#50C878', '#FFB84D'];
  // Formata o label do setor de pizza garantindo tipo numérico
  const formatPieLabel = (props: any): React.ReactNode => {
    const raw = typeof props?.percent === 'number' ? props.percent : Number(props?.percent);
    const pct = Number.isFinite(raw) ? raw : 0;
    return `${Math.round(pct * 100)}%`;
  };
  
  return (
    <SlideContainer className="bg-background">
      <SlideHeader slideNumber={15} totalSlides={29} />
      <div className="flex-1 container-responsive pb-8 xs:pb-10 sm:pb-12 md:pb-14 lg:pb-16">
        <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 mb-6 xs:mb-8 sm:mb-10 lg:mb-12">
          <DollarSign className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-accent" />
          <h2 className="slide-title-responsive text-primary">{t('slides.capex.title')}</h2>
        </div>
        <div className="grid grid-responsive-1-2 gap-responsive-md items-center">
          <div className="w-full min-w-0">
            <ResponsiveContainer width="100%" aspect={1}>
              <PieChart>
                <Pie
                  data={slideData.capexBreakdown}
                  cx="50%"
                  cy="50%"
                  nameKey="category"
                  dataKey="value"
                  labelLine={false}
                  label={formatPieLabel}
                  outerRadius="80%"
                  paddingAngle={1}
                  minAngle={2}
                >
                  {slideData.capexBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend layout="horizontal" align="center" verticalAlign="bottom" />
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
                    {Math.round(item.percent * 100)}%
                  </div>
                </div>
              </div>
            ))}
            <div className="bg-primary text-primary-foreground p-6 rounded-lg mt-6">
              <div className="text-sm uppercase tracking-wider opacity-80 mb-2">{t('slides.capex.totalInvestment')}</div>
              <div className="text-5xl font-bold">{t('slides.capex.totalValue')}</div>
            </div>
          </div>
        </div>
      </div>
      <SlideFooter />
    </SlideContainer>
  );
};

export const Slide16Timeline = () => {
  const { t } = useTranslation();
  const summaryCards = t('slides.timeline.summary', { returnObjects: true }) as Array<{value: string, label: string, color: string}>;

  return (
    <SlideContainer className="bg-background">
      <SlideHeader slideNumber={16} totalSlides={29} />
      <div className="flex-1 px-16 pb-16">
        <div className="flex items-center gap-4 mb-12">
          <Calendar className="w-10 h-10 text-accent" />
          <h2 className="text-5xl font-bold text-primary">{t('slides.timeline.title')}</h2>
        </div>
        <div className="space-y-8">
          {slideData.timeline.map((phase, index) => (
            <div key={index} className="relative">
              <div className="flex items-center gap-6">
                <div className="w-48 text-right">
                  <div className="font-bold text-xl text-primary">{phase.phase}</div>
                  <div className="text-sm text-muted-foreground">
                    {t('slides.timeline.months')} {phase.start}-{phase.start + phase.duration}
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
            {summaryCards.map((card, index) => (
              <div key={index} className={`bg-${card.color}-50 border-2 border-${card.color}-200 p-6 rounded-lg text-center`}>
                <div className={`text-3xl font-bold text-${card.color}-700 mb-2`}>{card.value}</div>
                <div className={`text-sm text-${card.color}-900`}>{card.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <SlideFooter />
    </SlideContainer>
  );
};

// Continua nos próximos componentes...
