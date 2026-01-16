# Trano.com — Plateforme immobilière (V1)

## 1. Architecture globale
- **Frontend** : application React moderne (Parcel) pour l'interface utilisateur.
- **Backend** : API REST (Express) structurée en couches : controllers → services → repositories.
- **Data layer** : stockage en mémoire (mock) aujourd'hui, **remplaçable** par PostgreSQL via les interfaces `Repository`.

## 2. Choix technos
- **React 18 + Parcel** : rapidité, évolutivité, sans dépendances privées/scopées.
- **Express** : API REST légère, évolutive.
- **CSS moderne** : thèmes clair/sombre via variables CSS.
- **i18n** : multi-langue (MG, FR, EN) via `i18next`.

## 3. Structure des dossiers
```
frontend/
  src/
    components/   # UI réutilisable
    pages/        # Pages principales
    i18n/         # Dictionnaires & config i18next
    data/         # Données mockées
    services/     # Thème, API, favoris
backend/
  src/
    controllers/  # HTTP layer
    services/     # Logique métier
    repositories/ # Interfaces data
    storage/      # Implémentations in-memory
    models/       # Constantes métiers
```

## 4. Pages principales
- **Accueil** : barre de recherche, biens récents, annonces boostées, CTA.
- **Recherche** : filtres avancés, priorisation boost.
- **Détail bien** : galerie, infos, droit de visite, CTA visite + favoris.
- **Auth** : inscription/connexion.
- **Espace utilisateur** : annonces, publication, solde, historique, préférences.

## 5. Logique métier clé (implémentée côté API)
- **Vente assistée Analamanga** : obligation d'accepter les conditions (10%) avant publication.
- **Droit de visite** : affichage public.
- **Demande de visite** : acceptation possible, débit de 5 000 Ar, déblocage messagerie (prévu).
- **Boost annonce** : coût 5 000 Ar, priorité d'affichage.
- **Anti-contournement** : blocage téléphone/email/liens dans description.

## 6. Exemple de données mockées
- Listings, utilisateurs, paiements en mémoire (`backend/src/storage/inMemoryDb.js`).
- Listings front de fallback (`frontend/src/data/mockListings.js`).

## 7. UI moderne et propre
- Design premium, responsive, transitions subtiles.
- Thème clair + sombre.
- Cartes immobilières avec images de qualité.

---

## Lancer le projet

### Frontend (Parcel)
```
cd frontend
npm install
npm run dev
```

### Backend
```
cd backend
npm install
npm run dev
```

---

## Installation robuste (npm / pnpm / yarn)

> Objectif : éviter les erreurs 403 liées au registry. Toutes les dépendances utilisées sont publiques et **non-scopées**.

### Option A — npm
```
npm cache clean --force
npm config set registry https://registry.npmjs.org/
cd frontend
npm install
cd ../backend
npm install
```

### Option B — pnpm
```
corepack enable
pnpm store prune
pnpm config set registry https://registry.npmjs.org/
cd frontend
pnpm install
cd ../backend
pnpm install
```

### Option C — yarn
```
corepack enable
yarn cache clean
npm config set registry https://registry.npmjs.org/
cd frontend
yarn install
cd ../backend
yarn install
```

---

## Configuration API (Frontend)
Par défaut, le frontend appelle `http://localhost:4000` quand il tourne en local.
Vous pouvez surcharger cette URL en injectant `window.__TRANO_API_URL__` avant le chargement de l'app.
