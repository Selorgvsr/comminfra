import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Leaf, 
  Recycle, 
  Building, 
  Droplets, 
  Zap, 
  Sun,
  Brain,
  TrendingUp,
  Users,
  Shield,
  BarChart3,
  Lightbulb,
  Wind,
  TreePine,
  Upload,
  CheckCircle,
  Target,
  Award,
  Calculator,
  FileText,
  Calendar,
  MapPin
} from "lucide-react";

// Import images
import esgSustainableBuilding from "@/assets/esg-sustainable-commercial-building.jpg";
import energyEfficientFacade from "@/assets/energy-efficient-facade.jpg";
import rainwaterHarvestingSystem from "@/assets/rainwater-harvesting-system.jpg";
import smartBuildingDashboard from "@/assets/smart-building-dashboard.jpg";
import esgDashboard from "@/assets/esg-dashboard.jpg";
import rooftopSolarBuilding from "@/assets/rooftop-solar-building.jpg";
import solarSmartMeter from "@/assets/solar-smart-meter.jpg";

const SustainabilityPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    esgInterest: "",
    consultationMode: "",
    message: ""
  });

  const greenFeatures = [
    {
      icon: Recycle,
      title: "Energy-Efficient Design",
      description: "Advanced materials and sustainable construction methods",
      color: "from-green-500/20 to-emerald-500/20",
      image: energyEfficientFacade
    },
    {
      icon: Building,
      title: "Low Carbon Footprint",
      description: "Eco-friendly façade and interior materials",
      color: "from-blue-500/20 to-cyan-500/20",
      image: energyEfficientFacade
    },
    {
      icon: Droplets,
      title: "Water Management",
      description: "Rainwater harvesting and natural ventilation systems",
      color: "from-blue-400/20 to-teal-500/20",
      image: rainwaterHarvestingSystem
    },
    {
      icon: Brain,
      title: "Smart Energy Systems",
      description: "AI-powered building management for optimization",
      color: "from-purple-500/20 to-violet-500/20",
      image: smartBuildingDashboard
    }
  ];

  const esgPillars = [
    {
      icon: Leaf,
      title: "Environmental",
      description: "Solar power, waste reduction, carbon neutrality",
      metrics: ["40% Energy Reduction", "100% Renewable Power", "Carbon Neutral"],
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: Users,
      title: "Social",
      description: "Inclusive design, wellness zones, community spaces",
      metrics: ["Accessible Design", "Wellness Certified", "Community Impact"],
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Shield,
      title: "Governance",
      description: "Compliance, transparency, REIT-grade reporting",
      metrics: ["100% Compliance", "ESG Certified", "Transparent Reporting"],
      color: "from-purple-500/20 to-violet-500/20"
    }
  ];

  const solarMetrics = [
    {
      icon: Sun,
      title: "Solar Capacity",
      value: "2.5 MW",
      description: "Installed rooftop solar power"
    },
    {
      icon: Zap,
      title: "Energy Generated",
      value: "3.2 GWh",
      description: "Annual clean energy production"
    },
    {
      icon: TrendingUp,
      title: "Cost Savings",
      value: "₹45L",
      description: "Annual electricity savings"
    },
    {
      icon: Leaf,
      title: "CO2 Avoided",
      value: "2,100 tons",
      description: "Annual carbon emissions reduced"
    }
  ];

  const carbonCredits = [
    {
      icon: Target,
      title: "Emission Reduction",
      value: "65%",
      description: "Below industry baseline"
    },
    {
      icon: Award,
      title: "Credits Generated",
      value: "1,850",
      description: "Verified carbon credits annually"
    },
    {
      icon: Calculator,
      title: "Revenue Generated",
      value: "₹18.5L",
      description: "Annual carbon credit income"
    }
  ];

  const advancedCapabilities = [
    {
      icon: Brain,
      title: "AI Energy Management",
      description: "Machine learning algorithms optimize energy consumption in real-time",
      features: ["Predictive analytics", "Automated controls", "Performance optimization"]
    },
    {
      icon: BarChart3,
      title: "ESG Dashboards",
      description: "Real-time sustainability metrics for investors and stakeholders",
      features: ["Live ESG tracking", "Impact visualization", "Compliance monitoring"]
    },
    {
      icon: FileText,
      title: "REIT Sustainability Reporting",
      description: "Investment-grade sustainability documentation and certification",
      features: ["REIT compliance", "ESG certification", "Investor reporting"]
    }
  ];

  const faqs = [
    {
      question: "How are carbon credits calculated and monetized?",
      answer: "Carbon credits are calculated based on verified emission reductions compared to industry baselines. We work with certified agencies to measure, verify, and monetize carbon savings through accredited carbon markets, generating additional revenue streams for our properties."
    },
    {
      question: "What ESG certifications do your properties achieve?",
      answer: "Our properties target LEED Gold/Platinum, BREEAM Excellent, and GRIHA 5-star certifications. We also pursue specialized certifications like WELL Building Standard for health and wellness, and are working towards net-zero carbon certifications."
    },
    {
      question: "How do tenants benefit from solar power installations?",
      answer: "Tenants enjoy reduced electricity costs through our solar power sharing model. Depending on the lease structure, tenants can save 15-30% on energy costs while contributing to their own sustainability goals and corporate ESG commitments."
    },
    {
      question: "What is the ROI on sustainability investments?",
      answer: "Sustainability features typically show 12-18% IRR through energy savings, carbon credit revenue, premium rents, and higher asset valuations. Green buildings also enjoy lower vacancy rates and attract ESG-focused tenants willing to pay premium rents."
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-green-500/5">
      {/* Hero Section */}
      <section 
        className="sustainability_hero_banner relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${esgSustainableBuilding})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-transparent to-blue-500/20 backdrop-blur-sm" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              We Build for Tomorrow
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                Green, Smart, and Profitable
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              ESG-compliant assets with solar power generation and carbon credit monetization for sustainable returns
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Explore Our Sustainability Strategy
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-md bg-white/10 transition-all duration-300 transform hover:scale-105">
                Request ESG Report
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Green Building Features */}
      <section className="green_features_section py-20 bg-gradient-to-b from-background to-green-500/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Sustainable Building Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge green technologies and sustainable design principles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {greenFeatures.map((feature, index) => (
              <Card key={index} className="green_feature_card group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border-0 bg-gradient-to-br from-background via-background/90 to-green-500/5 backdrop-blur-sm overflow-hidden">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className={`absolute top-3 right-3 w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center backdrop-blur-sm`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-lg font-semibold group-hover:text-green-600 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ESG Integration Pillars */}
      <section className="esg_pillars_section py-20 bg-gradient-to-b from-green-500/5 to-blue-500/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              ESG Integration Framework
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive environmental, social, and governance excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {esgPillars.map((pillar, index) => (
              <Card key={index} className="esg_pillar_card group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-background via-background/90 to-muted/20 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className={`w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br ${pillar.color} border border-primary/20 shadow-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <pillar.icon className="w-12 h-12 text-primary drop-shadow-sm" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-green-600 transition-colors">
                    {pillar.title}
                  </CardTitle>
                  <CardDescription className="text-center">
                    {pillar.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {pillar.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="font-medium">{metric}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solar Power Generation Metrics */}
      <section 
        className="solar_metrics_section py-20 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url(${rooftopSolarBuilding})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-transparent to-orange-500/20 backdrop-blur-sm" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Solar Power Generation
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Clean energy production with measurable impact and returns
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solarMetrics.map((metric, index) => (
              <Card key={index} className="solar_metric_card group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-background/95 via-background/90 to-yellow-500/10 backdrop-blur-md">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <metric.icon className="w-8 h-8 text-yellow-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-yellow-600 group-hover:text-yellow-700 transition-colors">
                    {metric.value}
                  </CardTitle>
                  <CardDescription className="text-lg font-semibold">
                    {metric.title}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    {metric.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Carbon Credit Monetization */}
      <section className="carbon_credits_section py-20 bg-gradient-to-b from-blue-500/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Carbon Credit Monetization
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform sustainability efforts into measurable financial returns
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {carbonCredits.map((credit, index) => (
              <Card key={index} className="carbon_credit_card group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-background via-background/90 to-green-500/5 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <credit.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-green-600 group-hover:text-green-700 transition-colors">
                    {credit.value}
                  </CardTitle>
                  <CardDescription className="text-lg font-semibold">
                    {credit.title}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    {credit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Capabilities */}
      <section className="advanced_capabilities_section py-20 bg-gradient-to-b from-background to-purple-500/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Advanced ESG Capabilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Next-generation sustainability technology and reporting
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advancedCapabilities.map((capability, index) => (
              <Card key={index} className="advanced_capability_card group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-background via-background/90 to-purple-500/5 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <capability.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl text-center group-hover:text-purple-600 transition-colors">
                    {capability.title}
                  </CardTitle>
                  <CardDescription className="text-center">
                    {capability.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {capability.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-purple-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="sustainability_faq_section py-20 bg-gradient-to-b from-purple-500/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Sustainability FAQs
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about our ESG approach
              </p>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border/50 rounded-xl px-6 bg-gradient-to-r from-background via-background/90 to-green-500/5 backdrop-blur-sm"
                >
                  <AccordionTrigger className="text-left font-semibold hover:text-green-600 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact & ESG Inquiry Portal */}
      <section 
        className="esg_inquiry_portal_section py-20 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url(${esgDashboard})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-transparent to-blue-500/20 backdrop-blur-sm" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Get Your ESG Strategy Started
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Connect with our sustainability experts for personalized ESG solutions
              </p>
            </div>
            
            <Card className="border-0 bg-gradient-to-br from-background/95 via-background/90 to-green-500/5 backdrop-blur-md shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-center">ESG Inquiry Portal</CardTitle>
                <CardDescription className="text-center">
                  Request sustainability reports and book consultation sessions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization</Label>
                    <Input
                      placeholder="Company/Organization name"
                      value={formData.organization}
                      onChange={(e) => handleInputChange('organization', e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="esgInterest">ESG Interest Area</Label>
                    <Select onValueChange={(value) => handleInputChange('esgInterest', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select area of interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="carbon-credits">Carbon Credit Monetization</SelectItem>
                        <SelectItem value="solar-power">Solar Power Generation</SelectItem>
                        <SelectItem value="esg-reporting">ESG Reporting & Compliance</SelectItem>
                        <SelectItem value="green-building">Green Building Certification</SelectItem>
                        <SelectItem value="reit-sustainability">REIT Sustainability</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="consultationMode">Consultation Preference</Label>
                    <Select onValueChange={(value) => handleInputChange('consultationMode', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Preferred consultation mode" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="virtual">Virtual Meeting</SelectItem>
                        <SelectItem value="in-person">In-Person Visit</SelectItem>
                        <SelectItem value="site-visit">Property Site Visit</SelectItem>
                        <SelectItem value="report-only">ESG Report Only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Specific Requirements</Label>
                  <Textarea
                    placeholder="Tell us about your sustainability goals and specific ESG requirements..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={4}
                  />
                </div>
                
                <div className="flex items-center gap-4 p-4 border border-dashed border-green-500/30 rounded-lg">
                  <Upload className="w-8 h-8 text-green-600" />
                  <div>
                    <p className="font-medium">Upload ESG Documents</p>
                    <p className="text-sm text-muted-foreground">
                      Sustainability goals, compliance requirements, or investment criteria
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                    Request ESG Report
                  </Button>
                  <Button variant="outline" className="flex-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                    Book Sustainability Consultation
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

export default SustainabilityPage;