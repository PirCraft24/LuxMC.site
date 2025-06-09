
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Servers from "./pages/Servers";
import Discord from "./pages/Discord";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Support from "./pages/Support";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Tickets from "./pages/Tickets";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/servers" element={<Servers />} />
                <Route path="/discord" element={<Discord />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/support" element={<Support />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/tickets" element={<Tickets />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
