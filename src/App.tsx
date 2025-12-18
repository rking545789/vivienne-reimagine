import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

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

// ✅ 你的正式域名（如有变更只改这一行）
const SITE = "https://themodediary.com";

function CanonicalTag() {
  const location = useLocation();

  // 规范化 pathname：去掉末尾多余 /
  const pathname = (location.pathname || "/").replace(/\/+$/, "") || "/";

  // 规范化 search：一般 canonical 不需要保留跟踪参数；这里直接不带 search
  const canonical = `${SITE}${pathname}`;

  return (
    <Helmet>
      <link rel="canonical" href={canonical} />
    </Helmet>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          {/* ✅ 必须在 BrowserRouter 里面 */}
          <CanonicalTag />
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


export default App;
