import { SlideContainer } from "../presentation/SlideContainer";
import { SlideHeader } from "../presentation/SlideHeader";
import { SlideFooter } from "../presentation/SlideFooter";
import { Network, Globe } from "lucide-react";

export const Slide11Connectivity = () => {
  return (
    <SlideContainer className="bg-background">
      <SlideHeader slideNumber={11} totalSlides={29} />
      <div className="flex-1 px-16 pb-16">
        <div className="flex items-center gap-4 mb-12">
          <Network className="w-10 h-10 text-accent" />
          <h2 className="text-5xl font-bold text-primary">Conectividade Global</h2>
        </div>
        
        <div className="grid grid-cols-3 gap-8 mb-12">
          <div className="col-span-2 bg-primary text-primary-foreground p-10 rounded-lg">
            <div className="flex items-center gap-3 mb-8">
              <Globe className="w-8 h-8" />
              <h3 className="text-3xl font-bold">REFEFO</h3>
            </div>
            <div className="space-y-6">
              <div>
                <div className="text-sm uppercase tracking-wider opacity-80 mb-2">Rede Federal de Fibra Óptica</div>
                <div className="text-4xl font-bold">36.500 km</div>
                <div className="text-lg mt-2 opacity-90">De fibra óptica conectando toda a Argentina</div>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <div className="text-sm uppercase tracking-wider opacity-80 mb-2">Operador</div>
                  <div className="text-xl font-bold">ARSAT</div>
                  <div className="text-sm opacity-80">Empresa estatal de telecomunicações</div>
                </div>
                <div>
                  <div className="text-sm uppercase tracking-wider opacity-80 mb-2">Redundância</div>
                  <div className="text-xl font-bold">Múltiplos paths</div>
                  <div className="text-sm opacity-80">Alta disponibilidade garantida</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-accent text-accent-foreground p-8 rounded-lg">
              <div className="text-sm uppercase tracking-wider opacity-80 mb-2">Largura de Banda</div>
              <div className="text-4xl font-bold mb-4">400 Gbps</div>
              <div className="text-sm opacity-90">Links redundantes de alta capacidade</div>
            </div>
            
            <div className="bg-card border-2 border-border p-8 rounded-lg">
              <div className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Custo Mensal</div>
              <div className="text-4xl font-bold text-primary mb-4">USD 2.4M</div>
              <div className="text-sm text-muted-foreground">Conectividade total</div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-lg">
            <div className="text-lg font-bold text-blue-900 mb-2">Cabos Submarinos</div>
            <div className="text-sm text-blue-700">Conexão Las Toninas para redundância global</div>
          </div>
          <div className="bg-green-50 border-2 border-green-200 p-6 rounded-lg">
            <div className="text-lg font-bold text-green-900 mb-2">SLA 99.99%</div>
            <div className="text-sm text-green-700">Uptime garantido por contrato</div>
          </div>
          <div className="bg-orange-50 border-2 border-orange-200 p-6 rounded-lg">
            <div className="text-lg font-bold text-orange-900 mb-2">Latência Baixa</div>
            <div className="text-sm text-orange-700">Otimizado para tráfego LATAM</div>
          </div>
        </div>
      </div>
      <SlideFooter />
    </SlideContainer>
  );
};
