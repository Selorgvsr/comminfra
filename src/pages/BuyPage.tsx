import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Building2, 
  Store, 
  Factory, 
  ShoppingCart,
  Car,
  Zap,
  Droplets,
  Route,
  Sun,
  Leaf,
  TrendingUp,
  DollarSign,
  Home,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import buyHeroCommercial from "@/assets/buy-hero-commercial.jpg";
import aerialPark from "@/assets/aerial-business-park.jpg";
import commercialSale from "@/assets/commercial-for-sale.jpg";
import esgDashboard from "@/assets/esg-dashboard.jpg";
import investorImage from "@/assets/investor-handshake.jpg";

const BuyPage = () => {
  const propertyTypes = [
    {
      icon: Building2,
      title: "Mixed-use Development",
      description: "Integrated retail, office, and residential spaces with premium amenities",
      features: ["Multi-tenant", "High ROI", "Diversified Income"]
    },
    {
      icon: Store,
      title: "Retail & Office Complex",
      description: "High-street commercial zones with excellent foot traffic",
      features: ["Prime Location", "Established Tenants", "Steady Returns"]
    },
    {
      icon: ShoppingCart,
      title: "High Street Commercial",
      description: "Premium frontage properties in commercial corridors",
      features: ["Visibility", "Brand Value", "Appreciation"]
    },
    {
      icon: Factory,
      title: "Shopping Arcade",
      description: "Modern retail spaces with lifestyle and F&B options",
      features: ["Modern Design", "Flexible Spaces", "High Traffic"]
    },
    {
      icon: Building2,
      title: "Business Park",
      description: "Corporate office spaces with smart infrastructure",
      features: ["Tech-Ready", "Scalable", "Professional"]
    },
    {
      icon: ShoppingCart,
      title: "Lifestyle Center",
      description: "Entertainment and retail hub with experiential offerings",
      features: ["Experience-Led", "Premium Brands", "Family-Oriented"]
    }
  ];

  const valueAdditions = [
    {
      icon: Car,
      title: "Car Parking",
      description: "Dedicated parking spaces with smart access control"
    },
    {
      icon: Zap,
      title: "Electric Connection",
      description: "High-capacity electrical infrastructure with backup systems"
    },
    {
      icon: Droplets,
      title: "Water Supply",
      description: "Reliable water supply with recycling and conservation systems"
    },
    {
      icon: Route,
      title: "Internal Roads",
      description: "Well-planned internal circulation with pedestrian pathways"
    },
    {
      icon: Sun,
      title: "Solar Panels",
      description: "Rooftop solar installations for energy cost reduction"
    },
    {
      icon: Leaf,
      title: "Carbon Credit Integration",
      description: "ESG compliance with carbon offset monetization"
    }
  ];

  const revenueModels = [
    {
      icon: DollarSign,
      title: "Sell Floor-by-Floor",
      description: "Monetize individual floors to different buyers for maximum returns",
      roi: "15-25% IRR"
    },
    {
      icon: Home,
      title: "Rent/Lease Based on Client Needs",
      description: "Flexible leasing options for long-term recurring revenue",
      roi: "8-12% Yield"
    },
    {
      icon: Sun,
      title: "Solar Power Generation",
      description: "Generate renewable energy revenue and carbon credits",
      roi: "5-8% Additional"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="hero_buy_section" className="relative py-20 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${buyHeroCommercial})` }}
        >
          <div className="absolute inset-0 bg-commercial-navy/80"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Buy Your Product Now
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in">
              Acquire high-potential assets, add smart infrastructure, and monetize through sale, lease, or solar-powered sustainability.
            </p>
            <Button variant="hero" size="lg" className="animate-fade-in">
              Buy Your Product Now
            </Button>
          </div>
        </div>
      </section>

      {/* Property Types Section */}
      <section className="property_types_grid py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-commercial-navy mb-4">What We Buy</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Strategic commercial properties with high growth potential and value-addition opportunities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {propertyTypes.map((property, index) => (
              <Card key={index} className="group hover:shadow-medium transition-smooth border-0 shadow-soft">
                <CardContent className="p-6">
                  <property.icon className="h-12 w-12 text-commercial mb-4 group-hover:text-solar transition-smooth" />
                  <h3 className="font-semibold mb-2 text-commercial-navy">{property.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{property.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {property.features.map((feature, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 relative rounded-2xl overflow-hidden shadow-strong">
            <img 
              src={aerialPark} 
              alt="Aerial view of business park"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-commercial-navy/20 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-2">Aerial view of a business park with solar rooftops</h3>
                <p className="text-white/80">Smart infrastructure meets sustainable design</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Addition Section */}
      <section className="value_addition_facilities py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-commercial-navy mb-4">Value Addition</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We enhance every property with smart infrastructure and sustainable features that drive value
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {valueAdditions.map((addition, index) => (
              <Card key={index} className="group hover:shadow-medium transition-smooth shadow-soft">
                <CardContent className="p-6 text-center">
                  <addition.icon className="h-12 w-12 text-commercial mx-auto mb-4 group-hover:text-solar transition-smooth" />
                  <h3 className="font-semibold mb-2 text-commercial-navy">{addition.title}</h3>
                  <p className="text-sm text-muted-foreground">{addition.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-strong">
            <img 
              src={commercialSale} 
              alt="Rooftop solar panels on commercial building"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-solar/80 to-esg/80 flex items-center justify-center">
              <div className="text-center text-white">
                <Sun className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Solar-Powered Infrastructure</h3>
                <p className="text-white/90">Every property features renewable energy integration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Model Section */}
      <section className="revenue_model_buy py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-commercial-navy mb-4">Revenue Model</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multiple monetization strategies to maximize your investment returns
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {revenueModels.map((model, index) => (
              <Card key={index} className="group hover:shadow-medium transition-smooth shadow-soft text-center">
                <CardContent className="p-8">
                  <model.icon className="h-16 w-16 text-commercial mx-auto mb-6 group-hover:text-solar transition-bounce" />
                  <h3 className="text-xl font-semibold mb-4 text-commercial-navy">{model.title}</h3>
                  <p className="text-muted-foreground mb-4">{model.description}</p>
                  <Badge className="bg-esg text-white font-semibold">
                    {model.roi}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fundraising & REIT Section */}
      <section className="fundraising_reit_section py-20 bg-commercial-navy text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Fundraising & REIT</h2>
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-solar">Fundraising for Land Acquisition</h3>
                  <p className="text-white/80">
                    We raise capital to acquire strategic land parcels and develop them into high-yield commercial assets.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-solar">Commercial REITs for Rental Yield</h3>
                  <p className="text-white/80">
                    Invest in diversified commercial real estate portfolios focused on generating consistent rental income.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="solar" asChild>
                  <Link to="/reit-invest">
                    Invest Now <TrendingUp className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="hero" asChild>
                  <Link to="/contact">
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <img 
                src={investorImage} 
                alt="Investor handshake and REIT dashboard"
                className="w-full rounded-2xl shadow-strong"
              />
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-white/10 border-white/20 text-white p-4">
                  <div className="text-center">
                    <TrendingUp className="h-8 w-8 text-solar mx-auto mb-2" />
                    <div className="text-2xl font-bold">15-25%</div>
                    <div className="text-sm text-white/80">Expected IRR</div>
                  </div>
                </Card>
                <Card className="bg-white/10 border-white/20 text-white p-4">
                  <div className="text-center">
                    <CheckCircle className="h-8 w-8 text-esg mx-auto mb-2" />
                    <div className="text-2xl font-bold">ESG</div>
                    <div className="text-sm text-white/80">Compliant</div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="buy_cta_section py-20 bg-gradient-to-r from-commercial to-commercial-navy text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Buy Into Growth?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Discover high-potential commercial properties with built-in value addition and sustainable features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="solar" asChild>
              <Link to="/projects">
                View Available Properties <Building2 className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="hero" asChild>
              <Link to="/contact">
                Contact Acquisition Team <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuyPage;