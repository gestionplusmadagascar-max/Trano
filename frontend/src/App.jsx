import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./services/theme";
import { FavoritesProvider } from "./services/favorites";
import { MainLayout } from "./layouts/MainLayout";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import { ListingDetail } from "./pages/ListingDetail";
import { Auth } from "./pages/Auth";
import { Dashboard } from "./pages/Dashboard";

export function App() {
  return (
    <ThemeProvider>
      <FavoritesProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/listing/:id" element={<ListingDetail />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </FavoritesProvider>
    </ThemeProvider>
  );
}
