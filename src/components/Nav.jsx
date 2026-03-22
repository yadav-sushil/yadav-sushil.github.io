const Nav = () =>  {
  return (
    <nav>
      <div className="nav-logo">Sushil<span> Yadav</span></div>
      <ul className="nav-links">
        {["about","skills","experience","education","contact"].map(s => (
          <li key={s}><a href={`#${s}`}>{s}</a></li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;