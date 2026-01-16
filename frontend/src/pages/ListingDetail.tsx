import { useParams } from "react-router-dom";
import { listings } from "../data/mockListings";
import { useI18n } from "../i18n/I18nProvider";
import "./ListingDetail.css";

export function ListingDetail() {
  const { id } = useParams();
  const { t } = useI18n();
  const listing = listings.find(item => item.id === id) ?? listings[0];

  return (
    <main className="section">
      <div className="container detail-page">
        <div className="detail-gallery">
          <div className="detail-gallery__main">
            <img src={listing.images[0]} alt={listing.title} />
          </div>
          <div className="detail-gallery__thumbs">
            {listing.images.map(image => (
              <img key={image} src={image} alt={listing.title} />
            ))}
          </div>
        </div>
        <div className="detail-info">
          <div className="badge">{listing.intent}</div>
          <h1>{listing.title}</h1>
          <p className="detail-location">{listing.location}</p>
          <h2 className="detail-price">{listing.price}</h2>
          <div className="detail-cards">
            <div className="card detail-card">
              <h3>{t("detail.details")}</h3>
              <ul>
                <li>Type: {listing.type}</li>
                <li>Région: {listing.region}</li>
                <li>Ville: {listing.city}</li>
                <li>{t("detail.visitRight")}: {listing.visitRight}</li>
              </ul>
            </div>
            <div className="card detail-card highlight">
              <h3>Règles métier</h3>
              <p>
                Droit de visite affiché publiquement. {t("detail.noContact")}.
              </p>
              {listing.intent === "Vente" && listing.region === "Analamanga" && (
                <div className="detail-alert">
                  Vente assistée Trano.com obligatoire — commission 10%.
                </div>
              )}
            </div>
          </div>
          <div className="detail-actions">
            <button className="button primary">{t("listing.requestVisit")}</button>
            <button className="button ghost">{t("listing.favorite")}</button>
            <button className="button ghost">{t("listing.boost")}</button>
          </div>
        </div>
      </div>
    </main>
  );
}
