import { useI18n } from "../i18n/I18nProvider";
import "./Auth.css";

export function Auth() {
  const { t } = useI18n();
  return (
    <main className="section auth-page">
      <div className="container auth-grid">
        <div className="auth-copy">
          <span className="badge">Trano ID</span>
          <h1>{t("auth.welcome")}</h1>
          <p>{t("auth.subtitle")}</p>
          <div className="auth-features">
            <div>
              <h4>Messagerie interne</h4>
              <p>Accès débloqué après confirmation de visite.</p>
            </div>
            <div>
              <h4>Solde sécurisé</h4>
              <p>Suivi des crédits et paiements manuels Mobile Money.</p>
            </div>
          </div>
        </div>
        <div className="card auth-card">
          <div className="auth-tabs">
            <button className="active" type="button">
              Connexion
            </button>
            <button type="button">Inscription</button>
          </div>
          <form className="auth-form">
            <label>
              Email
              <input className="input" type="email" placeholder="email@trano.com" />
            </label>
            <label>
              Mot de passe
              <input className="input" type="password" placeholder="********" />
            </label>
            <button className="button primary" type="button">
              {t("nav.signin")}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
