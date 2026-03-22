
const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="hero-inner">
        <p className="hero-eyebrow">Hello, I'm</p>
        <h1 className="hero-name">Sushil Kumar <em>Yadav</em></h1>
        <p className="hero-subtitle">Full Stack Developer &nbsp;/&nbsp; <span>AI Engineer</span></p>
        <div className="hero-badges">
          <span className="badge badge-teal">⚡ 10+ Years Full Stack Developer</span>
          <span className="badge badge-ai">✦ GenAI · Agents · Claude · Copilot</span>
        </div>
        <div className="hero-ctas">
          <a href="#contact" className="btn btn-teal">Get In Touch</a>
          <a href="#skills"  className="btn btn-outline">My Skills</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
