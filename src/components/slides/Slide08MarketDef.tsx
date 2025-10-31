import { SlideContainer } from "../presentation/SlideContainer";
import { SlideHeader } from "../presentation/SlideHeader";
import { SlideFooter } from "../presentation/SlideFooter";
import { Target, X, Check } from "lucide-react";

export const Slide08MarketDef = () => {
  return (
    <SlideContainer className="bg-background">
      <SlideHeader slideNumber={8} totalSlides={30} />
      <div className="flex-1 px-16 pb-16">
        <div className="flex items-center gap-4 mb-12">
          <Target className="w-10 h-10 text-accent" />
          <h2 className="text-5xl font-bold text-primary">Foco Estratégico: Cargas de Trabalho Assíncronas</h2>
        </div>
        
        <div className="grid grid-cols-2 gap-8 mb-12">
          <div className="bg-green-50 border-2 border-green-200 p-10 rounded-lg">
            <div className="flex items-center gap-3 mb-6">
              <Check className="w-8 h-8 text-green-600" />
              <h3 className="text-3xl font-bold text-green-900">Mercado-Alvo</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-2xl text-green-600">✓</span>
                <span className="text-lg text-green-900">Treinamento de LLMs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl text-green-600">✓</span>
                <span className="text-lg text-green-900">Pesquisa de IA</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl text-green-600">✓</span>
                <span className="text-lg text-green-900">HPC científico</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl text-green-600">✓</span>
                <span className="text-lg text-green-900">Renderização 3D</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl text-green-600">✓</span>
                <span className="text-lg text-green-900">Análise de big data</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-red-50 border-2 border-red-200 p-10 rounded-lg">
            <div className="flex items-center gap-3 mb-6">
              <X className="w-8 h-8 text-red-600" />
              <h3 className="text-3xl font-bold text-red-900">Fora de Escopo</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-2xl text-red-600">✗</span>
                <span className="text-lg text-red-900">Gaming online</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl text-red-600">✗</span>
                <span className="text-lg text-red-900">Trading de alta frequência</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl text-red-600">✗</span>
                <span className="text-lg text-red-900">Videoconferência</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl text-red-600">✗</span>
                <span className="text-lg text-red-900">Streaming em tempo real</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl text-red-600">✗</span>
                <span className="text-lg text-red-900">Apps ultra-baixa latência</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-accent text-accent-foreground p-8 rounded-lg text-center">
          <p className="text-2xl font-bold">
            Custo por FLOP {'>'} Latência
          </p>
          <p className="text-lg mt-2 opacity-90">
            80% das cargas de trabalho de IA são tolerantes a latências de 50-100ms
          </p>
        </div>
      </div>
      <SlideFooter />
    </SlideContainer>
  );
};
