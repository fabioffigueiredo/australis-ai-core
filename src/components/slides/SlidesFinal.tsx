// Slides 23-30 - Slides Finais
import { SlideContainer } from "../presentation/SlideContainer";
import { SlideHeader } from "../presentation/SlideHeader";
import { SlideFooter } from "../presentation/SlideFooter";
import { slideData } from "@/data/slides";
import { AlertTriangle, Shield, Target, Rocket, Leaf, Phone, Award, MapPinned } from "lucide-react";
import ushuaiaSunrise from "@/assets/ushuaia-sunrise.jpg";
import { useTranslation } from "react-i18next";

export const Slide23Risks = () => (
  <SlideContainer className="bg-background">
    <SlideHeader slideNumber={23} totalSlides={29} />
    <div className="flex-1 container-responsive">
      <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 mb-6 xs:mb-8 sm:mb-10 lg:mb-12">
        <AlertTriangle className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-red-500" />
        <h2 className="slide-title-responsive text-primary">Análise de Riscos</h2>
      </div>
      <div className="bg-card border border-border rounded-lg overflow-hidden mb-6 xs:mb-8">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead className="bg-muted">
              <tr>
                <th className="text-left table-cell-responsive text-sm xs:text-base sm:text-lg font-bold w-1/3">Risco</th>
                <th className="text-left table-cell-responsive text-sm xs:text-base sm:text-lg font-bold w-2/3">Estratégia de Mitigação</th>
              </tr>
            </thead>
            <tbody>
              {slideData.risks.map((item, index) => (
                <tr key={index} className="border-b border-border hover:bg-muted">
                  <td className="table-cell-responsive">
                    <div className="flex items-start gap-2 xs:gap-3">
                      <AlertTriangle className="w-4 h-4 xs:w-5 xs:h-5 text-red-500 flex-shrink-0 mt-1" />
                      <span className="font-bold text-sm xs:text-base sm:text-lg">{item.risk}</span>
                    </div>
                  </td>
                  <td className="table-cell-responsive">
                    <div className="flex items-start gap-2 xs:gap-3">
                      <Shield className="w-4 h-4 xs:w-5 xs:h-5 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-foreground text-sm xs:text-base">{item.mitigation}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-6 xs:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6">
        <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-lg text-center">
          <div className="text-2xl font-bold text-blue-700 mb-2">CRT-5</div>
          <div className="text-sm text-blue-900">Classificação de risco país</div>
        </div>
        <div className="bg-green-50 border-2 border-green-200 p-6 rounded-lg text-center">
          <div className="text-2xl font-bold text-green-700 mb-2">Hedge Cambial</div>
          <div className="text-sm text-green-900">Faturamento 100% USD</div>
        </div>
        <div className="bg-orange-50 border-2 border-orange-200 p-6 rounded-lg text-center">
          <div className="text-2xl font-bold text-orange-700 mb-2">Seguros</div>
          <div className="text-sm text-orange-900">Cobertura abrangente</div>
        </div>
      </div>
    </div>
    <SlideFooter />
  </SlideContainer>
);

export const Slide24CSF = () => {
  const { t } = useTranslation();
  
  return (
    <SlideContainer className="bg-background">
      <SlideHeader slideNumber={24} totalSlides={29} />
      <div className="flex-1 container-responsive pb-8 xs:pb-10 sm:pb-12 md:pb-14 lg:pb-16">
        <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 mb-6 xs:mb-8 sm:mb-10 md:mb-12">
          <Target className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-accent" />
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-primary">{t('slides.csf.title')}</h2>
        </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xs:gap-6 sm:gap-8">
        {(t('slides.csf.factors', { returnObjects: true }) as any[][]).map((column, columnIndex) => (
          <div key={columnIndex} className="space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6">
            {column.map((factor, index) => (
              <div key={index} className="bg-green-50 border-2 xs:border-3 sm:border-4 border-green-300 p-4 xs:p-6 sm:p-8 rounded-lg">
                <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 mb-2 xs:mb-3 sm:mb-4">
                  <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-lg xs:text-xl sm:text-2xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-green-900">{factor.title}</h3>
                </div>
                <p className="text-sm xs:text-base text-green-700">
                  {factor.description}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="mt-6 xs:mt-8 sm:mt-10 md:mt-12 bg-accent text-accent-foreground p-4 xs:p-6 sm:p-8 rounded-lg text-center">
        <p className="text-lg xs:text-xl sm:text-2xl font-bold">
          {t('slides.csf.status')}
        </p>
      </div>
    </div>
    <SlideFooter />
  </SlideContainer>
  );
};

export const Slide25Moat = () => (
  <SlideContainer className="bg-background">
    <SlideHeader slideNumber={25} totalSlides={29} />
    <div className="flex-1 container-responsive pb-8 xs:pb-10 sm:pb-12 md:pb-14 lg:pb-16">
      <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2 xs:gap-4 mb-6 xs:mb-8 sm:mb-10 lg:mb-12">
        <Award className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 text-accent" />
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary">Vantagem Competitiva</h2>
      </div>
      
      {/* Layout responsivo para diferentes tamanhos de tela */}
      <div className="block lg:hidden">
        {/* Layout mobile/tablet - elementos empilhados */}
        <div className="space-y-6 xs:space-y-8 mb-8 xs:mb-10">
          <div className="bg-blue-100 border-4 xs:border-6 sm:border-8 border-blue-300 rounded-full p-6 xs:p-8 sm:p-10 text-center">
            <div className="text-xl xs:text-2xl sm:text-3xl font-bold text-blue-900 mb-2 xs:mb-3">Geografia</div>
            <div className="text-sm xs:text-base sm:text-lg text-blue-700">Clima frio natural</div>
            <div className="text-sm xs:text-base sm:text-lg text-blue-700">Resfriamento gratuito</div>
            <div className="text-sm xs:text-base sm:text-lg text-blue-700">PUE 1.1</div>
          </div>
          
          <div className="bg-orange-100 border-4 xs:border-6 sm:border-8 border-orange-300 rounded-full p-6 xs:p-8 sm:p-10 text-center">
            <div className="text-xl xs:text-2xl sm:text-3xl font-bold text-orange-900 mb-2 xs:mb-3">Lei 19.640</div>
            <div className="text-sm xs:text-base sm:text-lg text-orange-700">0% impostos</div>
            <div className="text-sm xs:text-base sm:text-lg text-orange-700">0% importação</div>
            <div className="text-sm xs:text-base sm:text-lg text-orange-700">USD 80-120M economia</div>
          </div>
          
          <div className="bg-gradient-to-br from-green-400 to-green-600 border-4 xs:border-6 sm:border-8 border-green-700 rounded-full p-6 xs:p-8 sm:p-10 text-center shadow-2xl">
            <div className="text-center text-white">
              <div className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-2 xs:mb-3">VANTAGEM</div>
              <div className="text-xl xs:text-2xl sm:text-3xl font-bold">COMPETITIVA</div>
              <div className="text-lg xs:text-xl sm:text-2xl mt-2 xs:mt-3">DEFENSÁVEL</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Layout desktop - elementos sobrepostos */}
      <div className="hidden lg:flex items-center justify-center min-h-[500px] mb-12">
        <div className="relative">
          <div className="w-[300px] xl:w-[400px] h-[300px] xl:h-[400px] rounded-full bg-blue-100 border-6 xl:border-8 border-blue-300 flex items-center justify-center">
            <div className="text-center p-8 xl:p-12">
              <div className="text-2xl xl:text-3xl font-bold text-blue-900 mb-3">Geografia</div>
              <div className="text-base xl:text-lg text-blue-700">Clima frio natural</div>
              <div className="text-base xl:text-lg text-blue-700">Resfriamento gratuito</div>
              <div className="text-base xl:text-lg text-blue-700">PUE 1.1</div>
            </div>
          </div>
          <div className="absolute top-1/2 left-full -translate-y-1/2 -translate-x-1/2 w-[300px] xl:w-[400px] h-[300px] xl:h-[400px] rounded-full bg-orange-100 border-6 xl:border-8 border-orange-300 flex items-center justify-center">
            <div className="text-center p-8 xl:p-12">
              <div className="text-2xl xl:text-3xl font-bold text-orange-900 mb-3">Lei 19.640</div>
              <div className="text-base xl:text-lg text-orange-700">0% impostos</div>
              <div className="text-base xl:text-lg text-orange-700">0% importação</div>
              <div className="text-base xl:text-lg text-orange-700">USD 80-120M economia</div>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 xl:w-64 h-48 xl:h-64 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-6 xl:border-8 border-green-700 flex items-center justify-center z-10 shadow-2xl">
            <div className="text-center text-white">
              <div className="text-2xl xl:text-4xl font-bold mb-2 xl:mb-3">VANTAGEM</div>
              <div className="text-xl xl:text-3xl font-bold">COMPETITIVA</div>
              <div className="text-lg xl:text-2xl mt-2 xl:mt-3">DEFENSÁVEL</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Grid de barreiras responsivo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6">
        <div className="bg-card border-2 border-border p-4 xs:p-6 rounded-lg text-center">
          <div className="font-bold text-lg xs:text-xl text-primary mb-2">Barreira Natural</div>
          <div className="text-xs xs:text-sm text-muted-foreground">Geografia não replicável</div>
        </div>
        <div className="bg-card border-2 border-border p-4 xs:p-6 rounded-lg text-center">
          <div className="font-bold text-lg xs:text-xl text-primary mb-2">Barreira Legal</div>
          <div className="text-xs xs:text-sm text-muted-foreground">Lei específica para região</div>
        </div>
        <div className="bg-card border-2 border-border p-4 xs:p-6 rounded-lg text-center sm:col-span-2 lg:col-span-1">
          <div className="font-bold text-lg xs:text-xl text-primary mb-2">First Mover</div>
          <div className="text-xs xs:text-sm text-muted-foreground">Primeiro no mercado</div>
        </div>
      </div>
    </div>
    <SlideFooter />
  </SlideContainer>
);

export const Slide26Roadmap = () => {
  const { t } = useTranslation();
  
  return (
    <SlideContainer className="bg-background">
      <SlideHeader slideNumber={26} totalSlides={29} />
      <div className="flex-1 container-responsive pb-8 xs:pb-10 sm:pb-12 md:pb-14 lg:pb-16">
        <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 mb-6 xs:mb-8 sm:mb-10 md:mb-12">
          <Rocket className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-accent" />
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-primary">{t('slides.roadmap.title')}</h2>
        </div>
      <div className="space-y-4 xs:space-y-6 sm:space-y-8">
        <div className="bg-primary text-primary-foreground p-6 xs:p-8 sm:p-10 md:p-12 rounded-lg">
          <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between mb-4 xs:mb-5 sm:mb-6 gap-2">
            <h3 className="text-2xl xs:text-3xl sm:text-4xl font-bold">{t('slides.roadmap.phase1.title')}</h3>
            <div className="text-xl xs:text-2xl sm:text-3xl font-bold">{t('slides.roadmap.phase1.period')}</div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-6 sm:gap-8">
            <div>
              <div className="text-xs xs:text-sm uppercase tracking-wider opacity-80 mb-1 xs:mb-2">{t('slides.roadmap.phase1.investment.label')}</div>
              <div className="text-2xl xs:text-3xl sm:text-4xl font-bold">{t('slides.roadmap.phase1.investment.value')}</div>
            </div>
            <div>
              <div className="text-xs xs:text-sm uppercase tracking-wider opacity-80 mb-1 xs:mb-2">{t('slides.roadmap.phase1.capacity.label')}</div>
              <div className="text-2xl xs:text-3xl sm:text-4xl font-bold">{t('slides.roadmap.phase1.capacity.value')}</div>
            </div>
          </div>
        </div>
        
        <div className="bg-accent text-accent-foreground p-6 xs:p-8 sm:p-10 md:p-12 rounded-lg">
          <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between mb-4 xs:mb-5 sm:mb-6 gap-2">
            <h3 className="text-2xl xs:text-3xl sm:text-4xl font-bold">{t('slides.roadmap.phase2.title')}</h3>
            <div className="text-xl xs:text-2xl sm:text-3xl font-bold">{t('slides.roadmap.phase2.period')}</div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8">
            <div>
              <div className="text-xs xs:text-sm uppercase tracking-wider opacity-80 mb-1 xs:mb-2">{t('slides.roadmap.phase2.investment.label')}</div>
              <div className="text-2xl xs:text-3xl sm:text-4xl font-bold">{t('slides.roadmap.phase2.investment.value')}</div>
            </div>
            <div>
              <div className="text-xs xs:text-sm uppercase tracking-wider opacity-80 mb-1 xs:mb-2">{t('slides.roadmap.phase2.expansion.label')}</div>
              <div className="text-2xl xs:text-3xl sm:text-4xl font-bold">{t('slides.roadmap.phase2.expansion.value')}</div>
            </div>
            <div>
              <div className="text-xs xs:text-sm uppercase tracking-wider opacity-80 mb-1 xs:mb-2">{t('slides.roadmap.phase2.energy.label')}</div>
              <div className="text-2xl xs:text-3xl sm:text-4xl font-bold">{t('slides.roadmap.phase2.energy.value')}</div>
            </div>
          </div>
        </div>
        
        <div className="bg-card border-2 border-border p-6 xs:p-8 sm:p-10 md:p-12 rounded-lg">
          <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between mb-4 xs:mb-5 sm:mb-6 gap-2">
            <h3 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-primary">{t('slides.roadmap.phase3.title')}</h3>
            <div className="text-xl xs:text-2xl sm:text-3xl font-bold text-primary">{t('slides.roadmap.phase3.period')}</div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8">
            <div>
              <div className="text-xs xs:text-sm uppercase tracking-wider text-muted-foreground mb-1 xs:mb-2">{t('slides.roadmap.phase3.investment.label')}</div>
              <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-primary">{t('slides.roadmap.phase3.investment.value')}</div>
            </div>
            <div>
              <div className="text-xs xs:text-sm uppercase tracking-wider text-muted-foreground mb-1 xs:mb-2">{t('slides.roadmap.phase3.technology.label')}</div>
              <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-primary">{t('slides.roadmap.phase3.technology.value')}</div>
            </div>
            <div>
              <div className="text-xs xs:text-sm uppercase tracking-wider text-muted-foreground mb-1 xs:mb-2">{t('slides.roadmap.phase3.total.label')}</div>
              <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-accent">{t('slides.roadmap.phase3.total.value')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SlideFooter />
  </SlideContainer>
  );
};

export const Slide27ESG = () => {
  const { t } = useTranslation();
  
  return (
    <SlideContainer className="bg-background">
      <SlideHeader slideNumber={27} totalSlides={29} />
      <div className="flex-1 container-responsive pb-8 xs:pb-10 sm:pb-12 md:pb-14 lg:pb-16">
        <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 mb-6 xs:mb-8 sm:mb-10 md:mb-12">
          <Leaf className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-accent" />
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-primary">{t('slides.esg.title')}</h2>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xs:gap-6 sm:gap-8">
        <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 p-6 xs:p-8 sm:p-10 rounded-lg">
          <div className="text-3xl xs:text-4xl mb-3 xs:mb-4 sm:mb-6">🌍</div>
          <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-green-900 mb-3 xs:mb-4 sm:mb-6">{t('slides.esg.environmental.title')}</h3>
          <ul className="space-y-2 xs:space-y-3 sm:space-y-4">
            {(t('slides.esg.environmental.items', { returnObjects: true }) as any[]).map((item, index) => (
              <li key={index} className="flex items-start gap-2 xs:gap-3">
                <span className="text-green-600 text-base xs:text-lg sm:text-xl">✓</span>
                <div>
                  <div className="font-bold text-sm xs:text-base text-green-900">{item.title}</div>
                  <div className="text-xs xs:text-sm text-green-700">{item.description}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 p-6 xs:p-8 sm:p-10 rounded-lg">
          <div className="text-3xl xs:text-4xl mb-3 xs:mb-4 sm:mb-6">👥</div>
          <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-blue-900 mb-3 xs:mb-4 sm:mb-6">{t('slides.esg.social.title')}</h3>
          <ul className="space-y-2 xs:space-y-3 sm:space-y-4">
            {(t('slides.esg.social.items', { returnObjects: true }) as any[]).map((item, index) => (
              <li key={index} className="flex items-start gap-2 xs:gap-3">
                <span className="text-blue-600 text-base xs:text-lg sm:text-xl">✓</span>
                <div>
                  <div className="font-bold text-sm xs:text-base text-blue-900">{item.title}</div>
                  <div className="text-xs xs:text-sm text-blue-700">{item.description}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 p-6 xs:p-8 sm:p-10 rounded-lg md:col-span-2 xl:col-span-1">
          <div className="text-3xl xs:text-4xl mb-3 xs:mb-4 sm:mb-6">⚖️</div>
          <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-purple-900 mb-3 xs:mb-4 sm:mb-6">{t('slides.esg.governance.title')}</h3>
          <ul className="space-y-2 xs:space-y-3 sm:space-y-4">
            {(t('slides.esg.governance.items', { returnObjects: true }) as any[]).map((item, index) => (
              <li key={index} className="flex items-start gap-2 xs:gap-3">
                <span className="text-purple-600 text-base xs:text-lg sm:text-xl">✓</span>
                <div>
                  <div className="font-bold text-sm xs:text-base text-purple-900">{item.title}</div>
                  <div className="text-xs xs:text-sm text-purple-700">{item.description}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <SlideFooter />
  </SlideContainer>
  );
};

export const Slide28NextSteps = () => {
  const { t } = useTranslation();
  
  return (
    <SlideContainer className="bg-background">
      <SlideHeader slideNumber={28} totalSlides={29} />
      <div className="flex-1 container-responsive pb-8 xs:pb-10 sm:pb-12 md:pb-14 lg:pb-16">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 xs:mb-8 sm:mb-10 md:mb-12">{t('slides.nextSteps.title')}</h2>
      <div className="space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6">
        {(t('slides.nextSteps.steps', { returnObjects: true }) as any[]).map((step) => (
          <div key={step.num} className="bg-card border-2 border-border p-4 xs:p-6 sm:p-8 rounded-lg hover:shadow-lg transition-shadow">
            <div className="flex flex-col xs:flex-row items-start gap-3 xs:gap-4 sm:gap-5 md:gap-6">
              <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center flex-shrink-0">
                <span className="text-2xl xs:text-2xl sm:text-3xl font-bold">{step.num}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-primary mb-1 xs:mb-2">{step.title}</h3>
                <p className="text-sm xs:text-base text-foreground mb-2 xs:mb-3">{step.description}</p>
                <div className="inline-block bg-muted px-3 xs:px-4 py-1 xs:py-2 rounded-lg">
                  <span className="text-xs xs:text-sm font-semibold text-muted-foreground">{t('slides.nextSteps.timeline')}: {step.timeline}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <SlideFooter />
  </SlideContainer>
  );
};

export const Slide29CTA = () => {
  const { t } = useTranslation();
  
  return (
    <SlideContainer className="bg-background">
      <SlideHeader slideNumber={29} totalSlides={29} />
      <div className="flex-1 container-responsive pb-8 xs:pb-10 sm:pb-12 md:pb-14 lg:pb-16 flex flex-col items-center justify-center">
        <div className="max-w-4xl text-center space-y-6 xs:space-y-8 sm:space-y-10 md:space-y-12">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4 xs:mb-6 sm:mb-8">
            {t('slides.cta.title')}
          </h2>
        
        <div className="bg-accent text-accent-foreground p-6 xs:p-8 sm:p-10 md:p-12 rounded-lg" style={{ boxShadow: 'var(--shadow-xl)' }}>
          <p className="text-xl xs:text-2xl sm:text-3xl font-bold leading-relaxed">
            {t('slides.cta.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8 mt-6 xs:mt-8 sm:mt-10 md:mt-12">
          {(t('slides.cta.highlights', { returnObjects: true }) as any[]).map((highlight, index) => (
            <div key={index} className="bg-card border-2 border-border p-4 xs:p-6 sm:p-8 rounded-lg">
              <div className="text-3xl xs:text-4xl sm:text-5xl font-bold text-accent mb-2 xs:mb-3">{highlight.value}</div>
              <div className="text-sm xs:text-base sm:text-lg text-foreground">{highlight.description}</div>
            </div>
          ))}
        </div>
        
        <div className="pt-6 xs:pt-8 sm:pt-10 md:pt-12">
          <p className="text-xl xs:text-2xl sm:text-3xl font-bold text-primary">
            {t('slides.cta.callToAction')}
          </p>
        </div>
      </div>
    </div>
    <SlideFooter />
  </SlideContainer>
  );
};
