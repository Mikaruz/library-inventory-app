import { Login } from "@/auth/pages/Login";
import { DashboardRoutes } from "@/dashboard/routes/DashboardRoutes";
import { Home } from "@/Home";

import { Route, Routes } from "react-router-dom";
import { PrivateRouter } from "./PrivateRouter";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard/*"
          element={
            <PrivateRouter>
              <DashboardRoutes />
            </PrivateRouter>
          }
        />
      </Routes>
    </>
  );
};
