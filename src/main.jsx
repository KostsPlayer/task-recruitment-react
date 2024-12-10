import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersManagement from "@/pages/Users/Users";
import Dashboard from "@/pages/Dashboard/Dashboard";
import Performance from "@/pages/Performance/Performance";
import Schedule from "@/pages/Schedule/Schedule";
import ControllSettings from "@/pages/Settings/Settings";
import Error404 from "@/pages/Error404/Error404";
import { SearchProvider } from "@/helpers/SearchContext";
import "@/main.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <SearchProvider>
        <Routes>
          <Route
            path="/task-recruitment-react/"
            element={<UsersManagement />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/settings" element={<ControllSettings />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </SearchProvider>
    </BrowserRouter>
  </StrictMode>
);
