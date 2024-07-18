import { Login } from "@/auth/pages/Login";
import { DashboardRoutes } from "@/dashboard/routes/DashboardRoutes";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<DashboardRoutes />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};
