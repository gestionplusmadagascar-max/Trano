import { ListingCard } from "../components/ListingCard";
import { listings } from "../data/mockListings";
import { useI18n } from "../i18n/I18nProvider";
import "./Search.css";

export function Search() {
  const { t } = useI18n();
  const boosted = listings.filter(listing => listing.isBoosted);
  const regular = listings.filter(listing => !listing.isBoosted);

  return (
    <main className="section">
      <div className="container search-page">
        <aside className="card search-filters">
          <h2>Filtres avancés</h2>
          <label>
            {t("search.region")}
            <select className="select">
              <option>Analamanga</option>
              <option>Boeny</option>
              <option>Atsinanana</option>
            </select>
          </label>
          <label>
            {t("search.city")}
            <input className="input" placeholder="Ville ou quartier" />
          </label>
          <label>
            {t("search.type")}
            <select className="select">
              <option>Résidentiel</option>
              <option>Professionnel</option>
              <option>Terrain</option>
            </select>
          </label>
          <label>
            {t("search.intent")}
            <select className="select">
              <option>Vente</option>
              <option>Location</option>
            </select>
          </label>
          <button className="button primary" type="button">
            {t("form.applyFilters")}
          </button>
        </aside>
        <section>
          <div className="search-header">
            <h1>Résultats</h1>
            <p>Les annonces boostées s'affichent en priorité.</p>
          </div>
          <div className="grid listing-grid">
            {[...boosted, ...regular].map(listing => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
