import { Link } from "react-router-dom";
import { Listing } from "../data/mockListings";
import { useI18n } from "../i18n/I18nProvider";
import "./ListingCard.css";

interface ListingCardProps {
  listing: Listing;
}

export function ListingCard({ listing }: ListingCardProps) {
  const { t } = useI18n();
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
          <button className="button ghost" type="button">
            {t("listing.requestVisit")}
          </button>
        </div>
      </div>
    </article>
  );
}
