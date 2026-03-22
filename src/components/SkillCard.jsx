import { useEffect, useRef } from "react";

const SkillCard = ({ skill, idx }) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.classList.add("visible");
        const fill = el.querySelector(".skill-fill");
        if (fill) setTimeout(() => { fill.style.width = skill.percent + "%"; }, 150 + idx * 55);
      }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const isAI = skill.category === "ai";
  return (
    <div className={`skill-card reveal${isAI ? " ai-card" : ""}`} ref={ref}>
      {skill.isNew && <div className="new-tag">New</div>}
      <div className="skill-card-head">
        <div className="skill-name">{skill.name}</div>
        <div className={`skill-chip chip-${skill.category}`}>{skill.category}</div>
      </div>
      <div className="skill-meta">{skill.level} · {skill.years} years</div>
      <div className="skill-bar">
        <div className={`skill-fill fill-${skill.category}`} style={{ width: "0%" }} />
      </div>
    </div>
  );
}

export default SkillCard;