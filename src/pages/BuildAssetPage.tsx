import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Wrench, Zap, Car, Droplets, Sun, TrendingUp, DollarSign, Target } from "lucide-react";
import constructionToLifestyleCenter from "@/assets/construction-to-lifestyle-center.jpg";
import commercialPlazaRender from "@/assets/commercial-plaza-render.jpg";
import smartInfrastructureBlueprint from "@/assets/smart-infrastructure-blueprint.jpg";
import buildRevenueDashboard from "@/assets/build-revenue-dashboard.jpg";
import constructionInvestorMeeting from "@/assets/construction-investor-meeting.jpg";
import constructionProposalForm from "@/assets/construction-proposal-form.jpg";

const BuildAssetPage = () => {
  const assetTypes = [
    {
      title: "Retail and Office Complexes",
      description: "Multi-story commercial buildings with flexible floor plans and modern amenities.",
      icon: Building2,
    },
    {
      title: "Mixed-Use Commercial Buildings",
      description: "Integrated spaces combining retail, office, and lifestyle amenities.",
      icon: Target,
    },
    {
      title: "Lifestyle Centers",
      description: "Open-air shopping centers with entertainment and dining options.",
      icon: TrendingUp,
    },
    {
      title: "Solar-Enabled Business Parks",
      description: "Corporate campuses with integrated renewable energy infrastructure.",
      icon: Sun,
    },
  ];

  const infrastructureFeatures = [
    {
      title: "Internal Roads & Parking",
      description: "Comprehensive transportation infrastructure",
      icon: Car,
    },
    {
      title: "Electric & Water Connections",
      description: "Modern utility systems and smart metering",
      icon: Zap,
    },
    {
      title: "Smart Building Systems",
      description: "IoT-enabled building management and automation",
      icon: Wrench,
    },
    {
      title: "Solar Panel Integration",
      description: "Renewable energy systems for sustainability",
      icon: Sun,
    },
    {
      title: "ESG-Compliant Design",
      description: "Environmental and social governance standards",
      icon: Droplets,
    },
  ];

  const monetizationPaths = [
    {
      title: "Sell Floor-by-Floor",
      description: "Individual unit sales to investors and businesses",
      revenue: "Direct Capital Returns",
    },
    {
      title: "Lease to Businesses",
      description: "Long-term rental agreements with corporate tenants",
      revenue: "Recurring Rental Income",
    },
    {
      title: "Solar Power Generation",
      description: "Carbon credit monetization and energy sales",
      revenue: "Sustainable Revenue Streams",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* SEO Meta Tags */}
      <title>Build Assets - Commercial Development | CommercialDev</title>
      
      {/* Hero Section */}
      <section id="hero_build_asset_section" className="relative py-20 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${constructionToLifestyleCenter})` }}
        >
          <div className="absolute inset-0 bg-commercial-navy/80"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Build Commercial Assets That Drive Growth
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in">
              From blueprint to business-ready, we develop modular spaces with smart infrastructure and solar-powered sustainability.
            </p>
            <Button variant="hero" size="lg" className="animate-fade-in">
              Start Building with Us
            </Button>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section id="asset_types_grid" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-commercial-navy mb-4">
              What We Build
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We develop diverse commercial assets designed for maximum flexibility and ESG compliance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {assetTypes.map((asset, index) => (
              <Card key={index} className="text-center hover-scale transition-all duration-300 border-commercial/20">
                <CardContent className="p-6">
                  <asset.icon className="h-12 w-12 text-commercial mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-commercial-navy mb-2">
                    {asset.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {asset.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <img 
              src={commercialPlazaRender} 
              alt="3D render of commercial plaza"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-medium"
            />
          </div>
        </div>
      </section>

      {/* Infrastructure Blueprint */}
      <section id="build_infrastructure_features" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-commercial-navy mb-4">
              Infrastructure Blueprint
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every development includes comprehensive infrastructure designed for modern commercial operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
            {infrastructureFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-commercial/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-commercial" />
                </div>
                <h3 className="text-lg font-semibold text-commercial-navy mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <img 
              src={smartInfrastructureBlueprint} 
              alt="Smart infrastructure blueprint"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-medium"
            />
          </div>
        </div>
      </section>

      {/* Build-to-Monetize Strategy */}
      <section id="build_monetization_model" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-commercial-navy mb-4">
              Build-to-Monetize Strategy
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Multiple revenue streams ensure optimal returns for investors and stakeholders.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {monetizationPaths.map((path, index) => (
              <Card key={index} className="text-center hover-scale transition-all duration-300 border-commercial/20">
                <CardContent className="p-8">
                  <div className="bg-commercial/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <DollarSign className="h-8 w-8 text-commercial" />
                  </div>
                  <h3 className="text-xl font-semibold text-commercial-navy mb-4">
                    {path.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {path.description}
                  </p>
                  <div className="text-sm font-medium text-commercial">
                    {path.revenue}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <img 
              src={buildRevenueDashboard} 
              alt="Build revenue dashboard"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-medium"
            />
          </div>
        </div>
      </section>

      {/* Fundraising for Development */}
      <section id="build_fundraising_section" className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-commercial-navy mb-6">
                Invest in Building the Future
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We raise capital to develop ESG-aligned commercial assets from the ground up. 
                Our development process combines institutional-grade project management with 
                sustainable design principles.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-commercial rounded-full"></div>
                  <span className="text-muted-foreground">Solar-integrated development from day one</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-commercial rounded-full"></div>
                  <span className="text-muted-foreground">Modular designs for flexible monetization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-commercial rounded-full"></div>
                  <span className="text-muted-foreground">ESG compliance and carbon credit generation</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="commercial" size="lg">
                  Join Our Fundraising
                </Button>
                <Button variant="outline" size="lg">
                  Explore REIT Options
                </Button>
              </div>
            </div>
            <div>
              <img 
                src={constructionInvestorMeeting} 
                alt="Construction investor meeting"
                className="w-full rounded-lg shadow-medium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="build_cta_section" className="py-20 bg-commercial text-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Build with Purpose?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Partner with us to develop commercial assets that generate returns while building a sustainable future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="investor" size="lg">
                  Start Your Project
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-commercial">
                  Talk to Our Development Team
                </Button>
              </div>
            </div>
            <div>
              <img 
                src={constructionProposalForm} 
                alt="Construction proposal form"
                className="w-full rounded-lg shadow-medium"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuildAssetPage;