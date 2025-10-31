import { SlideContainer } from "../presentation/SlideContainer";
import { SlideHeader } from "../presentation/SlideHeader";
import { SlideFooter } from "../presentation/SlideFooter";
import { Snowflake, DollarSign } from "lucide-react";

export const Slide05Thesis = () => {
  return (
    <SlideContainer className="bg-background">
      <SlideHeader slideNumber={5} totalSlides={30} />
      <div className="flex-1 px-16 pb-16">
        <h2 className="text-5xl font-bold text-primary mb-12">Por Que Ushuaia? A Vantagem Dual Única</h2>
        
        <div className="grid grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-10 rounded-lg border-2 border-blue-200">
            <div className="flex items-center gap-4 mb-8">
              <Snowflake className="w-12 h-12 text-blue-600" />
              <h3 className="text-3xl font-bold text-blue-900">Eficiência Climática</h3>
            </div>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="text-3xl text-blue-600 font-bold">•</span>
                <div>
                  <div className="font-bold text-xl text-blue-900">PUE &lt;1.1</div>
                  <div className="text-blue-700">vs 1.6 média global</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-3xl text-blue-600 font-bold">•</span>
                <div>
                  <div className="font-bold text-xl text-blue-900">Free-Air Cooling</div>
                  <div className="text-blue-700">365 dias por ano</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-3xl text-blue-600 font-bold">•</span>
                <div>
                  <div className="font-bold text-xl text-blue-900">-40% Custos</div>
                  <div className="text-blue-700">Redução em refrigeração</div>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-10 rounded-lg border-2 border-orange-200">
            <div className="flex items-center gap-4 mb-8">
              <DollarSign className="w-12 h-12 text-orange-600" />
              <h3 className="text-3xl font-bold text-orange-900">Incentivos Fiscais</h3>
            </div>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="text-3xl text-orange-600 font-bold">•</span>
                <div>
                  <div className="font-bold text-xl text-orange-900">Lei 19.640</div>
                  <div className="text-orange-700">Isenção total de impostos</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-3xl text-orange-600 font-bold">•</span>
                <div>
                  <div className="font-bold text-xl text-orange-900">0% Importação</div>
                  <div className="text-orange-700">Zero taxas alfandegárias</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-3xl text-orange-600 font-bold">•</span>
                <div>
                  <div className="font-bold text-xl text-orange-900">USD 80-120M</div>
                  <div className="text-orange-700">Economia em CAPEX</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <SlideFooter />
    </SlideContainer>
  );
};
