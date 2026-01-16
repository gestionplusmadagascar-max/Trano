import "./Footer.css";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <h3>Trano.com</h3>
          <p>{t("footer.tagline")}</p>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li>Assistance vente Analamanga</li>
            <li>Boost d'annonces</li>
            <li>Messagerie sécurisée</li>
          </ul>
        </div>
        <div>
          <h4>Support</h4>
          <ul>
            <li>Centre d'aide</li>
            <li>Conditions d'utilisation</li>
            <li>Politique anti-contournement</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
