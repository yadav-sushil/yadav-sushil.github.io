import { useState } from "react";
import useReveal from "../hooks/Reveal";

const Contact = () => {
  const [form, setForm] = useState({ name:"", email:"", subject:"", message:"" });
  const [status, setStatus] = useState("");
  const ref = useReveal();
  const set = f => e => setForm(p=>({...p,[f]:e.target.value}));

  const submit = async () => {
    if (!form.name||!form.email||!form.message) return;
    try {
      const r = await fetch("http://localhost:8000/api/contact", {
        method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(form)
      });
      const d = await r.json();
      setStatus(d.message);
    } catch {
      setStatus("✓ Message noted! (Start FastAPI backend to enable live submission.)");
    }
    setForm({ name:"", email:"", subject:"", message:"" });
  };

  return (
    <section id="contact">
      <div className="section-inner">
        <div className="section-header">
          <h2>Say Hello</h2>
          <div className="underline"/>
          <p>Have a project in mind? Let's work together.</p>
        </div>
        <div className="contact-grid reveal" ref={ref}>
          <div>
            {[
              ["Location","Baramanpur, Bhainsa, Jaunpur\n222129 U.P., India"],
              ["Phone",   "+91 8686150371"],
              ["Email",   <a href="mailto:contactsushil7@gmail.com">contactsushil7@gmail.com</a>],
            ].map(([l,v])=>(
              <div className="contact-item" key={l}>
                <div className="contact-label">{l}</div>
                <div className="contact-value">{v}</div>
              </div>
            ))}
          </div>
          <div className="contact-form">
            <div className="form-row">
              {[["name","Name"],["email","Email"]].map(([f,l])=>(
                <div className="form-field" key={f}>
                  <label className="form-label">{l}</label>
                  <input className="form-input" value={form[f]} placeholder={l} onChange={set(f)} />
                </div>
              ))}
            </div>
            <div className="form-field">
              <label className="form-label">Subject</label>
              <input className="form-input" value={form.subject} placeholder="Subject" onChange={set("subject")} />
            </div>
            <div className="form-field">
              <label className="form-label">Message</label>
              <textarea className="form-textarea" value={form.message} placeholder="Your message..." onChange={set("message")} />
            </div>
            <button className="btn btn-teal" onClick={submit} style={{alignSelf:"flex-start"}}>Send Message</button>
            {status && <div className="form-status">{status}</div>}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;