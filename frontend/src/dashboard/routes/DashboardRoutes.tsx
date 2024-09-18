import { Toaster } from "@/components/ui/sonner";
import { Route, Routes, useLocation } from "react-router-dom";
import { Header } from "../layouts/Header";
import { SideBar } from "../layouts/SideBar";
import {
  AuthorsPage,
  Book,
  CategoriesPage,
  Home,
  Loan,
  Reader,
} from "../pages";

export const DashboardRoutes = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen">
      <Toaster />
      <Header currentRoute={location.pathname} />
      <SideBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/loans" element={<Loan />} />
        <Route path="/books" element={<Book />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/authors" element={<AuthorsPage />} />
        <Route path="/readers" element={<Reader />} />
      </Routes>
    </div>
  );
};
