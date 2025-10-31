// This data is now handled by the translation system
// Import and use translations in components instead of this hardcoded data
export const slideData = {
  // Data that doesn't need translation (numbers, technical values)
  comparison: [
    { city: "Ushuaia", pue: 1.1, energia: 0.09, impostos: 0, importacao: 0, risco: 1 },
    { city: "São Paulo", pue: 1.6, energia: 0.18, impostos: 34, importacao: 60, risco: 2 },
    { city: "Santiago", pue: 1.4, energia: 0.15, impostos: 27, importacao: 6, risco: 1 }
  ],
  
  latency: [
    { city: "Buenos Aires", rtt: 38 },
    { city: "Santiago", rtt: 58 },
    { city: "São Paulo", rtt: 72 },
    { city: "Lima", rtt: 85 },
    { city: "Miami", rtt: 140 }
  ],
  
  capexBreakdown: [
    { category: "it_equipment", value: 325, percent: 65 },
    { category: "construction", value: 100, percent: 20 },
    { category: "energy_cooling", value: 50, percent: 10 },
    { category: "connectivity", value: 10, percent: 2 },
    { category: "contingency", value: 15, percent: 3 }
  ],
  
  timeline: [
    { phase: "planning", start: 0, duration: 6 },
    { phase: "construction", start: 6, duration: 18 },
    { phase: "equipment", start: 18, duration: 12 },
    { phase: "testing", start: 30, duration: 6 },
    { phase: "launch", start: 36, duration: 1 }
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
  
  financials: {
    year1: { revenue: 28, opex: 18, ebitda: 10, profit: 10 },
    year3: { revenue: 72, opex: 38, ebitda: 34, profit: 34 },
    year5: { revenue: 118, opex: 52, ebitda: 66, profit: 66 },
    year10: { revenue: 156, opex: 62, ebitda: 94, profit: 94 }
  },
  
  revenueProjection: [
    { year: 1, revenue: 28, ebitda: 10, utilization: 30 },
    { year: 2, revenue: 52, ebitda: 24, utilization: 45 },
    { year: 3, revenue: 72, ebitda: 34, utilization: 60 },
    { year: 4, revenue: 96, ebitda: 52, utilization: 70 },
    { year: 5, revenue: 118, ebitda: 66, utilization: 80 },
    { year: 6, revenue: 132, ebitda: 76, utilization: 85 },
    { year: 7, revenue: 142, ebitda: 84, utilization: 88 },
    { year: 8, revenue: 148, ebitda: 88, utilization: 90 },
    { year: 9, revenue: 152, ebitda: 91, utilization: 90 },
    { year: 10, revenue: 156, ebitda: 94, utilization: 90 }
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
