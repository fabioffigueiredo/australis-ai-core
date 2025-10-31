import { SlideContainer } from "../presentation/SlideContainer";
import { SlideHeader } from "../presentation/SlideHeader";
import { SlideFooter } from "../presentation/SlideFooter";
import { slideData } from "@/data/slides";
import { useTranslation } from "react-i18next";

export const Slide06Comparison = () => {
  const { t } = useTranslation();
  
  return (
    <SlideContainer className="bg-background">
      <SlideHeader slideNumber={6} totalSlides={29} />
      <div className="flex-1 container-responsive pb-8 xs:pb-10 sm:pb-12 md:pb-14 lg:pb-16">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 xs:mb-8 sm:mb-10 md:mb-12">{t('slides.comparison.title')}</h2>
        
        <div className="bg-white rounded-lg overflow-hidden overflow-x-auto" style={{ boxShadow: 'var(--shadow-lg)' }}>
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="text-left table-cell-responsive text-xs xs:text-sm sm:text-base md:text-lg font-bold">{t('slides.comparison.table.city')}</th>
                <th className="text-left table-cell-responsive text-xs xs:text-sm sm:text-base md:text-lg font-bold">{t('slides.comparison.table.pue')}</th>
                <th className="text-left table-cell-responsive text-xs xs:text-sm sm:text-base md:text-lg font-bold">{t('slides.comparison.table.energy')}</th>
                <th className="text-left table-cell-responsive text-xs xs:text-sm sm:text-base md:text-lg font-bold">{t('slides.comparison.table.taxes')}</th>
                <th className="text-left table-cell-responsive text-xs xs:text-sm sm:text-base md:text-lg font-bold">{t('slides.comparison.table.import')}</th>
                <th className="text-left table-cell-responsive text-xs xs:text-sm sm:text-base md:text-lg font-bold">{t('slides.comparison.table.risk')}</th>
              </tr>
            </thead>
            <tbody>
              {slideData.comparison.map((row, index) => (
                <tr 
                  key={index} 
                  className={`border-b border-border ${index === 0 ? 'bg-green-50' : ''}`}
                >
                  <td className="table-cell-responsive font-bold text-sm xs:text-base sm:text-lg md:text-xl">
                    {row.city}
                    {index === 0 && <span className="ml-1 xs:ml-2 text-accent">★</span>}
                  </td>
                  <td className="table-cell-responsive">
                    <span className={`px-2 xs:px-3 sm:px-4 py-1 xs:py-2 rounded-full font-bold text-xs xs:text-sm sm:text-base ${
                      row.pue <= 1.1 ? 'bg-green-100 text-green-700' :
                      row.pue <= 1.4 ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {row.pue}
                    </span>
                  </td>
                  <td className="table-cell-responsive">
                    <span className={`px-2 xs:px-3 sm:px-4 py-1 xs:py-2 rounded-full font-bold text-xs xs:text-sm sm:text-base ${
                      row.energia <= 0.10 ? 'bg-green-100 text-green-700' :
                      row.energia <= 0.15 ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      ${row.energia}
                    </span>
                  </td>
                  <td className="table-cell-responsive">
                    <span className={`px-2 xs:px-3 sm:px-4 py-1 xs:py-2 rounded-full font-bold text-xs xs:text-sm sm:text-base ${
                      row.impostos === 0 ? 'bg-green-100 text-green-700' :
                      row.impostos <= 27 ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {row.impostos}%
                    </span>
                  </td>
                  <td className="table-cell-responsive">
                    <span className={`px-2 xs:px-3 sm:px-4 py-1 xs:py-2 rounded-full font-bold text-xs xs:text-sm sm:text-base ${
                      row.importacao === 0 ? 'bg-green-100 text-green-700' :
                      row.importacao <= 10 ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {row.importacao}%
                    </span>
                  </td>
                  <td className="table-cell-responsive">
                    <span className={`px-2 xs:px-3 sm:px-4 py-1 xs:py-2 rounded-full font-bold text-xs xs:text-sm sm:text-base ${
                      row.risco === 1 ? 'bg-green-100 text-green-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {row.risco === 1 ? t('slides.comparison.risk.low') : t('slides.comparison.risk.medium')}
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
