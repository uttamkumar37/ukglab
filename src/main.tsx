import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SeoJsonLd } from "./components/SeoJsonLd";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { AppLayout } from "./layouts/AppLayout";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { LearnPage } from "./pages/LearnPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { NotePage } from "./pages/NotePage";
import { NotesPage } from "./pages/NotesPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
import { ResumePage } from "./pages/ResumePage";
import { ExperiencePage } from "./pages/ExperiencePage";
import { LabPage } from "./pages/LabPage";
import { StackPage } from "./pages/StackPage";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <SeoJsonLd />
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="projects/:slug" element={<ProjectDetailPage />} />
            <Route path="experience" element={<ExperiencePage />} />
            <Route path="stack" element={<StackPage />} />
            <Route path="lab" element={<LabPage />} />
            <Route path="resume" element={<ResumePage />} />
            <Route path="learn" element={<LearnPage />} />
            <Route path="notes" element={<NotesPage />} />
            <Route path="notes/:category/:slug" element={<NotePage />} />
            <Route path="writing" element={<NotesPage routeBase="/writing" />} />
            <Route path="writing/:category/:slug" element={<NotePage routeBase="/writing" />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
);
