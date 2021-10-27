import {useState} from 'react'

import { Link } from "react-router-dom";

export default function NavBar() {
  const [dark, setDark] = useState(true);
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
        <button className="toggledark" onClick={()=>{setDark(!dark)}} style={{backgroundColor:dark?"#fbd38d":"#805AD5"}}>
          <img src={dark?"/images/sun.png" : "/images/moon.png"} alt="moon logo" />
        </button>
      </div>
    </div>
  );
}
