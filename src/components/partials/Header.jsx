import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <ul className="nav">
        <li><Link to="/" activeClassName="active">Home</Link></li>
        <li><Link to="/projects" activeClassName="active">Projects</Link></li>
        <li><Link to="/about" activeClassName="active">About</Link></li>
        <li><Link to="/resume" activeClassName="active">Resume</Link></li>
        <li><Link to="/contact" activeClassName="active">Contact</Link></li>
      </ul>
    </div>
  );
}