// Slides 17-22 - Slides Financeiros
import { SlideContainer } from "../presentation/SlideContainer";
import { SlideHeader } from "../presentation/SlideHeader";
import { SlideFooter } from "../presentation/SlideFooter";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { slideData } from "@/data/slides";
import { DollarSign, TrendingUp, PieChart, BarChart3 } from "lucide-react";

export const Slide17Revenue = () => (
  <SlideContainer className="bg-background">
    <SlideHeader slideNumber={17} totalSlides={30} />
    <div className="flex-1 px-16 pb-16">
      <div className="flex items-center gap-4 mb-8">
        <DollarSign className="w-10 h-10 text-accent" />
        <h2 className="text-5xl font-bold text-primary">Modelo de Receita</h2>
      </div>
      <div className="grid grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="bg-accent text-accent-foreground p-10 rounded-lg">
            <h3 className="text-3xl font-bold mb-6">Produto Principal</h3>
            <div className="space-y-6">
              <div>
                <div className="text-sm uppercase tracking-wider opacity-80 mb-2">Aluguel de GPUs</div>
                <div className="text-5xl font-bold">USD 2.25</div>
                <div className="text-xl mt-2 opacity-90">por GPU/hora</div>
              </div>
              <div className="pt-6 border-t border-white/20">
                <div className="text-lg">Baseado em:</div>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>• Benchmarks de mercado</li>
                  <li>• Custo + margem competitiva</li>
                  <li>• Demanda crescente IA</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-card border-2 border-border p-6 rounded-lg">
            <div className="text-2xl font-bold text-primary mb-2">Taxa de Utilização</div>
            <div className="space-y-3 mt-4">
              <div className="flex justify-between">
                <span>Ano 1</span>
                <span className="font-bold text-accent">30%</span>
              </div>
              <div className="flex justify-between">
                <span>Ano 3</span>
                <span className="font-bold text-accent">60%</span>
              </div>
              <div className="flex justify-between">
                <span>Ano 5+</span>
                <span className="font-bold text-accent">80-90%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-card border-2 border-border p-8 rounded-lg">
            <h4 className="text-2xl font-bold text-primary mb-6">Produtos Secundários</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl">✓</span>
                <div>
                  <div className="font-bold text-lg">Inferência de IA</div>
                  <div className="text-sm text-muted-foreground">APIs para modelos pré-treinados</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl">✓</span>
                <div>
                  <div className="font-bold text-lg">Colocation</div>
                  <div className="text-sm text-muted-foreground">Alta densidade para clientes enterprise</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl">✓</span>
                <div>
                  <div className="font-bold text-lg">Contratos Longo Prazo</div>
                  <div className="text-sm text-muted-foreground">Descontos para compromisso anual</div>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-primary text-primary-foreground p-8 rounded-lg">
            <div className="text-lg mb-2">Receita Anual Potencial (80% utilização)</div>
            <div className="text-5xl font-bold">USD 118M</div>
            <div className="text-sm mt-2 opacity-80">Ano 5 projetado</div>
          </div>
        </div>
      </div>
    </div>
    <SlideFooter />
  </SlideContainer>
);

export const Slide18Market = () => (
  <SlideContainer className="bg-background">
    <SlideHeader slideNumber={18} totalSlides={30} />
    <div className="flex-1 px-16 pb-16">
      <h2 className="text-5xl font-bold text-primary mb-12">Mercado e Demanda</h2>
      <div className="grid grid-cols-2 gap-12">
        <div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 p-10 rounded-lg mb-6">
            <h3 className="text-3xl font-bold text-blue-900 mb-8">Crescimento LATAM</h3>
            <div className="space-y-6">
              <div>
                <div className="text-sm uppercase tracking-wider text-blue-700 mb-2">2025</div>
                <div className="text-4xl font-bold text-blue-900">USD 58B</div>
              </div>
              <div>
                <div className="text-sm uppercase tracking-wider text-blue-700 mb-2">2030</div>
                <div className="text-4xl font-bold text-blue-900">USD 154B</div>
              </div>
              <div className="pt-4 border-t border-blue-300">
                <div className="text-2xl font-bold text-blue-700">CAGR 26.2%</div>
                <div className="text-sm text-blue-600 mt-1">Crescimento anual composto</div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-card border-2 border-border p-8 rounded-lg">
            <h4 className="text-2xl font-bold text-primary mb-6">Clientes-Alvo</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                <span className="text-3xl">🔬</span>
                <div>
                  <div className="font-bold">Laboratórios de Pesquisa</div>
                  <div className="text-sm text-muted-foreground">Globais e regionais</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                <span className="text-3xl">🦄</span>
                <div>
                  <div className="font-bold">Unicórnios LATAM</div>
                  <div className="text-sm text-muted-foreground">Mercado Libre, Nubank, etc</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                <span className="text-3xl">🎓</span>
                <div>
                  <div className="font-bold">Setor Público</div>
                  <div className="text-sm text-muted-foreground">Universidades e institutos</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                <span className="text-3xl">🚀</span>
                <div>
                  <div className="font-bold">Startups de IA</div>
                  <div className="text-sm text-muted-foreground">Bem financiadas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SlideFooter />
  </SlideContainer>
);

export const Slide19Projections = () => (
  <SlideContainer className="bg-background">
    <SlideHeader slideNumber={19} totalSlides={30} />
    <div className="flex-1 px-16 pb-16">
      <div className="flex items-center gap-4 mb-8">
        <TrendingUp className="w-10 h-10 text-accent" />
        <h2 className="text-5xl font-bold text-primary">Projeções Financeiras (10 Anos)</h2>
      </div>
      <div className="h-[450px] min-w-0 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={slideData.revenueProjection}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="year" 
              stroke="hsl(var(--muted-foreground))"
              label={{ value: 'Ano', position: 'insideBottom', offset: -5 }}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              label={{ value: 'USD Milhões', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px'
              }}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="receita" 
              stroke="#1A3B5C" 
              strokeWidth={3}
              name="Receita"
            />
            <Line 
              type="monotone" 
              dataKey="ebitda" 
              stroke="#FF6B35" 
              strokeWidth={3}
              name="EBITDA"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-4 gap-6 mt-8">
        <div className="bg-card border-2 border-border p-6 rounded-lg text-center">
          <div className="text-sm text-muted-foreground mb-2">Receita Ano 1</div>
          <div className="text-3xl font-bold text-primary">USD 28M</div>
        </div>
        <div className="bg-card border-2 border-border p-6 rounded-lg text-center">
          <div className="text-sm text-muted-foreground mb-2">Receita Ano 5</div>
          <div className="text-3xl font-bold text-primary">USD 118M</div>
        </div>
        <div className="bg-card border-2 border-border p-6 rounded-lg text-center">
          <div className="text-sm text-muted-foreground mb-2">EBITDA Ano 5</div>
          <div className="text-3xl font-bold text-accent">USD 66M</div>
        </div>
        <div className="bg-card border-2 border-border p-6 rounded-lg text-center">
          <div className="text-sm text-muted-foreground mb-2">Margem Ano 5</div>
          <div className="text-3xl font-bold text-accent">56%</div>
        </div>
      </div>
    </div>
    <SlideFooter />
  </SlideContainer>
);

export const Slide20Financials = () => {
  const years = [
    { year: 'Ano 1', ...slideData.financials.year1 },
    { year: 'Ano 3', ...slideData.financials.year3 },
    { year: 'Ano 5', ...slideData.financials.year5 },
    { year: 'Ano 10', ...slideData.financials.year10 }
  ];

  return (
    <SlideContainer className="bg-background">
      <SlideHeader slideNumber={20} totalSlides={30} />
      <div className="flex-1 px-16 pb-16">
        <div className="flex items-center gap-4 mb-12">
          <BarChart3 className="w-10 h-10 text-accent" />
          <h2 className="text-5xl font-bold text-primary">Demonstração de Resultados</h2>
        </div>
        <div className="bg-white rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow-lg)' }}>
          <table className="w-full">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="text-left p-6 text-lg font-bold">Métrica</th>
                {years.map((y) => (
                  <th key={y.year} className="text-center p-6 text-lg font-bold">{y.year}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border bg-blue-50">
                <td className="p-6 font-bold text-lg">Receita</td>
                {years.map((y) => (
                  <td key={y.year} className="p-6 text-center text-xl font-bold text-blue-700">
                    USD {y.receita}M
                  </td>
                ))}
              </tr>
              <tr className="border-b border-border">
                <td className="p-6 font-bold text-lg">OPEX</td>
                {years.map((y) => (
                  <td key={y.year} className="p-6 text-center text-xl font-semibold text-red-600">
                    (USD {y.opex}M)
                  </td>
                ))}
              </tr>
              <tr className="border-b border-border bg-orange-50">
                <td className="p-6 font-bold text-lg">EBITDA</td>
                {years.map((y) => (
                  <td key={y.year} className="p-6 text-center text-xl font-bold text-orange-700">
                    USD {y.ebitda}M
                  </td>
                ))}
              </tr>
              <tr className="border-b border-border bg-green-50">
                <td className="p-6 font-bold text-lg">Impostos</td>
                {years.map((y) => (
                  <td key={y.year} className="p-6 text-center text-xl font-bold text-green-700">
                    USD 0M ✓
                  </td>
                ))}
              </tr>
              <tr className="bg-accent text-accent-foreground">
                <td className="p-6 font-bold text-xl">Lucro Líquido</td>
                {years.map((y) => (
                  <td key={y.year} className="p-6 text-center text-2xl font-bold">
                    USD {y.lucro}M
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-8 bg-green-50 border-2 border-green-200 p-6 rounded-lg">
          <div className="flex items-center justify-center gap-4">
            <span className="text-3xl">✓</span>
            <div className="text-xl font-bold text-green-900">
              Lei 19.640: Isenção total de impostos garante 100% do EBITDA como lucro líquido
            </div>
          </div>
        </div>
      </div>
      <SlideFooter />
    </SlideContainer>
  );
};

export const Slide21Returns = () => (
  <SlideContainer className="bg-background">
    <SlideHeader slideNumber={21} totalSlides={30} />
    <div className="flex-1 px-16 pb-16">
      <h2 className="text-5xl font-bold text-primary mb-12">Indicadores de Retorno</h2>
      <div className="grid grid-cols-3 gap-8 mb-12">
        <div className="bg-gradient-to-br from-green-50 to-green-100 border-4 border-green-300 p-12 rounded-lg text-center">
          <div className="text-sm uppercase tracking-wider text-green-700 mb-4">TIR (Taxa Interna de Retorno)</div>
          <div className="text-7xl font-bold text-green-700 mb-4">{'>'} 25%</div>
          <div className="text-lg text-green-900">Retorno altamente atrativo</div>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-4 border-blue-300 p-12 rounded-lg text-center">
          <div className="text-sm uppercase tracking-wider text-blue-700 mb-4">Payback Period</div>
          <div className="text-7xl font-bold text-blue-700 mb-4">{'<'} 5</div>
          <div className="text-lg text-blue-900">Anos para recuperação</div>
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 border-4 border-orange-300 p-12 rounded-lg text-center">
          <div className="text-sm uppercase tracking-wider text-orange-700 mb-4">VPL (10 anos)</div>
          <div className="text-6xl font-bold text-orange-700 mb-4">Positivo</div>
          <div className="text-lg text-orange-900">Substancialmente</div>
        </div>
      </div>
      <div className="bg-card border-2 border-border p-10 rounded-lg">
        <h3 className="text-2xl font-bold text-primary mb-6">Premissas</h3>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
              <span className="font-semibold">Taxa de Desconto</span>
              <span className="text-xl font-bold text-accent">15%</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
              <span className="font-semibold">Horizonte de Análise</span>
              <span className="text-xl font-bold text-accent">10 anos</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
              <span className="font-semibold">Utilização Máxima</span>
              <span className="text-xl font-bold text-accent">90%</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
              <span className="font-semibold">Margem EBITDA</span>
              <span className="text-xl font-bold text-accent">50-60%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SlideFooter />
  </SlideContainer>
);

export const Slide22Sensitivity = () => (
  <SlideContainer className="bg-background">
    <SlideHeader slideNumber={22} totalSlides={30} />
    <div className="flex-1 px-16 pb-16">
      <h2 className="text-5xl font-bold text-primary mb-12">Análise de Sensibilidade</h2>
      <div className="space-y-8">
        <div className="bg-white rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow-lg)' }}>
          <table className="w-full">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="text-left p-6 text-lg font-bold">Variável</th>
                <th className="text-center p-6 text-lg font-bold">-20%</th>
                <th className="text-center p-6 text-lg font-bold">Cenário Base</th>
                <th className="text-center p-6 text-lg font-bold">+20%</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-6 font-bold">Preço Energia</td>
                <td className="p-6 text-center bg-green-50">
                  <div className="font-bold text-green-700">TIR: 28%</div>
                </td>
                <td className="p-6 text-center">
                  <div className="font-bold">TIR: 25%</div>
                </td>
                <td className="p-6 text-center bg-yellow-50">
                  <div className="font-bold text-yellow-700">TIR: 22%</div>
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-6 font-bold">Preço Aluguel GPU</td>
                <td className="p-6 text-center bg-red-50">
                  <div className="font-bold text-red-700">TIR: 18%</div>
                </td>
                <td className="p-6 text-center">
                  <div className="font-bold">TIR: 25%</div>
                </td>
                <td className="p-6 text-center bg-green-50">
                  <div className="font-bold text-green-700">TIR: 32%</div>
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-6 font-bold">Taxa de Utilização</td>
                <td className="p-6 text-center bg-yellow-50">
                  <div className="font-bold text-yellow-700">TIR: 19%</div>
                </td>
                <td className="p-6 text-center">
                  <div className="font-bold">TIR: 25%</div>
                </td>
                <td className="p-6 text-center bg-green-50">
                  <div className="font-bold text-green-700">TIR: 31%</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-green-50 border-2 border-green-200 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-green-900 mb-4">Melhor Cenário</h3>
            <p className="text-green-700">
              Preço energia -20%, Aluguel GPU +20%, Utilização +20%
            </p>
            <div className="mt-4 text-4xl font-bold text-green-700">TIR: 38%+</div>
          </div>
          <div className="bg-blue-50 border-2 border-blue-200 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Conclusão</h3>
            <p className="text-blue-700 text-lg">
              Modelo robusto com margem de segurança significativa. Mesmo em cenários adversos, 
              retorno permanece atrativo ({'>'} 18% TIR).
            </p>
          </div>
        </div>
      </div>
    </div>
    <SlideFooter />
  </SlideContainer>
);
