import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { 
  Building2, 
  TrendingUp, 
  CheckCircle, 
  Clock, 
  DollarSign,
  FileText,
  Upload,
  MapPin,
  Calendar,
  Leaf,
  ShieldCheck,
  Timer,
  Store,
  ShoppingBag,
  Building,
  Trees,
  Blocks,
  Star,
  Award,
  Zap,
  ArrowRight,
  Moon,
  SunIcon
} from "lucide-react";

// Image imports
import sellerHandshake from "@/assets/seller-handshake.jpg";
import projectTimeline from "@/assets/project-timeline.jpg";
import constructionFoundation from "@/assets/construction-foundation-work.jpg";
import semiCompletedScaffolding from "@/assets/semi-completed-scaffolding.jpg";
import interiorFitout from "@/assets/interior-fitout-progress.jpg";
import completedWithTenants from "@/assets/completed-with-tenants.jpg";
import retailFloorBranded from "@/assets/retail-floor-branded.jpg";
import shoppingArcadeTraffic from "@/assets/shopping-arcade-traffic.jpg";
import highStreetFrontage from "@/assets/high-street-frontage.jpg";
import lifestyleCenterGreen from "@/assets/lifestyle-center-green.jpg";
import esgDashboard from "@/assets/esg-dashboard.jpg";
import legalComplianceReview from "@/assets/legal-compliance-review.jpg";
import sellerFaqTablet from "@/assets/seller-faq-tablet.jpg";

// Data structures
const projectStages = [
  {
    id: "started",
    title: "Started Projects",
    description: "Land acquired, foundation work begun",
    status: "🟢",
    cta: "Submit Site Details",
    image: constructionFoundation,
    completion: 15,
    completionText: "0-20% Complete"
  },
  {
    id: "semi-completed",
    title: "Semi-Completed Projects", 
    description: "Structural work and basic construction in progress",
    status: "🟡",
    cta: "Upload Progress Report",
    image: semiCompletedScaffolding,
    completion: 40,
    completionText: "20-50% Complete"
  },
  {
    id: "halfway",
    title: "Halfway Through",
    description: "Interior work and finishing stages underway",
    status: "🟠", 
    cta: "Schedule Site Visit",
    image: interiorFitout,
    completion: 65,
    completionText: "50-70% Complete"
  },
  {
    id: "completed",
    title: "Completed Projects",
    description: "Ready for occupancy with active tenants",
    status: "🔵",
    cta: "Share Asset Valuation", 
    image: completedWithTenants,
    completion: 95,
    completionText: "90-100% Complete"
  }
];

const assetTypes = [
  {
    title: "Retail & Office Floors",
    icon: Store,
    image: retailFloorBranded,
    description: "Individual floors in commercial buildings with high rental potential"
  },
  {
    title: "Shopping Arcades / Plazas", 
    icon: ShoppingBag,
    image: shoppingArcadeTraffic,
    description: "Retail complexes and shopping centers with foot traffic"
  },
  {
    title: "High Street Commercial Units",
    icon: Building2,
    image: highStreetFrontage, 
    description: "Prime street-facing commercial properties in busy areas"
  },
  {
    title: "Lifestyle Centers / Business Parks",
    icon: Trees,
    image: lifestyleCenterGreen,
    description: "Mixed-use developments with amenities and green spaces"
  },
  {
    title: "Mixed-Use Commercial Blocks",
    icon: Blocks,
    image: completedWithTenants,
    description: "Multi-purpose commercial developments with diverse income streams"
  }
];

const valuationSteps = [
  {
    title: "ESG Upgrade Potential",
    description: "We assess solar installation possibilities, carbon credit eligibility, and sustainability improvements that can increase property value by 15-25%.",
    icon: Leaf,
    image: esgDashboard,
    features: ["Solar rooftop analysis", "Carbon credit assessment", "Green certification potential", "Energy efficiency upgrades"]
  },
  {
    title: "Legal and Compliance Checks",
    description: "Comprehensive review of all documentation, regulatory compliance, and legal clearances to ensure smooth transaction processing.",
    icon: ShieldCheck,
    image: legalComplianceReview,
    features: ["Title verification", "Approval status check", "Compliance audit", "Documentation review"]
  },
  {
    title: "Timeline for Offer and Closure", 
    description: "Fast-track evaluation process with transparent timelines and regular updates throughout the acquisition journey.",
    icon: Timer,
    image: projectTimeline,
    features: ["48-hour initial assessment", "7-day due diligence", "Transparent pricing", "Quick closure process"]
  }
];

const faqs = [
  {
    question: "What documents are needed for property evaluation?",
    answer: "We require property documents, approvals (CMDA/DTCP), completion certificates, legal clearances, and recent photographs. Our team will guide you through the complete documentation process and help gather any missing paperwork."
  },
  {
    question: "How long does the evaluation process take?",
    answer: "Initial assessment: 48-72 hours for basic evaluation. Complete due diligence: 7-14 working days including site visits. We provide regular updates and maintain transparent communication throughout the process."
  },
  {
    question: "What types of properties are preferred?",
    answer: "We focus on commercial properties with ESG upgrade potential, prime locations, clear titles, and strong rental yield prospects. Both completed and under-construction properties are considered, especially those with growth potential."
  },
  {
    question: "How do you determine the property valuation?",
    answer: "Our valuation considers location premiums, current market rates, ESG upgrade potential, legal status, rental yield prospects, and future development possibilities using advanced analytics and market intelligence."
  },
  {
    question: "What deal structures do you offer?",
    answer: "We offer flexible deal structures including outright purchase, joint development partnerships, revenue sharing models, and staged payments. The structure depends on the property type, completion status, and seller preferences."
  }
];

const SellPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Scroll-aware header transparency
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* 1. Hero Section - Sell Your Commercial Property */}
      <section className="SellPage_HeroBanner relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={sellerHandshake} alt="Professional handshake representing successful commercial property transaction" className="w-full h-full object-cover" />
          {/* Glassmorphism overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
          <div className="absolute inset-0 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative z-10 container text-center text-white px-4">
          <Badge className="mb-6 bg-white/20 backdrop-blur-md text-white border border-white/30 font-semibold animate-fade-in">
            Premium Property Acquisition
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            Unlock Value from Your Commercial Asset
            <span className="text-gradient bg-gradient-to-r from-solar to-esg bg-clip-text text-transparent"> Direct Acquisition</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-white/90 animate-fade-in">
            Fast evaluations, flexible deal structures, and ESG-aligned upgrades for sellers. Transform your property into a future-ready asset.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-fade-in group" asChild>
            <Link to="#inquiry-form">
              Submit Your Property for Evaluation 
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      {/* 2. Project Stage Segmentation - Progress Grid */}
      <section className="ProjectStage_Filter py-20 bg-secondary/5">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Project Stage Segmentation</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We purchase properties at every stage of development with tailored evaluation processes and competitive pricing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {projectStages.map((stage, index) => (
              <Card key={stage.id} className="group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border border-white/30 rounded-xl overflow-hidden hover:-translate-y-1" style={{
                animationDelay: `${index * 100}ms`
              }}>
                <div className="relative h-48 overflow-hidden">
                  <img src={stage.image} alt={stage.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                    <span className="text-sm font-semibold text-primary">{stage.completionText}</span>
                  </div>
                  <div className="absolute top-4 right-4 text-3xl filter drop-shadow-lg">
                    {stage.status}
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">{stage.status}</span>
                    <Badge variant="outline" className="text-xs">
                      {stage.completion}% Complete
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{stage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{stage.description}</p>
                  <Progress value={stage.completion} className="mb-4" />
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-white transition-all">
                    {stage.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img src={projectTimeline} alt="Development timeline showing various project stages" className="w-full h-64 object-cover" />
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

      {/* 3. Asset Type Categories - Icon-Based Cards */}
      <section className="AssetCard_Categories py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Asset Type Categories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We specialize in various commercial property types across different markets and development stages
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {assetTypes.map((asset, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden" style={{
                animationDelay: `${index * 100}ms`
              }}>
                <div className="relative h-48 overflow-hidden">
                  <img src={asset.image} alt={asset.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <asset.icon className="absolute top-4 left-4 h-8 w-8 text-white group-hover:text-solar transition-colors duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 text-primary group-hover:text-solar transition-colors">{asset.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{asset.description}</p>
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    Submit This Asset Type
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* 4. FAQs for Sellers - Accordion Component */}
      <section className="FAQ_Section py-20 bg-secondary/5">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get answers to common questions about our property acquisition process
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white/60 backdrop-blur-sm rounded-xl px-6 border border-white/20 shadow-lg">
                  <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="mt-16 text-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl max-w-3xl mx-auto">
              <img src={sellerFaqTablet} alt="Professional reviewing seller information on tablet" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 flex items-center justify-center">
                <div className="text-center text-white">
                  <FileText className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Seller Support Portal</h3>
                  <p className="text-white/90">Expert guidance throughout the selling process</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contact & Submission Portal - Filterable Form */}
      <section id="inquiry-form" className="Contact_InquiryForm py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Contact & Submission Portal</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Submit your property details for a comprehensive evaluation and competitive offer
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden shadow-xl">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8">
                  <CardTitle className="text-2xl mb-2">Property Submission Form</CardTitle>
                  <p className="text-muted-foreground">Provide details about your commercial property for evaluation</p>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold">Property Location *</label>
                      <Input placeholder="Enter city and area" className="transition-all focus:ring-2 focus:ring-primary/20" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold">Project Stage *</label>
                      <select className="w-full h-10 px-3 rounded-md border border-input bg-background transition-all focus:ring-2 focus:ring-primary/20">
                        <option>Started (0-20%)</option>
                        <option>Semi-completed (20-50%)</option>
                        <option>Halfway (50-70%)</option>
                        <option>Completed (90-100%)</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold">Asset Type *</label>
                      <select className="w-full h-10 px-3 rounded-md border border-input bg-background transition-all focus:ring-2 focus:ring-primary/20">
                        <option>Retail & Office Floors</option>
                        <option>Shopping Arcades</option>
                        <option>High Street Commercial</option>
                        <option>Lifestyle Centers</option>
                        <option>Mixed-Use Blocks</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold">Expected Value (₹) *</label>
                      <Input placeholder="Enter expected value in Crores" className="transition-all focus:ring-2 focus:ring-primary/20" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Approvals & Permissions</label>
                    <Textarea placeholder="List all approvals (CMDA/DTCP), permissions, and certifications obtained" className="min-h-[100px] transition-all focus:ring-2 focus:ring-primary/20" />
                  </div>

                  <div className="space-y-4">
                    <label className="text-sm font-semibold">Upload Documents</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="border-2 border-dashed border-primary/30 rounded-xl p-6 text-center hover:border-primary hover:bg-primary/5 transition-all cursor-pointer group">
                        <Upload className="h-8 w-8 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
                        <p className="text-sm font-medium">Site Photos</p>
                        <p className="text-xs text-muted-foreground">JPG, PNG up to 10MB</p>
                      </div>
                      <div className="border-2 border-dashed border-primary/30 rounded-xl p-6 text-center hover:border-primary hover:bg-primary/5 transition-all cursor-pointer group">
                        <FileText className="h-8 w-8 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
                        <p className="text-sm font-medium">Floor Plans</p>
                        <p className="text-xs text-muted-foreground">PDF, JPG up to 5MB</p>
                      </div>
                      <div className="border-2 border-dashed border-primary/30 rounded-xl p-6 text-center hover:border-primary hover:bg-primary/5 transition-all cursor-pointer group">
                        <ShieldCheck className="h-8 w-8 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
                        <p className="text-sm font-medium">Legal Documents</p>
                        <p className="text-xs text-muted-foreground">PDF up to 20MB</p>
                      </div>
                    </div>
                  </div>

                  <Button size="lg" className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group">
                    Get Your Property Evaluated
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl overflow-hidden">
                <CardHeader className="p-6">
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-6 w-6 text-primary" />
                    Why Choose Us?
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Zap className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Fast Evaluation</h4>
                      <p className="text-sm text-muted-foreground">48-hour initial assessment</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Competitive Pricing</h4>
                      <p className="text-sm text-muted-foreground">Market-leading valuations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Leaf className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">ESG Upgrades</h4>
                      <p className="text-sm text-muted-foreground">Value-added improvements</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Legal Support</h4>
                      <p className="text-sm text-muted-foreground">End-to-end assistance</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl overflow-hidden">
                <CardHeader className="p-6">
                  <CardTitle>Quick Contact</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-sm">Chennai, Bengaluru, Hyderabad</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="text-sm">Mon-Sat: 9 AM - 7 PM</span>
                  </div>
                  <Button variant="outline" className="w-full hover:bg-primary hover:text-white transition-all">
                    Schedule a Call
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SellPage;