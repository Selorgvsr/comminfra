import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Building2, 
  MapPin, 
  Hammer, 
  DollarSign, 
  Home, 
  Car,
  Sun,
  Leaf,
  Brain,
  BarChart3,
  Shield,
  Zap,
  Users,
  Award
} from "lucide-react";

// Import images
import heroImage from "@/assets/hero-commercial-complex.jpg";
import investorImage from "@/assets/investor-handshake.jpg";
import landImage from "@/assets/aerial-business-park.jpg";
import buildingImage from "@/assets/sustainable-growth-building.jpg";
import salesImage from "@/assets/commercial-for-sale.jpg";
import retailImage from "@/assets/commercial-office-interior.jpg";
import infrastructureImage from "@/assets/infrastructure-blueprint.jpg";
import solarImage from "@/assets/rooftop-solar-building.jpg";
import carbonImage from "@/assets/carbon-credits-commercial-building.jpg";
import smartImage from "@/assets/smart-building-dashboard.jpg";
import reitImage from "@/assets/reit-yield-dashboard.jpg";
import modularImage from "@/assets/commercial-facade-modern.jpg";
import yieldImage from "@/assets/rental-yield-analytics.jpg";
import certificationImage from "@/assets/sustainable-growth-building.jpg";
import esgUIImage from "@/assets/esg-dashboard.jpg";
import contactImage from "@/assets/contact-hero-image.jpg";

const Homepage = () => {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    interestArea: "",
    location: "",
    message: ""
  });

  const corePillars = [
    {
      icon: DollarSign,
      title: "Fund Raising",
      description: "Empowering real estate ventures through strategic capital partnerships and investor relations. We align financial growth with sustainable development, ensuring long-term asset value and investor confidence.",
      image: investorImage,
      link: "/reit-invest",
      cta: "View Investment Models"
    },
    {
      icon: MapPin,
      title: "Land Assets",
      description: "Curating prime land parcels with high appreciation potential. Our strategic acquisitions focus on location, connectivity, and zoning to maximize future commercial and industrial opportunities.",
      image: landImage,
      link: "/land-assets",
      cta: "Explore Land Opportunities"
    },
    {
      icon: Building2,
      title: "Built Assets",
      description: "Developing high-quality, energy-efficient commercial buildings that combine design excellence with operational sustainability. Every project is engineered for durability and performance.",
      image: buildingImage,
      link: "/build-asset",
      cta: "View Build Specifications"
    },
    {
      icon: Home,
      title: "Selling Assets",
      description: "Offering tailor-made sales solutions for investors and clients. We bridge opportunities through data-driven marketing, maximizing ROI, and seamless transaction experiences.",
      image: salesImage,
      link: "/sell",
      cta: "Sell or Buy Commercial Property"
    },
    {
      icon: Hammer,
      title: "Rental / Lease Assets",
      description: "Delivering flexible rental and leasing models for long-term business occupancy. Our portfolio includes ready-to-move spaces designed for modern commercial needs.",
      image: retailImage,
      link: "/rent-lease-asset",
      cta: "Browse Lease Options"
    },
    {
      icon: Car,
      title: "Commercial Infrastructure",
      description: "Building integrated commercial ecosystems that fuel business growth. From logistics parks to tech hubs, we create future-ready spaces that empower industries.",
      image: infrastructureImage,
      link: "/projects",
      cta: "Explore Infrastructure Features"
    }
  ];

  const advancedCapabilities = [
    {
      icon: Sun,
      title: "Solar Power Generation",
      description: "On-site renewable energy with grid integration",
      image: solarImage
    },
    {
      icon: Leaf,
      title: "Carbon Credit Monetization",
      description: "ESG compliance with revenue generation",
      image: carbonImage
    },
    {
      icon: Brain,
      title: "AI-Powered Building Management",
      description: "Smart systems for energy optimization",
      image: smartImage
    },
    {
      icon: BarChart3,
      title: "REIT-Grade Dashboards",
      description: "Investor reporting and ESG tracking",
      image: reitImage
    }
  ];

  const valuePropositions = [
    {
      icon: Shield,
      title: "Modular Design Logic",
      description: "Scalable and flexible commercial spaces"
    },
    {
      icon: Users,
      title: "Investor-Grade Clarity",
      description: "Transparent reporting and compliance"
    },
    {
      icon: Leaf,
      title: "ESG & Sustainability Focus",
      description: "Environmental responsibility with profitability"
    },
    {
      icon: Zap,
      title: "Seamless Integration",
      description: "Design, technology, and business logic unified"
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="Homepage_Container">
      {/* Hero Banner */}
      <section className="Homepage_HeroBanner relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Commercial Infrastructure Asset
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in">
            Modular development, ESG alignment, and investor-ready assets across India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
              Explore Our Platform
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Core Pillars Section */}
      <section className="Homepage_CorePillars py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Strategic Pillars</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive commercial real estate solutions driving sustainable growth and investor success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {corePillars.map((pillar, index) => (
              <Card 
                key={index} 
                className="PillarCard_Container group relative overflow-hidden backdrop-blur-sm bg-card/80 border border-border/50 hover:border-primary/30 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={pillar.image} 
                    alt={pillar.title}
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm p-3 rounded-xl shadow-lg">
                    <pillar.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                </div>
                <CardHeader className="space-y-3 pb-4">
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {pillar.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed text-muted-foreground line-clamp-5">
                    {pillar.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Link to={pillar.link}>
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl"
                    >
                      {pillar.cta}
                    </Button>
                  </Link>
                </CardContent>
                {/* Glassmorphism overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Add-On Capabilities */}
      <section className="Homepage_AdvancedCapabilities py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Advanced ESG Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Next-generation features for sustainable and profitable commercial development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advancedCapabilities.map((capability, index) => (
              <Card key={index} className="CapabilityCard_Container text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="relative mb-4">
                    <img 
                      src={capability.image} 
                      alt={capability.title}
                      className="w-full h-32 object-cover rounded-lg mb-4"
                    />
                    <capability.icon className="absolute top-2 right-2 h-6 w-6 text-white bg-primary/80 rounded p-1" />
                  </div>
                  <h3 className="font-semibold mb-2">{capability.title}</h3>
                  <p className="text-sm text-muted-foreground">{capability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="Homepage_ValueProposition py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Leading commercial real estate development with proven expertise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {valuePropositions.map((prop, index) => (
              <Card key={index} className="ValuePropCard_Container p-6 backdrop-blur-sm bg-card/50 border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <prop.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{prop.title}</h3>
                    <p className="text-muted-foreground">{prop.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <img 
              src={modularImage} 
              alt="Modular Architecture"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* REIT & Rental Yield Investment Highlights */}
      <section className="Homepage_REITHighlights py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">REIT & Rental Yield Investment</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Snapshot of REIT-compatible assets and rental income streams
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src={yieldImage} 
                alt="Rental Yield Analytics"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Card className="text-center p-4">
                  <CardContent className="pt-4">
                    <div className="text-3xl font-bold text-primary mb-2">12.5%</div>
                    <p className="text-sm text-muted-foreground">Average Rental Yield</p>
                  </CardContent>
                </Card>
                <Card className="text-center p-4">
                  <CardContent className="pt-4">
                    <div className="text-3xl font-bold text-primary mb-2">95%</div>
                    <p className="text-sm text-muted-foreground">Occupancy Rate</p>
                  </CardContent>
                </Card>
                <Card className="text-center p-4">
                  <CardContent className="pt-4">
                    <div className="text-3xl font-bold text-primary mb-2">7 Years</div>
                    <p className="text-sm text-muted-foreground">Avg Lease Tenure</p>
                  </CardContent>
                </Card>
                <Card className="text-center p-4">
                  <CardContent className="pt-4">
                    <div className="text-3xl font-bold text-primary mb-2">8.2%</div>
                    <p className="text-sm text-muted-foreground">Solar Yield</p>
                  </CardContent>
                </Card>
              </div>
              <Link to="/reit-invest">
                <Button className="w-full mt-6">View Investment Opportunities</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability & ESG Commitment */}
      <section className="Homepage_ESGCommitment py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Sustainability & ESG Commitment</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Environmental responsibility with profitable returns
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="ESGCard_Certification text-center">
              <CardContent className="pt-6">
                <img 
                  src={certificationImage} 
                  alt="Green Building Certification"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold mb-2">Green Building Certifications</h3>
                <p className="text-sm text-muted-foreground">LEED and GRIHA certified developments</p>
              </CardContent>
            </Card>
            <Card className="ESGCard_Solar text-center">
              <CardContent className="pt-6">
                <img 
                  src={solarImage} 
                  alt="Solar Infrastructure"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <Sun className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold mb-2">Solar Infrastructure</h3>
                <p className="text-sm text-muted-foreground">Renewable energy generation</p>
              </CardContent>
            </Card>
            <Card className="ESGCard_Carbon text-center">
              <CardContent className="pt-6">
                <img 
                  src={carbonImage} 
                  alt="Carbon Credit Monetization"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <Leaf className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold mb-2">Carbon Credit Monetization</h3>
                <p className="text-sm text-muted-foreground">Environmental impact tracking</p>
              </CardContent>
            </Card>
            <Card className="ESGCard_Dashboard text-center">
              <CardContent className="pt-6">
                <img 
                  src={esgUIImage} 
                  alt="ESG Dashboards"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <BarChart3 className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold mb-2">ESG Dashboards</h3>
                <p className="text-sm text-muted-foreground">Investor and tenant reporting</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Link to="/sustainability">
              <Button size="lg">Learn About Our ESG Strategy</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact & Inquiry Portal */}
      <section className="Homepage_ContactPortal py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to explore commercial real estate opportunities? Let's start the conversation.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={contactImage} 
                alt="Contact Us"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <Card className="Form_HomepageInquiry">
              <CardHeader>
                <CardTitle>Start Your Journey</CardTitle>
                <CardDescription>Fill out the form and we'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="organization">Organization</Label>
                      <Input
                        id="organization"
                        value={formData.organization}
                        onChange={(e) => handleInputChange("organization", e.target.value)}
                        placeholder="Company/Organization"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="interestArea">Interest Area</Label>
                      <Select value={formData.interestArea} onValueChange={(value) => handleInputChange("interestArea", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your interest" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="buy">Buy</SelectItem>
                          <SelectItem value="lease">Lease</SelectItem>
                          <SelectItem value="invest">Invest</SelectItem>
                          <SelectItem value="esg">ESG</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => handleInputChange("location", e.target.value)}
                        placeholder="Preferred location"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us about your requirements"
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Get in Touch
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;