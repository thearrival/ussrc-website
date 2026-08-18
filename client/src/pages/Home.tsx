/* شبكة المستقبل الأكاديمي: Hero تفاعلي، طبقات ضوئية، حركة محسوبة، وبطاقات تعكس شبكة USSRC الحيّة بين السودان والصين. */
import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronRight, Globe2, Menu, MoveDownRight, Network, Sparkles, X } from "lucide-react";

const emblem = "/assets/emblem.webp";
const heroImage = "/assets/hero.webp";
const communityImage = "/assets/community.webp";
const researchImage = "/assets/research.webp";

const navItems = [["Vision", "vision"], ["Programs", "programs"], ["Network", "network"], ["Contact", "contact"]] as const;
const programData = [
  { id: "01", title: "Academic exchange", accent: "blue", copy: "Research circles, public talks, and cross-disciplinary conversations that move ideas further.", detail: "From first questions to shared methods, we create room for knowledge to travel." },
  { id: "02", title: "Mentorship network", accent: "green", copy: "A trusted layer of people, guidance, and belonging for every stage of the journey.", detail: "Arrive with context. Find a peer. Meet the person who has walked this path before." },
  { id: "03", title: "Research pathways", accent: "red", copy: "Connections to collaboration, opportunity, and meaningful contribution across China.", detail: "Turn an introduction into a working group, a paper, or a new direction." },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProgram, setActiveProgram] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 30); window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll); }, []);
  const closeMenu = () => setMenuOpen(false);

  return <div className="future-shell">
    <header className={scrolled ? "future-header scrolled" : "future-header"}>
      <a className="future-brand" href="#top" onClick={closeMenu}><span className="future-brand-mark"><img src={emblem} alt="" /></span><span><b>USSRC</b><small>Union of Sudanese Students<br />&amp; Researchers in China</small></span></a>
      <nav className={menuOpen ? "future-nav open" : "future-nav"}>{navItems.map(([label, href]) => <a key={href} href={`#${href}`} onClick={closeMenu}>{label}</a>)}<a className="future-nav-cta" href="#contact" onClick={closeMenu}>Connect <ArrowUpRight size={14} /></a></nav>
      <button className="future-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation" : "Open navigation"}>{menuOpen ? <X /> : <Menu />}</button>
    </header>

    <main id="top">
      <section className="future-hero">
        <div className="hero-photo" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="hero-grid" /><div className="hero-glow glow-one" /><div className="hero-glow glow-two" />
        <div className="orbit orbit-one" /><div className="orbit orbit-two" />
        <div className="future-width hero-layout">
          <div className="hero-main"><div className="live-label"><i /> LIVE NETWORK / 01 <span> السودان × الصين </span></div><h1>Build the<br /><span>next signal.</span></h1><p>أقوى رحلة أكاديمية تبدأ من اتصال واحد.</p><p className="hero-desc">A connected generation of Sudanese students and researchers shaping what comes next across China.</p><div className="hero-actions"><a className="future-button primary" href="#vision">Explore the network <MoveDownRight size={16} /></a><a className="future-button ghost" href="#contact">Start a conversation <ArrowUpRight size={16} /></a></div></div>
          <div className="hero-console"><div className="console-top"><span>USSRC / FIELD NODE</span><span className="console-status"><i /> ACTIVE</span></div><div className="console-core"><div className="pulse-ring" /><div className="core-dot"><img src={emblem} alt="USSRC emblem" /></div><span className="node-label node-a">KHARTOUM</span><span className="node-label node-b">BEIJING</span><span className="node-label node-c">SHARED FUTURE</span></div><div className="console-bottom"><span>01</span><span className="console-line" /><span>CONNECTIONS IN MOTION</span></div></div>
        </div>
        <div className="hero-bottom future-width"><span>SCROLL TO DISCOVER</span><span className="scroll-line" /><span>EST. FOR THE NEXT GENERATION</span></div>
      </section>

      <div className="signal-ticker"><div>KNOWLEDGE <b>•</b> BELONGING <b>•</b> RESEARCH <b>•</b> POSSIBILITY <b>•</b> KNOWLEDGE <b>•</b> BELONGING <b>•</b> RESEARCH <b>•</b> POSSIBILITY</div></div>

      <section id="vision" className="vision-section future-width future-section"><div className="section-kicker"><span>01 / THE VISION</span><span className="kicker-line" /><span>THE NETWORK IS THE FUTURE</span></div><div className="vision-grid"><div><h2>Not just a<br /><em>community.</em><br />A movement.</h2></div><div className="vision-copy"><p className="vision-lead">USSRC is the living layer between where Sudanese scholars come from and everything they are ready to build.</p><p>We turn distance into connection, experience into guidance, and individual ambition into shared momentum. This is where the next chapter gets its signal.</p><a className="inline-arrow" href="#programs">See how we move <ChevronRight size={16} /></a></div></div><div className="signal-cards"><div><span>01</span><Sparkles size={21} /><strong>Purpose, in motion.</strong><p>Every interaction should open a door, not end a conversation.</p></div><div><span>02</span><Network size={21} /><strong>People, connected.</strong><p>A network shaped by many cities, disciplines, and points of view.</p></div><div><span>03</span><Globe2 size={21} /><strong>Future, shared.</strong><p>Knowledge becomes powerful when it travels beyond itself.</p></div></div></section>

      <section id="programs" className="programs-future future-section"><div className="future-width"><div className="section-kicker"><span>02 / WHAT WE MOVE</span><span className="kicker-line" /><span>SELECT A PATHWAY</span></div><div className="programs-future-head"><h2>Find your<br /><em>frequency.</em></h2><p>Three active layers. One connected experience. Choose the signal that meets you where you are.</p></div><div className="program-interface"><div className="program-list">{programData.map((program, index) => <button key={program.id} className={activeProgram === index ? `program-tab active ${program.accent}` : "program-tab"} onClick={() => setActiveProgram(index)}><span>{program.id}</span><strong>{program.title}</strong><ChevronRight size={17} /></button>)}</div><div className={`program-detail ${programData[activeProgram].accent}`}><div className="detail-image"><img src={activeProgram === 1 ? communityImage : researchImage} alt="USSRC students and researchers" /><span>PATHWAY / {programData[activeProgram].id}</span></div><div className="detail-copy"><span className="detail-accent">ACTIVE SIGNAL</span><h3>{programData[activeProgram].title}</h3><p>{programData[activeProgram].copy}</p><p className="detail-small">{programData[activeProgram].detail}</p><a href="#contact" className="inline-arrow">Open this pathway <ArrowUpRight size={16} /></a></div></div></div></div></section>

      <section id="network" className="network-section future-width future-section"><div className="network-visual"><div className="network-map"><span className="map-node khartoum">KHARTOUM <i /></span><span className="map-node beijing">BEIJING <i /></span><span className="map-node shanghai">SHANGHAI <i /></span><svg viewBox="0 0 700 440" aria-hidden="true"><path d="M138 290 C260 220 390 210 548 127" /><path d="M138 290 C310 288 427 275 548 127" /><path d="M138 290 C272 344 422 340 548 127" /></svg></div></div><div className="network-copy"><div className="section-kicker"><span>03 / THE NETWORK</span><span className="kicker-line" /></div><h2>One network.<br /><em>Many horizons.</em></h2><p>The union is a map of people. Every city, discipline, and conversation adds a new point of possibility.</p><div className="network-tags"><span>STUDENTS</span><span>RESEARCHERS</span><span>MENTORS</span><span>PARTNERS</span></div><a className="future-button primary" href="#contact">Join the signal <ArrowUpRight size={16} /></a></div></section>

      <section id="contact" className="future-contact future-section"><div className="future-width contact-inner"><div className="section-kicker"><span>04 / YOUR NEXT MOVE</span><span className="kicker-line" /><span>OPEN CHANNEL</span></div><h2>What will you<br /><em>connect next?</em></h2><p>Bring a question, a project, or simply the wish to find your people. The channel is open.</p><a className="future-button primary" href="mailto:hello@ussrc.org">hello@ussrc.org <ArrowUpRight size={16} /></a></div></section>
    </main>

    <footer className="future-footer"><div className="future-width footer-inner"><div className="footer-future-brand"><img src={emblem} alt="USSRC" /><span><b>USSRC</b><small>Union of Sudanese Students<br />&amp; Researchers in China</small></span></div><div className="footer-signal">A stronger academic journey,<br /><em>shared.</em></div><div className="footer-end"><span>© {new Date().getFullYear()} USSRC</span><a href="#top">Back to top ↑</a></div></div></footer>
  </div>;
}
