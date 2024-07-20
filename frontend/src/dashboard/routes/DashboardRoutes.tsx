import { Route, Routes, useLocation } from "react-router-dom";
import { SideBar } from "../layouts/SideBar";
import { Header } from "../layouts/Header";
import { Book, Category, Home, Loan, Reader } from "../pages";
import { CreateCategory } from "../pages/CreateCategory";
import { useAuth } from "@/auth/hooks/useAuth";

export const DashboardRoutes = () => {
  const location = useLocation();
  const { user } = useAuth();

  return (
    <div className="min-h-screen">
      {!!user && (
        <Header
          name={user.name}
          lastName={user.lastName}
          currentRoute={location.pathname}
        />
      )}
      <SideBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/loans" element={<Loan />} />
        <Route path="/books" element={<Book />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/categories/create" element={<CreateCategory />} />
        <Route path="/readers" element={<Reader />} />
      </Routes>
    </div>
  );
};
