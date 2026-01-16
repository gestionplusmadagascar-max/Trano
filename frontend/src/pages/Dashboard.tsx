import { useI18n } from "../i18n/I18nProvider";
import "./Dashboard.css";

export function Dashboard() {
  const { t } = useI18n();
  return (
    <main className="section dashboard">
      <div className="container dashboard__grid">
        <section className="card dashboard__summary">
          <div>
            <h1>{t("dashboard.title")}</h1>
            <p>Gestion centralisée de vos annonces et visites.</p>
          </div>
          <div className="dashboard__balance">
            <h2>{t("dashboard.balance")}</h2>
            <p className="dashboard__amount">Ar 75 000</p>
            <div className="dashboard__actions">
              <button className="button primary" type="button">
                Recharger via Mobile Money
              </button>
              <button className="button ghost" type="button">
                Historique
              </button>
            </div>
          </div>
        </section>
        <section className="card dashboard__panel">
          <h2>{t("dashboard.newListing")}</h2>
          <p>Formulaire dynamique selon type de bien et objectif.</p>
          <div className="dashboard__form">
            <label>
              Région
              <select className="select">
                <option>Analamanga</option>
                <option>Boeny</option>
                <option>Diana</option>
              </select>
            </label>
            <label>
              Objectif
              <select className="select">
                <option>Vente</option>
                <option>Location</option>
              </select>
            </label>
            <label className="checkbox">
              <input type="checkbox" />
              {t("form.acceptTerms")}
            </label>
            <button className="button primary" type="button">
              Publier
            </button>
          </div>
        </section>
        <section className="dashboard__side">
          <div className="card dashboard__mini">
            <h3>{t("dashboard.listings")}</h3>
            <p>12 annonces actives</p>
          </div>
          <div className="card dashboard__mini">
            <h3>{t("dashboard.favorites")}</h3>
            <p>8 biens enregistrés</p>
          </div>
          <div className="card dashboard__mini">
            <h3>{t("dashboard.payments")}</h3>
            <p>Dernière validation: 2 jours</p>
          </div>
          <div className="card dashboard__mini">
            <h3>{t("dashboard.preferences")}</h3>
            <p>Langue · Thème · Notifications</p>
          </div>
        </section>
      </div>
    </main>
  );
}
