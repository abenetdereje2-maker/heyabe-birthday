
import { useState } from "react";
import {
  Link,
  NavLink
} from "react-router-dom";

import {
  Heart,
  Menu,
  X
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  <button className="language-btn" onClick={toggleLanguage}>
  {language === "en" ? "አማ" : "EN"}
</button>
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "My Letter", path: "/letter" },
    { name: "Memories", path: "/memories" },
    { name: "Wishes", path: "/wishes" }
  ];

  return (
    <nav className="navbar">

      <Link to="/" className="logo" onClick={closeMenu}>
        <span className="logo-icon">
          <Heart fill="currentColor" />
        </span>

        <span>Heyabe's Birthday</span>
      </Link>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      <div className={`nav-links ${menuOpen ? "show-menu" : ""}`}>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>

    </nav>
  );
}

export default Navbar;
