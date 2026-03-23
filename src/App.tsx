import {
  Scale, Calculator, Waypoints, Code, Settings, PenTool, Brain, LineChart,
  Users, Briefcase, Megaphone, Pen, Building2, Terminal, Network, Database
} from 'lucide-react';

export default function App() {
  const agents = [
    { icon: Scale, title: "Avocat", desc: "Avocat on cramepaumion soitanet du cabinet du avetuirmstices." },
    { icon: Calculator, title: "Comptable", desc: "Agents that tianeus, comptable et disehie smmsinaire." },
    { icon: Waypoints, title: "Stratège", desc: "Al menters tn enforcement linisaient le preative emmbale stratégies." },
    { icon: Code, title: "Dev Lead", desc: "Dévelopments rei initeative tandinatx et ou ops development." },
    { icon: Settings, title: "Dev Ops", desc: "Déveloparet common.de site d'un engagement du dev Ops." },
    { icon: PenTool, title: "Designer", desc: "Agents erococsiooalaires, designer, designers ou rruxtures." },
    { icon: Brain, title: "Psy", desc: "Maewoes de veurierment à l'nikienecy and eitaurnés." },
    { icon: LineChart, title: "Analyste", desc: "Analyste ou conclusion, erolonde et anaiyste, analistie aux puntietus." },
    { icon: Users, title: "Associé", desc: "hfembate de une confrum dans common ifrom:ure associét." },
    { icon: Briefcase, title: "Commercial", desc: "Commercial soasunactes des agents, commercial, au rise uve." },
    { icon: Megaphone, title: "Dircom", desc: "Managez du anwirement dircom et commercial recorrt." },
    { icon: Pen, title: "Rédacteur", desc: "Plarocez cumpemendis ou un rédacteur, ehxneliaon triantique." }
  ];

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white font-sans selection:bg-[#D48A5A] selection:text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-8 max-w-7xl mx-auto">
        <div className="text-3xl font-bold tracking-widest">EGX</div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-[#A3A3A3]">
          <a href="#cabinet" className="hover:text-white transition-colors uppercase tracking-wide">Le Cabinet</a>
          <a href="#architecture" className="hover:text-white transition-colors uppercase tracking-wide">Architecture</a>
          <a href="#cockpit" className="hover:text-white transition-colors uppercase tracking-wide">Cockpit</a>
          <a href="#architecte" className="hover:text-white transition-colors uppercase tracking-wide">L'Architecte</a>
          <a href="#contact" className="hover:text-white transition-colors uppercase tracking-wide">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-8 py-16 md:py-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-b border-[#2A2A2A]/50 pb-32">
        <div className="space-y-8">
          <h1 className="text-6xl md:text-7xl lg:text-[80px] font-bold leading-[1.05] tracking-tight">
            12 AI employees.<br />Zero office.
          </h1>
          <p className="text-xl text-[#A3A3A3] max-w-lg leading-relaxed">
            A full cabinet of AI agents that collaborate, delegate, remember, and adapt — built from scratch by one architect.
          </p>
          <button className="bg-[#D48A5A] text-[#0F0F0F] font-semibold px-8 py-4 rounded hover:bg-[#c27a4e] transition-colors">
            DÉCOUVRIR LE CABINET
          </button>
        </div>
        <div className="relative w-full aspect-[16/10] bg-[#161616] rounded-xl border border-[#2A2A2A] shadow-2xl overflow-hidden flex items-center justify-center">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Dashboard" className="w-full h-full object-cover opacity-50 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#D48A5A]/20 to-transparent mix-blend-overlay"></div>
        </div>
      </section>

      {/* Le Cabinet */}
      <section id="cabinet" className="px-8 py-32 max-w-7xl mx-auto border-b border-[#2A2A2A]/50">
        <div className="mb-16">
          <h2 className="text-5xl font-bold tracking-tight mb-6 uppercase">Le Cabinet</h2>
          <div className="h-[1px] w-full bg-[#2A2A2A] relative">
            <div className="absolute left-0 top-0 h-[1px] w-48 bg-[#D48A5A]"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {agents.map((agent, idx) => (
            <div key={idx} className="bg-[#161616] border border-[#2A2A2A] rounded-xl p-6 hover:border-[#D48A5A]/50 transition-colors group">
              <agent.icon className="w-8 h-8 text-[#D48A5A] mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-bold mb-2">{agent.title}</h3>
              <p className="text-sm text-[#888888] leading-relaxed">{agent.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-2xl text-[#888888] italic font-light">Recrutez. Licenciez. Adaptez. En un instant.</p>
        </div>
      </section>

      {/* Comment ça marche */}
      <section id="architecture" className="px-8 py-32 max-w-7xl mx-auto border-b border-[#2A2A2A]/50">
        <div className="mb-20">
          <h2 className="text-5xl font-bold tracking-tight mb-6 uppercase">Comment ça marche</h2>
          <div className="h-[1px] w-full bg-[#2A2A2A] relative">
            <div className="absolute left-0 top-0 h-[1px] w-64 bg-[#D48A5A]"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          <div className="text-center flex flex-col items-center">
            <Database className="w-16 h-16 text-[#D48A5A] mb-8" strokeWidth={1} />
            <h3 className="text-2xl font-bold mb-4">Mémoire partagée</h3>
            <p className="text-[#888888] leading-relaxed">Une base de connaissances centralisée pour tous les agents. Accès instantané aux documents et décisions.</p>
          </div>
          <div className="text-center flex flex-col items-center">
            <Terminal className="w-16 h-16 text-[#D48A5A] mb-8" strokeWidth={1} />
            <h3 className="text-2xl font-bold mb-4">Slash Commands</h3>
            <p className="text-[#888888] leading-relaxed">Interagissez rapidement avec le système via des commandes textuelles directes et efficaces.</p>
          </div>
          <div className="text-center flex flex-col items-center">
            <Network className="w-16 h-16 text-[#D48A5A] mb-8" strokeWidth={1} />
            <h3 className="text-2xl font-bold mb-4">Délégation subagent</h3>
            <p className="text-[#888888] leading-relaxed">Assignation intelligente des tâches aux agents spécialisés pour une efficacité optimale.</p>
          </div>
        </div>

        {/* Architecture Diagram */}
        <div className="bg-[#161616] border border-[#2A2A2A] rounded-xl p-8 md:p-16 flex items-center justify-center overflow-x-auto">
          <div className="flex items-center min-w-max">
            <div className="border border-[#D48A5A] rounded-lg px-6 py-3 text-[#D48A5A] font-mono text-sm tracking-wide">Obsidian Vault</div>
            <div className="w-12 h-[1px] bg-[#D48A5A] relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-[#D48A5A] transform rotate-45"></div>
            </div>
            <div className="flex flex-col items-center relative">
              <div className="border border-[#D48A5A] rounded-lg px-6 py-3 text-[#D48A5A] font-mono text-sm tracking-wide z-10 bg-[#161616]">FastAPI + LanceDB</div>
              <div className="absolute top-full flex flex-col items-center">
                <div className="h-8 w-[1px] bg-[#D48A5A]"></div>
                <div className="w-2 h-2 border-b border-r border-[#D48A5A] transform rotate-45 -mt-1"></div>
                <div className="text-[#D48A5A] font-mono text-xs mt-2 tracking-wide">Vector Search</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-8 h-[1px] bg-[#D48A5A]"></div>
              <div className="flex flex-col h-[80px] justify-between relative">
                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#D48A5A]"></div>
                <div className="flex items-center">
                  <div className="w-8 h-[1px] bg-[#D48A5A] relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-[#D48A5A] transform rotate-45"></div>
                  </div>
                  <div className="border border-[#D48A5A] rounded-lg px-6 py-2 text-[#D48A5A] font-mono text-sm tracking-wide">12 Agents</div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-[1px] bg-[#D48A5A] relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-[#D48A5A] transform rotate-45"></div>
                  </div>
                  <div className="border border-[#D48A5A] rounded-lg px-6 py-2 text-[#D48A5A] font-mono text-sm tracking-wide">12 Agents</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Le Cockpit */}
      <section id="cockpit" className="px-8 py-32 max-w-7xl mx-auto border-b border-[#2A2A2A]/50">
        <div className="mb-16">
          <h2 className="text-5xl font-bold tracking-tight mb-6 uppercase">Le Cockpit</h2>
          <div className="h-[1px] w-full bg-[#2A2A2A] relative">
            <div className="absolute left-0 top-0 h-[1px] w-48 bg-[#D48A5A]"></div>
          </div>
        </div>

        <div className="mb-16 w-full aspect-[21/9] bg-[#161616] rounded-xl border border-[#2A2A2A] shadow-2xl overflow-hidden relative">
          <img src="https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=2070&auto=format&fit=crop" alt="Ultrawide Monitor" className="w-full h-full object-cover opacity-60 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0F0F0F]/90"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-4">Un poste de commandement</h3>
            <p className="text-[#888888] leading-relaxed">Ce n'est pas une simple interface web. C'est votre centre de commandement physique, conçu pour une supervision et un contrôle optimaux de votre flotte d'agents IA.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">12 agents. 1 écran.</h3>
            <p className="text-[#888888] leading-relaxed">Visualisez et interagissez avec l'ensemble de vos 12 agents IA simultanément sur une seule et même vue ultra-large, sans basculer entre les fenêtres.</p>
          </div>
        </div>
      </section>

      {/* Footer / Pour Qui / L'Architecte */}
      <section id="architecte" className="px-8 py-32 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl font-bold tracking-tight mb-6 uppercase">Pour Qui</h2>
          <div className="h-[1px] w-full bg-[#2A2A2A] relative">
            <div className="absolute left-0 top-0 h-[1px] w-48 bg-[#D48A5A]"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          <div className="bg-[#161616] border border-[#2A2A2A] rounded-xl p-8 hover:border-[#D48A5A]/50 transition-colors">
            <Briefcase className="w-8 h-8 text-[#D48A5A] mb-6" strokeWidth={1.5} />
            <h3 className="text-xl font-bold mb-2">Freelances</h3>
            <p className="text-[#888888] text-sm leading-relaxed">Augmentez votre capacité de production sans recruter.</p>
          </div>
          <div className="bg-[#161616] border border-[#2A2A2A] rounded-xl p-8 hover:border-[#D48A5A]/50 transition-colors">
            <Building2 className="w-8 h-8 text-[#D48A5A] mb-6" strokeWidth={1.5} />
            <h3 className="text-xl font-bold mb-2">Solopreneurs</h3>
            <p className="text-[#888888] text-sm leading-relaxed">Déléguez les tâches chronophages et concentrez-vous sur la croissance.</p>
          </div>
          <div className="bg-[#161616] border border-[#2A2A2A] rounded-xl p-8 hover:border-[#D48A5A]/50 transition-colors">
            <Users className="w-8 h-8 text-[#D48A5A] mb-6" strokeWidth={1.5} />
            <h3 className="text-xl font-bold mb-2">Petites structures</h3>
            <p className="text-[#888888] text-sm leading-relaxed">Accédez à une équipe complète d'experts pour une fraction du coût.</p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-5xl font-bold tracking-tight mb-6 uppercase">L'Architecte</h2>
          <div className="h-[1px] w-full bg-[#2A2A2A] relative">
            <div className="absolute left-0 top-0 h-[1px] w-64 bg-[#D48A5A]"></div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-40">
          <div className="w-48 h-48 bg-[#161616] border border-[#D48A5A] rounded-2xl overflow-hidden flex-shrink-0 relative">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" alt="Max Erard" className="w-full h-full object-cover grayscale contrast-125 brightness-50" />
            <div className="absolute inset-0 bg-[#D48A5A] mix-blend-overlay opacity-20"></div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-4xl font-bold mb-4">Max Erard</h3>
            <div className="text-[#888888] space-y-2 text-lg">
              <p>Directeur Artistique</p>
              <p>Formateur IA — 8 écoles</p>
              <p>Speaker TEDx Bordeaux</p>
              <p>Architecte systèmes IA</p>
            </div>
          </div>
        </div>

        <div className="text-center space-y-10 mb-32 flex flex-col items-center">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Entrez dans le cabinet.</h2>
          <button className="bg-[#D48A5A] text-[#0F0F0F] font-semibold px-10 py-4 rounded hover:bg-[#c27a4e] transition-colors text-lg">
            Prendre contact
          </button>
          <div className="text-[#888888] flex items-center justify-center space-x-4">
            <a href="mailto:contact@egx.ai" className="hover:text-white transition-colors">contact@egx.ai</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>

        <div className="text-center text-[#555555] text-sm pb-8">
          EGX 2026
        </div>
      </section>
    </div>
  );
}
