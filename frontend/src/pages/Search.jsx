import { useMemo, useState } from "react";
import { ListingCard } from "../components/ListingCard";
import { useTranslation } from "react-i18next";
import { useListings } from "../services/useListings";
import "./Search.css";

export function Search() {
  const { t } = useTranslation();
  const { data, loading, error } = useListings();
  const [region, setRegion] = useState("");
  const [type, setType] = useState("");
  const [intent, setIntent] = useState("");

  const filtered = useMemo(() => {
    return data.filter(listing => {
      if (region && listing.region !== region) {
        return false;
      }
      if (type && listing.type !== type) {
        return false;
      }
      if (intent && listing.intent !== intent) {
        return false;
      }
      return true;
    });
  }, [data, region, type, intent]);

  const boosted = filtered.filter(listing => listing.isBoosted);
  const regular = filtered.filter(listing => !listing.isBoosted);

  return (
    <main className="section">
      <div className="container search-page">
        <aside className="card search-filters">
          <h2>Filtres avancés</h2>
          <label>
            {t("search.region")}
            <select className="select" value={region} onChange={event => setRegion(event.target.value)}>
              <option value="">Toutes</option>
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
            <select className="select" value={type} onChange={event => setType(event.target.value)}>
              <option value="">Tous</option>
              <option>Résidentiel</option>
              <option>Professionnel</option>
              <option>Terrain</option>
            </select>
          </label>
          <label>
            {t("search.intent")}
            <select className="select" value={intent} onChange={event => setIntent(event.target.value)}>
              <option value="">Tous</option>
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
          {loading && <p className="status">{t("feedback.loading")}</p>}
          {error && <p className="status error">{t("feedback.error")}</p>}
          {!loading && !error && (
            <div className="grid listing-grid">
              {[...boosted, ...regular].map(listing => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
