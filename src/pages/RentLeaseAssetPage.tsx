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
  Building2, 
  Utensils, 
  Gem, 
  Briefcase, 
  ShoppingBag, 
  Home,
  Calendar,
  RotateCcw,
  FileText,
  Settings,
  Wrench,
  Puzzle,
  Brain,
  Car,
  Sun,
  Recycle,
  Monitor,
  Upload,
  CheckCircle,
  MapPin,
  Clock,
  Star,
  Shield
} from "lucide-react";

// Import images
import leasedRetailInterior from "@/assets/leased-retail-interior.jpg";
import retailFloorInterior from "@/assets/retail-floor-interior.jpg";
import leaseAgreementSigning from "@/assets/lease-agreement-signing.jpg";
import smartInfrastructureBlueprint from "@/assets/smart-infrastructure-blueprint.jpg";
import solarSmartMeter from "@/assets/solar-smart-meter.jpg";
import leasingProposalForm from "@/assets/leasing-proposal-form.jpg";

const RentLeaseAssetPage = () => {
  const [formData, setFormData] = useState({
    tenantType: "",
    location: "",
    leaseDuration: "",
    facilityNeeds: "",
    message: ""
  });

  const tenantTypes = [
    {
      icon: Utensils,
      title: "Restaurants & Cafés",
      description: "View Restaurant Spaces",
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: Gem,
      title: "Jewellery Stores",
      description: "Explore Jewellery Showrooms",
      color: "from-yellow-500/20 to-amber-500/20"
    },
    {
      icon: Briefcase,
      title: "Corporate Offices",
      description: "Discover Office Floors",
      color: "from-blue-500/20 to-indigo-500/20"
    },
    {
      icon: ShoppingBag,
      title: "Retail Brands",
      description: "Browse Retail Units",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: Home,
      title: "Lifestyle Tenants",
      description: "Check Lifestyle Spaces",
      color: "from-green-500/20 to-emerald-500/20"
    }
  ];

  const leaseModels = [
    {
      icon: Calendar,
      title: "Long-Term Leasing",
      description: "5–15 years",
      features: ["Stable rates", "Priority maintenance", "Customization rights"]
    },
    {
      icon: RotateCcw,
      title: "Short-Term / Pop-Up",
      description: "3 months - 2 years",
      features: ["Flexible terms", "Quick setup", "Minimal deposits"]
    },
    {
      icon: FileText,
      title: "Lease-to-Own Options",
      description: "Buy after lease period",
      features: ["Equity building", "Purchase options", "Tax benefits"]
    },
    {
      icon: Settings,
      title: "Custom Structuring",
      description: "For anchor tenants",
      features: ["Bespoke terms", "Revenue sharing", "Co-development"]
    }
  ];

  const facilities = [
    {
      icon: Wrench,
      title: "Standard Facilities",
      description: "HVAC, fire safety, power backup, water",
      color: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: Puzzle,
      title: "Flexible Facilities",
      description: "Fit-out customization, branding zones, tech upgrades",
      color: "from-purple-500/10 to-violet-500/10"
    },
    {
      icon: Brain,
      title: "AI-Adaptive Interiors",
      description: "Smart lighting, occupancy sensors",
      color: "from-emerald-500/10 to-teal-500/10"
    },
    {
      icon: Car,
      title: "Car Parking",
      description: "Dedicated and shared zones",
      color: "from-orange-500/10 to-red-500/10"
    }
  ];

  const esgFeatures = [
    {
      icon: Sun,
      title: "Solar-powered Infrastructure",
      description: "Renewable energy integration"
    },
    {
      icon: Recycle,
      title: "ESG-compliant Interiors",
      description: "Carbon credit eligibility"
    },
    {
      icon: Monitor,
      title: "Smart Building Management",
      description: "IoT-enabled optimization"
    },
    {
      icon: FileText,
      title: "REIT-grade Documentation",
      description: "Investor-ready dashboards"
    }
  ];

  const featuredListings = [
    {
      title: "Premium Retail Space - CBD",
      location: "Downtown Business District",
      size: "2,500 sq ft",
      lease: "₹45,000/month",
      features: ["Street facing", "24/7 security", "Parking included"],
      badge: "Featured"
    },
    {
      title: "Restaurant Space - Mall Adjacent",
      location: "High Street Commercial",
      size: "3,200 sq ft",
      lease: "₹65,000/month",
      features: ["Kitchen ready", "Outdoor seating", "High footfall"],
      badge: "New"
    },
    {
      title: "Office Floor - Tech Hub",
      location: "IT Corridor",
      size: "5,000 sq ft",
      lease: "₹85,000/month",
      features: ["Furnished", "Metro connectivity", "Cafeteria access"],
      badge: "Premium"
    }
  ];

  const faqs = [
    {
      question: "What's included in standard lease packages?",
      answer: "Standard lease packages include HVAC systems, fire safety equipment, power backup, water supply, basic security systems, and common area maintenance. Parking allocation and waste management services are also included."
    },
    {
      question: "Can I customize interiors?",
      answer: "Yes, we offer flexible interior customization options. Tenants can modify layouts, install branding elements, upgrade lighting systems, and add specialized equipment based on their business needs, subject to building regulations."
    },
    {
      question: "What's the process for site visits and approvals?",
      answer: "Schedule a site visit through our portal, complete the tenant application form, provide business documentation, undergo credit verification, and receive lease approval within 5-7 business days."
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      {/* Hero Section */}
      <section 
        className="rent_lease_hero_banner relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${leasedRetailInterior})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 backdrop-blur-sm" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Rent or Lease High-Value Commercial Properties
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Tailored to Your Business
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              From jewellery showrooms to restaurants, we offer flexible, tenant-ready spaces
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Explore Available Spaces
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-md bg-white/10 transition-all duration-300 transform hover:scale-105">
                Submit Leasing Inquiry
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tenant Type Segmentation */}
      <section className="tenant_type_segmentation_section py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Find Your Perfect Space
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover commercial spaces designed for your specific business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {tenantTypes.map((type, index) => (
              <Card key={index} className="tenant_card group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border-0 bg-gradient-to-br from-background via-background/90 to-primary/5 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <type.icon className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {type.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {type.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lease Models & Duration */}
      <section className="lease_models_duration_section py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Flexible Lease Options
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the lease structure that fits your business strategy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaseModels.map((model, index) => (
              <Card key={index} className="lease_model_card h-full hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-background via-background/90 to-secondary/5 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                    <model.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-center text-lg">{model.title}</CardTitle>
                  <CardDescription className="text-center text-primary font-semibold">
                    {model.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {model.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
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

      {/* Tenant Requirements & Facility Options */}
      <section className="facility_options_section py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              World-Class Facilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              State-of-the-art amenities designed for modern businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <Card key={index} className="facility_card group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-background via-background/90 to-muted/20 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${facility.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <facility.icon className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {facility.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {facility.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ESG Features */}
      <section className="esg_features_section py-20 bg-gradient-to-b from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Sustainable & Smart
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              ESG-compliant spaces with cutting-edge technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {esgFeatures.map((feature, index) => (
              <Card key={index} className="esg_feature_card group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-background via-background/90 to-green-500/5 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-green-600 transition-colors">
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

      {/* Featured Listings */}
      <section className="featured_listings_section py-20 bg-gradient-to-b from-secondary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Featured Properties
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Premium spaces available for immediate lease
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredListings.map((listing, index) => (
              <Card key={index} className="listing_card group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-background via-background/90 to-primary/5 backdrop-blur-sm overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20">
                  <img
                    src={index === 0 ? retailFloorInterior : index === 1 ? leaseAgreementSigning : smartInfrastructureBlueprint}
                    alt={listing.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary text-white">
                    {listing.badge}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {listing.title}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {listing.location}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Size: {listing.size}</span>
                      <span className="text-lg font-semibold text-primary">{listing.lease}</span>
                    </div>
                    <div className="space-y-2">
                      {listing.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-sm">
                          <Star className="w-4 h-4 text-yellow-500" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="tenant_faq_section py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about leasing with us
              </p>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border/50 rounded-xl px-6 bg-gradient-to-r from-background via-background/90 to-primary/5 backdrop-blur-sm"
                >
                  <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors">
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

      {/* Contact & Leasing Portal */}
      <section 
        className="contact_leasing_portal_section py-20 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url(${leasingProposalForm})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 backdrop-blur-sm" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Start Your Leasing Journey
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Get personalized recommendations and connect with our leasing experts
              </p>
            </div>
            
            <Card className="border-0 bg-gradient-to-br from-background/95 via-background/90 to-primary/5 backdrop-blur-md shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Submit Leasing Inquiry</CardTitle>
                <CardDescription className="text-center">
                  Tell us about your requirements and we'll find the perfect space
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="tenantType">Tenant Type</Label>
                    <Select onValueChange={(value) => handleInputChange('tenantType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your business type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="restaurant">Restaurant/Café</SelectItem>
                        <SelectItem value="jewellery">Jewellery Store</SelectItem>
                        <SelectItem value="office">Corporate Office</SelectItem>
                        <SelectItem value="retail">Retail Brand</SelectItem>
                        <SelectItem value="lifestyle">Lifestyle Tenant</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="location">Preferred Location</Label>
                    <Select onValueChange={(value) => handleInputChange('location', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cbd">Central Business District</SelectItem>
                        <SelectItem value="mall">Mall Adjacent</SelectItem>
                        <SelectItem value="highstreet">High Street</SelectItem>
                        <SelectItem value="techpark">Tech Park</SelectItem>
                        <SelectItem value="suburban">Suburban Center</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="leaseDuration">Lease Duration</Label>
                    <Select onValueChange={(value) => handleInputChange('leaseDuration', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="short">Short-term (3 months - 2 years)</SelectItem>
                        <SelectItem value="long">Long-term (5-15 years)</SelectItem>
                        <SelectItem value="lease-to-own">Lease-to-own</SelectItem>
                        <SelectItem value="custom">Custom structure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="facilityNeeds">Special Requirements</Label>
                    <Input
                      placeholder="e.g., Kitchen setup, High ceilings"
                      value={formData.facilityNeeds}
                      onChange={(e) => handleInputChange('facilityNeeds', e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Additional Details</Label>
                  <Textarea
                    placeholder="Tell us more about your business and specific requirements..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={4}
                  />
                </div>
                
                <div className="flex items-center gap-4 p-4 border border-dashed border-primary/30 rounded-lg">
                  <Upload className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-medium">Upload Documents</p>
                    <p className="text-sm text-muted-foreground">
                      Business license, financial statements, or requirements document
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1 bg-primary hover:bg-primary/90 text-white">
                    Request Leasing Proposal
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Book a Site Visit
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

export default RentLeaseAssetPage;