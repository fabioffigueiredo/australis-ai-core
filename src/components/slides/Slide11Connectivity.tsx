import { SlideContainer } from "../presentation/SlideContainer";
import { SlideHeader } from "../presentation/SlideHeader";
import { SlideFooter } from "../presentation/SlideFooter";
import { Network, Globe } from "lucide-react";

export const Slide11Connectivity = () => {
  return (
    <SlideContainer className="bg-background">
      <SlideHeader slideNumber={11} totalSlides={29} />
      <div className="flex-1 container-responsive pb-8 xs:pb-10 sm:pb-12 md:pb-14 lg:pb-16">
        <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 mb-6 xs:mb-8 sm:mb-10 md:mb-12">
          <Network className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-accent" />
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-primary">Conectividade Global</h2>
        </div>
        
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 xs:gap-6 sm:gap-8 mb-6 xs:mb-8 sm:mb-10 md:mb-12">
          <div className="xl:col-span-2 bg-primary text-primary-foreground p-6 xs:p-8 sm:p-10 rounded-lg">
            <div className="flex items-center gap-2 xs:gap-3 mb-4 xs:mb-6 sm:mb-8">
              <Globe className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold">REFEFO</h3>
            </div>
            <div className="space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6">
              <div>
                <div className="text-xs xs:text-sm uppercase tracking-wider opacity-80 mb-1 xs:mb-2">Rede Federal de Fibra Óptica</div>
                <div className="text-2xl xs:text-3xl sm:text-4xl font-bold">36.500 km</div>
                <div className="text-sm xs:text-base sm:text-lg mt-2 opacity-90">De fibra óptica conectando toda a Argentina</div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4 sm:gap-5 md:gap-6 mt-4 xs:mt-6 sm:mt-8">
                <div>
                  <div className="text-xs xs:text-sm uppercase tracking-wider opacity-80 mb-1 xs:mb-2">Operador</div>
                  <div className="text-base xs:text-lg sm:text-xl font-bold">ARSAT</div>
                  <div className="text-xs xs:text-sm opacity-80">Empresa estatal de telecomunicações</div>
                </div>
                <div>
                  <div className="text-xs xs:text-sm uppercase tracking-wider opacity-80 mb-1 xs:mb-2">Redundância</div>
                  <div className="text-base xs:text-lg sm:text-xl font-bold">Múltiplos paths</div>
                  <div className="text-xs xs:text-sm opacity-80">Alta disponibilidade garantida</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4 xs:space-y-6 sm:space-y-8">
            <div className="bg-accent text-accent-foreground p-4 xs:p-6 sm:p-8 rounded-lg">
              <div className="text-xs xs:text-sm uppercase tracking-wider opacity-80 mb-1 xs:mb-2">Largura de Banda</div>
              <div className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-2 xs:mb-3 sm:mb-4">400 Gbps</div>
              <div className="text-xs xs:text-sm opacity-90">Links redundantes de alta capacidade</div>
            </div>
            
            <div className="bg-card border-2 border-border p-4 xs:p-6 sm:p-8 rounded-lg">
              <div className="text-xs xs:text-sm uppercase tracking-wider text-muted-foreground mb-1 xs:mb-2">Custo Mensal</div>
              <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-primary mb-2 xs:mb-3 sm:mb-4">USD 2.4M</div>
              <div className="text-xs xs:text-sm text-muted-foreground">Conectividade total</div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-6">
          <div className="bg-blue-50 border-2 border-blue-200 p-4 xs:p-5 sm:p-6 rounded-lg">
            <div className="text-sm xs:text-base sm:text-lg font-bold text-blue-900 mb-2">Cabos Submarinos</div>
            <div className="text-xs xs:text-sm text-blue-700">Conexão Las Toninas para redundância global</div>
          </div>
          <div className="bg-green-50 border-2 border-green-200 p-4 xs:p-5 sm:p-6 rounded-lg">
            <div className="text-sm xs:text-base sm:text-lg font-bold text-green-900 mb-2">SLA 99.99%</div>
            <div className="text-xs xs:text-sm text-green-700">Uptime garantido por contrato</div>
          </div>
          <div className="bg-orange-50 border-2 border-orange-200 p-4 xs:p-5 sm:p-6 rounded-lg">
            <div className="text-sm xs:text-base sm:text-lg font-bold text-orange-900 mb-2">Latência Baixa</div>
            <div className="text-xs xs:text-sm text-orange-700">Otimizado para tráfego LATAM</div>
          </div>
        </div>
      </div>
      <SlideFooter />
    </SlideContainer>
  );
};
