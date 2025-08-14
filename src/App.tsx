import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { MobileNav } from "@/components/layout/MobileNav";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Upload from "./pages/Upload";
import Order from "./pages/Order";
import OrderSuccess from "./pages/OrderSuccess";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import DashboardProjects from "./pages/DashboardProjects";
import DashboardProjectsVerify from "./pages/DashboardProjectsVerify";
import DashboardProjectsNew from "./pages/DashboardProjectsNew";
import DashboardProjectsEdit from "./pages/DashboardProjectsEdit";
import DashboardOrders from "./pages/DashboardOrders";
import DashboardOrdersNew from "./pages/DashboardOrdersNew";
import DashboardOrdersEdit from "./pages/DashboardOrdersEdit";
import DashboardOrdersComplete from "./pages/DashboardOrdersComplete";
import DashboardMessages from "./pages/DashboardMessages";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/order" element={<Order />} />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/projects" element={<DashboardProjects />} />
            <Route path="/dashboard/projects/verify" element={<DashboardProjectsVerify />} />
            <Route path="/dashboard/projects/new" element={<DashboardProjectsNew />} />
            <Route path="/dashboard/projects/edit/:id" element={<DashboardProjectsEdit />} />
            <Route path="/dashboard/orders" element={<DashboardOrders />} />
            <Route path="/dashboard/orders/new" element={<DashboardOrdersNew />} />
            <Route path="/dashboard/orders/edit/:id" element={<DashboardOrdersEdit />} />
            <Route path="/dashboard/orders/complete" element={<DashboardOrdersComplete />} />
            <Route path="/dashboard/messages" element={<DashboardMessages />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <MobileNav />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
