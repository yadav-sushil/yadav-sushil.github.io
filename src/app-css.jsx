// ─── Ceevee original palette ──────────────────────────────────────────────────
// bg-light:  #ffffff / #f1f1f1    bg-dark:  #313131 / #2b2b2b
// text:      #444444 / #6E6E6E    headings: #313131
// accent:    #11ABB0  (teal)      ai:       #CC8800  (amber — new AI)
// border:    #D0D0D0              nav-bg:   #333333
// fonts:     Raleway (heads) · Open Sans (body) · Lato (alt)
// ─────────────────────────────────────────────────────────────────────────────

const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Raleway:wght@400;500;600;700;800;900&family=Lato:ital,wght@0,300;0,400;0,700;1,300&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg:        #ffffff;
    --bg-alt:    #f1f1f1;
    --bg-dark:   #313131;
    --bg-darker: #2b2b2b;
    --ink:       #313131;
    --ink2:      #6E6E6E;
    --ink3:      #a0a0a0;
    --ink-white: #ffffff;
    --accent:    #11ABB0;
    --accent-dk: #0d9196;
    --ai:        #CC8800;
    --ai-light:  #fff8e1;
    --ai-border: #e6a817;
    --green:     #5cb85c;
    --border:    #D0D0D0;
    --shadow:    rgba(0,0,0,0.08);
    --font-head: 'Raleway', sans-serif;
    --font-body: 'Open Sans', sans-serif;
    --font-alt:  'Lato', sans-serif;
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--bg);
    color: var(--ink2);
    font-family: var(--font-body);
    font-size: 15px;
    line-height: 1.8;
    overflow-x: hidden;
  }

  ::selection { background: var(--accent); color: #fff; }
  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: var(--bg-alt); }
  ::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 3px; }

  /* NAV */
  nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 3rem; height: 66px;
    background: var(--bg-dark);
    box-shadow: 0 2px 10px rgba(0,0,0,0.25);
  }
  .nav-logo {
    font-family: var(--font-head); font-size: 1.45rem; font-weight: 900;
    color: var(--ink-white); letter-spacing: 0.04em; text-transform: uppercase;
  }
  .nav-logo span { color: var(--accent); }
  .nav-links { display: flex; list-style: none; height: 66px; }
  .nav-links li { display: flex; }
  .nav-links a {
    display: flex; align-items: center;
    color: rgba(255,255,255,0.7); text-decoration: none;
    font-family: var(--font-alt); font-size: 0.78rem;
    letter-spacing: 0.12em; text-transform: uppercase;
    padding: 0 1.2rem; border-bottom: 3px solid transparent;
    transition: color 0.2s, border-color 0.2s;
  }
  .nav-links a:hover { color: #fff; border-bottom-color: var(--accent); }

  /* HERO */
  .hero {
    min-height: 100vh; display: flex; align-items: center;
    background: var(--bg-dark)
      url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='g' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M60 0L0 0 0 60' fill='none' stroke='rgba(255,255,255,0.025)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23g)'/%3E%3C/svg%3E");
    padding: 8rem 3rem 4rem; position: relative; overflow: hidden;
  }
  .hero::after {
    content:''; position:absolute; bottom:0; left:0; right:0; height:4px;
    background: linear-gradient(90deg, var(--accent), var(--ai));
  }
  .hero-inner { max-width: 860px; position: relative; z-index: 1; }
  .hero-eyebrow {
    font-family: var(--font-alt); font-size: 0.82rem;
    letter-spacing: 0.22em; text-transform: uppercase;
    color: var(--accent); margin-bottom: 1rem;
  }
  .hero-name {
    font-family: var(--font-head); font-weight: 900; line-height: 1.05;
    font-size: clamp(2.8rem, 7vw, 5.5rem); letter-spacing: -0.02em;
    color: var(--ink-white); margin-bottom: 1rem;
  }
  .hero-name em { color: var(--accent); font-style: normal; }
  .hero-subtitle {
    font-family: var(--font-alt); font-size: 1rem; font-weight: 300;
    color: rgba(255,255,255,0.55); letter-spacing: 0.16em;
    text-transform: uppercase; margin-bottom: 2rem;
  }
  .hero-subtitle span { color: var(--accent); font-weight: 400; }
  .hero-badges { display: flex; gap: 0.8rem; flex-wrap: wrap; margin-bottom: 2.5rem; }
  .badge {
    display: inline-flex; align-items: center; gap: 0.4rem;
    padding: 0.4rem 1rem; border-radius: 2px;
    font-family: var(--font-alt); font-size: 0.7rem;
    font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
  }
  .badge-teal { background: var(--accent); color: #fff; }
  .badge-ai { background: var(--ai); color: #fff; animation: bpulse 2.5s ease-in-out infinite; }
  @keyframes bpulse { 0%,100%{opacity:1} 50%{opacity:0.8} }
  .hero-ctas { display: flex; gap: 1rem; flex-wrap: wrap; }
  .btn {
    display: inline-flex; align-items: center; gap: 0.5rem;
    padding: 0.9rem 2.2rem; border-radius: 3px; border: none; cursor: pointer;
    font-family: var(--font-head); font-size: 0.78rem;
    font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
    text-decoration: none; transition: all 0.2s;
  }
  .btn-teal { background: var(--accent); color: #fff; }
  .btn-teal:hover { background: var(--accent-dk); transform: translateY(-2px); box-shadow: 0 6px 20px rgba(17,171,176,0.35); }
  .btn-outline { background: transparent; color: rgba(255,255,255,0.75); border: 2px solid rgba(255,255,255,0.2); }
  .btn-outline:hover { border-color: var(--accent); color: var(--accent); }

  /* SECTIONS */
  section { padding: 6rem 3rem; }
  .section-inner { max-width: 1060px; margin: 0 auto; }
  .section-header { text-align: center; margin-bottom: 3.5rem; }
  .section-header h2 {
    font-family: var(--font-head); font-size: 2.2rem; font-weight: 800;
    color: var(--ink); text-transform: uppercase; letter-spacing: 0.04em;
    margin-bottom: 0.6rem;
  }
  .underline {
    display: inline-block; width: 60px; height: 3px;
    background: var(--accent); border-radius: 2px; margin-bottom: 0.8rem;
  }
  .section-header p { font-size: 0.88rem; color: var(--ink2); max-width: 480px; margin: 0 auto; }

  /* ABOUT */
  #about { background: var(--bg); }
  .about-grid { display: grid; grid-template-columns: 1fr 1.4fr; gap: 5rem; align-items: start; }
  .about-info { margin-bottom: 2rem; }
  .about-row {
    display: flex; font-size: 0.87rem;
    border-bottom: 1px solid var(--bg-alt); padding: 0.55rem 0;
  }
  .about-key { font-weight: 700; color: var(--ink); min-width: 108px; flex-shrink: 0; }
  .about-val { color: var(--ink2); }
  .about-val a { color: var(--accent); text-decoration: none; }
  .about-stats {
    display: grid; grid-template-columns: 1fr 1fr;
    border: 1px solid var(--border); gap: 1px; background: var(--border);
  }
  .stat-box { background: var(--bg); padding: 1.4rem; text-align: center; }
  .stat-num { font-family: var(--font-head); font-size: 2.2rem; font-weight: 900; color: var(--accent); line-height: 1; }
  .stat-label { font-size: 0.68rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--ink2); margin-top: 0.25rem; }
  .about-text p { font-size: 0.9rem; line-height: 1.9; margin-bottom: 1.2rem; color: var(--ink2); }
  .teal { color: var(--accent); font-weight: 600; }

  /* SKILLS */
  #skills { background: var(--bg-alt); }
  .ai-banner {
    background: var(--ai-light); border-left: 4px solid var(--ai);
    border-radius: 0 3px 3px 0; padding: 1.1rem 1.6rem;
    display: flex; align-items: center; gap: 1.2rem; margin-bottom: 2rem;
    box-shadow: 0 2px 10px rgba(204,136,0,0.1);
  }
  .ai-banner-icon { font-size: 1.5rem; }
  .ai-banner-text h4 { font-family: var(--font-head); font-size: 0.88rem; font-weight: 800; color: var(--ai); margin-bottom: 0.2rem; }
  .ai-banner-text p { font-size: 0.78rem; color: #664400; margin: 0; }
  .skills-tabs { display: flex; border-bottom: 2px solid var(--border); margin-bottom: 2.5rem; }
  .tab {
    padding: 0.7rem 1.5rem; background: transparent; border: none; cursor: pointer;
    font-family: var(--font-head); font-size: 0.72rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.08em;
    color: var(--ink2); border-bottom: 2px solid transparent;
    margin-bottom: -2px; transition: all 0.2s;
  }
  .tab:hover { color: var(--accent); }
  .tab.active { color: var(--accent); border-bottom-color: var(--accent); }
  .skills-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(270px, 1fr)); gap: 1.5rem; }
  .skill-card {
    background: var(--bg); border: 1px solid var(--border); border-radius: 3px;
    padding: 1.6rem; position: relative; overflow: hidden;
    box-shadow: 0 2px 8px var(--shadow); transition: all 0.25s;
  }
  .skill-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(17,171,176,0.14); border-color: var(--accent); }
  .skill-card.ai-card { border-top: 3px solid var(--ai); }
  .skill-card.ai-card:hover { box-shadow: 0 8px 24px rgba(204,136,0,0.12); border-color: var(--ai-border); }
  .skill-card-head { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem; }
  .skill-name { font-family: var(--font-head); font-size: 1rem; font-weight: 700; color: var(--ink); }
  .skill-chip {
    font-size: 0.58rem; font-weight: 700; letter-spacing: 0.08em;
    text-transform: uppercase; padding: 0.15rem 0.5rem; border-radius: 2px;
  }
  .chip-core { background: rgba(17,171,176,0.12); color: var(--accent); }
  .chip-ai { background: rgba(204,136,0,0.12); color: var(--ai); }
  .chip-knowledge { background: rgba(92,184,92,0.12); color: var(--green); }
  .skill-meta { font-size: 0.73rem; color: var(--ink3); margin-bottom: 0.9rem; }
  .skill-bar { height: 4px; background: #ddd; border-radius: 2px; overflow: hidden; }
  .skill-fill { height: 100%; border-radius: 2px; transition: width 1.2s ease; }
  .fill-core { background: linear-gradient(90deg, var(--accent), #23d3d9); }
  .fill-ai { background: linear-gradient(90deg, var(--ai), #ffb800); }
  .fill-knowledge { background: linear-gradient(90deg, var(--green), #82d982); }
  .new-tag {
    position: absolute; top: 0; right: 0;
    background: var(--ai); color: #fff;
    font-size: 0.56rem; font-weight: 700; letter-spacing: 0.08em;
    text-transform: uppercase; padding: 0.18rem 0.55rem;
    border-radius: 0 3px 0 3px;
  }

  /* EXPERIENCE */
  #experience { background: var(--bg); }
  .exp-wrap { display: grid; grid-template-columns: 200px 1fr; gap: 0; }
  .exp-nav { border-right: 2px solid var(--bg-alt); }
  .exp-nav-btn {
    display: block; width: 100%; text-align: left;
    padding: 0.9rem 1.5rem; cursor: pointer; background: transparent; border: none;
    font-family: var(--font-head); font-size: 0.8rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.06em;
    color: var(--ink2); border-right: 2px solid transparent;
    margin-right: -2px; transition: all 0.2s;
  }
  .exp-nav-btn.active { color: var(--accent); border-right-color: var(--accent); background: rgba(17,171,176,0.04); }
  .exp-nav-btn:hover { color: var(--accent); }
  .exp-detail { padding: 0 0 0 3rem; }
  .exp-role { font-family: var(--font-head); font-size: 1.25rem; font-weight: 700; color: var(--ink); margin-bottom: 0.3rem; }
  .exp-meta { font-size: 0.82rem; color: var(--accent); font-weight: 600; margin-bottom: 1rem; }
  .exp-desc { font-size: 0.9rem; color: var(--ink2); line-height: 1.9; }

  /* EDUCATION */
  #education { background: var(--bg-alt); }
  .edu-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
  .edu-card {
    background: var(--bg); border: 1px solid var(--border);
    border-top: 3px solid var(--accent); border-radius: 3px;
    padding: 2rem; box-shadow: 0 2px 8px var(--shadow); transition: all 0.25s;
  }
  .edu-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(17,171,176,0.12); }
  .edu-inst {
    font-family: var(--font-head); font-size: 0.7rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent); margin-bottom: 0.5rem;
  }
  .edu-degree { font-family: var(--font-head); font-size: 1.1rem; font-weight: 700; color: var(--ink); margin-bottom: 0.3rem; }
  .edu-period { font-size: 0.78rem; color: var(--ink3); margin-bottom: 0.8rem; font-style: italic; }
  .edu-desc { font-size: 0.85rem; color: var(--ink2); }

  /* CONTACT */
  #contact { background: var(--bg-dark); }
  #contact .section-header h2 { color: var(--ink-white); }
  #contact .section-header p { color: rgba(255,255,255,0.5); }
  .contact-grid { display: grid; grid-template-columns: 1fr 1.6fr; gap: 4rem; }
  .contact-item { margin-bottom: 1.5rem; }
  .contact-label {
    font-family: var(--font-head); font-size: 0.68rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.12em; color: var(--accent); margin-bottom: 0.3rem;
  }
  .contact-value { font-size: 0.9rem; color: rgba(255,255,255,0.65); white-space: pre-line; }
  .contact-value a { color: var(--accent); text-decoration: none; }
  .contact-form { display: flex; flex-direction: column; gap: 1rem; }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
  .form-field { display: flex; flex-direction: column; gap: 0.35rem; }
  .form-label { font-size: 0.68rem; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.4); }
  .form-input, .form-textarea {
    background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
    border-radius: 3px; padding: 0.78rem 1rem;
    color: rgba(255,255,255,0.82); font-family: var(--font-body); font-size: 0.87rem;
    outline: none; transition: border-color 0.2s, background 0.2s;
  }
  .form-input::placeholder, .form-textarea::placeholder { color: rgba(255,255,255,0.2); }
  .form-input:focus, .form-textarea:focus { border-color: var(--accent); background: rgba(17,171,176,0.05); }
  .form-textarea { resize: vertical; min-height: 110px; }
  .form-status { font-size: 0.82rem; color: var(--accent); padding-top: 0.2rem; }

  /* FOOTER */
  footer {
    background: var(--bg-darker); padding: 1.8rem 3rem;
    display: flex; justify-content: space-between; align-items: center;
    border-top: 1px solid rgba(255,255,255,0.05);
  }
  .footer-copy { font-size: 0.75rem; color: rgba(255,255,255,0.3); }
  .footer-tag { font-family: var(--font-head); font-size: 0.75rem; color: rgba(255,255,255,0.3); letter-spacing: 0.05em; }
  .footer-tag span { color: var(--accent); }

  /* REVEAL */
  .reveal { opacity: 0; transform: translateY(22px); transition: opacity 0.6s ease, transform 0.6s ease; }
  .reveal.visible { opacity: 1; transform: translateY(0); }
  .d1 { transition-delay: 0.1s; }
  .d2 { transition-delay: 0.2s; }

  @media (max-width: 768px) {
    nav { padding: 0 1.2rem; }
    .nav-links { display: none; }
    section { padding: 4rem 1.2rem; }
    .hero { padding: 6rem 1.2rem 3rem; }
    .about-grid, .edu-grid, .contact-grid { grid-template-columns: 1fr; }
    .exp-wrap { grid-template-columns: 1fr; }
    .exp-nav { border-right: none; border-bottom: 2px solid var(--bg-alt); display: flex; flex-wrap: wrap; }
    .exp-nav-btn { border-right: none; border-bottom: 2px solid transparent; margin: 0 0 -2px 0; padding: 0.6rem 1rem; }
    .exp-nav-btn.active { border-right: none; border-bottom-color: var(--accent); }
    .exp-detail { padding: 1.5rem 0 0; }
    .form-row { grid-template-columns: 1fr; }
    footer { flex-direction: column; gap: 0.4rem; text-align: center; padding: 1.5rem; }
  }
`;

export default GLOBAL_CSS;
