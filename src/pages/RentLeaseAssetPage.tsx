import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, MapPin, Zap, Droplets, Car, Sun, Leaf, TrendingUp, DollarSign, Users, Calendar, FileText, ShoppingBag, Clock, CheckCircle } from "lucide-react";
import commercialPlazaBustlingImage from "@/assets/commercial-plaza-bustling.jpg";
import leasedRetailInteriorImage from "@/assets/leased-retail-interior.jpg";
import smartBuildingDashboardImage from "@/assets/smart-building-dashboard.jpg";
import leaseAgreementSigningImage from "@/assets/lease-agreement-signing.jpg";
import brandedRetailConsultationImage from "@/assets/branded-retail-consultation.jpg";
import leasingProposalFormImage from "@/assets/leasing-proposal-form.jpg";

const RentLeaseAssetPage = () => {
  const rentableAssetTypes = [
    {
      title: "Retail Units",
      description: "Prime retail spaces with high foot traffic and modern amenities",
      icon: ShoppingBag,
    },
    {
      title: "Office Floors",
      description: "Professional office spaces with flexible layouts and smart infrastructure",
      icon: Building2,
    },
    {
      title: "Mixed-Use Commercial Spaces",
      description: "Versatile spaces combining retail, office, and lifestyle amenities",
      icon: Building2,
    },
    {
      title: "Lifestyle Centers & Shopping Arcades",
      description: "Entertainment and dining spaces in vibrant commercial hubs",
      icon: Users,
    },
    {
      title: "Business Parks",
      description: "Corporate campuses with integrated sustainability features",
      icon: Building2,
    },
  ];

  const infrastructureFeatures = [
    {
      title: "Car Parking Zones",
      description: "Ample parking with EV charging stations",
      icon: Car,
    },
    {
      title: "Electric and Water Connections",
      description: "Smart utility infrastructure with real-time monitoring",
      icon: Zap,
    },
    {
      title: "Internal Roads & Smart Access",
      description: "Well-planned access routes with security systems",
      icon: MapPin,
    },
    {
      title: "Solar Panel Integration",
      description: "Renewable energy systems reducing operational costs",
      icon: Sun,
    },
    {
      title: "ESG-Compliant Facilities",
      description: "Sustainable design meeting environmental standards",
      icon: Leaf,
    },
  ];

  const leasingModels = [
    {
      title: "Long-Term Lease",
      description: "Stable, multi-year agreements with competitive rates and renewal options",
      icon: Calendar,
    },
    {
      title: "Short-Term Rental",
      description: "Flexible rental periods for seasonal businesses and pop-up concepts",
      icon: Clock,
    },
    {
      title: "Custom Agreements",
      description: "Tailored leasing solutions based on specific business requirements",
      icon: CheckCircle,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* SEO Meta Tags */}
      <title>Rent/Lease Assets - Commercial Leasing | CommercialDev</title>
      
      {/* Hero Section */}
      <section id="hero_rent_lease_section" className="relative py-20 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${commercialPlazaBustlingImage})` }}
        >
          <div className="absolute inset-0 bg-commercial-navy/80"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Rent or Lease Commercial Spaces That Work for You
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in">
              From retail floors to lifestyle centers, we offer flexible leasing options backed by smart infrastructure and solar-powered sustainability.
            </p>
            <Button variant="hero" size="lg" className="animate-fade-in">
              Explore Leasing Options
            </Button>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section id="rentable_asset_types_grid" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-commercial-navy mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Diverse commercial spaces designed for maximum flexibility and business success with ESG compliance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {rentableAssetTypes.map((type, index) => (
              <Card key={index} className="text-center hover-scale transition-all duration-300 border-commercial/20 bg-commercial/5">
                <CardContent className="p-6">
                  <type.icon className="h-12 w-12 text-commercial mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-commercial-navy mb-2">
                    {type.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {type.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <img 
              src={leasedRetailInteriorImage} 
              alt="Interior view of a leased retail floor with branding"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-medium"
            />
          </div>
        </div>
      </section>

      {/* Infrastructure & Amenities Section */}
      <section id="lease_infrastructure_features" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-commercial-navy mb-4">
              Infrastructure & Amenities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              World-class infrastructure and amenities that support your business operations and growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
            {infrastructureFeatures.map((feature, index) => (
              <div key={index} className="text-center bg-commercial-navy p-6 rounded-lg border border-commercial/20">
                <div className="bg-commercial/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-commercial" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/80">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <img 
              src={smartBuildingDashboardImage} 
              alt="Smart building dashboard with solar and utility overlays"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-medium"
            />
          </div>
        </div>
      </section>

      {/* Monetization & Client Flexibility Section */}
      <section id="lease_monetization_model" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-commercial-navy mb-4">
              Monetization & Client Flexibility
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Flexible leasing models designed to match your business needs and growth trajectory
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {leasingModels.map((model, index) => (
              <Card key={index} className="text-center hover-scale transition-all duration-300 border-commercial/20">
                <CardContent className="p-8">
                  <div className="bg-commercial/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <model.icon className="h-8 w-8 text-commercial" />
                  </div>
                  <h3 className="text-xl font-semibold text-commercial-navy mb-4">
                    {model.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {model.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <img 
              src={leaseAgreementSigningImage} 
              alt="Lease agreement signing and client onboarding dashboard"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-medium"
            />
          </div>
        </div>
      </section>

      {/* Lease to Businesses & Brands Section */}
      <section id="lease_client_section" className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-commercial-navy mb-6">
                Looking to Lease a Commercial Space?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We offer branded, ready-to-operate units tailored to your business model. 
                Our spaces come with complete infrastructure, smart amenities, and flexible 
                terms that grow with your business.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-commercial rounded-full"></div>
                  <span className="text-muted-foreground">Move-in ready spaces with modern amenities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-commercial rounded-full"></div>
                  <span className="text-muted-foreground">Flexible lease terms and competitive pricing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-commercial rounded-full"></div>
                  <span className="text-muted-foreground">Integrated sustainability features reducing costs</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="commercial" size="lg">
                  Submit Leasing Inquiry
                </Button>
                <Button variant="outline" size="lg">
                  Talk to Our Leasing Team
                </Button>
              </div>
            </div>
            <div>
              <img 
                src={brandedRetailConsultationImage} 
                alt="Branded retail space and consultation calendar"
                className="w-full rounded-lg shadow-medium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="lease_cta_section" className="py-20 bg-commercial text-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Lease with Confidence?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Discover commercial spaces that drive business success with smart infrastructure, 
                sustainable design, and flexible terms that adapt to your growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="investor" size="lg">
                  View Available Spaces
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-commercial">
                  Schedule a Consultation
                </Button>
              </div>
            </div>
            <div>
              <img 
                src={leasingProposalFormImage} 
                alt="Leasing proposal form and contact icons"
                className="w-full rounded-lg shadow-medium"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RentLeaseAssetPage;