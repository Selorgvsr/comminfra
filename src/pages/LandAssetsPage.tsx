import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import {
  Building2,
  Store,
  TreePine,
  Factory,
  MapPin,
  Ruler,
  Zap,
  Sun,
  FileText,
  Search,
  ArrowRight,
  CheckCircle,
  Upload,
  DollarSign,
  Calendar,
  Target,
  Layers,
  TrendingUp,
  Compass,
} from "lucide-react";

// Image imports
import landToCommercial from "@/assets/land-to-commercial.jpg";
import landZoningMap from "@/assets/land-zoning-map.jpg";
import infrastructureBlueprint from "@/assets/infrastructure-blueprint.jpg";
import smartInfrastructureBlueprint from "@/assets/smart-infrastructure-blueprint.jpg";
import landSubmissionForm from "@/assets/land-submission-form.jpg";
import downtownCityCoreImage from "@/assets/downtown-city-skyline-evening.jpg";
import mallAdjacentImage from "@/assets/modern-mall-interior-skylight.jpg";
import officeZoneImage from "@/assets/office-zone-land.jpg";
import mixedUseImage from "@/assets/mixed-use-land.jpg";
import peripheralGrowthImage from "@/assets/peripheral-growth-land.jpg";
const LandAssetsPage = () => {
  const [scrollY, setScrollY] = useState(0);

  // Scroll-aware header transparency
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Land Category Data
  const landCategories = [
    {
      icon: Building2,
      title: "Downtown / City Core",
      description:
        "Our Downtown / City Core land parcels are the epicenter of opportunity — positioned within the most valuable and visible zones of urban life. Perfect for premium office towers, retail blocks, and hospitality developments, these lands offer unmatched connectivity and prestige. With established infrastructure — roads, power, and transit — every square foot here carries exponential potential. We assist in selling or acquiring core-zone assets with verified documentation, zoning compliance, and investor support. When you invest in city-core land, you invest in brand visibility, business growth, and long-term appreciation.",
      cta: "View Land Parcels",
      link: "/projects?type=downtown",
      image: downtownCityCoreImage,
    },
    {
      icon: Store,
      title: "Mall-Adjacent Parcels",
      description:
        "Our Mall-Adjacent Land Parcels are strategically positioned next to established retail ecosystems — where high footfall meets future value. These plots are perfect for developing commercial extensions, boutique showrooms, restaurants, and lifestyle outlets. Investors benefit from ready infrastructure, public visibility, and synergy with existing retail giants. We handle end-to-end sale preparation — from valuation to buyer targeting — ensuring your land captures its true commercial worth. In every successful city, land beside a mall becomes tomorrow's most lucrative investment.",
      cta: "View Land Parcels",
      link: "/projects?type=mall-adjacent",
      image: mallAdjacentImage,
    },
    {
      icon: Building2,
      title: "Office Zone Land",
      description:
        "Our Office Zone Lands are strategically located within or near established business districts — the heart of corporate expansion. These plots are zoned and ready for high-rise developments, IT parks, or coworking towers. Designed for institutional buyers and developers, each parcel offers high utility value, excellent access, and sustainable infrastructure. We facilitate seamless transactions, legal due diligence, and development partnerships for large-scale office land sales. When you sell or invest in office zone land, you're not just trading real estate — you're shaping the next corporate skyline.",
      cta: "View Land Parcels",
      link: "/projects?type=office-zone",
      image: officeZoneImage,
    },
    {
      icon: Layers,
      title: "Mixed-Use Potential",
      description:
        "Our Mixed-Use Potential Lands are the foundation for tomorrow's integrated cities — where retail, workspace, and lifestyle coexist. Ideal for developers envisioning multi-purpose hubs, these lands come with high flexibility and zoning adaptability. We help you position these assets for maximum investor interest — from architectural feasibility to market-driven valuation. Every mixed-use parcel is a blank canvas of possibilities — a chance to redefine how people live, work, and connect. Whether for sale or joint venture, these are future-ready investment opportunities waiting to be built upon.",
      cta: "View Land Parcels",
      link: "/projects?type=mixed-use",
      image: mixedUseImage,
    },
    {
      icon: Compass,
      title: "Peripheral Growth Zones",
      description:
        "Our Peripheral Growth Zone Lands are the smart investor's move — affordable today, priceless tomorrow. These plots sit in the path of planned urban expansion, industrial corridors, or upcoming infrastructure projects. We specialize in identifying and marketing lands with strong appreciation potential, offering clear documentation and easy access to utilities. Perfect for future commercial parks, logistics hubs, or tech campuses — these lands promise exponential value in the next growth wave. Invest now, develop later — your foresight builds tomorrow's cityscape.",
      cta: "View Land Parcels",
      link: "/projects?type=peripheral",
      image: peripheralGrowthImage,
    },
  ];

  // City Filters Data
  const cityFilters = [
    {
      name: "Chennai",
      plots: 45,
      active: true,
    },
    {
      name: "Bengaluru",
      plots: 38,
      active: false,
    },
    {
      name: "Hyderabad",
      plots: 29,
      active: false,
    },
  ];

  // Plot Size Filters Data
  const plotSizeFilters = [
    {
      range: "<5,000 sq.ft",
      count: 23,
      type: "Small",
    },
    {
      range: "5K–25K sq.ft",
      count: 41,
      type: "Medium",
    },
    {
      range: "1 acre+",
      count: 18,
      type: "Large",
    },
  ];

  // Asset Targeting Data
  const assetTargeting = [
    {
      icon: Store,
      title: "Retail Malls",
      description: "High-footfall locations with retail zoning",
      features: ["Metro connectivity", "Parking availability", "Anchor tenant potential"],
    },
    {
      icon: Building2,
      title: "Office Towers",
      description: "Commercial zones with IT/corporate focus",
      features: ["IT corridor proximity", "Utility infrastructure", "Flexible FSI"],
    },
    {
      icon: Factory,
      title: "Lifestyle Centers",
      description: "Mixed-use developments with entertainment",
      features: ["Residential proximity", "Entertainment licensing", "Multi-level potential"],
    },
    {
      icon: TreePine,
      title: "Sustainable Development",
      description: "ESG-aligned projects with green certifications",
      features: ["Solar readiness", "Water harvesting", "Green building potential"],
    },
  ];

  // ESG Features Data
  const esgFeatures = [
    {
      icon: Sun,
      title: "Solar-Ready Infrastructure",
      description: "Pre-planned for renewable energy",
    },
    {
      icon: Zap,
      title: "Smart Utilities",
      description: "Digital infrastructure backbone",
    },
    {
      icon: TreePine,
      title: "Green Certification",
      description: "LEED/GRIHA development potential",
    },
    {
      icon: FileText,
      title: "REIT-Compatible",
      description: "Investment-grade documentation",
    },
  ];

  // Featured Listings Data
  const featuredListings = [
    {
      title: "Premium City Core Plot",
      location: "Chennai IT Corridor",
      size: "2.5 acres",
      fsi: "3.5",
      price: "₹450 Cr",
      highlights: ["Metro 500m", "IT Park Adjacent", "DTCP Approved"],
    },
    {
      title: "Mall-Adjacent Parcel",
      location: "Bengaluru ORR",
      size: "1.8 acres",
      fsi: "2.5",
      price: "₹280 Cr",
      highlights: ["Mall Frontage", "Highway Access", "Retail Zoned"],
    },
    {
      title: "Mixed-Use Development",
      location: "Hyderabad HITEC",
      size: "3.2 acres",
      fsi: "4.0",
      price: "₹520 Cr",
      highlights: ["IT Hub Location", "Airport 15km", "HMDA Approved"],
    },
  ];

  // FAQ Data
  const faqs = [
    {
      question: "What approvals are required for land purchase?",
      answer:
        "Typically DTCP/CMDA approvals, clear title, NOC from relevant authorities, and zoning compliance certificates are required. We provide complete due diligence support.",
    },
    {
      question: "Can I buy part of a larger parcel?",
      answer:
        "Yes, we offer flexible subdivision options based on minimum plot sizes and local regulations. Joint development partnerships are also available.",
    },
    {
      question: "What's the process for due diligence?",
      answer:
        "Our 30-day due diligence includes title verification, legal clearances, soil testing, utility connectivity assessment, and development potential analysis.",
    },
    {
      question: "Are joint development partnerships available?",
      answer:
        "Yes, we offer JDA structures where you provide land and we handle development, sharing returns based on agreed ratios.",
    },
  ];
  return (
    <div className="min-h-screen gradient-mesh">
      {/* 1. Hero Section - Strategic Land Acquisition Banner */}
      <section className="LandAsset_HeroBanner relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={landToCommercial}
            alt="Aerial view of commercial land development opportunity"
            className="w-full h-full object-cover transform scale-105 transition-transform duration-[20s] ease-out hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
          <div className="absolute inset-0 backdrop-blur-[1px]"></div>
        </div>

        <div className="relative z-10 container text-center text-white px-4">
          <Badge className="mb-6 bg-white/20 backdrop-blur-md text-white border border-white/30 font-semibold animate-fade-in">
            Strategic Land Acquisition
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            Explore High-Value Land Assets
            <span className="text-gradient bg-gradient-to-r from-solar to-esg bg-clip-text text-transparent">
              {" "}
              for Commercial Development
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
              asChild
            >
              <Link to="/projects?category=land">
                Browse Available Land
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link to="/contact">Submit Land for Evaluation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Land Category Segmentation - Luxurious Premium Cards */}
      <section className="LandCategory_Segmentation py-24 bg-gradient-to-b from-white via-secondary/5 to-white">
        <div className="container px-4">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-primary/20 to-solar/20 text-primary border-none font-semibold px-6 py-2">
              Premium Land Opportunities
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-commercial to-solar bg-clip-text text-transparent p-4">
              Land Categories
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Discover prime land opportunities across strategic commercial zones designed for growth, visibility, and
              long-term value.
            </p>
          </div>

          <div className="space-y-16">
            {landCategories.map((category, index) => (
              <Card
                key={index}
                className="group hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-700 bg-white border-none rounded-3xl overflow-hidden animate-fade-in"
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}>
                  {/* Image Section */}
                  <div className={`relative h-96 md:h-auto overflow-hidden ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-transparent to-transparent"></div>
                    <div className="absolute top-8 left-8">
                      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white/30 transition-colors duration-500">
                        <category.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div
                    className={`flex flex-col justify-center p-10 md:p-14 ${index % 2 === 1 ? "md:col-start-1" : ""}`}
                  >
                    <Badge className="w-fit mb-4 bg-gradient-to-r from-primary/10 to-solar/10 text-primary border-none font-semibold px-4 py-1.5">
                      Category {index + 1}
                    </Badge>
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 text-primary group-hover:text-commercial transition-colors duration-500">
                      {category.title}
                    </h3>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                      {category.description}
                    </p>
                    <Button
                      size="lg"
                      className="w-fit bg-gradient-to-r from-primary to-commercial hover:from-commercial hover:to-primary text-white px-8 py-6 rounded-full group-hover:shadow-lg transition-all duration-500"
                      asChild
                    >
                      <Link to={category.link} className="flex items-center gap-2">
                        {category.cta}
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Location Intelligence - Interactive Map & Filters */}
      <section className="LocationIntelligence_MapFilters py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Location Intelligence</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore opportunities across India's fastest-growing commercial hubs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-3 mb-6">
                {cityFilters.map((city, index) => (
                  <Badge
                    key={index}
                    variant={city.active ? "default" : "outline"}
                    className={`px-4 py-2 cursor-pointer transition-all duration-300 hover:scale-105 ${city.active ? "bg-primary text-white" : "hover:bg-primary/10"}`}
                  >
                    {city.name} ({city.plots} plots)
                  </Badge>
                ))}
              </div>

              <Card className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-primary" />
                    Proximity Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Metro connectivity",
                      "Airport access",
                      "Highway frontage",
                      "Mall proximity",
                      "Hospital vicinity",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-esg mr-3" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={landZoningMap}
                alt="Interactive zoning map with commercial development zones"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <MapPin className="h-8 w-8 mb-2" />
                  <h3 className="text-xl font-bold mb-1">Interactive Zoning Map</h3>
                  <p className="text-white/90">Explore commercial zones with development potential</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Land Size & Area Extent - Filter Panel */}

      {/* 5. Advanced Asset Targeting - Buyer Intent Mapping */}
      <section className="AssetTargeting_BuyerIntent py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Asset Targeting</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AI-powered recommendations based on your development intent
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {assetTargeting.map((target, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-b from-white to-secondary/10 border border-white/20 rounded-2xl overflow-hidden"
              >
                <CardHeader className="text-center pb-2">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <target.icon className="h-8 w-8 text-primary group-hover:text-solar transition-colors" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{target.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{target.description}</p>
                  <div className="space-y-2">
                    {target.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs">
                        <CheckCircle className="h-3 w-3 text-esg mr-2" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Value-Added Land Strategy - ESG & Ownership Models */}

      {/* 8. FAQs for Land Buyers - Accordion Component */}
      <section className="LandBuyer_FAQ py-20 gradient-cool">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Common questions about land acquisition and development process
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
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* 9. Contact & Submission Portal - Filterable Form */}
      <section className="Form_LandInquiry py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Submit Your Land Inquiry</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Request site visits or submit your land for evaluation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="relative">
              <img
                src={landSubmissionForm}
                alt="Land submission form interface"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl flex items-end">
                <div className="p-8 text-white">
                  <Target className="h-12 w-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">AI-Powered Matching</h3>
                  <p className="text-white/90">Advanced algorithms match your requirements with optimal land parcels</p>
                </div>
              </div>
            </div>

            <Card className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Land Inquiry Form</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">City</label>
                    <select className="w-full p-3 rounded-lg border border-gray-200 bg-white/80 backdrop-blur-sm">
                      <option>Select City</option>
                      <option>Chennai</option>
                      <option>Bengaluru</option>
                      <option>Hyderabad</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Plot Size</label>
                    <select className="w-full p-3 rounded-lg border border-gray-200 bg-white/80 backdrop-blur-sm">
                      <option>Any Size</option>
                      <option>&lt;5,000 sq.ft</option>
                      <option>5K–25K sq.ft</option>
                      <option>1 acre+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Intended Use</label>
                  <select className="w-full p-3 rounded-lg border border-gray-200 bg-white/80 backdrop-blur-sm">
                    <option>Select Development Type</option>
                    <option>Retail Mall</option>
                    <option>Office Tower</option>
                    <option>Mixed-Use</option>
                    <option>Lifestyle Center</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Budget Range</label>
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
                    <p className="text-sm text-gray-500">Upload site plans, surveys, or requirements</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white rounded-full py-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    Request Site Visit
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 rounded-full py-3 border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    Submit Land Proposal
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};
export default LandAssetsPage;
