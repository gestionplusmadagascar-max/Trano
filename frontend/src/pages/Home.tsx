import { ListingCard } from "../components/ListingCard";
import { listings } from "../data/mockListings";
import { useI18n } from "../i18n/I18nProvider";
import "./Home.css";

export function Home() {
  const { t } = useI18n();
  const boosted = listings.filter(listing => listing.isBoosted);
  const latest = listings.slice(0, 3);

  return (
    <main>
      <section className="hero">
        <div className="container hero__content">
          <div>
            <span className="badge">Trano.com</span>
            <h1>{t("hero.title")}</h1>
            <p>{t("hero.subtitle")}</p>
            <div className="hero__actions">
              <button className="button primary">{t("cta.publish")}</button>
              <button className="button ghost">{t("cta.explore")}</button>
            </div>
          </div>
          <div className="hero__panel">
            <div className="search-card">
              <h3>Recherche rapide</h3>
              <div className="search-card__grid">
                <select className="select" defaultValue="">
                  <option value="" disabled>
                    {t("search.region")}
                  </option>
                  <option>Analamanga</option>
                  <option>Boeny</option>
                  <option>Atsinanana</option>
                  <option>Diana</option>
                </select>
                <input className="input" placeholder={t("search.city")} />
                <select className="select" defaultValue="">
                  <option value="" disabled>
                    {t("search.type")}
                  </option>
                  <option>Résidentiel</option>
                  <option>Professionnel</option>
                  <option>Terrain</option>
                </select>
                <select className="select" defaultValue="">
                  <option value="" disabled>
                    {t("search.intent")}
                  </option>
                  <option>Vente</option>
                  <option>Location</option>
                </select>
              </div>
              <button className="button primary search-card__cta">{t("search.cta")}</button>
            </div>
            <div className="hero__stats">
              <div>
                <h4>+3 200</h4>
                <p>Biens vérifiés</p>
              </div>
              <div>
                <h4>48h</h4>
                <p>Délai de réponse moyen</p>
              </div>
              <div>
                <h4>10%</h4>
                <p>Commission vente assistée</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__title">
            <h2>{t("section.boosted")}</h2>
            <p>Visibilité maximale pour des annonces premium.</p>
          </div>
          <div className="grid listing-grid">
            {boosted.map(listing => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section__title">
            <h2>{t("section.latest")}</h2>
            <p>Les dernières opportunités disponibles immédiatement.</p>
          </div>
          <div className="grid listing-grid">
            {latest.map(listing => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
