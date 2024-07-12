import { Route, Routes } from "react-router-dom";
import { SideBar } from "../layouts/SideBar";
import { Header } from "../layouts/Header";
import { Book, Category, Home, Loan, Reader } from "../pages";

export const DashboardRoutes = () => {
  return (
    <div className="min-h-screen">
      {/*    <Header /> */}
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loans" element={<Loan />} />
        <Route path="/books" element={<Book />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/readers" element={<Reader />} />
      </Routes>
    </div>
  );
};
