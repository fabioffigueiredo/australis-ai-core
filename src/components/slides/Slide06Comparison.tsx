import { SlideContainer } from "../presentation/SlideContainer";
import { SlideHeader } from "../presentation/SlideHeader";
import { SlideFooter } from "../presentation/SlideFooter";
import { slideData } from "@/data/slides";

export const Slide06Comparison = () => {
  return (
    <SlideContainer className="bg-background">
      <SlideHeader slideNumber={6} totalSlides={30} />
      <div className="flex-1 px-16 pb-16">
        <h2 className="text-5xl font-bold text-primary mb-12">Vantagem Estrutural vs. Hubs Latino-Americanos</h2>
        
        <div className="bg-white rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow-lg)' }}>
          <table className="w-full">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="text-left p-6 text-lg font-bold">Cidade</th>
                <th className="text-left p-6 text-lg font-bold">PUE</th>
                <th className="text-left p-6 text-lg font-bold">Energia (USD/kWh)</th>
                <th className="text-left p-6 text-lg font-bold">Impostos (%)</th>
                <th className="text-left p-6 text-lg font-bold">Import. (%)</th>
                <th className="text-left p-6 text-lg font-bold">Risco</th>
              </tr>
            </thead>
            <tbody>
              {slideData.comparison.map((row, index) => (
                <tr 
                  key={index} 
                  className={`border-b border-border ${index === 0 ? 'bg-green-50' : ''}`}
                >
                  <td className="p-6 font-bold text-lg">
                    {row.city}
                    {index === 0 && <span className="ml-2 text-accent">★</span>}
                  </td>
                  <td className="p-6">
                    <span className={`px-4 py-2 rounded-full font-bold ${
                      row.pue <= 1.1 ? 'bg-green-100 text-green-700' :
                      row.pue <= 1.4 ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {row.pue}
                    </span>
                  </td>
                  <td className="p-6">
                    <span className={`px-4 py-2 rounded-full font-bold ${
                      row.energia <= 0.10 ? 'bg-green-100 text-green-700' :
                      row.energia <= 0.15 ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      ${row.energia}
                    </span>
                  </td>
                  <td className="p-6">
                    <span className={`px-4 py-2 rounded-full font-bold ${
                      row.impostos === 0 ? 'bg-green-100 text-green-700' :
                      row.impostos <= 27 ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {row.impostos}%
                    </span>
                  </td>
                  <td className="p-6">
                    <span className={`px-4 py-2 rounded-full font-bold ${
                      row.importacao === 0 ? 'bg-green-100 text-green-700' :
                      row.importacao <= 10 ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {row.importacao}%
                    </span>
                  </td>
                  <td className="p-6">
                    <span className={`px-4 py-2 rounded-full font-bold ${
                      row.risco === 'Baixo' ? 'bg-green-100 text-green-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {row.risco}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <SlideFooter />
    </SlideContainer>
  );
};
