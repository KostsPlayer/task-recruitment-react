import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./main.css";
import UsersManagement from "./pages/Users/Users";
import Dashboard from "./pages/Dashboard/Dashboard";
import { SearchProvider } from "./helpers/SearchContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <SearchProvider>
        <Routes>
          <Route path="/task-recruitment-react/" element={<UsersManagement />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </SearchProvider>
    </BrowserRouter>
  </StrictMode>
);
