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
  Clock,
} from "lucide-react";
import heroImage from "@/assets/contact-hero-wood-blocks.jpg";
const ContactPage = () => {
  const officeLocations = [
    {
      title: "Headquarters",
      location: "Velachery, Chennai, TN",
      address: "123 Commercial Tower, Velachery Main Road, Chennai - 600042",
      phone: "+91 98765 43210",
      email: "hq@commercialdev.com",
    },
    {
      title: "Bengaluru Office",
      location: "Electronic City, Bengaluru, KA",
      address: "Tech Park Plaza, Electronic City Phase 1, Bengaluru - 560100",
      phone: "+91 98765 43211",
      email: "bengaluru@commercialdev.com",
    },
    {
      title: "Hyderabad Office",
      location: "HITEC City, Hyderabad, TS",
      address: "Cyber Towers, HITEC City, Hyderabad - 500081",
      phone: "+91 98765 43212",
      email: "hyderabad@commercialdev.com",
    },
    {
      title: "Mumbai Office",
      location: "BKC, Mumbai, MH",
      address: "Commercial Complex, Bandra Kurla Complex, Mumbai - 400051",
      phone: "+91 98765 43213",
      email: "mumbai@commercialdev.com",
    },
  ];
  const teamMembers = [
    {
      title: "Acquisition Lead",
      name: "Rajesh Kumar",
      specialty: "Land acquisition and property evaluation",
      icon: Building2,
    },
    {
      title: "Development Strategist",
      name: "Priya Sharma",
      specialty: "Project planning and infrastructure design",
      icon: TrendingUp,
    },
    {
      title: "ESG & Sustainability Officer",
      name: "Arjun Patel",
      specialty: "Solar integration and carbon credit strategy",
      icon: Building2,
    },
    {
      title: "Investor Relations Manager",
      name: "Meera Reddy",
      specialty: "REIT structuring and fundraising",
      icon: User,
    },
  ];
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero_contact_section relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Team handshake in front of commercial building"
            className="w-full h-full object-cover"
          />
          {/* Glassmorphism overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
          <div className="absolute inset-0 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 container text-center text-white px-4">
          <Badge className="mb-6 bg-white/20 backdrop-blur-md text-white border border-white/30 font-semibold animate-fade-in">
            Let's Build Together
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            Connect with Our Commercial Development Team
            <span className="text-gradient bg-gradient-to-r from-solar to-esg bg-clip-text text-transparent">
              {" "}
              We're Ready to Build with You
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-white/90 animate-fade-in">
            Whether you're buying, selling, investing, or collaborating — our team is here to guide you every step of
            the way.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-fade-in group"
            asChild
          >
            <a href="#contact-form">
              Start the Conversation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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

            <Card className="shadow-strong bg-commercial/5 border-commercial/20">
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
                    <Input id="phone" placeholder="+91 " />
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

      {/* Meet the Team Section */}

      {/* Business Inquiry Channels */}

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
