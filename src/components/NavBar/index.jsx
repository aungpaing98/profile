
import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <div className="navbar">
            <div className="navtab">
                <ul className="navlinks">
                    <li className="nav"><Link className="navlink home" to="/">Aung Paing</Link></li>
                    <li className="nav"><Link className="navlink work" to="/works">Works</Link></li>
                </ul>
                <div className="darktoggle">Dark</div>
            </div>
        </div>
    )
}