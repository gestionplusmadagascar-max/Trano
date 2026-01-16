import { useEffect, useState } from "react";
import { fetchListings } from "./listings";
import { listings as fallbackListings } from "../data/mockListings";
import { normalizeListing } from "./listingMapper";

export function useListings() {
  const [data, setData] = useState(fallbackListings.map(normalizeListing));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    fetchListings()
      .then(listings => {
        if (isMounted) {
          setData(listings.map(normalizeListing));
          setLoading(false);
        }
      })
      .catch(err => {
        if (isMounted) {
          setError(err);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { data, loading, error };
}
