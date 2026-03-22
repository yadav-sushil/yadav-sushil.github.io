import useReveal from "../hooks/Reveal";

const  About = () =>  {
  const r1 = useReveal(), r2 = useReveal();
  return (
    <section id="about">
      <div className="section-inner">
        <div className="section-header">
          <h2>About Me</h2>
          <div className="underline"/>
        </div>
        <div className="about-grid">
          <div className="reveal" ref={r1}>
            <div className="about-info">
              {[
                ["Name",      "Sushil Kumar Yadav"],
                ["Email",     <a href="mailto:contactsushil7@gmail.com">contactsushil7@gmail.com</a>],
                ["Phone",     "+91 8686150371"],
                ["Born",      "01 December 1988"],
                ["Address",   "Jaunpur, U.P., India"],
                ["Nationality","Indian"],
              ].map(([k,v]) => (
                <div className="about-row" key={k}>
                  <span className="about-key">{k}:</span>
                  <span className="about-val">&nbsp;{v}</span>
                </div>
              ))}
            </div>
            <div className="about-stats">
              {[["10+","Years Exp"],["4","Companies"],["2","Degrees"],["4+","AI Tools"]].map(([n,l])=>(
                <div className="stat-box" key={l}>
                  <div className="stat-num">{n}</div>
                  <div className="stat-label">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-text reveal d1" ref={r2}>
            <p>
              An analytical senior-level software developer with deep expertise in Python, PHP, possessing
              <span className="teal"> 10+ years of hands-on experience</span> across the full software
              development lifecycle — from concept through delivery of next-generation applications
              and customizable solutions.
            </p>
            <p>
              Known for excellent troubleshooting skills and engineering well-researched, cost-effective
              solutions. Currently expanding expertise into <span className="teal">Generative AI</span>,
              building LLM-powered agent workflows, leveraging <span className="teal">Claude Code</span>
              for intelligent automation, and accelerating team velocity with <span className="teal">GitHub Copilot</span>.
            </p>
            <p>
              Object-Oriented Analysis · Design &amp; Development · Relational Database Systems ·
              Project Management · Excellent Communication Skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;