import { useState } from "react";
import useReveal from "../hooks/Reveal";
import { EXPERIENCES } from "../constants/Constant";

const  Experience = () =>  {
  const [active, setActive] = useState(0);
  const ref = useReveal();
  const e = EXPERIENCES[active];
  return (
    <section id="experience">
      <div className="section-inner">
        <div className="section-header">
          <h2>Work Experience</h2>
          <div className="underline"/>
          <p>10+ years across technology management and full-stack development.</p>
        </div>
        <div className="exp-wrap reveal" ref={ref}>
          <div className="exp-nav">
            {EXPERIENCES.map((ex,i)=>(
              <button key={ex.company} className={`exp-nav-btn ${i===active?"active":""}`} onClick={()=>setActive(i)}>
                {ex.company}
              </button>
            ))}
          </div>
          <div className="exp-detail">
            <div className="exp-role">{e.role}</div>
            <div className="exp-meta">{e.company} &nbsp;·&nbsp; {e.period}</div>
            <div className="exp-desc">{e.desc}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;