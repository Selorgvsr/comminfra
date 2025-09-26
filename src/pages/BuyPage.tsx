import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { 
  Building2, 
  Store, 
  Trees, 
  Factory,
  ShoppingBag,
  Sun,
  Recycle,
  Car,
  Zap,
  FileText,
  Building,
  Users,
  Briefcase,
  UserCheck,
  TrendingUp,
  Home,
  Shield,
  ArrowRight,
  CheckCircle,
  Calendar,
  MapPin,
  DollarSign,
  Upload,
  Search,
  Moon,
  SunIcon
} from "lucide-react";

// Image imports
import buyHeroCommercial from "@/assets/buy-hero-commercial.jpg";
import commercialInterior from "@/assets/commercial-interior.jpg";
import commercialPlaza from "@/assets/commercial-plaza-bustling.jpg";
import businessPark from "@/assets/aerial-business-park.jpg";
import lifestyleCenter from "@/assets/lifestyle-center-green.jpg";
import projectTimeline from "@/assets/project-timeline.jpg";
import rooftopSolar from "@/assets/rooftop-solar-building.jpg";
import revenueDashboard from "@/assets/build-revenue-dashboard.jpg";
import proposalForm from "@/assets/construction-proposal-form.jpg";

const BuyPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Scroll-aware header transparency
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Asset Categories Data
  const assetCategories = [
    {
      icon: Building2,
      title: "Office Spaces",
      description: "Premium corporate environments with smart infrastructure",
      image: commercialInterior,
      cta: "View Office Listings",
      link: "/projects?type=office"
    },
    {
      icon: Store,
      title: "Commercial Plazas",
      description: "High-traffic retail destinations with diverse tenant mix",
      image: commercialPlaza,
      cta: "Explore Retail Units",
      link: "/projects?type=retail"
    },
    {
      icon: Trees,
      title: "Lifestyle Centers",
      description: "Experiential retail and entertainment hubs",
      image: lifestyleCenter,
      cta: "Discover Lifestyle Assets",
      link: "/projects?type=lifestyle"
    },
    {
      icon: Factory,
      title: "Business Parks",
      description: "Integrated corporate campuses with modern amenities",
      image: businessPark,
      cta: "Browse Park Inventory",
      link: "/projects?type=business-park"
    },
    {
      icon: ShoppingBag,
      title: "High Street Commercial",
      description: "Prime frontage properties in commercial corridors",
      image: commercialInterior,
      cta: "Check Availability",
      link: "/projects?type=high-street"
    }
  ];

  // Development Stage Data
  const developmentStages = [
    {
      title: "Ready to Occupy",
      description: "Completed properties with all amenities",
      progress: 100,
      color: "bg-green-500",
      cta: "Buy Now",
      badge: "🟢"
    },
    {
      title: "Nearing Completion",
      description: "85-95% complete with finishing work in progress",
      progress: 90,
      color: "bg-yellow-500",
      cta: "Schedule Site Visit",
      badge: "🟡"
    },
    {
      title: "Under Construction",
      description: "40-70% complete with structural work ongoing",
      progress: 60,
      color: "bg-orange-500",
      cta: "Request Project Brief",
      badge: "🟠"
    },
    {
      title: "Pre-Launch",
      description: "Planning stage with early bird pricing available",
      progress: 25,
      color: "bg-blue-500",
      cta: "Register Interest",
      badge: "🔵"
    }
  ];

  // ESG Features Data
  const esgFeatures = [
    { icon: Sun, title: "Solar-powered infrastructure", tooltip: "Rooftop solar with grid-tie capability" },
    { icon: Recycle, title: "Carbon credit eligibility", tooltip: "LEED certified with carbon offset programs" },
    { icon: Car, title: "EV-ready parking", tooltip: "Electric vehicle charging stations" },
    { icon: Zap, title: "Redundant connections", tooltip: "Backup power and water systems" },
    { icon: FileText, title: "REIT-grade documentation", tooltip: "Investment-ready legal structure" },
    { icon: Building, title: "Floor-wise ownership", tooltip: "Flexible ownership options available" }
  ];

  // Buyer Personas Data
  const buyerPersonas = [
    {
      icon: Building,
      title: "Institutional Investors",
      description: "Large-scale portfolio acquisitions with ESG focus",
      features: ["Bulk Purchase Options", "Portfolio Diversification", "ESG Compliance"],
      link: "/institutional-inquiry"
    },
    {
      icon: Briefcase,
      title: "Corporate Occupiers",
      description: "Companies seeking owned operational spaces",
      features: ["Custom Fit-Outs", "Operational Control", "Tax Benefits"],
      link: "/corporate-inquiry"
    },
    {
      icon: Users,
      title: "HNIs / Family Offices",
      description: "High-net-worth individuals and family investment vehicles",
      features: ["Premium Assets", "Wealth Preservation", "Legacy Building"],
      link: "/hni-inquiry"
    },
    {
      icon: TrendingUp,
      title: "REITs & Funds",
      description: "Structured investment vehicles for rental yield",
      features: ["Yield Optimization", "Professional Management", "Liquidity Options"],
      link: "/reit-inquiry"
    }
  ];

  // Investment Highlights Data
  const investmentHighlights = [
    {
      icon: TrendingUp,
      title: "Rental Yield Potential",
      value: "8-12%",
      description: "Annual rental returns"
    },
    {
      icon: Home,
      title: "Lease-Ready Units",
      value: "85%",
      description: "Pre-leased occupancy"
    },
    {
      icon: Sun,
      title: "ESG Impact",
      value: "30%",
      description: "Carbon footprint reduction"
    },
    {
      icon: Shield,
      title: "Asset Appreciation",
      value: "15-25%",
      description: "Expected IRR over 5 years"
    }
  ];

  // FAQ Data
  const faqs = [
    {
      question: "Can I buy individual floors or entire blocks?",
      answer: "Yes, we offer flexible ownership structures including floor-wise purchases, entire building acquisitions, and even partial stake investments through our REIT structure."
    },
    {
      question: "What ESG certifications are available?",
      answer: "Our properties feature LEED certifications, carbon credit eligibility, solar power integration, and sustainable building materials. We provide detailed ESG impact reports for all investments."
    },
    {
      question: "What's the process for site visits and due diligence?",
      answer: "We offer comprehensive site visits with technical experts, provide detailed due diligence reports, legal documentation review, and 30-day evaluation periods for institutional investors."
    },
    {
      question: "What financing options are available?",
      answer: "We work with leading financial institutions to provide competitive financing options, including construction-to-permanent loans, commercial mortgages, and partnership structures."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Fixed Header - Scroll Aware */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 100 
            ? 'bg-white/80 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <nav className="hidden md:flex space-x-8">
            <Link to="/buy" className="text-primary font-medium">Buy</Link>
            <Link to="/sell" className="hover:text-primary transition-colors">Sell</Link>
            <Link to="/land-assets" className="hover:text-primary transition-colors">Land Assets</Link>
            <Link to="/build-asset" className="hover:text-primary transition-colors">Build Asset</Link>
            <Link to="/rent-lease-asset" className="hover:text-primary transition-colors">Rent/Lease Asset</Link>
            <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Search className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-secondary transition-colors"
            >
              {isDarkMode ? <SunIcon className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* 1. Hero Section - Premium Ownership Banner */}
      <section className="BuyPage_HeroBanner relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={buyHeroCommercial} 
            alt="Modern commercial skyline with solar panels"
            className="w-full h-full object-cover"
          />
          {/* Glassmorphism overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
          <div className="absolute inset-0 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative z-10 container text-center text-white px-4">
          <Badge className="mb-6 bg-white/20 backdrop-blur-md text-white border border-white/30 font-semibold animate-fade-in">
            Premium Commercial Investments
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            Buy High-Value Commercial Properties 
            <span className="text-gradient bg-gradient-to-r from-solar to-esg bg-clip-text text-transparent"> Directly from Us</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-white/90 animate-fade-in">
            Modular, ESG-aligned, investor-grade assets with built-in value enhancement and sustainable features
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-fade-in group"
            asChild
          >
            <Link to="/projects">
              Browse Available Properties 
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      {/* 2. Asset Categories - Icon-Based Cards */}
      <section className="AssetCard_Categories py-20 bg-secondary/5">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Asset Categories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover premium commercial properties across diverse categories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {assetCategories.map((category, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <category.icon className="absolute top-4 left-4 h-8 w-8 text-white group-hover:text-solar transition-colors duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 text-primary group-hover:text-solar transition-colors">{category.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300"
                    asChild
                  >
                    <Link to={category.link}>{category.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Development Stage Filter - Progress Grid */}
      <section className="ProjectStage_Filter py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Development Stages</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose properties based on completion status and investment timeline
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {developmentStages.map((stage, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border border-white/30 rounded-xl overflow-hidden hover:-translate-y-1"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">{stage.badge}</span>
                    <Badge variant="outline" className="text-xs">
                      {stage.progress}% Complete
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{stage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{stage.description}</p>
                  <Progress value={stage.progress} className="mb-4" />
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-primary group-hover:text-white transition-all"
                  >
                    {stage.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img 
              src={projectTimeline} 
              alt="Project development timeline stages"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 flex items-center justify-center">
              <div className="text-center text-white">
                <Calendar className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Project Timeline Visualization</h3>
                <p className="text-white/90">Track development progress from foundation to completion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ESG Features - Icon Strip with Tooltips */}
      <section className="ESG_Features py-20 bg-secondary/5">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">ESG Value Additions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sustainable features that enhance property value and generate additional revenue streams
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {esgFeatures.map((feature, index) => (
              <Card 
                key={index}
                className="group text-center p-6 hover:shadow-lg transition-all duration-300 bg-white/60 backdrop-blur-sm border border-white/20 rounded-xl hover:-translate-y-1"
                title={feature.tooltip}
              >
                <feature.icon className="h-12 w-12 text-primary mx-auto mb-3 group-hover:text-solar transition-colors group-hover:scale-110 transition-transform duration-300" />
                <p className="text-sm font-medium text-center">{feature.title}</p>
              </Card>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={rooftopSolar} 
                alt="Commercial building with rooftop solar installation"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <Sun className="h-8 w-8 mb-2" />
                  <h3 className="text-xl font-bold mb-1">Solar Infrastructure</h3>
                  <p className="text-white/90">Generate 30-40% energy savings</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={revenueDashboard} 
                alt="ESG dashboard showing carbon credits and sustainability metrics"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <Recycle className="h-8 w-8 mb-2" />
                  <h3 className="text-xl font-bold mb-1">Carbon Monetization</h3>
                  <p className="text-white/90">Earn 5-8% additional returns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Buyer Segmentation - Persona Cards */}
      <section className="BuyerPersona_Cards py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Tailored for Every Investor</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Customized investment opportunities designed for different investor profiles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {buyerPersonas.map((persona, index) => (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-b from-white to-secondary/10 border border-white/20 rounded-2xl overflow-hidden"
              >
                <CardHeader className="text-center pb-2">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <persona.icon className="h-8 w-8 text-primary group-hover:text-solar transition-colors" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{persona.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{persona.description}</p>
                  <div className="space-y-2 mb-4">
                    {persona.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs">
                        <CheckCircle className="h-3 w-3 text-esg mr-2" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-primary group-hover:text-white transition-all"
                    asChild
                  >
                    <Link to={persona.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Investment Highlights - Infographic Grid */}
      <section className="Investment_Highlights py-20 bg-secondary/5">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Investment Highlights</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Key metrics that demonstrate the value proposition of our commercial properties
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {investmentHighlights.map((highlight, index) => (
              <Card 
                key={index}
                className="text-center p-8 bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <highlight.icon className="h-16 w-16 text-primary mx-auto mb-4 group-hover:text-solar transition-colors" />
                <div className="text-4xl font-bold text-primary mb-2">{highlight.value}</div>
                <h3 className="font-semibold mb-2">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQs - Accordion Component */}
      <section className="Seller_FAQ_Section py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Common questions from buyers about our commercial property investments
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-xl px-6"
                >
                  <AccordionTrigger className="text-left hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* 8. Contact & Inquiry Portal - Filterable Form */}
      <section className="Form_BuyerInquiry py-20 bg-secondary/5">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Start Your Investment Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Request detailed investment information tailored to your requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="relative">
              <img 
                src={proposalForm} 
                alt="Investment inquiry form interface"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl flex items-end">
                <div className="p-8 text-white">
                  <FileText className="h-12 w-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Professional Investment Deck</h3>
                  <p className="text-white/90">Comprehensive property analysis and financial projections</p>
                </div>
              </div>
            </div>
            
            <Card className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Investment Inquiry Form</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Asset Type</label>
                    <select className="w-full p-3 rounded-lg border border-gray-200 bg-white/80 backdrop-blur-sm">
                      <option>Select Asset Type</option>
                      <option>Office Spaces</option>
                      <option>Commercial Plazas</option>
                      <option>Lifestyle Centers</option>
                      <option>Business Parks</option>
                      <option>High Street Commercial</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Development Stage</label>
                    <select className="w-full p-3 rounded-lg border border-gray-200 bg-white/80 backdrop-blur-sm">
                      <option>Any Stage</option>
                      <option>Ready to Occupy</option>
                      <option>Nearing Completion</option>
                      <option>Under Construction</option>
                      <option>Pre-Launch</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="Enter city or area"
                      className="w-full p-3 pl-10 rounded-lg border border-gray-200 bg-white/80 backdrop-blur-sm"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Investment Budget</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="Enter budget range"
                      className="w-full p-3 pl-10 rounded-lg border border-gray-200 bg-white/80 backdrop-blur-sm"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Upload Documents (Optional)</label>
                  <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center bg-white/50">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-sm text-gray-500">Upload investment criteria or KYC documents</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="flex-1 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white rounded-full py-3"
                  >
                    Request Investment Deck
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 rounded-full py-3 border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    Book a Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fixed Footer - Glassmorphic */}
      <footer className="bg-primary/95 backdrop-blur-md text-white py-16">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="text-white/80">Leading commercial real estate development with ESG-aligned investment opportunities.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/sustainability" className="block text-white/80 hover:text-white transition-colors">Sustainability</Link>
                <Link to="/business-model" className="block text-white/80 hover:text-white transition-colors">Business Revenue Model</Link>
                <Link to="/reit-invest" className="block text-white/80 hover:text-white transition-colors">REIT & Invest in Rental Yield Assets</Link>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <div className="space-y-2 text-white/80">
                <p>+91 XXX XXX XXXX</p>
                <p>invest@company.com</p>
                <p>Mumbai, India</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 p-2 rounded-l-lg border-0 bg-white/20 backdrop-blur-sm text-white placeholder-white/60"
                />
                <Button className="rounded-r-lg rounded-l-none bg-solar hover:bg-solar/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
            <p>&copy; 2024 Commercial Development Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BuyPage;