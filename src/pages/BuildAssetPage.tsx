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
      {/* Hero Section */}
      <section className="hero_build_asset_section py-20 gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Build Commercial Assets That Drive Growth
              </h1>
              <p className="text-xl mb-8 text-white/90">
                From blueprint to business-ready, we develop modular spaces with smart infrastructure and solar-powered sustainability.
              </p>
              <Button size="lg" variant="hero" className="bg-white text-primary hover:bg-white/90">
                Start Building with Us
              </Button>
            </div>
            <div className="relative">
              <img
                src={constructionToLifestyleCenter}
                alt="Construction site evolving into lifestyle center"
                className="rounded-lg shadow-strong w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="asset_types_grid py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-primary">What We Build</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We develop diverse commercial assets designed for maximum flexibility and ESG compliance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {assetTypes.map((asset, index) => (
              <Card key={index} className="transition-smooth hover:shadow-medium">
                <CardContent className="p-6 text-center">
                  <asset.icon className="w-12 h-12 text-solar mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    {asset.title}
                  </h3>
                  <p className="text-muted-foreground">
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
              className="rounded-lg shadow-medium mx-auto max-w-4xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Infrastructure Blueprint */}
      <section className="build_infrastructure_features py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-primary">Infrastructure Blueprint</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every development includes comprehensive infrastructure designed for modern commercial operations.
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            {infrastructureFeatures.map((feature, index) => (
              <Card key={index} className="transition-smooth hover:shadow-medium">
                <CardContent className="p-6 text-center">
                  <feature.icon className="w-10 h-10 text-commercial mx-auto mb-3" />
                  <h3 className="text-lg font-semibold mb-2 text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <img
              src={smartInfrastructureBlueprint}
              alt="Smart infrastructure blueprint"
              className="rounded-lg shadow-medium mx-auto max-w-4xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Build-to-Monetize Strategy */}
      <section className="build_monetization_model py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-primary">Build-to-Monetize Strategy</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Multiple revenue streams ensure optimal returns for investors and stakeholders.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {monetizationPaths.map((path, index) => (
              <Card key={index} className="transition-smooth hover:shadow-medium">
                <CardContent className="p-8 text-center">
                  <DollarSign className="w-12 h-12 text-esg mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-primary">
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
              className="rounded-lg shadow-medium mx-auto max-w-4xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Fundraising for Development */}
      <section className="build_fundraising_section py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">
                Invest in Building the Future
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We raise capital to develop ESG-aligned commercial assets from the ground up. 
                Our development process combines institutional-grade project management with 
                sustainable design principles.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Sun className="w-5 h-5 text-solar" />
                  <span>Solar-integrated development from day one</span>
                </div>
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-commercial" />
                  <span>Modular designs for flexible monetization</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-esg" />
                  <span>ESG compliance and carbon credit generation</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Join Our Fundraising
                </Button>
                <Button size="lg" variant="outline">
                  Explore REIT Options
                </Button>
              </div>
            </div>
            <div>
              <img
                src={constructionInvestorMeeting}
                alt="Construction investor meeting"
                className="rounded-lg shadow-strong w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="build_cta_section py-20 gradient-solar text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Build with Purpose?</h2>
            <p className="text-xl mb-8 text-white/90">
              Partner with us to develop commercial assets that generate returns while building a sustainable future.
            </p>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="hero" className="bg-white text-primary hover:bg-white/90">
                    Start Your Project
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Talk to Our Development Team
                  </Button>
                </div>
              </div>
              <div>
                <img
                  src={constructionProposalForm}
                  alt="Construction proposal form"
                  className="rounded-lg shadow-strong w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuildAssetPage;