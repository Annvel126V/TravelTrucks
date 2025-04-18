import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import CamperDetailsPage from "./pages/CamperDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import { Suspense } from "react";
import ScrollUp from "./components/ScrollUp";

function App() {
  return (
    <>
      <ScrollUp />
      <Suspense fallback={<div>Loading..</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CamperDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
