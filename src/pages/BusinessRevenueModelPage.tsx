import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { Building2, FileText, Home, Sun, Recycle, Brain, HandshakeIcon, TrendingUp, PieChart, BarChart3, DollarSign, Target, Users, Upload, Calculator, Zap, Leaf, Shield, Globe } from "lucide-react";

// Import images
import buildRevenueDashboard from "@/assets/build-revenue-dashboard.jpg";
import propertyHandover from "@/assets/property-handover.jpg";
import sustainableGrowthBuilding from "@/assets/sustainable-growth-building.jpg";
import sitePlanRevenue from "@/assets/site-plan-revenue.jpg";
import investorHandshake from "@/assets/investor-handshake.jpg";
import commercialForSale from "@/assets/commercial-for-sale.jpg";
import leaseAgreementSigning from "@/assets/lease-agreement-signing.jpg";
import multiFloorCommercialBuilding from "@/assets/multi-floor-commercial-building.jpg";
import smartInfrastructureBlueprint from "@/assets/smart-infrastructure-blueprint.jpg";
import modernCommercialBuilding from "@/assets/modern-commercial-building.jpg";
import reitYieldDashboard from "@/assets/reit-yield-dashboard.jpg";
import jointDevelopmentPartnership from "@/assets/joint-development-partnership.jpg";
const BusinessRevenueModelPage = () => {
  const [formData, setFormData] = useState({
    investorType: "",
    assetClassInterest: "",
    esgPreferences: "",
    expectedROI: "",
    message: ""
  });
  const primaryRevenueStreams = [{
    icon: Building2,
    title: "Property Sales",
    description: "Floor-wise or full asset sales",
    metrics: "70% of total revenue",
    color: "from-blue-500/20 to-indigo-500/20",
    details: ["Unit sales", "Bulk transactions", "Institutional buyers"],
    image: commercialForSale
  }, {
    icon: FileText,
    title: "Lease Agreements",
    description: "Long-term leasing to corporates",
    metrics: "25% of total revenue",
    color: "from-green-500/20 to-emerald-500/20",
    details: ["5-15 year leases", "Corporate tenants", "Stable income"],
    image: leaseAgreementSigning
  }, {
    icon: Home,
    title: "Rental Income",
    description: "Flexible rentals for retail, office, lifestyle tenants",
    metrics: "15% of total revenue",
    color: "from-purple-500/20 to-pink-500/20",
    details: ["Monthly rentals", "Pop-up spaces", "Flexible terms"],
    image: multiFloorCommercialBuilding
  }];
  const sustainabilityStreams = [{
    icon: Sun,
    title: "Solar Power Generation",
    description: "On-site energy production",
    metrics: "₹2.5L/month avg",
    impact: "1,200 MW generated annually"
  }, {
    icon: Recycle,
    title: "Carbon Credit Monetization",
    description: "ESG-aligned income from green infrastructure",
    metrics: "₹8.5L/year",
    impact: "500 tons CO2 offset"
  }];
  const advancedRevenue = [{
    icon: Brain,
    title: "Smart Building Services",
    description: "AI, IoT, BMS optimization services",
    metrics: "₹15L setup + ₹3L/month",
    features: ["Energy optimization", "Predictive maintenance", "Tenant analytics"],
    image: modernCommercialBuilding
  }, {
    icon: PieChart,
    title: "REIT-Compatible Rental Yield",
    description: "Institutional-grade investment packaging",
    metrics: "8-12% annual yield",
    features: ["Professional management", "Quarterly distributions", "Tax efficiency"],
    image: reitYieldDashboard
  }, {
    icon: HandshakeIcon,
    title: "Joint Development Partnerships",
    description: "Asset enhancement collaborations",
    metrics: "20-30% profit sharing",
    features: ["Risk sharing", "Expertise leverage", "Market expansion"],
    image: jointDevelopmentPartnership
  }];
  const revenueMetrics = [{
    label: "Total Portfolio Value",
    value: "₹450 Cr",
    growth: "+18%"
  }, {
    label: "Annual Revenue",
    value: "₹85 Cr",
    growth: "+22%"
  }, {
    label: "Average ROI",
    value: "14.2%",
    growth: "+3.1%"
  }, {
    label: "ESG Revenue Share",
    value: "12%",
    growth: "+85%"
  }];
  const faqs = [{
    question: "How is solar revenue calculated?",
    answer: "Solar revenue is calculated based on energy generation capacity, grid feed-in tariffs, and power purchase agreements. Our installations typically generate 1,200 MW annually, with revenue ranging from ₹2-4 lakhs per month depending on capacity and local tariffs."
  }, {
    question: "What's the lease tenure range?",
    answer: "We offer flexible lease tenures ranging from 3 months for pop-up spaces to 15 years for anchor tenants. Most corporate leases are structured for 5-10 years with built-in escalation clauses and renewal options."
  }, {
    question: "Can I invest in rental-yielding assets?",
    answer: "Yes, we offer REIT-compatible investment opportunities with professional management, quarterly distributions, and annual yields of 8-12%. Minimum investment starts at ₹25 lakhs for institutional-grade assets."
  }];
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  return <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      {/* Hero Section */}
      <section className="revenue_model_hero_banner relative min-h-screen flex items-center justify-center overflow-hidden" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${buildRevenueDashboard})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 backdrop-blur-sm" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              How We Generate
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Revenue
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Diversified income streams across asset classes and ESG channels for sustainable growth
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Explore Our Revenue Strategy
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Revenue Streams */}
      <section className="primary_revenue_streams_section py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Primary Revenue Streams
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Core income generators driving sustainable business growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {primaryRevenueStreams.map((stream, index) => <Card key={index} className="revenue_stream_card group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-background via-background/90 to-primary/5 backdrop-blur-sm overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img src={stream.image} alt={stream.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className={`absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-br ${stream.color} flex items-center justify-center backdrop-blur-sm`}>
                    <stream.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {stream.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {stream.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <Badge variant="secondary" className="text-primary font-semibold">
                      {stream.metrics}
                    </Badge>
                  </div>
                  <ul className="space-y-2">
                    {stream.details.map((detail, detailIndex) => <li key={detailIndex} className="flex items-center gap-2 text-sm">
                        <TrendingUp className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {detail}
                      </li>)}
                  </ul>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Sustainability Revenue Streams */}
      <section className="sustainability_revenue_section py-20 bg-gradient-to-b from-muted/30 to-green-500/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Sustainability Revenue Streams
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              ESG-aligned income from green infrastructure and sustainable practices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {sustainabilityStreams.map((stream, index) => <Card key={index} className="sustainability_card group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-background via-background/90 to-green-500/5 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <stream.icon className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl group-hover:text-green-600 transition-colors mb-2">
                        {stream.title}
                      </CardTitle>
                      <CardDescription>
                        {stream.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <span className="text-sm font-medium">Revenue:</span>
                    <span className="text-lg font-bold text-green-600">{stream.metrics}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <span className="text-sm font-medium">ESG Impact:</span>
                    <span className="text-sm font-semibold text-blue-600">{stream.impact}</span>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Advanced Add-On Revenue */}
      <section className="advanced_revenue_section py-20 bg-gradient-to-b from-green-500/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Advanced Revenue Opportunities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Technology-driven and partnership-based income streams
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advancedRevenue.map((revenue, index) => <Card key={index} className="advanced_revenue_card group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-background via-background/90 to-secondary/5 backdrop-blur-sm overflow-hidden">
                <div className="relative h-40 overflow-hidden">
                  <img src={revenue.image} alt={revenue.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-3 right-3 w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center backdrop-blur-sm">
                    <revenue.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-secondary transition-colors">
                    {revenue.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {revenue.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <Badge variant="outline" className="text-secondary border-secondary/50 font-semibold">
                      {revenue.metrics}
                    </Badge>
                  </div>
                  <ul className="space-y-2">
                    {revenue.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <Zap className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                        {feature}
                      </li>)}
                  </ul>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Revenue Dashboard */}
      

      {/* FAQs */}
      <section className="revenue_faq_section py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Revenue Model FAQs
              </h2>
              <p className="text-xl text-muted-foreground">
                Understanding our diversified income approach
              </p>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="border border-border/50 rounded-xl px-6 bg-gradient-to-r from-background via-background/90 to-primary/5 backdrop-blur-sm">
                  <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact & Investor Inquiry */}
      <section className="investor_inquiry_section py-20 relative overflow-hidden" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url(${investorHandshake})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 backdrop-blur-sm" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Investor Partnership Inquiry
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Connect with our revenue strategy team for personalized investment opportunities
              </p>
            </div>
            
            <Card className="border-0 bg-gradient-to-br from-background/95 via-background/90 to-primary/5 backdrop-blur-md shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Request Revenue Strategy Deck</CardTitle>
                <CardDescription className="text-center">
                  Get detailed insights into our revenue model and investment opportunities
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="investorType">Investor Type</Label>
                    <Select onValueChange={value => handleInputChange('investorType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select investor type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="individual">Individual Investor</SelectItem>
                        <SelectItem value="institutional">Institutional Investor</SelectItem>
                        <SelectItem value="family-office">Family Office</SelectItem>
                        <SelectItem value="reit">REIT Fund</SelectItem>
                        <SelectItem value="pension">Pension Fund</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="assetClassInterest">Asset Class Interest</Label>
                    <Select onValueChange={value => handleInputChange('assetClassInterest', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select asset class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="office">Office Buildings</SelectItem>
                        <SelectItem value="retail">Retail Spaces</SelectItem>
                        <SelectItem value="mixed-use">Mixed-Use Developments</SelectItem>
                        <SelectItem value="logistics">Logistics & Warehouses</SelectItem>
                        <SelectItem value="all">Diversified Portfolio</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="esgPreferences">ESG Preferences</Label>
                    <Select onValueChange={value => handleInputChange('esgPreferences', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="ESG focus level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="essential">ESG Essential</SelectItem>
                        <SelectItem value="preferred">ESG Preferred</SelectItem>
                        <SelectItem value="focused">ESG Focused Only</SelectItem>
                        <SelectItem value="traditional">Traditional Focus</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="expectedROI">Expected ROI Range</Label>
                    <Select onValueChange={value => handleInputChange('expectedROI', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Target returns" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="8-10">8-10% Annual</SelectItem>
                        <SelectItem value="10-12">10-12% Annual</SelectItem>
                        <SelectItem value="12-15">12-15% Annual</SelectItem>
                        <SelectItem value="15+">15%+ Annual</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Investment Objectives & Questions</Label>
                  <Textarea placeholder="Tell us about your investment goals, timeline, and any specific questions about our revenue model..." value={formData.message} onChange={e => handleInputChange('message', e.target.value)} rows={4} />
                </div>
                
                <div className="flex items-center gap-4 p-4 border border-dashed border-primary/30 rounded-lg">
                  <Upload className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-medium">Upload Investment Documents</p>
                    <p className="text-sm text-muted-foreground">
                      Investment criteria, fund prospectus, or qualification documents
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1 bg-primary hover:bg-primary/90 text-white">
                    Request Revenue Deck
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Book a Strategy Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>;
};
export default BusinessRevenueModelPage;