import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, MapPin, Zap, Droplets, Car, Sun, Leaf, TrendingUp, DollarSign, Users, Calendar, FileText } from "lucide-react";
import landToCommercialImage from "@/assets/land-to-commercial.jpg";
import landZoningMapImage from "@/assets/land-zoning-map.jpg";
import infrastructureBlueprintImage from "@/assets/infrastructure-blueprint.jpg";
import sitePlanRevenueImage from "@/assets/site-plan-revenue.jpg";
import investorHandshakeImage from "@/assets/investor-handshake.jpg";
import landSubmissionFormImage from "@/assets/land-submission-form.jpg";

const LandAssetsPage = () => {
  const landTypes = [
    {
      title: "Urban Plots for High Street Retail",
      description: "Prime city locations perfect for retail and commercial frontage",
      icon: Building2,
    },
    {
      title: "Suburban Parcels for Business Parks",
      description: "Strategic suburban land for office complexes and corporate campuses",
      icon: Building2,
    },
    {
      title: "Agricultural Land for Agrivoltaics",
      description: "Rural parcels ideal for solar farming and sustainable agriculture",
      icon: Sun,
    },
    {
      title: "Industrial Zones for Solar-Enabled Logistics",
      description: "Industrial land for warehousing and distribution with solar integration",
      icon: Building2,
    },
  ];

  const infrastructureFeatures = [
    {
      title: "Internal Roads",
      description: "Well-planned road networks for optimal accessibility",
      icon: Car,
    },
    {
      title: "Car Parking Zones",
      description: "Strategic parking allocation for commercial efficiency",
      icon: Car,
    },
    {
      title: "Electric and Water Connections",
      description: "Premium utility infrastructure with smart metering",
      icon: Zap,
    },
    {
      title: "Solar Panel Integration",
      description: "Pre-planned solar infrastructure for ESG compliance",
      icon: Sun,
    },
    {
      title: "ESG-Compliant Site Planning",
      description: "Sustainable development with carbon credit potential",
      icon: Leaf,
    },
  ];

  const monetizationStreams = [
    {
      title: "Develop and Sell Floor-wise Commercial Units",
      description: "Transform land into profitable commercial spaces with modular sales approach",
      icon: Building2,
    },
    {
      title: "Lease Built Assets to Businesses",
      description: "Generate recurring rental income through strategic leasing partnerships",
      icon: DollarSign,
    },
    {
      title: "Generate Solar Power and Monetize Carbon Credits",
      description: "Create additional revenue streams through renewable energy and ESG compliance",
      icon: Sun,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* SEO Meta Tags */}
      <title>Land Assets - Strategic Land Acquisition | CommercialDev</title>
      
      {/* Hero Section */}
      <section id="hero_land_assets_section" className="relative py-20 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${landToCommercialImage})` }}
        >
          <div className="absolute inset-0 bg-commercial-navy/80"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Strategic Land Acquisition for Commercial Growth
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in">
              We buy land, build infrastructure, and transform it into high-yield commercial spaces.
            </p>
            <Button variant="hero" size="lg" className="animate-fade-in">
              Explore Land Opportunities
            </Button>
          </div>
        </div>
      </section>

      {/* What We Acquire Section */}
      <section id="land_types_grid" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-commercial-navy mb-4">
              What We Acquire
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Strategic land acquisition across diverse zones for maximum development potential and investor returns
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {landTypes.map((type, index) => (
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
              src={landZoningMapImage} 
              alt="Map overlay with land zoning icons"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-medium"
            />
          </div>
        </div>
      </section>

      {/* Infrastructure Development Section */}
      <section id="land_infrastructure_features" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-commercial-navy mb-4">
              Infrastructure Development
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive infrastructure planning that transforms raw land into commercial-ready assets
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
              src={infrastructureBlueprintImage} 
              alt="Infrastructure blueprint with solar and utility overlays"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-medium"
            />
          </div>
        </div>
      </section>

      {/* Monetization Strategy Section */}
      <section id="land_monetization_model" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-commercial-navy mb-4">
              Monetization Strategy
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Multiple revenue streams from strategic land development and ESG-aligned commercial infrastructure
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
              src={sitePlanRevenueImage} 
              alt="Commercial site plan with revenue overlays"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-medium"
            />
          </div>
        </div>
      </section>

      {/* Fundraising Section */}
      <section id="land_fundraising_section" className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-commercial-navy mb-6">
                Invest in Land. Build the Future.
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We raise capital to acquire and develop land into ESG-aligned commercial assets that deliver 
                sustainable returns while contributing to carbon credit generation and sustainable infrastructure.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-commercial rounded-full"></div>
                  <span className="text-muted-foreground">Strategic land acquisition in high-growth corridors</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-commercial rounded-full"></div>
                  <span className="text-muted-foreground">ESG-compliant development with solar integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-commercial rounded-full"></div>
                  <span className="text-muted-foreground">Multiple exit strategies for investor flexibility</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="commercial" size="lg">
                  Join Our Fundraising
                </Button>
                <Button variant="outline" size="lg">
                  Learn About Our REIT
                </Button>
              </div>
            </div>
            <div>
              <img 
                src={investorHandshakeImage} 
                alt="Investor meeting and land development dashboard"
                className="w-full rounded-lg shadow-medium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="land_cta_section" className="py-20 bg-commercial text-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Have Land to Sell or Develop?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Partner with us to transform your land into profitable commercial assets with ESG alignment 
                and sustainable infrastructure that maximizes both financial and environmental returns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="investor" size="lg">
                  Submit Your Land
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-commercial">
                  Talk to Our Development Team
                </Button>
              </div>
            </div>
            <div>
              <img 
                src={landSubmissionFormImage} 
                alt="Land submission form and consultation calendar"
                className="w-full rounded-lg shadow-medium"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandAssetsPage;