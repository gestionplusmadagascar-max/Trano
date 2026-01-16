# Trano.com — Plateforme immobilière (V1)

## 1. Architecture globale
- **Frontend** : application React moderne (Vite + TypeScript) pour l'interface utilisateur.
- **Backend** : API REST (Express + TypeScript) structurée en couches : controllers → services → repositories.
- **Data layer** : stockage en mémoire (mock) aujourd'hui, **remplaçable** par PostgreSQL via les interfaces `Repository`.

## 2. Choix technos
- **React 18 + Vite + TypeScript** : rapidité, évolutivité, architecture front claire.
- **Express + TypeScript** : API REST légère, évolutive.
- **CSS moderne** : thèmes clair/sombre via variables CSS.
- **i18n** : structure multi-langue (MG, FR, EN) prête.

## 3. Structure des dossiers
```
frontend/
  src/
    components/   # UI réutilisable
    pages/        # Pages principales
    i18n/         # Dictionnaires & provider
    data/         # Données mockées
    services/     # Thème & services UI
backend/
  src/
    controllers/  # HTTP layer
    services/     # Logique métier
    repositories/ # Interfaces data
    storage/      # Implémentations in-memory
    models/       # Types métiers
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
- Listings, utilisateurs, paiements en mémoire (`backend/src/storage/inMemoryDb.ts`).
- Listings front dans `frontend/src/data/mockListings.ts`.

## 7. UI moderne et propre
- Design premium, responsive, transitions subtiles.
- Thème clair + sombre.
- Cartes immobilières avec images de qualité.

---

## Lancer le projet

### Frontend
```
cd frontend
npm install
npm run dev
```

### Backend
```
cd backend
npm install
npm run build
npm start
```
