import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="navtab">
        <ul className="navlinks">
          <li className="nav">
            <Link className="navlink home" to="/">
              <img className="navimg" src="/images/cow.png" alt="Cow" />
              Aung Paing
            </Link>
          </li>
          <li className="nav">
            <Link className="navlink work" to="/works">
              Works
            </Link>
          </li>
        </ul>
        <button className="darktoggle">
            <img src="/images/moon.png" alt="Toggle Dark mode Button" />
        </button>
      </div>
    </div>
  );
}
