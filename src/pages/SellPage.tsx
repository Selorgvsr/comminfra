import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Zap, Droplets, Car, Sun, Leaf, TrendingUp, Handshake, FileText, Calendar } from "lucide-react";
import sellHeroImage from "@/assets/sell-hero-commercial.jpg";
import multiFloorBuildingImage from "@/assets/multi-floor-commercial-building.jpg";
import rooftopSolarBuildingImage from "@/assets/rooftop-solar-building.jpg";
import propertyHandoverImage from "@/assets/property-handover.jpg";
import sellerHandshakeImage from "@/assets/seller-handshake.jpg";
import listingConsultationImage from "@/assets/listing-consultation.jpg";

const SellPage = () => {
  const saleFormats = [
    {
      title: "Floor-by-floor Commercial Units",
      description: "Individual commercial floors tailored for specific business needs",
      icon: Building2,
    },
    {
      title: "Full Retail or Office Complexes",
      description: "Complete commercial buildings for enterprise clients",
      icon: Building2,
    },
    {
      title: "Mixed-use Lifestyle Centers",
      description: "Integrated retail, office, and entertainment spaces",
      icon: Building2,
    },
    {
      title: "High Street Commercial Zones",
      description: "Prime location retail and commercial frontage",
      icon: Building2,
    },
  ];

  const valueFeatures = [
    {
      title: "Renovated Infrastructure",
      description: "Modernized facilities with premium finishes",
      icon: Building2,
    },
    {
      title: "ESG Upgrades",
      description: "Solar panels and water efficiency systems",
      icon: Sun,
    },
    {
      title: "Smart Connectivity",
      description: "Electric systems and internal road access",
      icon: Zap,
    },
    {
      title: "Carbon Credit Potential",
      description: "ESG-backed monetization opportunities",
      icon: Leaf,
    },
  ];

  const monetizationStreams = [
    {
      title: "Direct Sale to Investors",
      description: "Immediate capital realization through strategic sales to institutional investors or businesses",
      icon: TrendingUp,
    },
    {
      title: "Lease-to-Own Models",
      description: "Flexible ownership transition with ongoing revenue during lease period",
      icon: Handshake,
    },
    {
      title: "ESG-Backed Sale with Carbon Credits",
      description: "Premium pricing through bundled carbon credit potential and sustainability features",
      icon: Leaf,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* SEO Meta Tags */}
      <title>Sell Commercial Properties - CommercialDev | ESG-Aligned Real Estate Sales</title>
      
      {/* Hero Section */}
      <section id="hero_sell_section" className="relative py-20 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${sellHeroImage})` }}
        >
          <div className="absolute inset-0 bg-commercial-navy/80"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Sell Commercial Spaces with Confidence
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in">
              From floor-wise sales to full-scale commercial assets, we help you monetize with precision and purpose.
            </p>
            <Button variant="hero" size="lg" className="animate-fade-in">
              List Your Property
            </Button>
          </div>
        </div>
      </section>

      {/* What We Sell Section */}
      <section id="property_sale_formats" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-commercial-navy mb-4">
              What We Sell
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Diverse commercial property formats designed for maximum market appeal and investment potential
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {saleFormats.map((format, index) => (
              <Card key={index} className="text-center hover-scale transition-all duration-300 border-commercial/20 bg-commercial/5">
                <CardContent className="p-6">
                  <format.icon className="h-12 w-12 text-commercial mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-commercial-navy mb-2">
                    {format.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {format.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <img 
              src={multiFloorBuildingImage} 
              alt="Modern multi-floor commercial building with visible floor sections"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-medium"
            />
          </div>
        </div>
      </section>

      {/* Value-Added Selling Section */}
      <section id="value_added_selling_features" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-commercial-navy mb-4">
              Value-Added Selling
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enhanced properties with premium infrastructure and ESG compliance for maximum market value
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {valueFeatures.map((feature, index) => (
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
              src={rooftopSolarBuildingImage} 
              alt="Commercial building with rooftop completely covered in solar panels"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-medium"
            />
          </div>
        </div>
      </section>

      {/* Monetization Strategy Section */}
      <section id="monetization_sell_model" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-commercial-navy mb-4">
              Monetization Strategy
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Multiple revenue streams designed to maximize returns and provide flexible exit strategies
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {monetizationStreams.map((stream, index) => (
              <Card key={index} className="text-center hover-scale transition-all duration-300 border-commercial/20">
                <CardContent className="p-8">
                  <div className="bg-commercial/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <stream.icon className="h-8 w-8 text-commercial" />
                  </div>
                  <h3 className="text-xl font-semibold text-commercial-navy mb-4">
                    {stream.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {stream.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <img 
              src={propertyHandoverImage} 
              alt="Commercial property handover and investor dashboard"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-medium"
            />
          </div>
        </div>
      </section>

      {/* Sell to Us Section */}
      <section id="third_party_sell_section" className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-commercial-navy mb-6">
                Have a Commercial Property to Sell?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We acquire high-potential commercial assets and enhance them through strategic infrastructure upgrades, 
                ESG compliance improvements, and smart technology integration before bringing them to market.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-commercial rounded-full"></div>
                  <span className="text-muted-foreground">Fast acquisition process with competitive pricing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-commercial rounded-full"></div>
                  <span className="text-muted-foreground">Professional property evaluation and market analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-commercial rounded-full"></div>
                  <span className="text-muted-foreground">ESG enhancement and value addition expertise</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="commercial" size="lg">
                  Submit Your Property
                </Button>
                <Button variant="outline" size="lg">
                  Talk to Our Acquisition Team
                </Button>
              </div>
            </div>
            <div>
              <img 
                src={sellerHandshakeImage} 
                alt="Seller handshake and property evaluation"
                className="w-full rounded-lg shadow-medium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="sell_cta_section" className="py-20 bg-commercial text-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Sell with Purpose?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join our network of successful commercial property sellers who have maximized their returns 
                through our strategic approach to ESG-aligned real estate transactions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="investor" size="lg">
                  List Now
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-commercial">
                  Schedule a Consultation
                </Button>
              </div>
            </div>
            <div>
              <img 
                src={listingConsultationImage} 
                alt="Commercial property listing form and consultation calendar"
                className="w-full rounded-lg shadow-medium"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SellPage;