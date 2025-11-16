import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FileUploader from "./pages/fileExtensions.tsx";
import ReDoS from "./pages/redos.tsx";
import {BrowserRouter, Route, Routes} from "react-router";
import Layout from "./pages/Layout.tsx";
import Dashboard from "./pages/dashboard.tsx";
import Cookies from "./pages/cookies.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main>
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/redos" element={<ReDoS />} />
                    <Route path="/magic" element={<FileUploader />} />
                    <Route path="/cookies" element={<Cookies />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </main>
  </StrictMode>,
)
