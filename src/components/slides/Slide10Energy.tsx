import { SlideContainer } from "../presentation/SlideContainer";
import { SlideHeader } from "../presentation/SlideHeader";
import { SlideFooter } from "../presentation/SlideFooter";
import { Zap, Wind } from "lucide-react";

export const Slide10Energy = () => {
  return (
    <SlideContainer className="bg-background">
      <SlideHeader slideNumber={10} totalSlides={29} />
      <div className="flex-1 container-responsive pb-8 xs:pb-10 sm:pb-12 md:pb-14 lg:pb-16">
        <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 mb-6 xs:mb-8 sm:mb-10 md:mb-12">
          <Zap className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-accent" />
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-primary">Infraestrutura Energética</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 lg:gap-12">
          <div className="space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-8">
            <div className="bg-accent text-accent-foreground p-6 xs:p-8 sm:p-10 rounded-lg">
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-4 xs:mb-5 sm:mb-6">Fase 1: Fornecimento Atual</h3>
              <div className="space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6">
                <div>
                  <div className="text-xs xs:text-sm uppercase tracking-wider opacity-80 mb-1 xs:mb-2">Fonte</div>
                  <div className="text-lg xs:text-xl sm:text-2xl font-bold">Nova Central Termoelétrica</div>
                </div>
                <div>
                  <div className="text-xs xs:text-sm uppercase tracking-wider opacity-80 mb-1 xs:mb-2">Capacidade</div>
                  <div className="text-lg xs:text-xl sm:text-2xl font-bold">60 MW</div>
                </div>
                <div>
                  <div className="text-xs xs:text-sm uppercase tracking-wider opacity-80 mb-1 xs:mb-2">Custo</div>
                  <div className="text-lg xs:text-xl sm:text-2xl font-bold">USD 0.08-0.10 / kWh</div>
                </div>
                <div>
                  <div className="text-xs xs:text-sm uppercase tracking-wider opacity-80 mb-1 xs:mb-2">Fornecedor</div>
                  <div className="text-lg xs:text-xl sm:text-2xl font-bold">DPE (Dirección Provincial de Energía)</div>
                </div>
              </div>
            </div>
            
            <div className="bg-card border-2 border-border p-4 xs:p-6 sm:p-8 rounded-lg">
              <h4 className="font-bold text-base xs:text-lg sm:text-xl mb-3 xs:mb-4 text-primary">Vantagem Competitiva</h4>
              <ul className="space-y-2 xs:space-y-3 text-sm xs:text-base">
                <li className="flex items-start gap-2 xs:gap-3">
                  <span className="text-accent text-base xs:text-lg sm:text-xl">✓</span>
                  <span>40-50% mais barato que São Paulo</span>
                </li>
                <li className="flex items-start gap-2 xs:gap-3">
                  <span className="text-accent text-base xs:text-lg sm:text-xl">✓</span>
                  <span>Contrato de longo prazo estável</span>
                </li>
                <li className="flex items-start gap-2 xs:gap-3">
                  <span className="text-accent text-base xs:text-lg sm:text-xl">✓</span>
                  <span>Redundância garantida</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 p-6 xs:p-8 sm:p-10 rounded-lg">
              <div className="flex items-center gap-2 xs:gap-3 mb-4 xs:mb-5 sm:mb-6">
                <Wind className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-green-600" />
                <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-green-900">Fase 2: Energia Renovável</h3>
              </div>
              <div className="space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6">
                <div>
                  <div className="text-xs xs:text-sm uppercase tracking-wider text-green-700 mb-1 xs:mb-2">Projeto Futuro</div>
                  <div className="text-lg xs:text-xl sm:text-2xl font-bold text-green-900">Parque Eólico Dedicado</div>
                </div>
                <div>
                  <div className="text-xs xs:text-sm uppercase tracking-wider text-green-700 mb-1 xs:mb-2">Capacidade Adicional</div>
                  <div className="text-lg xs:text-xl sm:text-2xl font-bold text-green-900">80+ MW</div>
                </div>
                <div>
                  <div className="text-xs xs:text-sm uppercase tracking-wider text-green-700 mb-1 xs:mb-2">Timeline</div>
                  <div className="text-lg xs:text-xl sm:text-2xl font-bold text-green-900">2029-2031</div>
                </div>
                <div>
                  <div className="text-xs xs:text-sm uppercase tracking-wider text-green-700 mb-1 xs:mb-2">Objetivo</div>
                  <div className="text-lg xs:text-xl sm:text-2xl font-bold text-green-900">100% Energia Renovável</div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 border-2 border-blue-200 p-4 xs:p-5 sm:p-6 rounded-lg">
              <div className="text-center">
                <div className="text-3xl xs:text-4xl sm:text-5xl font-bold text-blue-700 mb-2">9.2 m/s</div>
                <div className="text-sm xs:text-base sm:text-lg text-blue-900">Velocidade média dos ventos na Patagônia</div>
                <div className="text-xs xs:text-sm text-blue-700 mt-2">Condições ideais para energia eólica</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SlideFooter />
    </SlideContainer>
  );
};
