import { SlideContainer } from "../presentation/SlideContainer";
import { SlideHeader } from "../presentation/SlideHeader";
import { SlideFooter } from "../presentation/SlideFooter";
import { MapPin } from "lucide-react";

export const Slide07Location = () => {
  return (
    <SlideContainer className="bg-background">
      <SlideHeader slideNumber={7} totalSlides={30} />
      <div className="flex-1 px-16 pb-16">
        <div className="flex items-center gap-4 mb-12">
          <MapPin className="w-10 h-10 text-accent" />
          <h2 className="text-5xl font-bold text-primary">Localização Estratégica</h2>
        </div>
        
        <div className="grid grid-cols-2 gap-12 h-[500px]">
          <div className="bg-muted rounded-lg p-12 flex items-center justify-center">
            <div className="text-center space-y-8">
              <div className="text-7xl">🗺️</div>
              <div className="text-2xl font-bold text-primary">Ushuaia, Argentina</div>
              <div className="text-lg text-muted-foreground">54°48'S, 68°18'W</div>
              <div className="pt-6 border-t border-border">
                <div className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Posição Única</div>
                <div className="text-lg font-semibold">Cidade mais austral do mundo</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-card border-2 border-border p-6 rounded-lg">
              <div className="font-bold text-xl mb-2 text-primary">Conectividade Regional</div>
              <ul className="space-y-3 text-foreground">
                <li className="flex justify-between items-center">
                  <span>Buenos Aires</span>
                  <span className="font-bold text-accent">3.100 km</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Santiago</span>
                  <span className="font-bold text-accent">2.800 km</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>São Paulo</span>
                  <span className="font-bold text-accent">3.900 km</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Miami</span>
                  <span className="font-bold text-accent">8.500 km</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-accent text-accent-foreground p-6 rounded-lg">
              <div className="font-bold text-xl mb-4">Infraestrutura de Fibra</div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>REFEFO: 36.500 km de fibra óptica</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>Cabos submarinos: Las Toninas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>Links redundantes 400 Gbps</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <SlideFooter />
    </SlideContainer>
  );
};
