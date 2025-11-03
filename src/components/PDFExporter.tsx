import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Button } from '@/components/ui/button';
import { Download, FileText, Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface PDFExporterProps {
  className?: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
}

export const PDFExporter: React.FC<PDFExporterProps> = ({
  className = '',
  variant = 'default',
  size = 'default'
}) => {
  const { t } = useTranslation();
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);

  const generatePDF = async () => {
    try {
      setIsGenerating(true);
      setProgress(0);

      // Configurações do PDF (A4 portrait)
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      // Dimensões da página A4
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 6; // margem pequena para evitar cortes e garantir que tudo caiba na página
      const contentWidth = pageWidth - (margin * 2);
      const contentHeight = pageHeight - (margin * 2);

      // Buscar todos os slides para exportação
      // Prioriza o container offscreen (#pdf-offscreen) para evitar duplicar o slide atual visível
      const offscreen = document.querySelector('#pdf-offscreen');
      const slideNodeList = offscreen
        ? offscreen.querySelectorAll('[data-slide]')
        : document.querySelectorAll('[data-slide]');

      // Deduplicar por data-slide para garantir que não haja slides repetidos caso o fallback seja usado
      const uniqueByDataAttr = new Map<string, HTMLElement>();
      Array.from(slideNodeList).forEach((el) => {
        const key = (el as HTMLElement).getAttribute('data-slide') || Math.random().toString();
        if (!uniqueByDataAttr.has(key)) uniqueByDataAttr.set(key, el as HTMLElement);
      });
      const slideList = Array.from(uniqueByDataAttr.values());
      const totalSlides = slideList.length;

      if (totalSlides === 0) {
        // Fallback: capturar a página inteira se não houver slides marcados
        const mainContent = document.querySelector('main') || document.body;
        await captureElementToPDF(mainContent as HTMLElement, pdf, pageWidth, pageHeight, margin);
      } else {
        // Capturar cada slide individualmente
        for (let i = 0; i < totalSlides; i++) {
          const slideElement = slideList[i] as HTMLElement;
          
          // Atualizar progresso
          setProgress(Math.round(((i + 1) / totalSlides) * 100));

          // Capturar o slide
          await captureElementToPDF(slideElement, pdf, pageWidth, pageHeight, margin);

          // Adicionar nova página se não for o último slide
          if (i < totalSlides - 1) {
            pdf.addPage();
          }

          // Pequena pausa para não sobrecarregar o browser
          await new Promise(resolve => setTimeout(resolve, 100));
        }
      }

      // Gerar nome do arquivo com timestamp
      const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
      const filename = `australis-ai-presentation-${timestamp}.pdf`;

      // Fazer download do PDF
      pdf.save(filename);

    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      alert('Erro ao gerar PDF. Tente novamente.');
    } finally {
      setIsGenerating(false);
      setProgress(0);
    }
  };

  const captureElementToPDF = async (
    element: HTMLElement,
    pdf: jsPDF,
    pageWidth: number,
    pageHeight: number,
    margin: number
  ) => {
    // Configurações do html2canvas para melhor qualidade
    const canvas = await html2canvas(element, {
      useCORS: true,
      allowTaint: true,
      background: '#ffffff',
      logging: false,
      width: element.scrollWidth,
      height: element.scrollHeight
    });

    const imgData = canvas.toDataURL('image/jpeg', 0.95);
    
    // Calcular dimensões mantendo proporção
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = imgHeight / imgWidth;
    
    const contentWidth = pageWidth - (margin * 2);
    const contentHeight = pageHeight - (margin * 2);
    // Fit mode: contain — garantir que nada extrapole a página
    const wRatio = contentWidth / imgWidth;
    const hRatio = contentHeight / imgHeight;
    const scale = Math.min(wRatio, hRatio);
    const finalWidth = imgWidth * scale;
    const finalHeight = imgHeight * scale;
    
    // Centralizar na página
    const x = (pageWidth - finalWidth) / 2;
    const y = (pageHeight - finalHeight) / 2;
    
    pdf.addImage(imgData, 'JPEG', x, y, finalWidth, finalHeight);
  };

  return (
    <Button
      onClick={generatePDF}
      disabled={isGenerating}
      variant={variant}
      size={size}
      className={`gap-2 ${className}`}
    >
      {isGenerating ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          {progress > 0 ? `${progress}%` : 'Gerando...'}
        </>
      ) : (
        <>
          <Download className="h-4 w-4" />
          <FileText className="h-4 w-4" />
          Exportar PDF
        </>
      )}
    </Button>
  );
};

export default PDFExporter;