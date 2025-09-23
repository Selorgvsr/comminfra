import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  User, 
  TrendingUp,
  Calendar,
  MessageSquare,
  ArrowRight,
  Clock
} from "lucide-react";
import heroImage from "@/assets/hero-commercial-complex.jpg";

const ContactPage = () => {
  const officeLocations = [
    {
      title: "Headquarters",
      location: "Velachery, Chennai, TN",
      address: "123 Commercial Tower, Velachery Main Road, Chennai - 600042",
      phone: "+91 98765 43210",
      email: "hq@commercialdev.com"
    },
    {
      title: "Bengaluru Office",
      location: "Electronic City, Bengaluru, KA",
      address: "Tech Park Plaza, Electronic City Phase 1, Bengaluru - 560100",
      phone: "+91 98765 43211",
      email: "bengaluru@commercialdev.com"
    },
    {
      title: "Hyderabad Office",
      location: "HITEC City, Hyderabad, TS",
      address: "Cyber Towers, HITEC City, Hyderabad - 500081",
      phone: "+91 98765 43212",
      email: "hyderabad@commercialdev.com"
    },
    {
      title: "Mumbai Office",
      location: "BKC, Mumbai, MH",
      address: "Commercial Complex, Bandra Kurla Complex, Mumbai - 400051",
      phone: "+91 98765 43213",
      email: "mumbai@commercialdev.com"
    }
  ];

  const teamMembers = [
    {
      title: "Acquisition Lead",
      name: "Rajesh Kumar",
      specialty: "Land acquisition and property evaluation",
      icon: Building2
    },
    {
      title: "Development Strategist",
      name: "Priya Sharma",
      specialty: "Project planning and infrastructure design",
      icon: TrendingUp
    },
    {
      title: "ESG & Sustainability Officer",
      name: "Arjun Patel",
      specialty: "Solar integration and carbon credit strategy",
      icon: Building2
    },
    {
      title: "Investor Relations Manager",
      name: "Meera Reddy",
      specialty: "REIT structuring and fundraising",
      icon: User
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero_contact_section relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Team handshake in front of commercial building"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-hero opacity-85"></div>
        </div>
        
        <div className="relative z-10 container text-center text-white">
          <Badge className="mb-6 bg-solar text-commercial-navy font-semibold">
            Let's Build Together
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Connect with Our 
            <span className="text-solar"> Commercial Development</span> Team
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-white/90">
            Whether you're buying, selling, investing, or collaborating — we're ready to build with you.
          </p>
          <Button size="lg" variant="solar" asChild>
            <a href="#contact-form">
              Start the Conversation <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="contact_form_section py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-commercial-navy mb-4">Get in Touch</h2>
              <p className="text-xl text-muted-foreground">
                Fill out the form below and our team will get back to you within 24 hours
              </p>
            </div>
            
            <Card className="shadow-strong">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="h-6 w-6 text-commercial" />
                  <span>Contact Form</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Your full name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your.email@company.com" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+91 98765 43210" />
                  </div>
                  <div>
                    <Label htmlFor="inquiry-type">Inquiry Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="buy">Buy Property</SelectItem>
                        <SelectItem value="sell">Sell Property</SelectItem>
                        <SelectItem value="lease">Lease Property</SelectItem>
                        <SelectItem value="invest">Investment/REIT</SelectItem>
                        <SelectItem value="collaborate">Collaborate</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project, investment goals, or how we can help..."
                    rows={5}
                  />
                </div>
                
                <Button className="w-full gradient-commercial text-white">
                  Send Message <Mail className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="office_locations_grid py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-commercial-navy mb-4">Our Offices</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Visit us at any of our locations across India for in-person consultations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {officeLocations.map((office, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <MapPin className="h-6 w-6 text-commercial" />
                    <h3 className="text-xl font-semibold text-commercial-navy">{office.title}</h3>
                  </div>
                  
                  <div className="space-y-2 text-muted-foreground">
                    <p className="font-medium text-commercial-navy">{office.location}</p>
                    <p className="text-sm">{office.address}</p>
                    
                    <div className="flex items-center space-x-2 pt-2">
                      <Phone className="h-4 w-4" />
                      <span className="text-sm">{office.phone}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4" />
                      <span className="text-sm">{office.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="contact_team_section py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-commercial-navy mb-4">Meet the Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our specialized team brings decades of experience in commercial real estate development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-medium transition-smooth shadow-soft text-center">
                <CardContent className="p-6">
                  <member.icon className="h-12 w-12 text-commercial mx-auto mb-4 group-hover:text-solar transition-smooth" />
                  <h3 className="font-semibold mb-1 text-commercial-navy">{member.title}</h3>
                  <p className="text-sm font-medium text-commercial mb-2">{member.name}</p>
                  <p className="text-xs text-muted-foreground">{member.specialty}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Inquiry Channels */}
      <section className="contact_business_channels py-20 bg-commercial-navy text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-white/10 border-white/20 text-white shadow-strong">
              <CardContent className="p-8 text-center">
                <TrendingUp className="h-16 w-16 text-solar mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">For Investors & REIT Partners</h3>
                <p className="text-white/80 mb-6">
                  Connect with our investor relations team to explore REIT opportunities, 
                  fundraising participation, and portfolio diversification options.
                </p>
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>investors@commercialdev.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>+91 98765 40000 (Investor Desk)</span>
                  </div>
                </div>
                <Button variant="solar" className="w-full">
                  Investor Desk <TrendingUp className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-white shadow-strong">
              <CardContent className="p-8 text-center">
                <Building2 className="h-16 w-16 text-solar mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">For Property Owners & Collaborators</h3>
                <p className="text-white/80 mb-6">
                  Have a property to sell or develop? Connect with our acquisition team 
                  to explore collaboration opportunities and joint ventures.
                </p>
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>properties@commercialdev.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>+91 98765 50000 (Acquisition)</span>
                  </div>
                </div>
                <Button variant="solar" className="w-full">
                  Submit Property <Building2 className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact_cta_section py-20 bg-gradient-to-r from-commercial to-commercial-navy text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Build the Future Together</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Ready to start your commercial real estate journey? Our team is here to guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="solar" asChild>
              <a href="tel:+919876543210">
                <Calendar className="mr-2 h-5 w-5" /> Schedule a Call
              </a>
            </Button>
            <Button size="lg" variant="hero" asChild>
              <a href="#contact-form">
                <MessageSquare className="mr-2 h-5 w-5" /> Send a Message
              </a>
            </Button>
          </div>
          
          <div className="mt-8 flex items-center justify-center space-x-2 text-white/60">
            <Clock className="h-4 w-4" />
            <span className="text-sm">Response time: Within 24 hours</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;