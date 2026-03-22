import useReveal from "../hooks/Reveal";

const Education = () => {
  const ref = useReveal();
  return (
    <section id="education">
      <div className="section-inner">
        <div className="section-header"><h2>Education</h2><div className="underline"/></div>
        <div className="edu-grid reveal" ref={ref}>
          {[
            { inst:"Goa University",  degree:"Master of Computer Application",          period:"2012 – 2015", desc:"Completed degree with 6.1 CGPA." },
            { inst:"MCRPV University",degree:"B.Sc Information Technology",period:"2008 – 2011", desc:"Completed B.Sc IT with 65%." },
          ].map(e=>(
            <div className="edu-card" key={e.inst}>
              <div className="edu-inst">{e.inst}</div>
              <div className="edu-degree">{e.degree}</div>
              <div className="edu-period">{e.period}</div>
              <div className="edu-desc">{e.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
