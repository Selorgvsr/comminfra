import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import BuyPage from "./pages/BuyPage";
import SellPage from "./pages/SellPage";
import LandAssetsPage from "./pages/LandAssetsPage";
import BuildAssetPage from "./pages/BuildAssetPage";
import RentLeaseAssetPage from "./pages/RentLeaseAssetPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/buy" element={<BuyPage />} />
            <Route path="/sell" element={<SellPage />} />
            <Route path="/land-assets" element={<LandAssetsPage />} />
            <Route path="/build-asset" element={<BuildAssetPage />} />
            <Route path="/rent-lease-asset" element={<RentLeaseAssetPage />} />
            <Route path="/projects" element={<div className="container py-20"><h1 className="text-4xl font-bold text-center">Projects Page - Coming Soon</h1></div>} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<div className="container py-20"><h1 className="text-4xl font-bold text-center">About Us Page - Coming Soon</h1></div>} />
            <Route path="/sustainability" element={<div className="container py-20"><h1 className="text-4xl font-bold text-center">Sustainability Page - Coming Soon</h1></div>} />
            <Route path="/business-model" element={<div className="container py-20"><h1 className="text-4xl font-bold text-center">Business Model Page - Coming Soon</h1></div>} />
            <Route path="/manage-asset" element={<div className="container py-20"><h1 className="text-4xl font-bold text-center">Manage Asset Page - Coming Soon</h1></div>} />
            <Route path="/reit-invest" element={<div className="container py-20"><h1 className="text-4xl font-bold text-center">REIT & Investment Page - Coming Soon</h1></div>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
