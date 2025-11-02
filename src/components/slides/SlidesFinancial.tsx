// Slides 17-22 - Slides Financeiros
import { SlideContainer } from "../presentation/SlideContainer";
import { SlideHeader } from "../presentation/SlideHeader";
import { SlideFooter } from "../presentation/SlideFooter";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { slideData } from "@/data/slides";
import { DollarSign, TrendingUp, PieChart, BarChart3 } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Slide17Revenue = () => {
  const { t } = useTranslation();
  const utilizationRates = t('slides.revenue.utilizationRates', { returnObjects: true }) as Array<{period: string, rate: string}>;
  const secondaryProducts = t('slides.revenue.secondaryProducts', { returnObjects: true }) as Array<{title: string, description: string}>;
  const basedOn = t('slides.revenue.mainProduct.basedOn', { returnObjects: true }) as Array<{icon: string, title: string, description: string}>;

  return (
  <SlideContainer className="bg-background">
    <SlideHeader slideNumber={17} totalSlides={29} />
    <div className="flex-1 container-responsive pb-8 xs:pb-10 sm:pb-12 md:pb-14 lg:pb-16">
      <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2 xs:gap-4 mb-6 xs:mb-8">
        <DollarSign className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 text-accent" />
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary">{t('slides.revenue.title')}</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 lg:gap-12">
        <div className="space-y-4 xs:space-y-6">
          <div className="bg-accent text-accent-foreground slide-card-responsive rounded-lg">
            <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-4 xs:mb-6">{t('slides.revenue.mainProduct.title')}</h3>
            <div className="space-y-4 xs:space-y-6">
              <div>
                <div className="text-xs xs:text-sm uppercase tracking-wider opacity-80 mb-2">{t('slides.revenue.mainProduct.service')}</div>
                <div className="text-3xl xs:text-4xl sm:text-5xl font-bold">{t('slides.revenue.mainProduct.price')}</div>
                <div className="text-lg xs:text-xl mt-2 opacity-90">{t('slides.revenue.mainProduct.unit')}</div>
              </div>
              <div className="pt-4 xs:pt-6 border-t border-white/20">
                <div className="text-base xs:text-lg">{t('slides.revenue.mainProduct.basedOnTitle')}:</div>
                <ul className="mt-3 space-y-2 text-xs xs:text-sm">
                  {basedOn.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-base xs:text-lg">{item.icon}</span>
                      <div>
                        <div className="font-semibold">{item.title}</div>
                        <div className="opacity-80">{item.description}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-card border-2 border-border slide-card-responsive rounded-lg">
            <div className="text-lg xs:text-xl sm:text-2xl font-bold text-primary mb-2">{t('slides.revenue.utilizationTitle')}</div>
            <div className="space-y-2 xs:space-y-3 mt-4">
              {utilizationRates.map((rate, index) => (
                <div key={index} className="flex justify-between text-sm xs:text-base">
                  <span>{rate.period}</span>
                  <span className="font-bold text-accent">{rate.rate}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-4 xs:space-y-6">
          <div className="bg-card border-2 border-border slide-card-responsive rounded-lg">
            <h4 className="text-lg xs:text-xl sm:text-2xl font-bold text-primary mb-4 xs:mb-6">{t('slides.revenue.secondaryProductsTitle')}</h4>
            <ul className="space-y-3 xs:space-y-4">
              {secondaryProducts.map((product, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-accent text-lg xs:text-xl">✓</span>
                  <div>
                    <div className="font-bold text-base xs:text-lg">{product.title}</div>
                    <div className="text-xs xs:text-sm text-muted-foreground">{product.description}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-primary text-primary-foreground slide-card-responsive rounded-lg">
            <div className="text-base xs:text-lg mb-2">{t('slides.revenue.potentialRevenue.label')}</div>
            <div className="text-3xl xs:text-4xl sm:text-5xl font-bold">{t('slides.revenue.potentialRevenue.value')}</div>
            <div className="text-xs xs:text-sm mt-2 opacity-80">{t('slides.revenue.potentialRevenue.period')}</div>
          </div>
        </div>
      </div>
    </div>
    <SlideFooter />
  </SlideContainer>
  );
};

export const Slide18Market = () => {
  const { t } = useTranslation();
  const targetClients = t('slides.market.targetClients', { returnObjects: true }) as Array<{emoji: string, title: string, description: string}>;
  const growthData = t('slides.market.growth', { returnObjects: true }) as {title: string, data: Array<{year: string, value: string}>, cagr: {value: string, label: string}};

  return (
    <SlideContainer className="bg-background">
      <SlideHeader slideNumber={18} totalSlides={29} />
      <div className="flex-1 container-responsive pb-8 xs:pb-10 sm:pb-12 md:pb-14 lg:pb-16">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 xs:mb-8 sm:mb-10 md:mb-12">{t('slides.market.title')}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 lg:gap-12">
          <div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 p-6 xs:p-8 sm:p-10 rounded-lg mb-4 xs:mb-5 sm:mb-6">
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-blue-900 mb-4 xs:mb-6 sm:mb-8">{growthData.title}</h3>
              <div className="space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6">
                {growthData.data.map((item, index) => (
                  <div key={index}>
                    <div className="text-xs xs:text-sm uppercase tracking-wider text-blue-700 mb-1 xs:mb-2">{item.year}</div>
                    <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-blue-900">{item.value}</div>
                  </div>
                ))}
                <div className="pt-3 xs:pt-4 border-t border-blue-300">
                  <div className="text-lg xs:text-xl sm:text-2xl font-bold text-blue-700">{growthData.cagr.value}</div>
                  <div className="text-xs xs:text-sm text-blue-600 mt-1">{growthData.cagr.label}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4 xs:space-y-5 sm:space-y-6">
            <div className="bg-card border-2 border-border p-4 xs:p-6 sm:p-8 rounded-lg">
              <h4 className="text-lg xs:text-xl sm:text-2xl font-bold text-primary mb-4 xs:mb-5 sm:mb-6">{t('slides.market.targetClientsTitle')}</h4>
              <div className="space-y-3 xs:space-y-4">
                {targetClients.map((client, index) => (
                  <div key={index} className="flex items-center gap-2 xs:gap-3 sm:gap-4 p-3 xs:p-4 bg-muted rounded-lg">
                    <span className="text-2xl xs:text-3xl">{client.emoji}</span>
                    <div>
                      <div className="font-bold text-sm xs:text-base">{client.title}</div>
                      <div className="text-xs xs:text-sm text-muted-foreground">{client.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <SlideFooter />
    </SlideContainer>
  );
};

export const Slide19Projections = () => {
  const { t } = useTranslation();
  const projectionData = t('slides.projections.data', { returnObjects: true }) as Array<{year: number, revenue: string, ebitda: string}>;
  const highlights = t('slides.projections.highlights', { returnObjects: true }) as Array<{label: string, value: string, color: string}>;

  return (
    <SlideContainer className="bg-background">
      <SlideHeader slideNumber={19} totalSlides={29} />
      <div className="flex-1 container-responsive pb-8 xs:pb-10 sm:pb-12 md:pb-14 lg:pb-16">
        <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 mb-6 xs:mb-8">
          <TrendingUp className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-accent" />
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-primary">{t('slides.projections.title')}</h2>
        </div>
        <div className="h-[200px] xs:h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] min-w-0 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={slideData.revenueProjection}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="year" 
                stroke="hsl(var(--muted-foreground))"
                style={{ fontSize: 'clamp(10px, 2vw, 14px)' }}
                label={{ 
                  value: t('slides.projections.chart.xAxisLabel'), 
                  position: 'insideBottom', 
                  offset: -5,
                  style: { fontSize: 'clamp(10px, 1.5vw, 14px)' }
                }}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                style={{ fontSize: 'clamp(10px, 1.5vw, 14px)' }}
                label={{ 
                  value: t('slides.projections.chart.yAxisLabel'), 
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
              <Legend wrapperStyle={{ fontSize: 'clamp(10px, 1.5vw, 14px)' }} />
              <Line 
                type="monotone" 
                dataKey="receita" 
                stroke="#1A3B5C" 
                strokeWidth={3}
                name={t('slides.projections.chart.revenueLine')}
              />
              <Line 
                type="monotone" 
                dataKey="ebitda" 
                stroke="#FF6B35" 
                strokeWidth={3}
                name={t('slides.projections.chart.ebitdaLine')}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-5 md:gap-6 mt-6 xs:mt-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="bg-card border-2 border-border p-3 xs:p-4 sm:p-5 md:p-6 rounded-lg text-center">
              <div className="text-xs xs:text-sm text-muted-foreground mb-1 xs:mb-2">{highlight.label}</div>
              <div className="text-xl xs:text-2xl sm:text-3xl font-bold text-primary">{highlight.value}</div>
            </div>
          ))}
        </div>
      </div>
      <SlideFooter />
    </SlideContainer>
  );
};

export const Slide20Financials = () => {
  const years = [
    { year: 'Ano 1', ...slideData.financials.year1 },
    { year: 'Ano 3', ...slideData.financials.year3 },
    { year: 'Ano 5', ...slideData.financials.year5 },
    { year: 'Ano 10', ...slideData.financials.year10 }
  ];

  return (
    <SlideContainer className="bg-background">
      <SlideHeader slideNumber={20} totalSlides={29} />
      <div className="flex-1 container-responsive pb-8 xs:pb-10 sm:pb-12 md:pb-14 lg:pb-16">
        <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 mb-6 xs:mb-8 sm:mb-10 md:mb-12">
          <BarChart3 className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-accent" />
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-primary">Demonstração de Resultados</h2>
        </div>
        <div className="bg-white rounded-lg overflow-hidden overflow-x-auto" style={{ boxShadow: 'var(--shadow-lg)' }}>
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="text-left p-3 xs:p-4 sm:p-5 md:p-6 text-sm xs:text-base sm:text-lg font-bold">Métrica</th>
                {years.map((y) => (
                  <th key={y.year} className="text-center p-3 xs:p-4 sm:p-5 md:p-6 text-sm xs:text-base sm:text-lg font-bold">{y.year}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border bg-blue-50">
                <td className="p-3 xs:p-4 sm:p-5 md:p-6 font-bold text-sm xs:text-base sm:text-lg">Receita</td>
                {years.map((y) => (
                  <td key={y.year} className="p-3 xs:p-4 sm:p-5 md:p-6 text-center text-base xs:text-lg sm:text-xl font-bold text-blue-700">
                    USD {y.revenue}M
                  </td>
                ))}
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 xs:p-4 sm:p-5 md:p-6 font-bold text-sm xs:text-base sm:text-lg">OPEX</td>
                {years.map((y) => (
                  <td key={y.year} className="p-3 xs:p-4 sm:p-5 md:p-6 text-center text-base xs:text-lg sm:text-xl font-semibold text-red-600">
                    (USD {y.opex}M)
                  </td>
                ))}
              </tr>
              <tr className="border-b border-border bg-orange-50">
                <td className="p-3 xs:p-4 sm:p-5 md:p-6 font-bold text-sm xs:text-base sm:text-lg">EBITDA</td>
                {years.map((y) => (
                  <td key={y.year} className="p-3 xs:p-4 sm:p-5 md:p-6 text-center text-base xs:text-lg sm:text-xl font-bold text-orange-700">
                    USD {y.ebitda}M
                  </td>
                ))}
              </tr>
              <tr className="border-b border-border bg-green-50">
                <td className="p-3 xs:p-4 sm:p-5 md:p-6 font-bold text-sm xs:text-base sm:text-lg">Impostos</td>
                {years.map((y) => (
                  <td key={y.year} className="p-3 xs:p-4 sm:p-5 md:p-6 text-center text-base xs:text-lg sm:text-xl font-bold text-green-700">
                    USD 0M ✓
                  </td>
                ))}
              </tr>
              <tr className="bg-accent text-accent-foreground">
                <td className="p-3 xs:p-4 sm:p-5 md:p-6 font-bold text-base xs:text-lg sm:text-xl">Lucro Líquido</td>
                {years.map((y) => (
                  <td key={y.year} className="p-3 xs:p-4 sm:p-5 md:p-6 text-center text-lg xs:text-xl sm:text-2xl font-bold">
                    USD {y.profit}M
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 xs:mt-8 bg-green-50 border-2 border-green-200 p-4 xs:p-5 sm:p-6 rounded-lg">
          <div className="flex flex-col xs:flex-row items-center justify-center gap-2 xs:gap-3 sm:gap-4 text-center xs:text-left">
            <span className="text-2xl xs:text-3xl">✓</span>
            <div className="text-base xs:text-lg sm:text-xl font-bold text-green-900">
              Lei 19.640: Isenção total de impostos garante 100% do EBITDA como lucro líquido
            </div>
          </div>
        </div>
      </div>
      <SlideFooter />
    </SlideContainer>
  );
};

export const Slide21Returns = () => {
  const { t } = useTranslation();
  const indicators = t('slides.returns.indicators', { returnObjects: true }) as Array<{title: string, value: string, description: string, color: string}>;
  const assumptions = t('slides.returns.assumptions', { returnObjects: true }) as Array<{label: string, value: string}>;

  return (
    <SlideContainer className="bg-background">
      <SlideHeader slideNumber={21} totalSlides={29} />
      <div className="flex-1 container-responsive pb-8 xs:pb-10 sm:pb-12 md:pb-14 lg:pb-16">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 xs:mb-8 sm:mb-10 lg:mb-12">{t('slides.returns.title')}</h2>
        
        {/* Grid responsivo para indicadores financeiros */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8 mb-8 xs:mb-10 sm:mb-12">
          {indicators.map((indicator, index) => (
            <div key={index} className={`bg-gradient-to-br from-${indicator.color}-50 to-${indicator.color}-100 border-4 border-${indicator.color}-300 p-4 xs:p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg text-center`}>
              <div className={`text-xs xs:text-sm uppercase tracking-wider text-${indicator.color}-700 mb-2 xs:mb-3 sm:mb-4`}>{indicator.title}</div>
              <div className={`text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-${indicator.color}-700 mb-2 xs:mb-3 sm:mb-4`}>{indicator.value}</div>
              <div className={`text-sm xs:text-base sm:text-lg text-${indicator.color}-900`}>{indicator.description}</div>
            </div>
          ))}
        </div>
        
        {/* Seção de premissas responsiva */}
        <div className="bg-card border-2 border-border p-4 xs:p-6 sm:p-8 md:p-10 rounded-lg">
          <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-primary mb-4 xs:mb-6">{t('slides.returns.assumptionsTitle')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-6 sm:gap-8">
            <div className="space-y-3 xs:space-y-4">
              {assumptions.slice(0, 2).map((assumption, index) => (
                <div key={index} className="flex flex-col xs:flex-row xs:justify-between xs:items-center p-3 xs:p-4 bg-muted rounded-lg gap-1 xs:gap-0">
                  <span className="font-semibold text-sm xs:text-base">{assumption.label}</span>
                  <span className="text-lg xs:text-xl font-bold text-accent">{assumption.value}</span>
                </div>
              ))}
            </div>
            <div className="space-y-3 xs:space-y-4">
              {assumptions.slice(2, 4).map((assumption, index) => (
                <div key={index} className="flex flex-col xs:flex-row xs:justify-between xs:items-center p-3 xs:p-4 bg-muted rounded-lg gap-1 xs:gap-0">
                  <span className="font-semibold text-sm xs:text-base">{assumption.label}</span>
                  <span className="text-lg xs:text-xl font-bold text-accent">{assumption.value}</span>
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

export const Slide22Sensitivity = () => {
  const { t } = useTranslation();
  const sensitivityData = t('slides.sensitivity.data', { returnObjects: true }) as Array<{variable: string, base: string, worst: string, best: string}>;
  const scenarios = t('slides.sensitivity.scenarios', { returnObjects: true }) as Array<{title: string, irr: string, description: string, color: string}>;

  return (
    <SlideContainer className="bg-background">
      <SlideHeader slideNumber={22} totalSlides={29} />
      <div className="flex-1 container-responsive pb-8 xs:pb-10 sm:pb-12 md:pb-14 lg:pb-16">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 xs:mb-8 sm:mb-10 md:mb-12">{t('slides.sensitivity.title')}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 lg:gap-12">
          <div className="bg-card border-2 border-border p-4 xs:p-6 sm:p-8 rounded-lg">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-2 xs:py-3 sm:py-4 text-sm xs:text-base sm:text-lg font-bold">{t('slides.sensitivity.table.variable')}</th>
                    <th className="text-center py-2 xs:py-3 sm:py-4 text-sm xs:text-base sm:text-lg font-bold">{t('slides.sensitivity.table.baseScenario')}</th>
                    <th className="text-center py-2 xs:py-3 sm:py-4 text-sm xs:text-base sm:text-lg font-bold">{t('slides.sensitivity.table.worstScenario')}</th>
                    <th className="text-center py-2 xs:py-3 sm:py-4 text-sm xs:text-base sm:text-lg font-bold">{t('slides.sensitivity.table.bestScenario')}</th>
                  </tr>
                </thead>
                <tbody>
                  {sensitivityData.map((row, index) => (
                    <tr key={index} className={`border-b border-border ${index === sensitivityData.length - 1 ? 'bg-primary/5' : ''}`}>
                      <td className={`py-2 xs:py-3 text-xs xs:text-sm sm:text-base ${index === sensitivityData.length - 1 ? 'font-bold' : 'font-medium'}`}>{row.variable}</td>
                      <td className={`text-center py-2 xs:py-3 text-xs xs:text-sm sm:text-base ${index === sensitivityData.length - 1 ? 'font-bold' : ''}`}>{row.base}</td>
                      <td className={`text-center py-2 xs:py-3 text-xs xs:text-sm sm:text-base ${index === sensitivityData.length - 1 ? 'font-bold text-red-600' : 'text-red-600'}`}>{row.worst}</td>
                      <td className={`text-center py-2 xs:py-3 text-xs xs:text-sm sm:text-base ${index === sensitivityData.length - 1 ? 'font-bold text-green-600' : 'text-green-600'}`}>{row.best}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6">
            {scenarios.map((scenario, index) => (
              <div key={index} className={`bg-gradient-to-br from-${scenario.color}-50 to-${scenario.color}-100 border-2 border-${scenario.color}-200 p-4 xs:p-6 sm:p-8 rounded-lg`}>
                <h3 className={`text-lg xs:text-xl sm:text-2xl font-bold text-${scenario.color}-900 mb-2 xs:mb-3 sm:mb-4`}>{scenario.title}</h3>
                <div className={`text-2xl xs:text-3xl sm:text-4xl font-bold text-${scenario.color}-900 mb-1 xs:mb-2`}>{scenario.irr}</div>
                <div className={`text-sm xs:text-base sm:text-lg text-${scenario.color}-700`}>{scenario.description}</div>
              </div>
            ))}
            <div className="bg-card border-2 border-border p-4 xs:p-5 sm:p-6 rounded-lg">
              <h4 className="text-base xs:text-lg sm:text-xl font-bold text-primary mb-3 xs:mb-4">{t('slides.sensitivity.conclusionTitle')}</h4>
              <p className="text-sm xs:text-base text-muted-foreground leading-relaxed">
                {t('slides.sensitivity.conclusion')}
              </p>
            </div>
          </div>
        </div>
      </div>
      <SlideFooter />
    </SlideContainer>
  );
};
