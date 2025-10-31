import { SlideContainer } from "../presentation/SlideContainer";
import { SlideHeader } from "../presentation/SlideHeader";
import { SlideFooter } from "../presentation/SlideFooter";
import { Cpu, HardDrive, Share2 } from "lucide-react";
import datacenterInterior from "@/assets/datacenter-interior.jpg";

export const Slide12Hardware = () => {
  return (
    <SlideContainer bgImage={datacenterInterior} bgOverlay>
      <SlideHeader slideNumber={12} totalSlides={30} light />
      <div className="flex-1 px-16 pb-16">
        <h2 className="text-5xl font-bold text-white mb-12">Especificações Técnicas - Hardware</h2>
        
        <div className="grid grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-lg">
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="w-10 h-10 text-accent" />
              <h3 className="text-2xl font-bold text-white">Computação</h3>
            </div>
            <ul className="space-y-4 text-white">
              <li>
                <div className="text-3xl font-bold text-accent mb-1">820</div>
                <div className="text-sm opacity-80">Servidores HGX H100 8-GPU</div>
              </li>
              <li>
                <div className="text-3xl font-bold text-accent mb-1">6.560</div>
                <div className="text-sm opacity-80">GPUs NVIDIA H100 80GB</div>
              </li>
              <li>
                <div className="text-3xl font-bold text-accent mb-1">2.6</div>
                <div className="text-sm opacity-80">ExaFLOPS (FP8)</div>
              </li>
              <li className="pt-4 border-t border-white/20">
                <div className="text-sm font-semibold">Arquitetura Hopper</div>
                <div className="text-xs opacity-70 mt-1">Última geração NVIDIA</div>
              </li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-lg">
            <div className="flex items-center gap-3 mb-6">
              <HardDrive className="w-10 h-10 text-accent" />
              <h3 className="text-2xl font-bold text-white">Armazenamento</h3>
            </div>
            <ul className="space-y-4 text-white">
              <li>
                <div className="text-3xl font-bold text-accent mb-1">50-60 PB</div>
                <div className="text-sm opacity-80">Capacidade total NVMe</div>
              </li>
              <li>
                <div className="text-3xl font-bold text-accent mb-1">Multi-tier</div>
                <div className="text-sm opacity-80">Arquitetura hierárquica</div>
              </li>
              <li className="pt-4 border-t border-white/20">
                <div className="text-sm font-semibold">Tier 1: NVMe (hot data)</div>
                <div className="text-sm font-semibold mt-2">Tier 2: SSD (warm data)</div>
                <div className="text-sm font-semibold mt-2">Tier 3: HDD (cold data)</div>
              </li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-lg">
            <div className="flex items-center gap-3 mb-6">
              <Share2 className="w-10 h-10 text-accent" />
              <h3 className="text-2xl font-bold text-white">Rede</h3>
            </div>
            <ul className="space-y-4 text-white">
              <li>
                <div className="text-3xl font-bold text-accent mb-1">400 Gbps</div>
                <div className="text-sm opacity-80">Fabric Ethernet/InfiniBand</div>
              </li>
              <li>
                <div className="text-3xl font-bold text-accent mb-1">&lt;1µs</div>
                <div className="text-sm opacity-80">Latência interna</div>
              </li>
              <li className="pt-4 border-t border-white/20">
                <div className="text-sm font-semibold">RDMA habilitado</div>
                <div className="text-xs opacity-70 mt-1">Remote Direct Memory Access</div>
              </li>
              <li>
                <div className="text-sm font-semibold">Topologia fat-tree</div>
                <div className="text-xs opacity-70 mt-1">Máxima bandwidth entre GPUs</div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 bg-accent text-accent-foreground p-6 rounded-lg text-center">
          <p className="text-xl font-bold">
            Performance equivalente a 1.640 servidores DGX A100
          </p>
        </div>
      </div>
      <SlideFooter light />
    </SlideContainer>
  );
};
