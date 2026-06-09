import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  ArrowRight, 
  PlayCircle, 
  PhoneCall, 
  TrendingUp,
  Home, 
  ThermometerSnowflake, 
  Wrench, 
  Zap, 
  Leaf, 
  Hammer,
  XCircle, 
  CheckCircle2,
  Filter, 
  Bot, 
  Search,
  PenTool, 
  Rocket, 
  LineChart,
  CalendarCheck, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube,
  PhoneOff,
  MessageSquare,
  Star,
  Bell,
  FileText,
  Mail,
  DollarSign,
  Users,
  ArrowDown,
  Clock
} from "lucide-react";

const Index = () => {
  const [traffic, setTraffic] = useState(1000);
  const [convRate, setConvRate] = useState(5);
  const [closeRate, setCloseRate] = useState(30);
  const [jobValue, setJobValue] = useState(2500);

  const currentLeads = traffic * (convRate / 100);
  const currentJobs = currentLeads * (closeRate / 100);
  const currentRevenue = currentJobs * jobValue;

  const projectedTraffic = Math.round(traffic * 1.5);
  const projectedConvRate = convRate + 3;
  const projectedCloseRate = closeRate + 15;
  
  const projectedLeads = projectedTraffic * (projectedConvRate / 100);
  const projectedJobs = projectedLeads * (projectedCloseRate / 100);
  const projectedRevenue = projectedJobs * jobValue;

  const revenueIncrease = projectedRevenue - currentRevenue;

  return (
    <div className="min-h-screen font-sans selection:bg-primary/20 bg-white">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-[#022423]/95 backdrop-blur-sm border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center lg:justify-between">
            <div className="flex items-center gap-1 z-50">
              <img 
                alt="Agencero" 
                className="h-10 sm:h-12 md:h-14 w-auto object-contain" 
                src="https://agencero-landing-page-809748336430.us-east1.run.app/logo.png" 
              />
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#services" className="text-sm font-medium text-white hover:text-primary transition-colors">Services</a>
              <a href="#process" className="text-sm font-medium text-white hover:text-primary transition-colors">Process</a>
              <a href="#about" className="text-sm font-medium text-white hover:text-primary transition-colors">About</a>
              <a href="#faq" className="text-sm font-medium text-white hover:text-primary transition-colors">FAQ</a>
            </div>
            <div className="hidden lg:flex items-center">
              <Button asChild className="bg-primary hover:bg-primary/90 text-white font-semibold h-10 px-6">
                <a href="https://api.leadconnectorhq.com/widget/booking/6QAjBWYLlxv9QmP76Rws" target="_blank" rel="noopener noreferrer">
                  Book a Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#022423]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
          <div 
            className="absolute inset-0 z-0 pointer-events-none mix-blend-screen opacity-40" 
            style={{ 
              backgroundImage: 'url("https://agencero-landing-page-809748336430.us-east1.run.app/real-topo.svg")', 
              backgroundSize: '400px', 
            }}
          ></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-sm font-bold mb-8 tracking-wide uppercase shadow-lg backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              The #1 Growth System for Home Services
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-[5rem] font-extrabold text-white leading-[1.1] tracking-tight mb-8 max-w-5xl mx-auto drop-shadow-2xl">
              More Calls. More Jobs.<br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-primary to-orange-400"> Predictable Revenue.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed font-medium max-w-2xl mx-auto">
              We build high-converting sales funnels, automated text-back systems, and local SEO engines that turn your website into a 24/7 sales rep.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white h-14 px-8 text-lg font-bold shadow-[0_0_30px_rgba(2ea44f,0.3)] transition-all hover:scale-105">
                <a href="https://api.leadconnectorhq.com/widget/booking/6QAjBWYLlxv9QmP76Rws" target="_blank" rel="noopener noreferrer">
                  Book a Free Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 hover:text-white h-14 px-8 text-lg font-bold bg-white/5 backdrop-blur-sm transition-all hover:scale-105">
                <PlayCircle className="mr-2 w-5 h-5" /> See How It Works
              </Button>
            </div>


          </div>
        </section>

        {/* We Work With */}
        <section className="py-12 border-b border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center mb-8">
              <div className="h-px bg-slate-200 flex-1 max-w-[100px]"></div>
              <span className="px-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">We Work With</span>
              <div className="h-px bg-slate-200 flex-1 max-w-[100px]"></div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-12 gap-y-6 sm:gap-y-8">
              <div className="flex items-center gap-2 text-slate-700 opacity-80 hover:opacity-100 transition-opacity">
                <Home className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
                <span className="font-semibold text-base sm:text-lg">Roofers</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 opacity-80 hover:opacity-100 transition-opacity">
                <ThermometerSnowflake className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
                <span className="font-semibold text-base sm:text-lg">HVAC Companies</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 opacity-80 hover:opacity-100 transition-opacity">
                <Wrench className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
                <span className="font-semibold text-base sm:text-lg">Plumbers</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 opacity-80 hover:opacity-100 transition-opacity">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
                <span className="font-semibold text-base sm:text-lg">Electricians</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 opacity-80 hover:opacity-100 transition-opacity">
                <Leaf className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
                <span className="font-semibold text-base sm:text-lg">Landscapers</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 opacity-80 hover:opacity-100 transition-opacity">
                <Hammer className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
                <span className="font-semibold text-base sm:text-lg">Remodelers</span>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <p className="text-sm font-bold uppercase tracking-wider text-red-500 mb-3">The Problem</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Stop losing jobs to your <span className="text-slate-400 line-through decoration-red-500 decoration-4">competitors</span>.
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
                Having a "pretty" website isn't enough anymore. If your online presence isn't actively capturing leads, you're leaving money on the table.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-0 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-200">
              {/* Left: The Old Way */}
              <div className="bg-slate-50 p-8 sm:p-12 lg:p-16">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                    <XCircle className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">The Old Way</h3>
                </div>
                <ul className="space-y-8">
                  <li className="flex items-start gap-4">
                    <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                    <span className="text-slate-600 font-medium text-lg">A basic website that acts like a digital brochure, not a lead generator.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                    <span className="text-slate-600 font-medium text-lg">Missed calls turn into lost revenue because there's no immediate follow-up.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                    <span className="text-slate-600 font-medium text-lg">Invisible on Google when local customers search for your services.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                    <span className="text-slate-600 font-medium text-lg">Relying on expensive, low-quality shared leads from third-party sites.</span>
                  </li>
                </ul>
              </div>

              {/* Right: The Agencero Way */}
              <div className="bg-[#022423] p-8 sm:p-12 lg:p-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px]"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px]"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 border border-emerald-500/30">
                      <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">The Agencero Way</h3>
                  </div>
                  <ul className="space-y-8">
                    <li className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-slate-200 font-medium text-lg">High-converting sales funnels designed specifically to book jobs.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-slate-200 font-medium text-lg">Instant automated text-back so you never miss another lead again.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-slate-200 font-medium text-lg">Rank #1 on Google Maps and dominate your local service area.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-slate-200 font-medium text-lg">Own your exclusive leads and build a predictable, scalable growth machine.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

{/* Services Section */}
        <section className="py-24 bg-[#fafafa] relative overflow-hidden" id="services">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <p className="text-sm font-bold uppercase tracking-wider text-primary mb-3">What We Do</p>
                <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
                  Services That Drive <span className="text-primary relative whitespace-nowrap">
                    Results
                    <svg className="absolute w-[105%] h-3 sm:h-4 -bottom-1 sm:-bottom-2 -left-1 text-primary/20" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                      <path d="M2.43398 9.53903C41.2268 4.29681 113.882 -2.13317 197.839 5.86178" stroke="currentColor" strokeWidth="4" strokeLinecap="round"></path>
                    </svg>
                  </span>
                </h2>
              </div>
              <p className="text-lg text-slate-600 font-medium max-w-md pb-2">
                We don't just build websites. We build predictable growth systems designed specifically for home service businesses.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="group relative bg-white rounded-[2rem] p-10 border border-slate-200 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="absolute -right-6 -top-10 text-[160px] font-black text-slate-50 group-hover:text-primary/5 transition-colors duration-500 pointer-events-none select-none">1</div>
                
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:scale-110 transition-all duration-500 relative z-10">
                  <Filter className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">Sales Funnels</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-8 relative z-10">
                  High-converting funnels that turn clicks into booked jobs. We focus on capturing leads, not just making things look pretty.
                </p>
              </div>

              {/* Card 2 - Highlighted */}
              <div className="group relative bg-[#022423] rounded-[2rem] p-10 border border-[#033330] shadow-xl hover:shadow-[0_20px_50px_rgba(2,36,35,0.3)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -right-6 -top-10 text-[160px] font-black text-white/5 group-hover:text-emerald-500/10 transition-colors duration-500 pointer-events-none select-none">2</div>
                
                <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-500 group-hover:scale-110 transition-all duration-500 relative z-10">
                  <Bot className="w-8 h-8 text-emerald-400 group-hover:text-white transition-colors duration-500" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Automation</h3>
                <p className="text-slate-300 font-medium leading-relaxed mb-8 relative z-10">
                  Never miss another lead. We follow up automatically via text and email instantly so you can focus on the jobs.
                </p>
              </div>

              {/* Card 3 */}
              <div className="group relative bg-white rounded-[2rem] p-10 border border-slate-200 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="absolute -right-6 -top-10 text-[160px] font-black text-slate-50 group-hover:text-primary/5 transition-colors duration-500 pointer-events-none select-none">3</div>
                
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:scale-110 transition-all duration-500 relative z-10">
                  <Search className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">SEO & Google</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-8 relative z-10">
                  Rank higher in Google and get found by local customers actively looking for your specific services in your area.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-16 sm:py-24 bg-slate-50 border-y border-slate-100" id="case-study">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <p className="text-sm font-bold uppercase tracking-wider text-primary mb-3">Real Results</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">From Outdated to Outstanding</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
                See how we transformed a local roofing company's online presence, turning a leaky 90s website into a modern lead-generation machine.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-start">
              {/* Before */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 px-2">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                    <XCircle className="w-5 h-5 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Before: The "Digital Leaky Roof"</h3>
                </div>
                <div className="relative bg-slate-200 rounded-2xl p-2 sm:p-4 border border-slate-300 shadow-inner">
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
                    <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">Before</span>
                  </div>
                  <div className="rounded-lg overflow-hidden border border-slate-300 shadow-sm relative aspect-[4/3] bg-white">
                    <img
                      src="https://vibe.filesafe.space/1780357837253217269/attachments/7fb544ac-d2c9-42e8-b5ef-f98767bdf8b8.png"
                      alt="Old outdated roofing website"
                      className="w-full h-full object-cover object-top opacity-90"
                    />
                  </div>
                </div>
                <ul className="space-y-3 mt-2 px-2">
                  <li className="flex items-start gap-3 text-slate-600 font-medium">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <span>No clear call-to-action to capture leads</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600 font-medium">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <span>Outdated design that breaks customer trust</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600 font-medium">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <span>Not optimized for mobile users</span>
                  </li>
                </ul>
                <div className="mt-4 px-2">
                  <Button asChild variant="outline" className="w-full sm:w-auto border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold">
                    <a href="https://service-2005-roofing-website-before-809748336430.us-east1.run.app/" target="_blank" rel="noopener noreferrer">
                      See full website <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* After */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 px-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">After: The Lead Generation Machine</h3>
                </div>
                <div className="relative bg-white rounded-2xl p-2 sm:p-4 border border-slate-200 shadow-xl">
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
                    <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">After</span>
                  </div>
                  <div className="rounded-lg overflow-hidden border border-slate-100 shadow-sm relative aspect-[4/3] bg-slate-100">
                    <img
                      src="https://vibe.filesafe.space/1780357837253217269/attachments/1302da54-a86d-4897-a4b0-5f88857307ac.png"
                      alt="Modern optimized roofing website"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                <ul className="space-y-3 mt-2 px-2">
                  <li className="flex items-start gap-3 text-slate-600 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Clear, prominent "Get a Quote" buttons</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Modern, professional design builds instant trust</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Fully responsive and optimized for mobile devices</span>
                  </li>
                </ul>
                <div className="mt-4 px-2">
                  <Button asChild className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-semibold">
                    <a href="https://bob-s-roofing-redesign-809748336430.us-east1.run.app/" target="_blank" rel="noopener noreferrer">
                      See full website <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Automations Section */}
        <section className="py-24 sm:py-32 relative overflow-hidden bg-[#022423]" id="automations">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
          <div 
            className="absolute inset-0 z-0 pointer-events-none mix-blend-screen opacity-40" 
            style={{ 
              backgroundImage: 'url("https://agencero-landing-page-809748336430.us-east1.run.app/real-topo.svg")', 
              backgroundSize: '400px', 
            }}
          ></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-16 sm:mb-24 gap-8">
              <div className="max-w-2xl">
                <span className="text-emerald-400 font-bold tracking-wider uppercase text-sm mb-4 block">Smart Automations</span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                  Work less.<br/>Close <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-primary">more deals.</span>
                </h2>
              </div>
              <p className="text-lg text-slate-300 max-w-md font-medium leading-relaxed pb-2">
                We build automated systems that respond instantly, follow up consistently, and turn more leads into booked jobs and 5-star reviews.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 xl:gap-6 relative">
              {/* Connecting lines for desktop */}
              <div className="hidden lg:block absolute top-12 left-[15%] right-[15%] h-[2px] border-t-2 border-dashed border-emerald-500/20 z-0"></div>

              {/* Card 1: Missed Call */}
              <div className="bg-[#022423] rounded-3xl p-6 border border-[#033330] shadow-[0_20px_50px_rgba(2,36,35,0.3)] relative overflow-hidden flex flex-col h-full group hover:border-emerald-500/30 transition-all duration-500">
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 mx-auto bg-emerald-500/10 rounded-2xl flex items-center justify-center border border-emerald-500/20 mb-6 group-hover:scale-110 transition-transform duration-500 bg-white/5 backdrop-blur-sm">
                    <PhoneOff className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white text-center mb-8">Missed Call<br/>Text Back</h3>
                  
                  <div className="flex-1 space-y-2 mb-8">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex items-center gap-3 backdrop-blur-sm">
                      <PhoneCall className="w-4 h-4 text-slate-400 shrink-0" />
                      <span className="text-sm text-slate-200 font-medium">Customer calls</span>
                    </div>
                    <div className="flex justify-center"><ArrowDown className="w-4 h-4 text-emerald-500/50" /></div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex items-center gap-3 backdrop-blur-sm">
                      <PhoneOff className="w-4 h-4 text-red-400 shrink-0" />
                      <span className="text-sm text-slate-200 font-medium">No answer</span>
                    </div>
                    <div className="flex justify-center"><ArrowDown className="w-4 h-4 text-emerald-500/50" /></div>
                    <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-3.5 flex items-center gap-3 backdrop-blur-sm">
                      <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-sm text-emerald-100 font-medium">Auto text sent</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-white/10 pt-5 mt-auto flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300 font-medium leading-snug">Responds in seconds.<br/>Never miss a lead.</p>
                  </div>
                </div>
              </div>

              {/* Card 2: Lead Form */}
              <div className="bg-[#022423] rounded-3xl p-6 border border-[#033330] shadow-[0_20px_50px_rgba(2,36,35,0.3)] relative overflow-hidden flex flex-col h-full group hover:border-emerald-500/30 transition-all duration-500">
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 mx-auto bg-emerald-500/10 rounded-2xl flex items-center justify-center border border-emerald-500/20 mb-6 group-hover:scale-110 transition-transform duration-500 bg-white/5 backdrop-blur-sm">
                    <FileText className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white text-center mb-8">Lead Form<br/>Follow-Up</h3>
                  
                  <div className="flex-1 space-y-2 mb-8">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex items-center gap-3 backdrop-blur-sm">
                      <FileText className="w-4 h-4 text-slate-400 shrink-0" />
                      <span className="text-sm text-slate-200 font-medium">Form submitted</span>
                    </div>
                    <div className="flex justify-center"><ArrowDown className="w-4 h-4 text-emerald-500/50" /></div>
                    <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-3.5 flex items-center gap-3 backdrop-blur-sm">
                      <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-sm text-emerald-100 font-medium">Text immediately</span>
                    </div>
                    <div className="flex justify-center"><ArrowDown className="w-4 h-4 text-emerald-500/50" /></div>
                    <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-3.5 flex items-center gap-3 backdrop-blur-sm">
                      <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-sm text-emerald-100 font-medium">Email immediately</span>
                    </div>
                    <div className="flex justify-center"><ArrowDown className="w-4 h-4 text-emerald-500/50" /></div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex items-center gap-3 backdrop-blur-sm">
                      <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                      <span className="text-sm text-slate-200 font-medium">Reminders 24h & 72h</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-white/10 pt-5 mt-auto flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300 font-medium leading-snug">Instant follow-up.<br/>More replies. More jobs.</p>
                  </div>
                </div>
              </div>

              {/* Card 3: Estimate Reminder */}
              <div className="bg-[#022423] rounded-3xl p-6 border border-[#033330] shadow-[0_20px_50px_rgba(2,36,35,0.3)] relative overflow-hidden flex flex-col h-full group hover:border-emerald-500/30 transition-all duration-500">
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 mx-auto bg-emerald-500/10 rounded-2xl flex items-center justify-center border border-emerald-500/20 mb-6 group-hover:scale-110 transition-transform duration-500 bg-white/5 backdrop-blur-sm">
                    <CalendarCheck className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white text-center mb-8">Estimate<br/>Reminder</h3>
                  
                  <div className="flex-1 space-y-2 mb-8">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex items-center gap-3 backdrop-blur-sm">
                      <CalendarCheck className="w-4 h-4 text-slate-400 shrink-0" />
                      <span className="text-sm text-slate-200 font-medium">Appointment booked</span>
                    </div>
                    <div className="flex justify-center"><ArrowDown className="w-4 h-4 text-emerald-500/50" /></div>
                    <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-3.5 flex items-center gap-3 backdrop-blur-sm">
                      <Bell className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-sm text-emerald-100 font-medium">24 hour reminder</span>
                    </div>
                    <div className="flex justify-center"><ArrowDown className="w-4 h-4 text-emerald-500/50" /></div>
                    <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-3.5 flex items-center gap-3 backdrop-blur-sm">
                      <Bell className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-sm text-emerald-100 font-medium">2 hour reminder</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-white/10 pt-5 mt-auto flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300 font-medium leading-snug">Keeps you top of mind.<br/>Reduces no-shows.</p>
                  </div>
                </div>
              </div>

              {/* Card 4: Review Request */}
              <div className="bg-[#022423] rounded-3xl p-6 border border-[#033330] shadow-[0_20px_50px_rgba(2,36,35,0.3)] relative overflow-hidden flex flex-col h-full group hover:border-emerald-500/30 transition-all duration-500">
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20 mb-6 group-hover:scale-110 transition-transform duration-500 bg-white/5 backdrop-blur-sm">
                    <Star className="w-6 h-6 text-primary fill-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white text-center mb-8">Review<br/>Request</h3>
                  
                  <div className="flex-1 space-y-2 mb-8">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex items-center gap-3 backdrop-blur-sm">
                      <Home className="w-4 h-4 text-slate-400 shrink-0" />
                      <span className="text-sm text-slate-200 font-medium">Job completed</span>
                    </div>
                    <div className="flex justify-center"><ArrowDown className="w-4 h-4 text-emerald-500/50" /></div>
                    <div className="bg-primary/10 border border-primary/30 rounded-xl p-3.5 flex items-center gap-3 backdrop-blur-sm">
                      <Star className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm text-orange-100 font-medium">Review request sent</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-white/10 pt-5 mt-auto flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300 font-medium leading-snug">More reviews.<br/>Stronger reputation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Section */}
        <section className="py-20 sm:py-32 bg-white border-b border-slate-100" id="seo">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                {/* Local SEO Performance Dashboard Mockup */}
                <div className="bg-[#022423] rounded-3xl p-6 sm:p-8 border border-[#033330] shadow-[0_20px_50px_rgba(2,36,35,0.3)] relative overflow-hidden">
                  {/* Background glow */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px]"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px]"></div>
                  
                  <div className="relative z-10 space-y-6">
                    {/* Top Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
                        <div className="flex items-center gap-2 text-slate-300 mb-2">
                          <Search className="w-4 h-4" />
                          <span className="text-xs font-medium">Local Search Views</span>
                        </div>
                        <div className="text-2xl font-bold text-white mb-1">12,450</div>
                        <div className="flex items-center text-xs font-medium text-emerald-400">
                          <TrendingUp className="w-3 h-3 mr-1" /> +156% this month
                        </div>
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
                        <div className="flex items-center gap-2 text-slate-300 mb-2">
                          <PhoneCall className="w-4 h-4" />
                          <span className="text-xs font-medium">Calls from Google</span>
                        </div>
                        <div className="text-2xl font-bold text-white mb-1">342</div>
                        <div className="flex items-center text-xs font-medium text-emerald-400">
                          <TrendingUp className="w-3 h-3 mr-1" /> +84% this month
                        </div>
                      </div>
                    </div>

                    {/* Chart Mockup */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-slate-200">Organic Traffic Growth</span>
                        <span className="text-xs font-medium text-primary bg-primary/20 px-2 py-1 rounded-full">Record High</span>
                      </div>
                      <div className="h-32 w-full relative flex items-end gap-2">
                        {/* Bars */}
                        {[30, 45, 40, 60, 55, 80, 75, 90, 85, 100].map((height, i) => (
                          <div key={i} className="flex-1 bg-emerald-500/10 rounded-t-sm relative group hover:bg-emerald-500/20 transition-colors" style={{ height: `100%` }}>
                            <div className="absolute bottom-0 left-0 w-full bg-emerald-500 rounded-t-sm transition-all duration-500" style={{ height: `${height}%` }}></div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Rankings */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
                      <span className="text-sm font-medium text-slate-200 block mb-4">Top Keywords</span>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-300">"Roofing contractor near me"</span>
                          <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">Rank #1</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-300">"Emergency roof repair"</span>
                          <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">Rank #1</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-300">"Best local roofers"</span>
                          <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">Rank #2</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 text-left">
                <p className="text-sm font-bold uppercase tracking-wider text-primary mb-3">SEO & Google Ranking</p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  Be the First Business<br />They Call.
                </h2>
                <p className="text-lg text-slate-600 font-medium mb-10 leading-relaxed">
                  When homeowners need a service, they search Google and call one of the first three businesses they see. We make sure you're one of them.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-1">
                      <MapPin className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Google Map Pack Dominance</h3>
                      <p className="text-slate-600 font-medium">We optimize your Google Business Profile to rank in the top 3 spots for high-intent local searches.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-1">
                      <Search className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Targeted Local SEO</h3>
                      <p className="text-slate-600 font-medium">We build location pages and optimize your website so you show up organically in every city you serve.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0 mt-1">
                      <Star className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Review Management</h3>
                      <p className="text-slate-600 font-medium">More reviews mean higher rankings. Our automated systems help you collect 5-star reviews effortlessly.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <Button asChild className="bg-primary hover:bg-primary/90 text-white h-14 px-8 text-base font-semibold">
                    <a href="https://api.leadconnectorhq.com/widget/booking/6QAjBWYLlxv9QmP76Rws" target="_blank" rel="noopener noreferrer">
                      Book a Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Calculator Section */}
        <section className="py-20 sm:py-32 bg-slate-50 border-b border-slate-100" id="roi-calculator">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 sm:mb-20">
              <p className="text-sm font-bold uppercase tracking-wider text-primary mb-3">Interactive Calculator</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                How Much Are You <span className="text-primary">Leaving on the Table?</span>
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
                Plug in your current numbers below to see exactly how much extra revenue a properly optimized digital presence could bring your business every month.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">
              {/* Inputs */}
              <div className="lg:col-span-7 flex flex-col gap-3 sm:gap-4">
                <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm flex-1 flex flex-col justify-center">
                  <div className="flex justify-between items-center mb-2">
                    <label className="font-semibold text-slate-900">Monthly Website Visitors</label>
                    <span className="text-lg font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-lg">{traffic.toLocaleString()}</span>
                  </div>
                  <Slider 
                    value={[traffic]} 
                    onValueChange={(val) => setTraffic(val[0])} 
                    max={10000} 
                    min={100} 
                    step={100} 
                    className="py-2"
                  />
                  <p className="text-xs text-slate-500 mt-1 font-medium">How many people visit your site each month?</p>
                </div>
                
                <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm flex-1 flex flex-col justify-center">
                  <div className="flex justify-between items-center mb-2">
                    <label className="font-semibold text-slate-900">Website Conversion Rate</label>
                    <span className="text-lg font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-lg">{convRate}%</span>
                  </div>
                  <Slider 
                    value={[convRate]} 
                    onValueChange={(val) => setConvRate(val[0])} 
                    max={20} 
                    min={1} 
                    step={1} 
                    className="py-2"
                  />
                  <p className="text-xs text-slate-500 mt-1 font-medium">Percentage of visitors who become leads.</p>
                </div>

                <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm flex-1 flex flex-col justify-center">
                  <div className="flex justify-between items-center mb-2">
                    <label className="font-semibold text-slate-900">Lead Close Rate</label>
                    <span className="text-lg font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-lg">{closeRate}%</span>
                  </div>
                  <Slider 
                    value={[closeRate]} 
                    onValueChange={(val) => setCloseRate(val[0])} 
                    max={80} 
                    min={5} 
                    step={5} 
                    className="py-2"
                  />
                  <p className="text-xs text-slate-500 mt-1 font-medium">Percentage of leads that turn into booked jobs.</p>
                </div>

                <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm flex-1 flex flex-col justify-center">
                  <div className="flex justify-between items-center mb-2">
                    <label className="font-semibold text-slate-900">Average Job Value</label>
                    <span className="text-lg font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-lg">${jobValue.toLocaleString()}</span>
                  </div>
                  <Slider 
                    value={[jobValue]} 
                    onValueChange={(val) => setJobValue(val[0])} 
                    max={20000} 
                    min={500} 
                    step={500} 
                    className="py-2"
                  />
                  <p className="text-xs text-slate-500 mt-1 font-medium">Average revenue per booked job.</p>
                </div>
              </div>

              {/* Results */}
              <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex flex-col">
                <div className="bg-[#022423] p-8 sm:p-10 lg:p-12 rounded-[2.5rem] relative overflow-hidden shadow-xl flex-1 flex flex-col justify-center">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px]"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px]"></div>
                  
                  <div className="relative z-10 space-y-8">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                      <p className="text-slate-400 font-medium text-sm uppercase tracking-wider mb-2">Current Revenue</p>
                      <p className="text-3xl font-bold text-white">${Math.round(currentRevenue).toLocaleString()}<span className="text-lg text-slate-500 font-medium ml-1">/mo</span></p>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white/10"></div>
                      </div>
                      <div className="relative flex justify-center">
                        <span className="bg-[#022423] px-4 text-xs font-bold uppercase tracking-widest text-slate-400">Projected Growth</span>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">With Agencero</p>
                      <p className="text-4xl sm:text-5xl font-bold text-white mb-3">${Math.round(projectedRevenue).toLocaleString()}<span className="text-2xl text-slate-400 font-medium ml-1">/mo</span></p>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        Based on +50% traffic (SEO), +3% conversion (Funnels), and +15% close rate (Automations).
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-900/40 border border-emerald-500/30 rounded-2xl p-6 relative overflow-hidden">
                      <p className="text-emerald-100 font-medium text-sm uppercase tracking-wider mb-2 relative z-10">Monthly Increase</p>
                      <p className="text-3xl font-bold text-emerald-400 relative z-10">+${Math.round(revenueIncrease).toLocaleString()}</p>
                    </div>

                    <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white h-14 text-base font-semibold mt-4">
                      <a href="https://api.leadconnectorhq.com/widget/booking/6QAjBWYLlxv9QmP76Rws" target="_blank" rel="noopener noreferrer">
                        Claim Your Revenue <ArrowRight className="ml-2 w-5 h-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 sm:py-32 bg-white relative overflow-hidden" id="process">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 translate-x-20 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Our Process</span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">How We Drive Growth</h2>
              <p className="text-lg text-slate-600 font-medium">
                A simple, proven system to turn your website into a reliable lead-generation machine.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Step 1 */}
              <div className="group flex flex-col sm:flex-row gap-6 sm:gap-8 bg-white p-8 sm:p-10 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300">
                <div className="w-20 h-20 shrink-0 bg-slate-50 rounded-2xl flex items-center justify-center border-2 border-slate-100 group-hover:border-primary/20 group-hover:bg-primary/5 transition-colors">
                  <Search className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <div className="text-5xl font-black text-slate-100 mb-2 group-hover:text-primary/10 transition-colors">01</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Audit & Strategy</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    We analyze your current website, traffic sources, and competitors to find the exact gaps where you're losing customers.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="group flex flex-col sm:flex-row gap-6 sm:gap-8 bg-white p-8 sm:p-10 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300">
                <div className="w-20 h-20 shrink-0 bg-slate-50 rounded-2xl flex items-center justify-center border-2 border-slate-100 group-hover:border-primary/20 group-hover:bg-primary/5 transition-colors">
                  <PenTool className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <div className="text-5xl font-black text-slate-100 mb-2 group-hover:text-primary/10 transition-colors">02</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Build the Engine</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    We build your high-converting sales funnels, set up automated text-back systems, and establish your local SEO foundation.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="group flex flex-col sm:flex-row gap-6 sm:gap-8 bg-white p-8 sm:p-10 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300">
                <div className="w-20 h-20 shrink-0 bg-slate-50 rounded-2xl flex items-center justify-center border-2 border-slate-100 group-hover:border-primary/20 group-hover:bg-primary/5 transition-colors">
                  <Rocket className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <div className="text-5xl font-black text-slate-100 mb-2 group-hover:text-primary/10 transition-colors">03</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Launch & Rank</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    We push everything live and begin driving targeted local traffic through optimized Google Business Profiles and search rankings.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="group flex flex-col sm:flex-row gap-6 sm:gap-8 bg-white p-8 sm:p-10 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300">
                <div className="w-20 h-20 shrink-0 bg-slate-50 rounded-2xl flex items-center justify-center border-2 border-slate-100 group-hover:border-primary/20 group-hover:bg-primary/5 transition-colors">
                  <LineChart className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <div className="text-5xl font-black text-slate-100 mb-2 group-hover:text-primary/10 transition-colors">04</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Optimize & Scale</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    We continuously monitor performance, test new angles, and optimize your systems to maximize your return on investment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 sm:py-24 bg-white" id="about">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#f8fafc] rounded-3xl p-8 md:p-14 flex flex-col md:flex-row items-center gap-8 sm:gap-12 text-center md:text-left">
              <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 shrink-0 rounded-full overflow-hidden border-8 border-white shadow-xl">
                <img 
                  alt="Jean from Agencero" 
                  className="w-full h-full object-cover bg-slate-200" 
                  src="https://agencero-landing-page-809748336430.us-east1.run.app/assets/headshot-DF520dhx.png" 
                />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-primary mb-2">About Agencero</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">Hi, I'm Jean.</h2>
                <div className="text-slate-700 font-medium text-base sm:text-lg space-y-4 leading-relaxed">
                  <p>I started Agencero because most home service companies are sold websites that look nice but don't generate revenue.</p>
                  <p>My focus is simple: build growth systems that help contractors get found on Google, convert more visitors into leads, and follow up automatically so fewer opportunities slip through the cracks.</p>
                  <p className="font-bold text-slate-900">When you grow, we grow.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-24 bg-white" id="faq">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 sm:mb-12">
              <p className="text-sm font-bold uppercase tracking-wider text-primary mb-3">FAQ</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">Frequently Asked Questions</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 items-start">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border rounded-lg bg-white px-2">
                  <AccordionTrigger className="text-left px-4 py-5 font-semibold text-slate-900 hover:no-underline">
                    Do I need a new website?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-5 text-slate-600 font-medium text-base">
                    It depends on your current setup. Sometimes a simple funnel on top of your existing site works, but often a fresh, conversion-optimized site yields the best ROI.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border rounded-lg bg-white px-2">
                  <AccordionTrigger className="text-left px-4 py-5 font-semibold text-slate-900 hover:no-underline">
                    What's the difference between a website and a sales funnel?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-5 text-slate-600 font-medium text-base">
                    A website is like a digital brochure, while a sales funnel is a guided path designed specifically to convert a visitor into a lead or customer.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border rounded-lg bg-white px-2">
                  <AccordionTrigger className="text-left px-4 py-5 font-semibold text-slate-900 hover:no-underline">
                    Do you work only with home service businesses?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-5 text-slate-600 font-medium text-base">
                    Yes, we specialize exclusively in home service businesses to ensure we deliver the best possible results.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border rounded-lg bg-white px-2">
                  <AccordionTrigger className="text-left px-4 py-5 font-semibold text-slate-900 hover:no-underline">
                    Do you require long-term contracts?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-5 text-slate-600 font-medium text-base">
                    No, we operate on month-to-month agreements because we believe in earning your business every single month.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-5" className="border rounded-lg bg-white px-2">
                  <AccordionTrigger className="text-left px-4 py-5 font-semibold text-slate-900 hover:no-underline">
                    How do automations help my business?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-5 text-slate-600 font-medium text-base">
                    Automations ensure every lead gets an instant response, follow-ups happen consistently, and appointments are scheduled without manual effort.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6" className="border rounded-lg bg-white px-2">
                  <AccordionTrigger className="text-left px-4 py-5 font-semibold text-slate-900 hover:no-underline">
                    Can you help me rank higher on Google Maps?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-5 text-slate-600 font-medium text-base">
                    Absolutely. Local SEO and Google Business Profile optimization are core parts of our growth systems.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7" className="border rounded-lg bg-white px-2">
                  <AccordionTrigger className="text-left px-4 py-5 font-semibold text-slate-900 hover:no-underline">
                    What happens during the strategy call?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-5 text-slate-600 font-medium text-base">
                    We'll review your current online presence, discuss your growth goals, and map out a custom plan to get you there.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white px-4 sm:px-6 lg:px-8 pb-12">
          <div className="max-w-7xl mx-auto">
            <div className="bg-[#022423] rounded-3xl p-8 sm:p-10 md:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-10 rounded-full blur-[100px]"></div>
              
              <div className="flex-1 relative z-10 text-left">
                <span className="block text-primary text-sm font-bold tracking-wider uppercase mb-3">Let's grow your business</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                  Ready to turn more visitors<br className="hidden sm:inline" /> into <span className="text-primary">booked jobs?</span>
                </h2>
                <p className="text-slate-300 font-medium text-base sm:text-lg max-w-md">
                  Let's build a growth system that generates more calls, follows up faster, and books more work.
                </p>
              </div>
              
              <div className="hidden lg:block w-px h-32 bg-white/10 mx-4"></div>
              
              <div className="flex-1 relative z-10 flex flex-col items-start lg:items-center justify-center w-full text-left lg:text-center mt-8 lg:mt-0">
                <Button asChild className="bg-primary hover:bg-primary/90 text-white h-14 px-8 text-base sm:text-lg w-full sm:w-auto mb-6 font-semibold">
                  <a href="https://api.leadconnectorhq.com/widget/booking/6QAjBWYLlxv9QmP76Rws" target="_blank" rel="noopener noreferrer">
                    Book Your Free Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <div className="flex items-center gap-3 text-slate-300 text-sm sm:text-base">
                  <div className="p-1.5 rounded-full border border-white/20">
                    <CalendarCheck className="lucide lucide-calendar-check lucide lucide-calendar-check w-4 h-4 text-sidebar-background text-slate-300" />
                  </div>
                  <p>No pressure. Just a strategy session.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#011615] border-t border-white/5 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
            <div>
              <div className="mb-6">
                <img 
                  alt="Agencero" 
                  className="h-10 sm:h-12 md:h-14 w-auto object-contain" 
                  src="https://agencero-landing-page-809748336430.us-east1.run.app/logo.png" 
                />
              </div>
              <p className="text-slate-300 mb-6 max-w-sm text-lg">
                Growth systems for home service businesses.
              </p>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="lucide lucide-map-pin w-5 h-5 text-slate-300" />
                <span>Fort Worth, TX</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-300 hover:bg-white/5 hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-300 hover:bg-white/5 hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-300 hover:bg-white/5 hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-300 hover:bg-white/5 hover:text-white transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
            <p>© {new Date().getFullYear()} Agencero. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
