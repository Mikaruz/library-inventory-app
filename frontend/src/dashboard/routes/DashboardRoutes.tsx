import { Toaster } from "@/components/ui/sonner";
import { Route, Routes, useLocation } from "react-router-dom";
import { Header } from "../layouts/Header";
import { SideBar } from "../layouts/SideBar";
import {
  AuthorsPage,
  BooksPage,
  CategoriesPage,
  Home,
  Loan,
  Reader,
} from "../pages";

export const DashboardRoutes = () => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col">
      <Toaster />
      <Header currentRoute={location.pathname} />
      <SideBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/loans" element={<Loan />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/authors" element={<AuthorsPage />} />
        <Route path="/readers" element={<Reader />} />
      </Routes>
    </div>
  );
};
