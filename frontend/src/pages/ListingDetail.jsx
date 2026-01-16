import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useListings } from "../services/useListings";
import { useFavorites } from "../services/favorites";
import { boostListing } from "../services/listings";
import { requestVisit } from "../services/visits";
import { fetchCurrentUser } from "../services/users";
import "./ListingDetail.css";

export function ListingDetail() {
  const { id } = useParams();
  const { t } = useTranslation();
  const { data } = useListings();
  const { hasFavorite, toggleFavorite } = useFavorites();
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const listing = useMemo(() => {
    return data.find(item => item.id === id) ?? data[0];
  }, [data, id]);
  const [currentListing, setCurrentListing] = useState(listing);

  useEffect(() => {
    setCurrentListing(listing);
  }, [listing]);

  const isFavorite = currentListing ? hasFavorite(currentListing.id) : false;

  const handleBoost = async () => {
    if (!currentListing) return;
    setIsSubmitting(true);
    setStatus("");
    try {
      const user = await fetchCurrentUser();
      await boostListing(currentListing.id, user.id);
      setCurrentListing(prev => (prev ? { ...prev, isBoosted: true } : prev));
      setStatus(t("feedback.success"));
    } catch (error) {
      setStatus(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVisit = async () => {
    if (!currentListing) return;
    setIsSubmitting(true);
    setStatus("");
    try {
      const user = await fetchCurrentUser();
      await requestVisit({
        listingId: currentListing.id,
        requesterId: user.id,
        scheduledAt: new Date(Date.now() + 86400000).toISOString()
      });
      setStatus(t("feedback.success"));
    } catch (error) {
      setStatus(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!currentListing) {
    return (
      <main className="section">
        <div className="container">
          <p className="status error">{t("feedback.error")}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="section">
      <div className="container detail-page">
        <div className="detail-gallery">
          <div className="detail-gallery__main">
            <img src={currentListing.images[0]} alt={currentListing.title} />
          </div>
          <div className="detail-gallery__thumbs">
            {currentListing.images.map(image => (
              <img key={image} src={image} alt={currentListing.title} />
            ))}
          </div>
        </div>
        <div className="detail-info">
          <div className="badge">{currentListing.intent}</div>
          <h1>{currentListing.title}</h1>
          <p className="detail-location">{currentListing.location}</p>
          <h2 className="detail-price">{currentListing.price}</h2>
          <div className="detail-cards">
            <div className="card detail-card">
              <h3>{t("detail.details")}</h3>
              <ul>
                <li>Type: {currentListing.type}</li>
                <li>Région: {currentListing.region}</li>
                <li>Ville: {currentListing.city}</li>
                <li>{t("detail.visitRight")}: {currentListing.visitRight}</li>
              </ul>
            </div>
            <div className="card detail-card highlight">
              <h3>Règles métier</h3>
              <p>
                Droit de visite affiché publiquement. {t("detail.noContact")}.
              </p>
              {currentListing.intent === "Vente" && currentListing.region === "Analamanga" && (
                <div className="detail-alert">
                  Vente assistée Trano.com obligatoire — commission 10%.
                </div>
              )}
            </div>
          </div>
          <div className="detail-actions">
            <button className="button primary" onClick={handleVisit} disabled={isSubmitting}>
              {t("listing.requestVisit")}
            </button>
            <button
              className="button ghost"
              onClick={() => toggleFavorite(currentListing.id)}
              disabled={!currentListing}
            >
              {isFavorite ? t("listing.unfavorite") : t("listing.favorite")}
            </button>
            <button className="button ghost" onClick={handleBoost} disabled={isSubmitting}>
              {currentListing.isBoosted ? t("listing.boosted") : t("listing.boost")}
            </button>
          </div>
          {status && <p className="detail-status">{status}</p>}
        </div>
      </div>
    </main>
  );
}
