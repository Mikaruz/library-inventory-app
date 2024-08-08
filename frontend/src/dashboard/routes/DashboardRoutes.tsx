import { Route, Routes, useLocation } from "react-router-dom";
import { SideBar } from "../layouts/SideBar";
import { Header } from "../layouts/Header";
import {
  Book,
  CategoriesPage,
  CategoryPage,
  CreateCategoryPage,
  Home,
  Loan,
  Reader,
} from "../pages";
import { Toaster } from "@/components/ui/sonner";
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
        <Route path="/categories/create" element={<CreateCategoryPage />} />
        <Route path="/categories/:id" element={<CategoryPage />} />
        <Route path="/readers" element={<Reader />} />
      </Routes>
    </div>
  );
};
