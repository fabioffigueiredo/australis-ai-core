import { SlideContainer } from "../presentation/SlideContainer";
import ushuaiaHero from "@/assets/ushuaia-hero.jpg";

export const Slide01Cover = () => {
  return (
    <SlideContainer bgImage={ushuaiaHero} bgOverlay>
      <div className="flex-1 flex flex-col items-center justify-center text-white px-16">
        <div className="max-w-5xl text-center space-y-8">
          <h1 className="text-7xl font-bold tracking-tight mb-4">
            PROJETO AUSTRALIS
          </h1>
          <p className="text-3xl font-light opacity-90">
            Data Center de IA de Hiperescala | Ushuaia, Argentina
          </p>
          <div className="mt-12 pt-12 border-t border-white/30">
            <p className="text-5xl font-bold text-gradient" style={{ WebkitTextFillColor: 'white' }}>
              USD 500 Milhões
            </p>
            <p className="text-xl mt-4 opacity-75">Oportunidade de Investimento</p>
          </div>
        </div>
      </div>
      <div className="text-white/70 text-center pb-12 text-sm">
        Confidencial | Dezembro 2024
      </div>
    </SlideContainer>
  );
};
