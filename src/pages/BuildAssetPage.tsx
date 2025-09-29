import { Building, Shield, Leaf, Zap, Car, Settings, Eye, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import commercialFacadeImage from "@/assets/commercial-facade-modern.jpg";
import commercialInteriorImage from "@/assets/commercial-office-interior.jpg";
import materialPaletteImage from "@/assets/material-palette-showcase.jpg";
import fireSafetyImage from "@/assets/fire-safety-system.jpg";
import rooftopSolarImage from "@/assets/rooftop-solar-building.jpg";
import evChargingImage from "@/assets/ev-charging-parking.jpg";
import smartDashboardImage from "@/assets/smart-building-dashboard.jpg";
import proposalFormImage from "@/assets/construction-proposal-form.jpg";

const BuildAssetPage = () => {
  const architecturalFeatures = [
    {
      icon: Building,
      title: "Façade Design",
      description: "Modern, modular, brand-ready",
      image: commercialFacadeImage
    },
    {
      icon: Settings,
      title: "Interior Layouts",
      description: "Ergonomic, scalable, tenant-adaptable",
      image: commercialInteriorImage
    },
    {
      icon: Leaf,
      title: "Material Palette",
      description: "Premium finishes, ESG-compliant sourcing",
      image: materialPaletteImage
    },
    {
      icon: Zap,
      title: "AI-Adaptive Design",
      description: "Smart lighting, occupancy sensors, energy optimization",
      image: smartDashboardImage
    }
  ];

  const safetyFeatures = [
    "Earthquake-Resistant Framework",
    "Fire Safety Systems: sprinklers, smoke detectors, evacuation protocols",
    "Load-Bearing & Wind Resistance Metrics",
    "Compliance: NBC, IS Codes, global safety standards"
  ];

  const esgFeatures = [
    {
      icon: "🌞",
      title: "Solar Panel Integration",
      description: "Renewable energy generation with grid-tie capabilities",
      image: rooftopSolarImage
    },
    {
      icon: "♻️",
      title: "Rainwater Harvesting",
      description: "Greywater recycling and water conservation systems",
      image: rooftopSolarImage
    },
    {
      icon: "🌿",
      title: "Biophilic Design",
      description: "Garden zones and nature-integrated spaces",
      image: commercialInteriorImage
    },
    {
      icon: "📉",
      title: "Carbon Credit Eligibility",
      description: "ESG reporting and sustainability certifications",
      image: smartDashboardImage
    }
  ];

  const infrastructureFeatures = [
    {
      icon: Car,
      title: "Multi-level Car Parking",
      description: "EV charging stations and smart parking solutions",
      image: evChargingImage
    },
    {
      icon: Zap,
      title: "Redundant Connections",
      description: "Electric & water backup systems",
      image: smartDashboardImage
    },
    {
      icon: Shield,
      title: "Access Control",
      description: "Internal roads and security infrastructure",
      image: commercialFacadeImage
    },
    {
      icon: Settings,
      title: "Smart Office Tech",
      description: "IoT, AI, and cloud-integrated systems",
      image: smartDashboardImage
    }
  ];

  const addOnCapabilities = [
    "Modular Expansion Zones",
    "Vertical Extension Ready (additional floors)",
    "AI-Driven Building Management Systems (BMS)",
    "REIT-Grade Documentation & Investor Dashboards"
  ];

  const faqItems = [
    {
      question: "What safety certifications are included?",
      answer: "All buildings include NBC compliance, IS code certifications, fire safety approvals, and earthquake resistance validations as per Indian building standards."
    },
    {
      question: "Can interiors be customized?",
      answer: "Yes, our modular design allows for flexible interior configurations to meet specific tenant requirements while maintaining structural integrity."
    },
    {
      question: "Is solar generation metered separately?",
      answer: "Solar installations include separate metering for renewable energy generation, allowing for carbon credit tracking and potential revenue sharing."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="build_asset_hero_banner relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${commercialFacadeImage})` }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Built for Business,<br />Designed for Impact
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            From façade to fire safety, every detail is engineered for performance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="hero bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Eye className="mr-2 h-5 w-5" />
              View Build Specifications
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Building className="mr-2 h-5 w-5" />
              Explore Completed Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Architectural Design & Aesthetic Excellence */}
      <section className="architectural_design_section py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Architectural Excellence</h2>
            <p className="text-xl text-muted-foreground">Modern design meets functional innovation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {architecturalFeatures.map((feature, index) => (
              <Card key={index} className="architectural_feature_card group hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="text-center">
                  <feature.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Structural Stability & Safety Engineering */}
      <section className="structural_safety_section py-20 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Safety & Compliance</h2>
            <p className="text-xl text-muted-foreground">Built to the highest safety standards</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {safetyFeatures.map((feature, index) => (
                <div key={index} className="safety_feature_item flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg">{feature}</p>
                </div>
              ))}
            </div>
            <div className="relative">
              <img 
                src={fireSafetyImage} 
                alt="Fire Safety System"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Green Building & Sustainability Features */}
      <section className="esg_features_section py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">ESG & Sustainability</h2>
            <p className="text-xl text-muted-foreground">Building a greener future</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {esgFeatures.map((feature, index) => (
              <Card key={index} className="esg_feature_card text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative h-32 overflow-hidden rounded-lg">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Infrastructure */}
      <section className="infrastructure_features_section py-20 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Operational Infrastructure</h2>
            <p className="text-xl text-muted-foreground">Smart systems for modern business</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {infrastructureFeatures.map((feature, index) => (
              <Card key={index} className="infrastructure_feature_card group hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="text-center">
                  <feature.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Add-On Capabilities */}
      <section className="addon_capabilities_section py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Future-Ready Capabilities</h2>
            <p className="text-xl text-muted-foreground">Designed for growth and adaptation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {addOnCapabilities.map((capability, index) => (
              <Card key={index} className="addon_capability_card p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <Settings className="h-8 w-8 text-primary flex-shrink-0" />
                  <p className="text-lg font-medium">{capability}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="project_showcase_section py-20 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Project Gallery</h2>
            <p className="text-xl text-muted-foreground">Showcasing architectural excellence</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="project_showcase_card overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative h-64">
                <img 
                  src={commercialFacadeImage} 
                  alt="Commercial Project"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                  ESG Certified
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Modern Business Complex</h3>
                <p className="text-muted-foreground">50,000 sq.ft • Solar Ready • Smart Systems</p>
              </CardContent>
            </Card>
            <Card className="project_showcase_card overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative h-64">
                <img 
                  src={smartDashboardImage} 
                  alt="Smart Building"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                  AI-Enabled
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Smart Office Tower</h3>
                <p className="text-muted-foreground">75,000 sq.ft • IoT Integrated • Carbon Neutral</p>
              </CardContent>
            </Card>
            <Card className="project_showcase_card overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative h-64">
                <img 
                  src={evChargingImage} 
                  alt="Sustainable Complex"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                  LEED Gold
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Eco Business Park</h3>
                <p className="text-muted-foreground">1,20,000 sq.ft • EV Ready • Rainwater Harvesting</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="buyer_tenant_faq_section py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Everything you need to know about our buildings</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-lg font-medium">{item.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact & Inquiry Portal */}
      <section className="contact_inquiry_portal_section py-20 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get Technical Details</h2>
            <p className="text-xl text-muted-foreground">Request comprehensive project documentation</p>
          </div>
          <Card className="p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select city" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="chennai">Chennai</SelectItem>
                      <SelectItem value="bangalore">Bangalore</SelectItem>
                      <SelectItem value="hyderabad">Hyderabad</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="asset-type">Asset Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select asset type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="office">Office Complex</SelectItem>
                      <SelectItem value="retail">Retail Space</SelectItem>
                      <SelectItem value="mixed">Mixed-Use</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="build-stage">Build Stage</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select stage" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="planning">Planning</SelectItem>
                      <SelectItem value="construction">Under Construction</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="esg-preferences">ESG Preferences</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select ESG features" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="solar">Solar Integration</SelectItem>
                      <SelectItem value="leed">LEED Certification</SelectItem>
                      <SelectItem value="carbon-neutral">Carbon Neutral</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Additional Requirements</Label>
                <Textarea 
                  id="message"
                  placeholder="Describe your specific requirements..."
                  className="min-h-[120px]"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button type="submit" size="lg" className="flex-1">
                  <Send className="mr-2 h-5 w-5" />
                  Request Technical Deck
                </Button>
                <Button type="button" variant="outline" size="lg" className="flex-1">
                  <Eye className="mr-2 h-5 w-5" />
                  Book a Site Visit
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default BuildAssetPage;