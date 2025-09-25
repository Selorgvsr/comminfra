import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Building2, 
  Store, 
  Factory, 
  ShoppingCart, 
  Sun, 
  Leaf, 
  TrendingUp,
  Users,
  ArrowRight,
  MapPin,
  Calendar
} from "lucide-react";
import heroImage from "@/assets/hero-commercial-complex.jpg";
import indiaCommercialEvening from "@/assets/india-commercial-evening-solar.jpg";
import sustainableGrowthBuilding from "@/assets/sustainable-growth-building.jpg";
import investorImage from "@/assets/investor-handshake.jpg";

const Homepage = () => {
  const assetTypes = [
    {
      icon: Building2,
      title: "Mixed-use Developments",
      description: "Integrated commercial spaces with retail, office, and lifestyle amenities"
    },
    {
      icon: Store,
      title: "Retail & Office Complexes",
      description: "High-street commercial zones with premium tenant mix"
    },
    {
      icon: ShoppingCart,
      title: "Lifestyle Centers",
      description: "Modern shopping arcades with F&B and entertainment zones"
    },
    {
      icon: Factory,
      title: "Business Parks",
      description: "Solar-enabled corporate hubs with smart infrastructure"
    }
  ];

  const revenueStreams = [
    {
      icon: TrendingUp,
      title: "Sale of Commercial Floors",
      description: "Floor-wise monetization with investor-grade returns",
      color: "text-commercial"
    },
    {
      icon: Users,
      title: "Rental & Lease Income",
      description: "Recurring revenue from premium tenant agreements",
      color: "text-esg"
    },
    {
      icon: Sun,
      title: "Solar Power & Carbon Credits",
      description: "ESG-backed revenue through renewable energy generation",
      color: "text-solar"
    }
  ];

  const featuredProjects = [
    {
      title: "Velachery Commercial Hub",
      location: "Chennai, TN",
      type: "Mixed-use Development",
      status: "Completed",
      highlights: ["Solar Powered", "LEED Certified", "Carbon Neutral"]
    },
    {
      title: "Tech Park Bangalore",
      location: "Bengaluru, KA",
      type: "Business Park",
      status: "Ongoing",
      highlights: ["Smart Building", "Agrivoltaics", "Premium Tenants"]
    },
    {
      title: "Lifestyle District Mumbai",
      location: "Mumbai, MH",
      type: "Lifestyle Center",
      status: "Planning",
      highlights: ["High Street", "F&B Zone", "Transit Oriented"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero_homepage_section relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Modern commercial development with solar panels and mixed-use spaces"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-hero opacity-80"></div>
        </div>
        
        <div className="relative z-10 container text-center text-white">
          <Badge className="mb-6 bg-solar text-commercial-navy font-semibold">
            ESG-Aligned Commercial Development
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Modular Commercial Real Estate for a 
            <span className="text-solar"> Sustainable Future</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
            We acquire, build, and monetize commercial assets with solar integration and investor-grade precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="solar" asChild>
              <Link to="/projects">
                Explore Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="hero" asChild>
              <Link to="/reit-invest">
                Invest Now <TrendingUp className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="asset_types_home_grid py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-commercial-navy mb-4">What We Build</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Strategic commercial assets designed for long-term value creation and ESG compliance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {assetTypes.map((asset, index) => (
              <Card key={index} className="group hover:shadow-medium transition-smooth border-0 shadow-soft bg-commercial/5 border-commercial/20">
                <CardContent className="p-6 text-center">
                  <asset.icon className="h-12 w-12 text-commercial mx-auto mb-4 group-hover:text-solar transition-smooth" />
                  <h3 className="font-semibold mb-2 text-commercial-navy">{asset.title}</h3>
                  <p className="text-sm text-muted-foreground">{asset.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 relative rounded-2xl overflow-hidden shadow-strong">
            <img 
              src={indiaCommercialEvening} 
              alt="Beautiful commercial building in India with solar panels during evening time"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-commercial-navy/20"></div>
          </div>
        </div>
      </section>

      {/* Business Model Section */}
      <section className="business_model_home_section py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-commercial-navy mb-4">Business Model Snapshot</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three core revenue streams driving sustainable growth and investor returns
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {revenueStreams.map((stream, index) => (
              <Card key={index} className="group hover:shadow-medium transition-smooth shadow-soft">
                <CardContent className="p-8 text-center">
                  <stream.icon className={`h-16 w-16 mx-auto mb-6 ${stream.color} group-hover:scale-110 transition-bounce`} />
                  <h3 className="text-xl font-semibold mb-4 text-commercial-navy">{stream.title}</h3>
                  <p className="text-muted-foreground">{stream.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ESG Impact Section */}
      <section className="esg_impact_home_section py-20 bg-gradient-to-r from-esg/10 to-commercial/10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-esg text-white">ESG Leadership</Badge>
              <h2 className="text-4xl font-bold text-commercial-navy mb-6">
                Sustainability That Powers Growth
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Sun className="h-6 w-6 text-solar" />
                  <span className="text-lg">Every asset integrates solar panels and smart metering</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Leaf className="h-6 w-6 text-esg" />
                  <span className="text-lg">Water efficiency and carbon credit generation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-6 w-6 text-commercial" />
                  <span className="text-lg">ESG compliance drives premium valuations</span>
                </div>
              </div>
              <Button variant="esg" asChild>
                <Link to="/sustainability">
                  Explore Our Impact <Leaf className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={sustainableGrowthBuilding} 
                alt="Modern commercial building with sustainability features that power growth including solar panels, green walls, and ESG impact metrics"
                className="w-full rounded-2xl shadow-strong"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fundraising & REIT Section */}
      <section className="fundraising_reit_home_section py-20 bg-commercial-navy text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Fuel the Future of Commercial Infrastructure
            </h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto">
              We raise capital to acquire land and develop ESG-aligned commercial spaces. 
              Investors can participate via direct fundraising or REITs focused on rental yield.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-white/10 border-white/20 text-white shadow-strong">
              <CardContent className="p-8">
                <TrendingUp className="h-12 w-12 text-solar mb-6" />
                <h3 className="text-2xl font-bold mb-4">Fundraising for Land & Development</h3>
                <p className="text-white/80 mb-6">
                  Direct investment opportunities in land acquisition and commercial development 
                  with transparent reporting and ESG alignment.
                </p>
                <Button variant="solar" className="w-full">
                  <Link to="/contact" className="flex items-center justify-center w-full">
                    Join Our Fundraising <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-white shadow-strong">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-solar mb-6" />
                <h3 className="text-2xl font-bold mb-4">REIT Investment</h3>
                <p className="text-white/80 mb-6">
                  Passive income through rental yield assets with institutional-grade 
                  compliance and carbon credit monetization.
                </p>
                <Button variant="solar" className="w-full">
                  <Link to="/reit-invest" className="flex items-center justify-center w-full">
                    Explore REIT Options <TrendingUp className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 relative rounded-2xl overflow-hidden">
            <img 
              src={investorImage} 
              alt="Investor meeting and partnership"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-commercial-navy/40"></div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="featured_projects_home_grid py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-commercial-navy mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcase of our completed, ongoing, and upcoming commercial developments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-medium transition-smooth shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant={project.status === "Completed" ? "default" : project.status === "Ongoing" ? "secondary" : "outline"}>
                      {project.status}
                    </Badge>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 text-commercial-navy group-hover:text-commercial transition-smooth">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center space-x-2 mb-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">{project.type}</p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="homepage_cta_section py-20 bg-gradient-to-r from-commercial to-commercial-navy text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build, Buy, or Invest?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join us in creating the future of commercial real estate with purpose and profit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="solar" asChild>
              <Link to="/buy">
                View Opportunities <Building2 className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="hero" asChild>
              <Link to="/contact">
                Talk to Our Team <Users className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;