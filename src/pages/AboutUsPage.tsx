import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building2, Target, Users, Handshake, MapPin, Wrench, ShoppingCart, Home, Truck, Sun, Leaf, Brain, BarChart3, ArrowRight, Upload } from "lucide-react";
import indiaCommercialEvening from "@/assets/india-commercial-evening-hd.jpg";
import visionaryInfrastructure from "@/assets/visionary-infrastructure.jpg";
import rooftopSolarBuilding from "@/assets/rooftop-solar-building.jpg";
import smartBuildingDashboard from "@/assets/smart-building-dashboard.jpg";
import smartInfrastructureBlueprint from "@/assets/smart-infrastructure-blueprint.jpg";
import leadershipTeamMeeting from "@/assets/leadership-team-meeting.jpg";
const AboutUsPage = () => {
  return <div className="min-h-screen gradient-mesh">
      {/* Hero Section */}
      <section className="AboutUs_HeroBanner relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={indiaCommercialEvening} alt="India's commercial skyline at sunset" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/60 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in">
            Building India's Future -We Proud To Be A This Part Of Journey
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:400ms]">
            <Button variant="hero" size="lg" className="group">
              Explore Our Platform
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="AboutUs_VisionMission py-20 gradient-cool">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="VisionCard glass-panel p-8 rounded-xl border border-border/50">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-lg text-muted-foreground">
                  To create scalable, sustainable commercial infrastructure across India that sets new standards for environmental responsibility and investor returns.
                </p>
              </div>
              
              <div className="MissionCard glass-panel p-8 rounded-xl border border-border/50">
                <div className="flex items-center mb-4">
                  <Building2 className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-lg text-muted-foreground">
                  Integrate smart design, solar power, and REIT-grade clarity into every asset we develop, ensuring maximum value for all stakeholders.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img src={visionaryInfrastructure} alt="Visionary sustainable infrastructure" className="w-full rounded-xl shadow-strong hover-scale" />
              <div className="absolute top-4 right-4 flex gap-2">
                <div className="bg-success/20 text-success px-3 py-1 rounded-full text-sm font-medium">
                  ESG Aligned
                </div>
                <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  REIT Ready
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="AboutUs_WhatWeDo py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What We Do
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive commercial real estate solutions powered by innovation and sustainability
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="WhatWeDoCard hover-scale glass-panel border-border/50">
              <CardHeader>
                <Handshake className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Fundraising & REIT Alignment</CardTitle>
                <CardDescription>
                  Institutional partnerships and investment models designed for maximum returns
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="WhatWeDoCard hover-scale glass-panel border-border/50">
              <CardHeader>
                <MapPin className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Prime Land Acquisition</CardTitle>
                <CardDescription>
                  Strategic acquisition in prime commercial zones with high growth potential
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="WhatWeDoCard hover-scale glass-panel border-border/50">
              <CardHeader>
                <Building2 className="h-12 w-12 text-primary mb-4" />
                <CardTitle>ESG-Compliant Development</CardTitle>
                <CardDescription>
                  Architecturally rich, structurally sound assets with sustainability at the core
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="WhatWeDoCard hover-scale glass-panel border-border/50">
              <CardHeader>
                <ShoppingCart className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Asset Sales & Acquisition</CardTitle>
                <CardDescription>
                  Floor-wise or full asset sales with value-added acquisition strategies
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="WhatWeDoCard hover-scale glass-panel border-border/50">
              <CardHeader>
                <Home className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Flexible Leasing Models</CardTitle>
                <CardDescription>
                  Customized leasing for restaurants, retail, offices, and lifestyle tenants
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="WhatWeDoCard hover-scale glass-panel border-border/50">
              <CardHeader>
                <Sun className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Solar & Carbon Monetization</CardTitle>
                <CardDescription>
                  Revenue generation through solar power and carbon credit programs
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="commercial" size="lg">
              Explore Our Capabilities
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Development Philosophy Section */}
      <section className="AboutUs_Philosophy py-20 bg-gradient-section-2">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Development Philosophy
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Four core principles that drive every project we undertake
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="PhilosophyCard text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6 group-hover:scale-110 transition-transform">
                <Wrench className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Modular Design Logic</h3>
              <p className="text-muted-foreground">
                Scalable, adaptable designs that grow with changing market needs
              </p>
            </div>
            
            <div className="PhilosophyCard text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6 group-hover:scale-110 transition-transform">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">AI-Adaptive Infrastructure</h3>
              <p className="text-muted-foreground">
                Smart systems that optimize performance and reduce operational costs
              </p>
            </div>
            
            <div className="PhilosophyCard text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-success/20 rounded-full mb-6 group-hover:scale-110 transition-transform">
                <Leaf className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">ESG-First Approach</h3>
              <p className="text-muted-foreground">
                Environmental, social, and governance principles embedded in every decision
              </p>
            </div>
            
            <div className="PhilosophyCard text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Investor-Grade Transparency</h3>
              <p className="text-muted-foreground">
                Real-time dashboards and comprehensive reporting for all stakeholders
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars Carousel */}
      <section className="AboutUs_CorePillars py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Core Pillars of Our Platform
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Six strategic pillars that form the foundation of our comprehensive platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="PillarCard hover-scale neumorphic-card">
              <CardHeader className="text-center">
                <Handshake className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Fund Raising</CardTitle>
                <CardDescription>
                  REIT-aligned investment models and institutional partnerships
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="PillarCard hover-scale neumorphic-card">
              <CardHeader className="text-center">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Land Assets</CardTitle>
                <CardDescription>
                  Prime commercial plots in high-growth urban corridors
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="PillarCard hover-scale neumorphic-card">
              <CardHeader className="text-center">
                <Building2 className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Built Assets</CardTitle>
                <CardDescription>
                  Sustainable, architecturally rich commercial developments
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="PillarCard hover-scale neumorphic-card">
              <CardHeader className="text-center">
                <ShoppingCart className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Selling Assets</CardTitle>
                <CardDescription>
                  Strategic asset sales and value-added acquisitions
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="PillarCard hover-scale neumorphic-card">
              <CardHeader className="text-center">
                <Home className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Rental / Lease Assets</CardTitle>
                <CardDescription>
                  Flexible leasing solutions for diverse commercial needs
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="PillarCard hover-scale neumorphic-card">
              <CardHeader className="text-center">
                <Truck className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Infrastructure Assets</CardTitle>
                <CardDescription>
                  Smart utilities, solar systems, and connectivity solutions
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            
          </div>
        </div>
      </section>

      {/* Leadership & Team Section */}
      <section className="AboutUs_Leadership py-20 gradient-warm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Leadership & Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Strategic expertise in real estate, technology, ESG, and finance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="TeamCard hover-scale glass-panel border-border/50">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-lg">CEO & Founder</CardTitle>
                <CardDescription>
                  Strategic vision and market leadership
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="TeamCard hover-scale glass-panel border-border/50">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Brain className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-lg">CTO</CardTitle>
                <CardDescription>
                  Technology innovation and platform development
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="TeamCard hover-scale glass-panel border-border/50">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-success/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Leaf className="h-10 w-10 text-success" />
                </div>
                <CardTitle className="text-lg">ESG Head</CardTitle>
                <CardDescription>
                  Sustainability strategy and compliance
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="TeamCard hover-scale glass-panel border-border/50">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <BarChart3 className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-lg">Investment Lead</CardTitle>
                <CardDescription>
                  REIT structuring and investor relations
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          
          <div className="relative rounded-xl overflow-hidden">
            <img src={leadershipTeamMeeting} alt="Leadership team meeting discussing strategy" className="w-full h-80 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Strategic Excellence
                </h3>
                <p className="text-lg text-muted-foreground">
                  Our leadership team brings decades of combined experience in commercial real estate, sustainable development, and financial innovation.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="investor" size="lg">
              Connect With Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact & Inquiry Section */}
      <section className="AboutUs_Contact py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let's Build the Future Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to explore opportunities? Get in touch with our team for a strategic consultation.
            </p>
          </div>
          
          <Card className="Form_AboutUsInquiry glass-panel border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Contact & Inquiry</CardTitle>
              <CardDescription className="text-center">
                Share your details and we'll connect you with the right team member
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your full name" className="glass-input" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@company.com" className="glass-input" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="interest-area">Interest Area</Label>
                  <Select>
                    <SelectTrigger className="glass-input">
                      <SelectValue placeholder="Select your interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="buy">Buy Assets</SelectItem>
                      <SelectItem value="lease">Lease Properties</SelectItem>
                      <SelectItem value="invest">Investment Opportunities</SelectItem>
                      <SelectItem value="esg">ESG & Sustainability</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">Preferred City</Label>
                  <Input id="city" placeholder="Mumbai, Delhi, Bangalore..." className="glass-input" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="investment-type">Investment Type</Label>
                <Select>
                  <SelectTrigger className="glass-input">
                    <SelectValue placeholder="Select investment type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="individual">Individual Investor</SelectItem>
                    <SelectItem value="institutional">Institutional</SelectItem>
                    <SelectItem value="family-office">Family Office</SelectItem>
                    <SelectItem value="reit-fund">REIT Fund</SelectItem>
                    <SelectItem value="corporate">Corporate Buyer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell us about your requirements, investment goals, or partnership interests..." className="glass-input min-h-[120px]" />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" className="w-full">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Documents (Optional)
                  </Button>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="commercial" size="lg" className="flex-1">
                    Book a Strategy Call
                  </Button>
                  <Button variant="investor" size="lg" className="flex-1">
                    Download Company Profile
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>;
};
export default AboutUsPage;