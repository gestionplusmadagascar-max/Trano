import { createContext, useContext, useEffect, useMemo, useState } from "react";

const FavoritesContext = createContext(undefined);

const STORAGE_KEY = "trano:favorites";

function loadFavorites() {
  if (typeof window === "undefined") {
    return [];
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    console.warn("Unable to load favorites", error);
    return [];
  }
}

function saveFavorites(favorites) {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
}

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(loadFavorites);

  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);

  const value = useMemo(() => {
    const hasFavorite = id => favorites.includes(id);
    const toggleFavorite = id => {
      setFavorites(current =>
        current.includes(id) ? current.filter(item => item !== id) : [...current, id]
      );
    };

    return {
      favorites,
      hasFavorite,
      toggleFavorite
    };
  }, [favorites]);

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within FavoritesProvider");
  }
  return context;
}
