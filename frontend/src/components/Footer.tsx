import "./Footer.css";
import { useI18n } from "../i18n/I18nProvider";

export function Footer() {
  const { t } = useI18n();
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
