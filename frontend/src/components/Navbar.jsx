import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { localeLabels } from "../i18n/translations";
import { useTheme } from "../services/theme";
import "./Navbar.css";

export function Navbar() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="navbar">
      <div className="container navbar__content">
        <Link className="navbar__brand" to="/">
          <span>Trano</span>
          <span className="navbar__brand-dot">.com</span>
        </Link>
        <nav className="navbar__links">
          <NavLink to="/">{t("nav.home")}</NavLink>
          <NavLink to="/search">{t("nav.search")}</NavLink>
          <NavLink to="/dashboard">{t("nav.dashboard")}</NavLink>
        </nav>
        <div className="navbar__actions">
          <div className="navbar__locale">
            {Object.entries(localeLabels).map(([key, label]) => (
              <button
                key={key}
                type="button"
                className={key === i18n.language ? "active" : ""}
                onClick={() => i18n.changeLanguage(key)}
              >
                {label}
              </button>
            ))}
          </div>
          <button className="button ghost" onClick={toggleTheme}>
            {theme === "light" ? t("theme.dark") : t("theme.light")}
          </button>
          <NavLink className="button primary" to="/auth">
            {t("nav.signin")}
          </NavLink>
        </div>
      </div>
    </header>
  );
}
