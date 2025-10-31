// Slides 23-30 - Slides Finais
import { SlideContainer } from "../presentation/SlideContainer";
import { SlideHeader } from "../presentation/SlideHeader";
import { SlideFooter } from "../presentation/SlideFooter";
import { slideData } from "@/data/slides";
import { AlertTriangle, Shield, Target, Rocket, Leaf, Phone, Award, MapPinned } from "lucide-react";
import ushuaiaSunrise from "@/assets/ushuaia-sunrise.jpg";

export const Slide23Risks = () => (
  <SlideContainer className="bg-background">
    <SlideHeader slideNumber={23} totalSlides={30} />
    <div className="flex-1 px-16 pb-16">
      <div className="flex items-center gap-4 mb-12">
        <AlertTriangle className="w-10 h-10 text-accent" />
        <h2 className="text-5xl font-bold text-primary">Gestão de Riscos</h2>
      </div>
      <div className="bg-white rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow-lg)' }}>
        <table className="w-full">
          <thead>
            <tr className="bg-primary text-primary-foreground">
              <th className="text-left p-6 text-lg font-bold w-1/3">Risco</th>
              <th className="text-left p-6 text-lg font-bold w-2/3">Estratégia de Mitigação</th>
            </tr>
          </thead>
          <tbody>
            {slideData.risks.map((item, index) => (
              <tr key={index} className="border-b border-border hover:bg-muted">
                <td className="p-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                    <span className="font-bold text-lg">{item.risk}</span>
                  </div>
                </td>
                <td className="p-6">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-foreground">{item.mitigation}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8 grid grid-cols-3 gap-6">
        <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-lg text-center">
          <div className="text-2xl font-bold text-blue-700 mb-2">CRT-5</div>
          <div className="text-sm text-blue-900">Classificação de risco país</div>
        </div>
        <div className="bg-green-50 border-2 border-green-200 p-6 rounded-lg text-center">
          <div className="text-2xl font-bold text-green-700 mb-2">Hedge Cambial</div>
          <div className="text-sm text-green-900">Faturamento 100% USD</div>
        </div>
        <div className="bg-orange-50 border-2 border-orange-200 p-6 rounded-lg text-center">
          <div className="text-2xl font-bold text-orange-700 mb-2">Seguros</div>
          <div className="text-sm text-orange-900">Cobertura abrangente</div>
        </div>
      </div>
    </div>
    <SlideFooter />
  </SlideContainer>
);

export const Slide24CSF = () => (
  <SlideContainer className="bg-background">
    <SlideHeader slideNumber={24} totalSlides={30} />
    <div className="flex-1 px-16 pb-16">
      <div className="flex items-center gap-4 mb-12">
        <Target className="w-10 h-10 text-accent" />
        <h2 className="text-5xl font-bold text-primary">Fatores Críticos de Sucesso</h2>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-green-50 border-4 border-green-300 p-8 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-green-900">Confirmação Legal Lei 19.640</h3>
            </div>
            <p className="text-green-700">
              Validação jurídica completa dos benefícios fiscais e aduaneiros para o projeto
            </p>
          </div>
          
          <div className="bg-green-50 border-4 border-green-300 p-8 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-green-900">Contratos ARSAT</h3>
            </div>
            <p className="text-green-700">
              Acordos de conectividade assinados com SLAs e capacidade garantidos
            </p>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-green-50 border-4 border-green-300 p-8 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-green-900">Central Elétrica 60 MW</h3>
            </div>
            <p className="text-green-700">
              Comissionamento e operação da nova central termoelétrica da DPE
            </p>
          </div>
          
          <div className="bg-green-50 border-4 border-green-300 p-8 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-green-900">Cliente-Âncora</h3>
            </div>
            <p className="text-green-700">
              Contrato de longo prazo garantindo mínimo 20% de utilização inicial
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 bg-accent text-accent-foreground p-8 rounded-lg text-center">
        <p className="text-2xl font-bold">
          Status: Negociações avançadas em todos os frentes críticas
        </p>
      </div>
    </div>
    <SlideFooter />
  </SlideContainer>
);

export const Slide25Moat = () => (
  <SlideContainer className="bg-background">
    <SlideHeader slideNumber={25} totalSlides={30} />
    <div className="flex-1 px-16 pb-16">
      <div className="flex items-center gap-4 mb-12">
        <Award className="w-10 h-10 text-accent" />
        <h2 className="text-5xl font-bold text-primary">Diferenciação Competitiva</h2>
      </div>
      <div className="flex items-center justify-center h-[500px]">
        <div className="relative">
          <div className="w-[400px] h-[400px] rounded-full bg-blue-100 border-8 border-blue-300 flex items-center justify-center">
            <div className="text-center p-12">
              <div className="text-3xl font-bold text-blue-900 mb-3">Geografia</div>
              <div className="text-lg text-blue-700">Clima imutável</div>
              <div className="text-lg text-blue-700">Free-air cooling</div>
              <div className="text-lg text-blue-700">PUE {'<'}1.1</div>
            </div>
          </div>
          <div className="absolute top-1/2 left-full -translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-orange-100 border-8 border-orange-300 flex items-center justify-center">
            <div className="text-center p-12">
              <div className="text-3xl font-bold text-orange-900 mb-3">Lei 19.640</div>
              <div className="text-lg text-orange-700">0% impostos</div>
              <div className="text-lg text-orange-700">0% importação</div>
              <div className="text-lg text-orange-700">USD 80-120M economia</div>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-8 border-green-700 flex items-center justify-center z-10 shadow-2xl">
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-3">VANTAGEM</div>
              <div className="text-3xl font-bold">COMPETITIVA</div>
              <div className="text-2xl mt-3">DEFENSÁVEL</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-3 gap-6">
        <div className="bg-card border-2 border-border p-6 rounded-lg text-center">
          <div className="font-bold text-xl text-primary mb-2">Barreira Natural</div>
          <div className="text-sm text-muted-foreground">Geografia não replicável</div>
        </div>
        <div className="bg-card border-2 border-border p-6 rounded-lg text-center">
          <div className="font-bold text-xl text-primary mb-2">Barreira Legal</div>
          <div className="text-sm text-muted-foreground">Lei específica para região</div>
        </div>
        <div className="bg-card border-2 border-border p-6 rounded-lg text-center">
          <div className="font-bold text-xl text-primary mb-2">First Mover</div>
          <div className="text-sm text-muted-foreground">Primeiro no mercado</div>
        </div>
      </div>
    </div>
    <SlideFooter />
  </SlideContainer>
);

export const Slide26Roadmap = () => (
  <SlideContainer className="bg-background">
    <SlideHeader slideNumber={26} totalSlides={30} />
    <div className="flex-1 px-16 pb-16">
      <div className="flex items-center gap-4 mb-12">
        <Rocket className="w-10 h-10 text-accent" />
        <h2 className="text-5xl font-bold text-primary">Roadmap de Expansão</h2>
      </div>
      <div className="space-y-8">
        <div className="bg-primary text-primary-foreground p-12 rounded-lg">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-4xl font-bold">Fase 1</h3>
            <div className="text-3xl font-bold">2025-2028</div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-sm uppercase tracking-wider opacity-80 mb-2">Investimento</div>
              <div className="text-4xl font-bold">USD 500M</div>
            </div>
            <div>
              <div className="text-sm uppercase tracking-wider opacity-80 mb-2">Capacidade</div>
              <div className="text-4xl font-bold">2.6 ExaFLOPS</div>
            </div>
          </div>
        </div>
        
        <div className="bg-accent text-accent-foreground p-12 rounded-lg">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-4xl font-bold">Fase 2</h3>
            <div className="text-3xl font-bold">2029-2031</div>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <div className="text-sm uppercase tracking-wider opacity-80 mb-2">Investimento</div>
              <div className="text-4xl font-bold">USD 500M</div>
            </div>
            <div>
              <div className="text-sm uppercase tracking-wider opacity-80 mb-2">Expansão</div>
              <div className="text-4xl font-bold">+2.6 ExaFLOPS</div>
            </div>
            <div>
              <div className="text-sm uppercase tracking-wider opacity-80 mb-2">Energia</div>
              <div className="text-4xl font-bold">Parque Eólico</div>
            </div>
          </div>
        </div>
        
        <div className="bg-card border-2 border-border p-12 rounded-lg">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-4xl font-bold text-primary">Fase 3</h3>
            <div className="text-3xl font-bold text-primary">2032+</div>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <div className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Investimento</div>
              <div className="text-4xl font-bold text-primary">USD 500M</div>
            </div>
            <div>
              <div className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Tecnologia</div>
              <div className="text-4xl font-bold text-primary">Next-Gen GPUs</div>
            </div>
            <div>
              <div className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Total</div>
              <div className="text-4xl font-bold text-accent">8+ ExaFLOPS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SlideFooter />
  </SlideContainer>
);

export const Slide27ESG = () => (
  <SlideContainer className="bg-background">
    <SlideHeader slideNumber={27} totalSlides={30} />
    <div className="flex-1 px-16 pb-16">
      <div className="flex items-center gap-4 mb-12">
        <Leaf className="w-10 h-10 text-accent" />
        <h2 className="text-5xl font-bold text-primary">Impacto ESG</h2>
      </div>
      <div className="grid grid-cols-3 gap-8">
        <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 p-10 rounded-lg">
          <div className="text-4xl mb-6">🌍</div>
          <h3 className="text-3xl font-bold text-green-900 mb-6">Ambiental</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">✓</span>
              <div>
                <div className="font-bold text-green-900">PUE {'<'}1.1</div>
                <div className="text-sm text-green-700">Máxima eficiência energética</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">✓</span>
              <div>
                <div className="font-bold text-green-900">Energia Renovável</div>
                <div className="text-sm text-green-700">Parque eólico Fase 2</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">✓</span>
              <div>
                <div className="font-bold text-green-900">Baixa Pegada</div>
                <div className="text-sm text-green-700">Carbono reduzido vs DCs tradicionais</div>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 p-10 rounded-lg">
          <div className="text-4xl mb-6">👥</div>
          <h3 className="text-3xl font-bold text-blue-900 mb-6">Social</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">✓</span>
              <div>
                <div className="font-bold text-blue-900">60 Empregos</div>
                <div className="text-sm text-blue-700">Altamente qualificados</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">✓</span>
              <div>
                <div className="font-bold text-blue-900">Desenvolvimento Regional</div>
                <div className="text-sm text-blue-700">Economia local diversificada</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">✓</span>
              <div>
                <div className="font-bold text-blue-900">Capacitação</div>
                <div className="text-sm text-blue-700">Programas de treinamento</div>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 p-10 rounded-lg">
          <div className="text-4xl mb-6">⚖️</div>
          <h3 className="text-3xl font-bold text-purple-900 mb-6">Governança</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-purple-600 text-xl">✓</span>
              <div>
                <div className="font-bold text-purple-900">Compliance</div>
                <div className="text-sm text-purple-700">Normas internacionais</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 text-xl">✓</span>
              <div>
                <div className="font-bold text-purple-900">Transparência</div>
                <div className="text-sm text-purple-700">Relatórios regulares</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 text-xl">✓</span>
              <div>
                <div className="font-bold text-purple-900">Proteção de Dados</div>
                <div className="text-sm text-purple-700">Lei 25.326 Argentina</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <SlideFooter />
  </SlideContainer>
);

export const Slide28NextSteps = () => (
  <SlideContainer className="bg-background">
    <SlideHeader slideNumber={28} totalSlides={30} />
    <div className="flex-1 px-16 pb-16">
      <h2 className="text-5xl font-bold text-primary mb-12">Próximos Passos</h2>
      <div className="space-y-6">
        {[
          { num: 1, title: "Due Diligence Legal e Técnica", desc: "Validação profunda de todos aspectos jurídicos, técnicos e operacionais", timeline: "30 dias" },
          { num: 2, title: "Negociações com ARSAT e DPE", desc: "Finalização de contratos de conectividade e fornecimento de energia", timeline: "45 dias" },
          { num: 3, title: "Projeto de Engenharia Preliminar", desc: "Design detalhado da instalação e especificações técnicas", timeline: "60 dias" },
          { num: 4, title: "Outreach com Clientes-Âncora", desc: "Negociação de contratos de longo prazo para garantir utilização inicial", timeline: "90 dias" },
          { num: 5, title: "Decisão de Investimento", desc: "Aprovação final e estruturação financeira do projeto", timeline: "Q2 2025" }
        ].map((step) => (
          <div key={step.num} className="bg-card border-2 border-border p-8 rounded-lg hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center flex-shrink-0">
                <span className="text-3xl font-bold">{step.num}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-primary mb-2">{step.title}</h3>
                <p className="text-foreground mb-3">{step.desc}</p>
                <div className="inline-block bg-muted px-4 py-2 rounded-lg">
                  <span className="text-sm font-semibold text-muted-foreground">Timeline: {step.timeline}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <SlideFooter />
  </SlideContainer>
);

export const Slide29CTA = () => (
  <SlideContainer className="bg-background">
    <SlideHeader slideNumber={29} totalSlides={30} />
    <div className="flex-1 px-16 pb-16 flex flex-col items-center justify-center">
      <div className="max-w-4xl text-center space-y-12">
        <h2 className="text-6xl font-bold text-primary mb-8">
          Uma Oportunidade Única de Primeira Entrada
        </h2>
        
        <div className="bg-accent text-accent-foreground p-12 rounded-lg" style={{ boxShadow: 'var(--shadow-xl)' }}>
          <p className="text-3xl font-bold leading-relaxed">
            "O Projeto Australis oferece uma combinação inédita de vantagens estruturais 
            para capturar o mercado global de computação de IA."
          </p>
        </div>
        
        <div className="grid grid-cols-3 gap-8 mt-12">
          <div className="bg-card border-2 border-border p-8 rounded-lg">
            <div className="text-5xl font-bold text-accent mb-3">40%</div>
            <div className="text-lg text-foreground">Redução de custos operacionais</div>
          </div>
          <div className="bg-card border-2 border-border p-8 rounded-lg">
            <div className="text-5xl font-bold text-accent mb-3">{'>'} 25%</div>
            <div className="text-lg text-foreground">TIR projetada</div>
          </div>
          <div className="bg-card border-2 border-border p-8 rounded-lg">
            <div className="text-5xl font-bold text-accent mb-3">USD 0</div>
            <div className="text-lg text-foreground">Em impostos (Lei 19.640)</div>
          </div>
        </div>
        
        <div className="pt-12">
          <p className="text-3xl font-bold text-primary">
            Junte-se a nós na construção do hub de IA mais eficiente do mundo
          </p>
        </div>
      </div>
    </div>
    <SlideFooter />
  </SlideContainer>
);

export const Slide30Contact = () => (
  <SlideContainer bgImage={ushuaiaSunrise} bgOverlay>
    <SlideHeader slideNumber={30} totalSlides={30} light />
    <div className="flex-1 px-16 pb-16 flex flex-col items-center justify-center">
      <div className="max-w-3xl text-center text-white space-y-12">
        <div className="space-y-6">
          <div className="text-7xl font-bold mb-4">AUSTRALIS</div>
          <p className="text-3xl font-light opacity-90">Projeto de Data Center de IA</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-12 rounded-lg space-y-8">
          <div className="flex items-center justify-center gap-4">
            <Phone className="w-8 h-8" />
            <h3 className="text-3xl font-bold">Entre em Contato</h3>
          </div>
          
          <div className="space-y-4 text-xl">
            <div>
              <div className="text-sm uppercase tracking-wider opacity-70 mb-1">Email</div>
              <div className="font-semibold">invest@australis-dc.com</div>
            </div>
            <div>
              <div className="text-sm uppercase tracking-wider opacity-70 mb-1">Telefone</div>
              <div className="font-semibold">+54 (11) 5555-0100</div>
            </div>
            <div>
              <div className="text-sm uppercase tracking-wider opacity-70 mb-1">Website</div>
              <div className="font-semibold">www.australis-datacenter.com</div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-4 text-lg opacity-80">
          <MapPinned className="w-6 h-6" />
          <span>Ushuaia, Tierra del Fuego, Argentina</span>
        </div>
      </div>
    </div>
    <div className="text-white/70 text-center pb-12 text-sm">
      PROJETO AUSTRALIS | Confidencial | Dezembro 2024
    </div>
  </SlideContainer>
);
