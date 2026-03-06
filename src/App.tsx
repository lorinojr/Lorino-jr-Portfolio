import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, MoveUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

type Language = 'EN' | 'PT';

const CONTENT = {
  EN: {
    hero: {
      sub: "// lorino.francisco.rodrigues.junior",
      loc: "// maputo, mozambique — available globally",
      line1: "I DON'T",
      line2: "WRITE",
      line3: "CODE.",
      line4: "I architect systems that scale.",
      desc: "AI-native builder from Maputo. I take ideas from concept to live production 10x faster than traditional development. English and Portuguese. Full-stack. No excuses.",
      cta: "SEE THE WORK →",
      role: "PRODUCT ENGINEER · CO-FOUNDER · VIBECODER"
    },
    stats: [
      { val: "60%", label: "FASTER DEV CYCLES" },
      { val: "3", label: "LIVE PLATFORMS SHIPPED" },
      { val: "10×", label: "OUTPUT VS TRADITIONAL" },
      { val: "2", label: "LANGUAGES" }
    ],
    work: {
      title: "WORK.",
      projects: [
        {
          tag: "HEALTH-TECH · 2024",
          title: "MELHOR SAÚDE",
          desc: "Marketplace connecting corporate employees with wellness experts. Matching engine. Scheduling system. Built for scale.",
          stack: "NEXT.JS · SUPABASE · POSTGRESQL",
          rust: true
        },
        {
          tag: "UTILITY · FINTECH · 2024",
          title: "WATER ERP SYSTEM",
          desc: "End-to-end billing automation for a national utility provider. Zero manual entry. Real-time financials.",
          stack: "NODE.JS · POSTGRESQL · REAL-TIME DASHBOARD"
        },
        {
          tag: "CONSULTANCY · 2023",
          title: "HODLIAS HOLDINGS",
          desc: "Digital ecosystem that transformed market authority and tripled qualified lead pipeline.",
          stack: "REACT · VERCEL · CMS"
        }
      ],
      full: "VIEW FULL PORTFOLIO → portfolio.onhighmanagement.com"
    },
    tools: {
      title: "TOOLS.",
      sub: "// THE VIBECODER STACK",
      row1: ["CURSOR AI", "WINDSURF", "NEXT.JS", "REACT", "NODE.JS"],
      row2: ["SUPABASE", "VERCEL", "POSTGRESQL", "MAKE.COM", "FIREBASE"]
    },
    about: {
      title1: "BUILT",
      title2: "DIFFERENT.",
      quote: "I build features that solve problems and generate revenue — not just code for the sake of code.",
      bio1: "Based in Maputo, Mozambique, I operate at the intersection of engineering and product strategy. As a Co-Founder of OnHighManagement, I've mastered the art of rapid deployment using AI-native workflows.",
      bio2: "I don't just write code; I architect solutions that scale. My approach is bilingual, both in language (EN/PT) and in stack, ensuring that every product shipped is a market-ready asset.",
      meta: [
        { label: "LOCATION", val: "Maputo, Mozambique" },
        { label: "COMPANY", val: "OnHighManagement" },
        { label: "LANGUAGES", val: "English + Portuguese" },
        { label: "METHOD", val: "AI-Native · Vibe to Production" },
        { label: "CONTACT", val: "lorinofrdriguesjunior@gmail.com" }
      ]
    },
    cta: {
      title1: "READY",
      title2: "TO SHIP?",
      sub: "Based in Maputo. Available globally. Fast by design.",
      btn: "LET'S BUILD → lorinofrdriguesjunior@gmail.com"
    }
  },
  PT: {
    hero: {
      sub: "// lorino.francisco.rodrigues.junior",
      loc: "// maputo, moçambique — disponível globalmente",
      line1: "EU NÃO",
      line2: "ESCREVO",
      line3: "CÓDIGO.",
      line4: "Eu arquivo sistemas que escalam.",
      desc: "Construtor nativo de IA de Maputo. Levo ideias do conceito à produção ao vivo 10x mais rápido que o desenvolvimento tradicional. Inglês e Português. Full-stack. Sem desculpas.",
      cta: "VER O TRABALHO →",
      role: "ENGENHEIRO DE PRODUTO · CO-FUNDADOR · VIBECODER"
    },
    stats: [
      { val: "60%", label: "CICLOS DE DEV MAIS RÁPIDOS" },
      { val: "3", label: "PLATAFORMAS AO VIVO" },
      { val: "10×", label: "OUTPUT VS TRADICIONAL" },
      { val: "2", label: "IDIOMAS" }
    ],
    work: {
      title: "TRABALHO.",
      projects: [
        {
          tag: "HEALTH-TECH · 2024",
          title: "MELHOR SAÚDE",
          desc: "Marketplace conectando funcionários corporativos com especialistas em bem-estar. Motor de busca. Sistema de agendamento. Construído para escala.",
          stack: "NEXT.JS · SUPABASE · POSTGRESQL",
          rust: true
        },
        {
          tag: "UTILIDADE · FINTECH · 2024",
          title: "SISTEMA ERP DE ÁGUA",
          desc: "Automação de faturamento de ponta a ponta para um provedor nacional de utilidade pública. Zero entrada manual. Finanças em tempo real.",
          stack: "NODE.JS · POSTGRESQL · DASHBOARD EM TEMPO REAL"
        },
        {
          tag: "CONSULTORIA · 2023",
          title: "HODLIAS HOLDINGS",
          desc: "Ecossistema digital que transformou a autoridade de mercado e triplicou o pipeline de leads qualificados.",
          stack: "REACT · VERCEL · CMS"
        }
      ],
      full: "VER PORTFÓLIO COMPLETO → portfolio.onhighmanagement.com"
    },
    tools: {
      title: "FERRAMENTAS.",
      sub: "// O STACK VIBECODER",
      row1: ["CURSOR AI", "WINDSURF", "NEXT.JS", "REACT", "NODE.JS"],
      row2: ["SUPABASE", "VERCEL", "POSTGRESQL", "MAKE.COM", "FIREBASE"]
    },
    about: {
      title1: "CONSTRUÍDO",
      title2: "DIFERENTE.",
      quote: "Eu construo funcionalidades que resolvem problemas e geram receita — não apenas código pelo código.",
      bio1: "Baseado em Maputo, Moçambique, opero na intersecção entre engenharia e estratégia de produto. Como Co-Fundador da OnHighManagement, dominei a arte de implementação rápida usando fluxos de trabalho nativos de IA.",
      bio2: "Não apenas escrevo código; arquivo soluções que escalam. Minha abordagem é bilíngue, tanto no idioma (EN/PT) quanto no stack, garantindo que cada produto entregue seja um ativo pronto para o mercado.",
      meta: [
        { label: "LOCALIZAÇÃO", val: "Maputo, Moçambique" },
        { label: "EMPRESA", val: "OnHighManagement" },
        { label: "IDIOMAS", val: "Inglês + Português" },
        { label: "MÉTODO", val: "Nativo de IA · Vibe para Produção" },
        { label: "CONTATO", val: "lorinofrdriguesjunior@gmail.com" }
      ]
    },
    cta: {
      title1: "PRONTO",
      title2: "PARA ENVIAR?",
      sub: "Baseado em Maputo. Disponível globalmente. Rápido por design.",
      btn: "VAMOS CONSTRUIR → lorinofrdriguesjunior@gmail.com"
    }
  }
};

export default function App() {
  const [lang, setLang] = useState<Language>('EN');
  const [gridVisible, setGridVisible] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  
  const content = CONTENT[lang];

  // Custom Cursor Logic
  useEffect(() => {
    const cursor = { x: 0, y: 0 };
    const ring = { x: 0, y: 0 };
    const dot = { x: 0, y: 0 };
    
    const onMouseMove = (e: MouseEvent) => {
      cursor.x = e.clientX;
      cursor.y = e.clientY;
    };

    window.addEventListener('mousemove', onMouseMove);

    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const animate = () => {
      dot.x = lerp(dot.x, cursor.x, 0.3);
      dot.y = lerp(dot.y, cursor.y, 0.3);
      ring.x = lerp(ring.x, cursor.x, 0.12);
      ring.y = lerp(ring.y, cursor.y, 0.12);

      if (dotRef.current) {
        dotRef.current.style.left = `${dot.x}px`;
        dotRef.current.style.top = `${dot.y}px`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${ring.x}px`;
        ringRef.current.style.top = `${ring.y}px`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  // Grid Toggle Logic
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'g') {
        setGridVisible(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Page Load Sequence
      const tl = gsap.timeline();
      tl.to(".loader-left", { xPercent: -100, duration: 1.4, ease: "expo.inOut" }, 0.2)
        .to(".loader-right", { xPercent: 100, duration: 1.4, ease: "expo.inOut" }, 0.2)
        .set("#loader-overlay", { pointerEvents: "none", visibility: "hidden" })
        .from(".hero-chunk", { 
          y: -120, 
          opacity: 0, 
          duration: 1.1, 
          stagger: 0.08, 
          ease: "expo.out" 
        }, 0.4)
        .to(".hero-rule", { width: "100%", duration: 1.8, ease: "none" }, 1.6)
        .from(".hero-fade-up", { y: 30, opacity: 0, duration: 0.9, ease: "power2.out" }, 3.4);

      // 2. Scroll Animations
      gsap.utils.toArray<HTMLElement>(".reveal-heading").forEach((heading) => {
        gsap.from(heading, {
          scrollTrigger: {
            trigger: heading,
            start: "top 90%",
          },
          x: -80,
          opacity: 0,
          duration: 1.0,
          ease: "expo.out"
        });
      });

      gsap.utils.toArray<HTMLElement>(".reveal-body").forEach((body) => {
        gsap.from(body, {
          scrollTrigger: {
            trigger: body,
            start: "top 90%",
          },
          y: 25,
          opacity: 0,
          duration: 1.1,
          ease: "expo.out"
        });
      });

      gsap.utils.toArray<HTMLElement>(".project-row").forEach((row, i) => {
        gsap.from(row, {
          scrollTrigger: {
            trigger: row,
            start: "top 90%",
          },
          clipPath: "inset(0 100% 0 0)",
          duration: 1.4,
          delay: i * 0.2,
          ease: "expo.inOut"
        });
      });

      // Stats Counter
      gsap.utils.toArray<HTMLElement>(".stat-number").forEach((stat) => {
        const target = stat.innerText.replace(/[^0-9]/g, '');
        const suffix = stat.innerText.replace(/[0-9]/g, '');
        
        gsap.fromTo(stat, 
          { innerText: 0 },
          {
            innerText: target,
            duration: 2.0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: stat,
              start: "top 90%",
            },
            onUpdate: function() {
              stat.innerText = Math.ceil(Number(this.targets()[0].innerText)) + suffix;
            }
          }
        );
      });

      // Stack Tags
      gsap.utils.toArray<HTMLElement>(".stack-tag").forEach((tag, i) => {
        gsap.from(tag, {
          scrollTrigger: {
            trigger: tag,
            start: "top 95%",
          },
          clipPath: "inset(0 100% 0 0)",
          duration: 0.8,
          delay: i * 0.12,
          ease: "expo.inOut"
        });
      });
    }, mainRef);

    return () => ctx.revert();
  }, [lang]);

  const handleCursorHover = (type: 'link' | 'project' | 'none') => {
    if (!cursorRef.current) return;
    cursorRef.current.className = '';
    if (type === 'link') cursorRef.current.classList.add('cursor-hover');
    if (type === 'project') cursorRef.current.classList.add('cursor-project');
  };

  return (
    <div ref={mainRef} className={`relative min-h-screen ${gridVisible ? 'grid-active' : ''}`}>
      {/* Custom Cursor */}
      <div id="custom-cursor" ref={cursorRef} className="hidden lg:block">
        <div id="cursor-dot" ref={dotRef} />
        <div id="cursor-ring" ref={ringRef} />
      </div>

      {/* Grid Overlay */}
      <div className="hidden lg:block">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="grid-line" style={{ left: `${(i + 1) * (100 / 12)}%` }} />
        ))}
      </div>

      {/* Page Load Overlay */}
      <div id="loader-overlay">
        <div className="loader-half loader-left" />
        <div className="loader-half loader-right" />
      </div>

      {/* Ticker */}
      <div className="ticker-wrap hidden md:flex">
        <div className="ticker-content font-mono text-[10px] text-muted">
          {["NEXT.JS", "SUPABASE", "REACT", "NODE.JS", "VERCEL", "CURSOR AI", "POSTGRESQL", "MAKE.COM", "FIREBASE"].map((tech, i) => (
            <span key={i}>{tech} · </span>
          ))}
          {["NEXT.JS", "SUPABASE", "REACT", "NODE.JS", "VERCEL", "CURSOR AI", "POSTGRESQL", "MAKE.COM", "FIREBASE"].map((tech, i) => (
            <span key={i + 10}>{tech} · </span>
          ))}
        </div>
      </div>

      {/* Nav / Language Toggle */}
      <nav className="fixed top-8 right-8 z-[60] flex gap-4 font-mono text-[11px] uppercase tracking-widest">
        <button 
          onClick={() => setLang('EN')}
          onMouseEnter={() => handleCursorHover('link')}
          onMouseLeave={() => handleCursorHover('none')}
          className={`transition-colors duration-300 ${lang === 'EN' ? 'text-rust' : 'text-muted hover:text-void'}`}
        >
          EN
        </button>
        <span className="text-muted/30">/</span>
        <button 
          onClick={() => setLang('PT')}
          onMouseEnter={() => handleCursorHover('link')}
          onMouseLeave={() => handleCursorHover('none')}
          className={`transition-colors duration-300 ${lang === 'PT' ? 'text-rust' : 'text-muted hover:text-void'}`}
        >
          PT
        </button>
      </nav>

      {/* 1. HERO */}
      <section className="h-[100dvh] flex flex-col justify-center px-8 md:px-24 relative overflow-hidden">
        <div className="absolute top-12 left-8 md:left-24 space-y-1">
          <p className="section-label">{content.hero.sub}</p>
          <p className="section-label">{content.hero.loc}</p>
        </div>

        <div className="mt-20 relative z-10">
          <h1 className="text-[clamp(72px,17vw,210px)] flex flex-col leading-[0.85]">
            <span className="hero-chunk">{content.hero.line1}</span>
            <span className="hero-chunk">{content.hero.line2}</span>
            <span className="hero-chunk text-rust">{content.hero.line3}</span>
          </h1>
          <div className="rule-horizontal hero-rule my-12" />
          <h2 className="hero-chunk text-[clamp(42px,8vw,110px)] text-indigo italic font-serif lowercase leading-[1.1] pb-2">
            {content.hero.line4}
          </h2>
        </div>

        <div className="mt-12 max-w-[500px] hero-fade-up">
          <p className="text-muted text-[17px] leading-relaxed">
            {content.hero.desc}
          </p>
        </div>

        <div className="absolute bottom-12 left-8 md:left-24 hero-fade-up">
          <button 
            onMouseEnter={() => handleCursorHover('link')}
            onMouseLeave={() => handleCursorHover('none')}
            className="cta-button"
          >
            {content.hero.cta}
          </button>
        </div>

        <div className="absolute bottom-12 right-24 hidden md:block rotate-90 origin-right hero-fade-up">
          <p className="section-label whitespace-nowrap">{content.hero.role}</p>
        </div>
      </section>

      {/* 2. NUMBERS */}
      <section className="border-y-2 border-void grid grid-cols-1 md:grid-cols-4 bg-bone">
        {content.stats.map((stat, i) => (
          <div key={i} className={`p-12 md:p-16 flex flex-col gap-4 ${i < 3 ? 'md:border-r-2 border-void' : ''}`}>
            <span className="stat-number font-bebas text-[clamp(64px,9vw,110px)]">{stat.val}</span>
            <span className="section-label tracking-[0.3em]">{stat.label}</span>
          </div>
        ))}
      </section>

      {/* 3. WORK */}
      <section className="py-32 px-8 md:px-24 bg-bone">
        <div className="flex items-start mb-20">
          <span className="section-label -rotate-90 origin-left translate-y-12 -translate-x-8">02</span>
          <h2 className="reveal-heading text-[clamp(52px,9vw,110px)]">{content.work.title}</h2>
        </div>

        <div className="flex flex-col">
          {content.work.projects.map((project, i) => (
            <div 
              key={i} 
              className="project-row group border-b-2 border-void py-16 px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
              onMouseEnter={() => handleCursorHover('project')}
              onMouseLeave={() => handleCursorHover('none')}
            >
              <div className="flex flex-col gap-4 max-w-2xl">
                <span className={`font-mono text-[11px] uppercase tracking-widest ${project.rust ? 'text-rust' : 'text-muted group-hover:text-bone'}`}>
                  {project.tag}
                </span>
                <h3 className="text-[clamp(32px,3.5vw,64px)] transition-colors duration-500">
                  {project.title}
                </h3>
                <p className="font-serif text-[16px] text-muted group-hover:text-bone transition-colors duration-500">
                  {project.desc}
                </p>
                <p className="font-mono text-[11px] tracking-widest text-muted group-hover:text-bone/60 transition-colors duration-500">
                  {project.stack}
                </p>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <MoveUpRight size={48} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-end">
          <a 
            href="https://portfolio.onhighmanagement.com" 
            target="_blank" 
            rel="noopener noreferrer"
            onMouseEnter={() => handleCursorHover('link')}
            onMouseLeave={() => handleCursorHover('none')}
            className="font-mono text-[11px] uppercase tracking-widest border-b border-transparent hover:border-void transition-all duration-300"
          >
            {content.work.full}
          </a>
        </div>
      </section>

      {/* 4. STACK */}
      <section className="bg-indigo py-32 px-8 md:px-24 border-t-2 border-void">
        <h2 className="text-[clamp(52px,9vw,110px)] text-bone mb-4">{content.tools.title}</h2>
        <p className="section-label text-bone/40 mb-16">{content.tools.sub}</p>
        
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-4">
            {content.tools.row1.map((tag, i) => (
              <div key={i} className="stack-tag" onMouseEnter={() => handleCursorHover('link')} onMouseLeave={() => handleCursorHover('none')}>
                {tag}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            {content.tools.row2.map((tag, i) => (
              <div key={i} className="stack-tag" onMouseEnter={() => handleCursorHover('link')} onMouseLeave={() => handleCursorHover('none')}>
                {tag}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ABOUT */}
      <section className="py-32 px-8 md:px-24 bg-bone grid grid-cols-1 md:grid-cols-12 gap-16">
        <div className="md:col-span-8">
          <div className="flex items-start mb-12">
            <span className="section-label -rotate-90 origin-left translate-y-12 -translate-x-8">04</span>
            <h2 className="reveal-heading text-[clamp(52px,9vw,110px)] flex flex-col leading-[0.92]">
              <span>{content.about.title1}</span>
              <span>{content.about.title2}</span>
            </h2>
          </div>
          <div className="rule-horizontal w-full my-12" />
          <p className="reveal-body font-serif italic text-[1.5rem] text-indigo max-w-[560px] mb-12">
            "{content.about.quote}"
          </p>
          <div className="reveal-body space-y-8 text-muted text-[17px] leading-relaxed max-w-[600px]">
            <p>{content.about.bio1}</p>
            <p>{content.about.bio2}</p>
          </div>
        </div>

        <div className="md:col-span-4 flex flex-col gap-12 mt-24">
          {content.about.meta.map((item, i) => (
            <div key={i} className="border-t border-void/20 pt-4 reveal-body">
              <p className="section-label text-[10px] mb-2">{item.label}</p>
              <p className="font-serif text-[16px] text-void">{item.val}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CTA */}
      <section className="bg-void py-48 px-8 md:px-24 flex flex-col items-center text-center">
        <h2 className="text-[clamp(64px,12vw,160px)] text-bone flex flex-col leading-none mb-8">
          <span>{content.cta.title1}</span>
          <span>{content.cta.title2}</span>
        </h2>
        <p className="font-serif italic text-[1.2rem] text-bone/60 mb-16">
          {content.cta.sub}
        </p>
        
        <button 
          onMouseEnter={() => handleCursorHover('link')}
          onMouseLeave={() => handleCursorHover('none')}
          className="bg-rust text-bone font-bebas text-[28px] px-16 py-6 transition-all duration-500 hover:scale-[1.02] hover:brightness-90"
        >
          {content.cta.btn}
        </button>

        <div className="mt-32 flex flex-col items-center gap-4">
          <div className="flex flex-col md:flex-row gap-4 section-label text-bone/30">
            <span>© 2026 LORINO JR</span>
            <span className="hidden md:inline">·</span>
            <span>ONHIGHMANAGEMENT</span>
            <span className="hidden md:inline">·</span>
            <span>MAPUTO, MZ</span>
          </div>
          <p className="section-label text-bone/30">PORTFOLIO: portfolio.onhighmanagement.com</p>
          <div className="h-[2px] w-[120px] bg-rust mt-8" />
        </div>
      </section>
    </div>
  );
}
