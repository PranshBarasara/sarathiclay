"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Lock, 
  Search, 
  Filter, 
  Calendar, 
  Mail, 
  Phone, 
  Sparkles, 
  RefreshCw, 
  FileText, 
  ChevronRight, 
  X, 
  LogOut, 
  Database,
  HelpCircle
} from "lucide-react";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";

interface Inquiry {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  product: string;
  message: string;
  created_at: string;
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passkey, setPasskey] = useState("");
  const [passkeyError, setPasskeyError] = useState("");
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  
  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState("");
  const [industryFilter, setIndustryFilter] = useState("All");
  const [productFilter, setProductFilter] = useState("All");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Authentication check on load
  useEffect(() => {
    const savedAuth = sessionStorage.getItem("admin_authenticated");
    if (savedAuth === "true") {
      setIsAuthenticated(true);
      fetchInquiries();
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passkey === "sarathi2026") {
      setIsAuthenticated(true);
      setPasskeyError("");
      sessionStorage.setItem("admin_authenticated", "true");
      fetchInquiries();
    } else {
      setPasskeyError("Access Denied: Invalid administrative passkey.");
      // Simple vibration/shake trigger on input
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("admin_authenticated");
    setPasskey("");
  };

  const fetchInquiries = async () => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const response = await fetch("/api/admin/inquiries", {
        headers: {
          "x-admin-passkey": "sarathi2026",
        },
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to load database inquiries.");
      }

      setInquiries(data.inquiries || []);
    } catch (err) {
      console.error(err);
      setErrorMessage(err instanceof Error ? err.message : "Database connection failure.");
    } finally {
      setIsLoading(false);
    }
  };

  // Filtered inquiries
  const filteredInquiries = useMemo(() => {
    return inquiries.filter((inquiry) => {
      const matchesSearch = 
        inquiry.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        inquiry.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        inquiry.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        inquiry.message.toLowerCase().includes(searchQuery.toLowerCase());
        
      const matchesIndustry = industryFilter === "All" || inquiry.industry === industryFilter;
      const matchesProduct = productFilter === "All" || inquiry.product === productFilter;

      return matchesSearch && matchesIndustry && matchesProduct;
    });
  }, [inquiries, searchQuery, industryFilter, productFilter]);

  // Analytics/Stats computation
  const stats = useMemo(() => {
    const total = inquiries.length;
    
    // Count industry frequencies
    const industries: Record<string, number> = {};
    const products: Record<string, number> = {};
    
    inquiries.forEach((inq) => {
      industries[inq.industry] = (industries[inq.industry] || 0) + 1;
      products[inq.product] = (products[inq.product] || 0) + 1;
    });

    let topIndustry = "None";
    let maxIndCount = 0;
    Object.entries(industries).forEach(([ind, count]) => {
      if (count > maxIndCount) {
        maxIndCount = count;
        topIndustry = ind;
      }
    });

    let topProduct = "None";
    let maxProdCount = 0;
    Object.entries(products).forEach(([prod, count]) => {
      if (count > maxProdCount) {
        maxProdCount = count;
        topProduct = prod;
      }
    });

    // Count today's inquiries
    const today = new Date().toDateString();
    const todayCount = inquiries.filter(
      (inq) => new Date(inq.created_at).toDateString() === today
    ).length;

    return {
      total,
      topIndustry,
      topProduct,
      todayCount
    };
  }, [inquiries]);

  // Copy helper
  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const industriesList = ["All", "Ceramics & Tableware", "Vitrified Tiles", "Sanitaryware", "Paints & Coatings", "Plastics & Polymers", "Refractories & Glass"];
  const productsList = ["All", "China Clay", "Ball Clay", "Kaolin Clay", "Calcined Clay", "Washed Clay", "Ceramic Grade Clay", "Tile Grade Clay", "Custom Mineral Solutions"];

  return (
    <div className="relative min-h-screen text-white bg-[#070707] pt-28 pb-16 font-sans overflow-hidden">
      {/* Background glowing gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 blur-[150px] rounded-full pointer-events-none" />

      {!isAuthenticated ? (
        // --- PASSKEY SECURITY GATE ---
        <div className="max-w-md mx-auto px-6 mt-16 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex flex-col items-center justify-center mb-8 gap-3">
              <div className="p-4 bg-gold/10 border border-gold/20 rounded-full text-gold animate-pulse">
                <Database size={32} />
              </div>
              <span className="text-[10px] tracking-[0.4em] uppercase text-gold font-bold">Admin Portal</span>
              <h1 className="font-serif text-3xl font-light text-center">Mineral Sales Desk</h1>
            </div>

            <Card className="glassmorphic">
              <form onSubmit={handleLogin} className="flex flex-col gap-6 p-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-serif text-lg font-light text-white flex items-center gap-2">
                    <Lock size={16} className="text-gold" /> Secure Database Authentication
                  </h3>
                  <p className="text-[11px] text-mutedText leading-relaxed">
                    Provide the administrative passkey allocated to your sales desk node to retrieve client inquiries.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="passkey" className="text-[10px] uppercase tracking-wider text-white">Enter Administrator Passkey</label>
                  <input
                    id="passkey"
                    type="password"
                    required
                    value={passkey}
                    onChange={(e) => setPasskey(e.target.value)}
                    className="bg-black/60 border border-white/10 focus:border-gold rounded px-4 py-3 outline-none text-white tracking-widest text-center text-sm transition-colors"
                    placeholder="••••••••"
                  />
                </div>

                {passkeyError && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-red-950/40 border border-red-500/30 text-red-300 px-3 py-2 rounded text-[11px]"
                  >
                    {passkeyError}
                  </motion.div>
                )}

                <button
                  type="submit"
                  className="bg-gold-gradient text-black font-bold uppercase py-3.5 rounded-full text-xs tracking-widest hover:shadow-[0_0_15px_rgba(200,169,107,0.3)] transition-all flex items-center justify-center gap-2"
                >
                  <span>Authenticate Node</span>
                  <ChevronRight size={14} />
                </button>
              </form>
            </Card>
          </motion.div>
        </div>
      ) : (
        // --- REAL ADMIN DASHBOARD ---
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-white/5 pb-8">
            <div>
              <span className="text-[10px] tracking-[0.4em] uppercase text-gold font-bold">Node: Active Database</span>
              <h1 className="font-serif text-3xl sm:text-5xl font-light tracking-wide mt-2">
                Inquiry <span className="text-reveal-gold font-bold">Control Console</span>
              </h1>
            </div>
            
            <div className="flex items-center gap-4">
              <button
                onClick={fetchInquiries}
                disabled={isLoading}
                className="p-3 bg-[#111111]/80 hover:bg-[#222222]/80 border border-white/10 rounded-full text-gold transition-all hover:scale-105 disabled:opacity-50 flex items-center gap-2 text-xs uppercase tracking-wider px-4"
              >
                <RefreshCw size={14} className={isLoading ? "animate-spin" : ""} />
                <span>{isLoading ? "Syncing..." : "Sync Database"}</span>
              </button>

              <button
                onClick={handleLogout}
                className="p-3 bg-red-950/20 hover:bg-red-900/30 border border-red-500/20 rounded-full text-red-400 transition-all hover:scale-105 flex items-center gap-2 text-xs uppercase tracking-wider px-4"
              >
                <LogOut size={14} />
                <span>Disconnect</span>
              </button>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
              <div className="p-6 bg-[#111111]/40 border border-white/5 rounded-2xl glassmorphic-hover flex flex-col gap-2">
                <span className="text-[9px] uppercase tracking-widest text-mutedText">Total Inquiries</span>
                <span className="font-serif text-3xl font-bold text-white flex items-baseline gap-2">
                  {stats.total}
                  <span className="text-xs font-sans font-light text-gold">records</span>
                </span>
                <div className="w-full bg-white/5 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-gold h-full rounded-full" style={{ width: "100%" }} />
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <div className="p-6 bg-[#111111]/40 border border-white/5 rounded-2xl glassmorphic-hover flex flex-col gap-2">
                <span className="text-[9px] uppercase tracking-widest text-mutedText">New Today</span>
                <span className="font-serif text-3xl font-bold text-gold flex items-baseline gap-2">
                  {stats.todayCount}
                  <span className="text-xs font-sans font-light text-mutedText">pending review</span>
                </span>
                <div className="w-full bg-white/5 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-gold h-full rounded-full animate-pulse" style={{ width: stats.total > 0 ? `${(stats.todayCount / stats.total) * 100}%` : "0%" }} />
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
              <div className="p-6 bg-[#111111]/40 border border-white/5 rounded-2xl glassmorphic-hover flex flex-col gap-2">
                <span className="text-[9px] uppercase tracking-widest text-mutedText">Dominant Industry</span>
                <span className="font-serif text-lg font-bold text-white truncate" title={stats.topIndustry}>
                  {stats.topIndustry}
                </span>
                <span className="text-[10px] text-gold uppercase tracking-wider font-mono">Top market sector</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <div className="p-6 bg-[#111111]/40 border border-white/5 rounded-2xl glassmorphic-hover flex flex-col gap-2">
                <span className="text-[9px] uppercase tracking-widest text-mutedText">Top Requested Material</span>
                <span className="font-serif text-lg font-bold text-white truncate" title={stats.topProduct}>
                  {stats.topProduct}
                </span>
                <span className="text-[10px] text-gold uppercase tracking-wider font-mono">High volume request</span>
              </div>
            </motion.div>
          </div>

          {/* Filtering Workspace */}
          <div className="p-6 bg-[#111111]/20 border border-white/5 rounded-2xl mb-8 flex flex-col md:flex-row gap-6 items-center">
            {/* Search */}
            <div className="relative w-full md:flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gold" />
              <input
                type="text"
                placeholder="Search inquiries by company name, buyer, email content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-xl pl-12 pr-4 py-3 outline-none text-xs text-white focus:border-gold transition-colors"
              />
            </div>

            {/* Filter Industry */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <Filter className="h-3.5 w-3.5 text-gold shrink-0" />
              <select
                value={industryFilter}
                onChange={(e) => setIndustryFilter(e.target.value)}
                className="bg-black border border-white/10 rounded-xl px-4 py-3 outline-none text-xs text-white focus:border-gold transition-colors w-full md:w-48"
              >
                <option value="All">All Sectors</option>
                {industriesList.slice(1).map((ind) => (
                  <option key={ind} value={ind}>{ind}</option>
                ))}
              </select>
            </div>

            {/* Filter Product */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <Sparkles className="h-3.5 w-3.5 text-gold shrink-0" />
              <select
                value={productFilter}
                onChange={(e) => setProductFilter(e.target.value)}
                className="bg-black border border-white/10 rounded-xl px-4 py-3 outline-none text-xs text-white focus:border-gold transition-colors w-full md:w-48"
              >
                <option value="All">All Materials</option>
                {productsList.slice(1).map((prod) => (
                  <option key={prod} value={prod}>{prod}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Database Content Area */}
          <div className="relative">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-24 gap-4">
                <RefreshCw className="h-8 w-8 text-gold animate-spin" />
                <span className="text-xs text-mutedText font-mono uppercase tracking-widest">Querying Cloud PostgreSQL Node...</span>
              </div>
            ) : errorMessage ? (
              <div className="border border-red-500/20 bg-red-950/20 text-red-300 rounded-2xl p-8 text-center flex flex-col gap-3 items-center max-w-lg mx-auto">
                <Database size={32} className="text-red-400" />
                <h3 className="font-serif text-lg">Cloud Database Sync Failed</h3>
                <p className="text-xs text-mutedText leading-relaxed">
                  {errorMessage}. Please verify your `.env.local` Supabase settings and check if the `inquiries` table exists in your dashboard.
                </p>
                <Button variant="outline" className="border-red-500/30 text-red-300 hover:bg-red-500/10 mt-2" onClick={fetchInquiries}>
                  Retry Database Sync
                </Button>
              </div>
            ) : filteredInquiries.length === 0 ? (
              <div className="border border-white/5 bg-[#111111]/10 rounded-2xl py-20 text-center flex flex-col gap-3 items-center max-w-md mx-auto">
                <HelpCircle size={32} className="text-gold/40" />
                <h3 className="font-serif text-lg font-light text-white">No Matching Inquiries</h3>
                <p className="text-xs text-mutedText leading-relaxed px-6">
                  {inquiries.length === 0 
                    ? "The database table is currently empty. Open the public contact page and submit a specification inquiry to populate this ledger."
                    : "No records match the current search keyword or active sector filters."}
                </p>
                {inquiries.length > 0 && (
                  <button 
                    onClick={() => { setSearchQuery(""); setIndustryFilter("All"); setProductFilter("All"); }}
                    className="text-xs text-gold underline tracking-wider uppercase font-bold mt-2"
                  >
                    Reset Filters
                  </button>
                )}
              </div>
            ) : (
              // --- INQUIRY LEDGER TABLE/LIST ---
              <div className="flex flex-col gap-4">
                <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-3 border-b border-white/5 text-[9px] uppercase tracking-widest font-mono text-mutedText">
                  <div className="col-span-3">Company & Representative</div>
                  <div className="col-span-3">Industry Sector</div>
                  <div className="col-span-3">Material of Interest</div>
                  <div className="col-span-2">Received Date</div>
                  <div className="col-span-1 text-right">Action</div>
                </div>

                <div className="flex flex-col gap-3">
                  {filteredInquiries.map((inquiry, idx) => (
                    <motion.div
                      key={inquiry.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.02 }}
                    >
                      <div className="p-5 bg-[#111111]/30 border border-white/5 rounded-xl hover:border-gold/30 transition-all duration-300 flex flex-col lg:grid lg:grid-cols-12 lg:items-center gap-4">
                        
                        {/* Company & Rep info */}
                        <div className="col-span-3 flex flex-col gap-1">
                          <span className="font-bold text-white text-sm tracking-wide">{inquiry.company}</span>
                          <span className="text-xs text-gold font-light">{inquiry.name}</span>
                          <span className="text-[10px] text-mutedText font-mono truncate">{inquiry.email}</span>
                        </div>

                        {/* Industry Sector */}
                        <div className="col-span-3">
                          <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-white">
                            {inquiry.industry}
                          </span>
                        </div>

                        {/* Product Grade */}
                        <div className="col-span-3">
                          <span className="px-3 py-1 bg-gold/5 border border-gold/15 rounded-full text-[10px] text-gold font-mono">
                            {inquiry.product}
                          </span>
                        </div>

                        {/* Date */}
                        <div className="col-span-2 text-xs text-mutedText flex items-center gap-2">
                          <Calendar size={12} className="text-gold" />
                          <span>{new Date(inquiry.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                        </div>

                        {/* Action buttons */}
                        <div className="col-span-1 text-right flex justify-end">
                          <button
                            onClick={() => setSelectedInquiry(inquiry)}
                            className="bg-gold/10 hover:bg-gold/20 text-gold border border-gold/20 hover:border-gold/40 p-2.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 w-full lg:w-auto justify-center"
                          >
                            <FileText size={13} />
                            <span>Analyze</span>
                          </button>
                        </div>

                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* --- INQUIRY DETAILS DRAWER (MODAL) --- */}
          <AnimatePresence>
            {selectedInquiry && (
              <div className="fixed inset-0 z-50 flex items-center justify-end">
                {/* Backdrop overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedInquiry(null)}
                  className="absolute inset-0 bg-black backdrop-blur-sm"
                />

                {/* Slider Drawer */}
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 30, stiffness: 200 }}
                  className="relative w-full max-w-xl h-full bg-[#0c0c0c] border-l border-white/10 p-8 md:p-12 overflow-y-auto flex flex-col gap-8 shadow-[-10px_0_30px_rgba(0,0,0,0.8)] z-10"
                >
                  {/* Close header */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-6">
                    <div className="flex items-center gap-2">
                      <FileText size={18} className="text-gold" />
                      <span className="text-[10px] font-mono tracking-widest text-gold uppercase">Specification Analysis</span>
                    </div>
                    <button
                      onClick={() => setSelectedInquiry(null)}
                      className="p-2 hover:bg-white/5 rounded-full text-mutedText hover:text-white transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  {/* Body Section */}
                  <div className="flex flex-col gap-8">
                    
                    {/* Header: Company & Subject */}
                    <div className="flex flex-col gap-2">
                      <span className="text-[10px] uppercase tracking-wider text-mutedText font-mono">Corporate Account</span>
                      <h2 className="font-serif text-2xl sm:text-3xl text-white font-light leading-tight">{selectedInquiry.company}</h2>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px]">
                          {selectedInquiry.industry}
                        </span>
                        <span className="px-3 py-1 bg-gold/5 border border-gold/15 rounded-full text-[10px] text-gold font-mono">
                          {selectedInquiry.product}
                        </span>
                      </div>
                    </div>

                    {/* Metadata contact grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 bg-[#111111]/50 border border-white/5 rounded-xl text-xs">
                      
                      <div className="flex flex-col gap-2">
                        <span className="text-[9px] uppercase tracking-widest text-mutedText font-mono">Mineral Advisor Representative</span>
                        <div className="flex items-center gap-2 text-white font-medium">
                          <span>{selectedInquiry.name}</span>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <span className="text-[9px] uppercase tracking-widest text-mutedText font-mono">Lead Timestamp</span>
                        <div className="flex items-center gap-2 text-gold font-mono">
                          <span>{new Date(selectedInquiry.created_at).toLocaleString()}</span>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 pt-2 border-t border-white/5 md:col-span-2">
                        <span className="text-[9px] uppercase tracking-widest text-mutedText font-mono">Corporate Email</span>
                        <div className="flex items-center justify-between gap-4">
                          <span className="text-white truncate font-mono">{selectedInquiry.email}</span>
                          <button
                            onClick={() => copyToClipboard(selectedInquiry.email, "email")}
                            className="text-[10px] text-gold uppercase hover:underline shrink-0"
                          >
                            {copiedId === "email" ? "Copied!" : "Copy Address"}
                          </button>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 pt-2 border-t border-white/5 md:col-span-2">
                        <span className="text-[9px] uppercase tracking-widest text-mutedText font-mono">Contact Desk Line</span>
                        <div className="flex items-center justify-between gap-4">
                          <span className="text-white truncate font-mono">{selectedInquiry.phone}</span>
                          <button
                            onClick={() => copyToClipboard(selectedInquiry.phone, "phone")}
                            className="text-[10px] text-gold uppercase hover:underline shrink-0"
                          >
                            {copiedId === "phone" ? "Copied!" : "Copy Number"}
                          </button>
                        </div>
                      </div>

                    </div>

                    {/* Specification / Message Area */}
                    <div className="flex flex-col gap-3">
                      <span className="text-[10px] uppercase tracking-wider text-mutedText font-mono">Target Parameter Parameters & Details</span>
                      <div className="bg-black/60 border border-white/5 rounded-xl p-6 text-xs leading-relaxed text-slate-300 font-sans whitespace-pre-wrap min-h-[150px]">
                        {selectedInquiry.message}
                      </div>
                    </div>

                    {/* Quick dispatch actions */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                      <a
                        href={`mailto:${selectedInquiry.email}?subject=Sarathi Clay Inquiry Review - ${selectedInquiry.company}`}
                        className="flex-1 bg-gold-gradient text-black font-bold uppercase text-xs py-4 rounded-full tracking-widest text-center hover:shadow-[0_0_15px_rgba(200,169,107,0.3)] transition-all flex items-center justify-center gap-2"
                      >
                        <Mail size={13} />
                        <span>Dispatch Corporate Email</span>
                      </a>
                      <a
                        href={`tel:${selectedInquiry.phone}`}
                        className="flex-1 border border-white/10 hover:border-gold/30 hover:bg-white/5 text-white font-bold uppercase text-xs py-4 rounded-full tracking-widest text-center transition-all flex items-center justify-center gap-2"
                      >
                        <Phone size={13} />
                        <span>Dial Representative Desk</span>
                      </a>
                    </div>

                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>

        </div>
      )}
    </div>
  );
}
