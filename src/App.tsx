import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Index from "./pages/Index";
import StartHere from "./pages/StartHere";
import Articles from "./pages/Articles";
import MensFashion from "./pages/MensFashion";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ArticleDetail from "./pages/ArticleDetail";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

/** ⭐ 改成你真实的正式域名（现在这个是对的） */
const SITE = "https://themodediary.com";

/**
 * ⭐ 绝对生效的 canonical 注入
 * - 不依赖第三方库
 * - Google / GSC 可识别
 */
function CanonicalInjector() {
  const location = useLocation();

  useEffect(() => {
    const path = (location.pathname || "/").replace(/\/+$/, "") || "/";
    const canonicalUrl = SITE + path;

    let link = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;

    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }

    link.setAttribute("href", canonicalUrl);

    // 🔍 调试用（你确认看到一次即可，以后可以删）
    console.log("CANONICAL SET:", canonicalUrl);
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <CanonicalInjector />
          <ScrollToTop />

          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/start-here" element={<StartHere />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/mens-fashion" element={<MensFashion />} />
            <Route path="/article/:slug" element={<ArticleDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
