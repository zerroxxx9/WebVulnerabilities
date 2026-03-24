import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FileUploader from "./pages/fileExtensions.tsx";
import ReDoS from "./pages/redos.tsx";
import {BrowserRouter, Route, Routes} from "react-router";
import Layout from "./pages/Layout.tsx";
import Dashboard from "./pages/dashboard.tsx";
import RegexInjection from "./pages/regexInjection.tsx";
import XssFileUploader from "./pages/XSiteScripting.tsx";
import Maintenance from './pages/404.tsx';
import NotFound from './pages/aislop.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main>
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/redos" element={<ReDoS />} />
                    <Route path="/magic" element={<FileUploader />} />
                    <Route path="/regex" element={<RegexInjection />} />
                    <Route path="/xss" element={<XssFileUploader />} />
                    <Route path="/404" element={<Maintenance />} />
                    <Route path="/ai404" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </main>
  </StrictMode>,
)
