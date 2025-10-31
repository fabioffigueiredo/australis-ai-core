export const slideData = {
  disclaimer: [
    "Esta apresentação contém informações confidenciais e prospectivas",
    "Projeções financeiras são estimativas baseadas em premissas razoáveis",
    "Retornos passados não garantem resultados futuros",
    "Investimento em data centers envolve riscos substanciais",
    "Consulte documentação legal completa antes de tomar decisões de investimento"
  ],
  
  executiveSummary: [
    {
      label: "Investimento Total",
      value: "USD 500M",
      description: "CAPEX + Contingência"
    },
    {
      label: "Capacidade",
      value: "2.6 ExaFLOPS",
      description: "6.560 GPUs NVIDIA H100"
    },
    {
      label: "TIR Projetada",
      value: ">25%",
      description: "Retorno atrativo"
    },
    {
      label: "Payback",
      value: "<5 anos",
      description: "Recuperação rápida"
    }
  ],
  
  marketGrowth: [
    { year: 2020, value: 25 },
    { year: 2021, value: 45 },
    { year: 2022, value: 78 },
    { year: 2023, value: 135 },
    { year: 2024, value: 220 },
    { year: 2025, value: 350 },
    { year: 2026, value: 520 },
    { year: 2027, value: 740 },
    { year: 2028, value: 1020 },
    { year: 2029, value: 1380 },
    { year: 2030, value: 1850 }
  ],
  
  comparison: [
    { city: "Ushuaia", pue: 1.1, energia: 0.09, impostos: 0, importacao: 0, risco: "Baixo" },
    { city: "São Paulo", pue: 1.6, energia: 0.18, impostos: 34, importacao: 60, risco: "Médio" },
    { city: "Santiago", pue: 1.4, energia: 0.15, impostos: 27, importacao: 6, risco: "Baixo" }
  ],
  
  latency: [
    { city: "Buenos Aires", rtt: 38 },
    { city: "Santiago", rtt: 58 },
    { city: "São Paulo", rtt: 72 },
    { city: "Lima", rtt: 85 },
    { city: "Miami", rtt: 140 }
  ],
  
  capexBreakdown: [
    { category: "Equipamentos TI", value: 325, percent: 65 },
    { category: "Construção", value: 100, percent: 20 },
    { category: "Energia/Resfriamento", value: 50, percent: 10 },
    { category: "Conectividade", value: 10, percent: 2 },
    { category: "Contingência", value: 15, percent: 3 }
  ],
  
  timeline: [
    { phase: "Planejamento", start: 0, duration: 6 },
    { phase: "Construção", start: 6, duration: 18 },
    { phase: "Equipamentos", start: 18, duration: 12 },
    { phase: "Testes", start: 30, duration: 6 },
    { phase: "Lançamento", start: 36, duration: 1 }
  ],
  
  financials: {
    year1: { receita: 28, opex: 18, ebitda: 10, lucro: 10 },
    year3: { receita: 72, opex: 38, ebitda: 34, lucro: 34 },
    year5: { receita: 118, opex: 52, ebitda: 66, lucro: 66 },
    year10: { receita: 156, opex: 62, ebitda: 94, lucro: 94 }
  },
  
  revenueProjection: [
    { year: 1, receita: 28, ebitda: 10, utilizacao: 30 },
    { year: 2, receita: 52, ebitda: 24, utilizacao: 45 },
    { year: 3, receita: 72, ebitda: 34, utilizacao: 60 },
    { year: 4, receita: 96, ebitda: 52, utilizacao: 70 },
    { year: 5, receita: 118, ebitda: 66, utilizacao: 80 },
    { year: 6, receita: 132, ebitda: 76, utilizacao: 85 },
    { year: 7, receita: 142, ebitda: 84, utilizacao: 88 },
    { year: 8, receita: 148, ebitda: 88, utilizacao: 90 },
    { year: 9, receita: 152, ebitda: 91, utilizacao: 90 },
    { year: 10, receita: 156, ebitda: 94, utilizacao: 90 }
  ],
  
  risks: [
    {
      risk: "Instabilidade econômica ARG",
      mitigation: "Estrutura offshore, faturamento em USD"
    },
    {
      risk: "Risco político (CRT-5)",
      mitigation: "Seguro de risco político, alinhamento estratégico"
    },
    {
      risk: "Conectividade",
      mitigation: "Links redundantes, SLAs rigorosos"
    },
    {
      risk: "Risco cambial",
      mitigation: "Minimizar conversão ARS, capital de giro"
    }
  ]
};
