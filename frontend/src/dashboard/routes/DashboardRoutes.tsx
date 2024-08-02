import { Route, Routes, useLocation } from "react-router-dom";
import { SideBar } from "../layouts/SideBar";
import { Header } from "../layouts/Header";
import { Book, CategoryPage, Home, Loan, Reader } from "../pages";
import { CreateCategory } from "../pages/CreateCategory";
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
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/categories/create" element={<CreateCategory />} />
        <Route path="/readers" element={<Reader />} />
      </Routes>
    </div>
  );
};
