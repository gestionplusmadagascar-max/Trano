import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useFavorites } from "../services/favorites";
import "./ListingCard.css";

export function ListingCard({ listing }) {
  const { t } = useTranslation();
  const { hasFavorite, toggleFavorite } = useFavorites();
  const isFavorite = hasFavorite(listing.id);
  return (
    <article className="listing-card">
      <Link className="listing-card__media" to={`/listing/${listing.id}`}>
        <img src={listing.images[0]} alt={listing.title} />
        {listing.isBoosted && <span className="listing-card__boost">Boost</span>}
      </Link>
      <div className="listing-card__body">
        <div className="listing-card__meta">
          <span>{listing.type}</span>
          <span>{listing.intent}</span>
        </div>
        <h3>{listing.title}</h3>
        <p>{listing.location}</p>
        <div className="listing-card__price">{listing.price}</div>
        <div className="listing-card__footer">
          <span>
            {t("listing.visitRight")}: {listing.visitRight}
          </span>
          <button
            className="button ghost"
            type="button"
            onClick={() => toggleFavorite(listing.id)}
          >
            {isFavorite ? t("listing.unfavorite") : t("listing.favorite")}
          </button>
        </div>
      </div>
    </article>
  );
}
