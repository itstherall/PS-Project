import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./screens/Home/Home.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { Login } from "./screens/Login/Login.tsx";
import { Search } from "./screens/Search/Search.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
