import { useState } from "react";
import { SKILLS } from "../constants/Constant";
import SkillCard from "./SkillCard";

const Skills = () => {
  const [tab, setTab] = useState("all");
  const filtered = tab === "all" ? SKILLS : SKILLS.filter(s => s.category === tab);
  return (
    <section id="skills">
      <div className="section-inner">
        <div className="section-header">
          <h2>My Skills</h2>
          <div className="underline"/>
          <p>Core development expertise combined with new-generation AI engineering.</p>
        </div>
        <div className="ai-banner">
          <div className="ai-banner-icon">✦</div>
          <div className="ai-banner-text">
            <h4>New: Generative AI &amp; Agent Engineering</h4>
            <p>Now skilled in GenAI, LLM Agents, Claude &amp; Claude Code, and GitHub Copilot.</p>
          </div>
        </div>
        <div className="skills-tabs">
          {[["all","All Skills"],["core","Core Dev"],["ai","✦ AI Skills"],["knowledge","Knowledge"]].map(([t,l])=>(
            <button key={t} className={`tab ${tab===t?"active":""}`} onClick={()=>setTab(t)}>{l}</button>
          ))}
        </div>
        <div className="skills-grid">
          {filtered.map((s,i) => <SkillCard key={s.name} skill={s} idx={i} />)}
        </div>
      </div>
    </section>
  );
}
export default Skills;
