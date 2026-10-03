import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building, Building2, Store, UtensilsCrossed, Stethoscope, DoorOpen, LayoutGrid,
  Sofa, Handshake, Wrench, Paintbrush, Lightbulb, Plug, Droplets, Hammer, Layers,
  Ruler, PenTool, Palette, Coins, CheckCircle2, ArrowRight, Leaf, Zap, Cpu,
  ShieldCheck, Video, Wifi, MonitorSmartphone, Camera, Lock, Sun, Recycle, Gauge,
  Droplet, Sparkles, Eye, Search, ClipboardList, KeyRound, ArrowRightLeft
} from "lucide-react";
import heroInteriorImage from "@/assets/modern-mall-interior-skylight.jpg";
import renovationImage from "@/assets/mall-corridor-palms.jpg";
import officeInteriorImage from "@/assets/office-glass-interior.jpg";
import retailInteriorImage from "@/assets/red-corridor-retail.jpg";
import leaseReadyImage from "@/assets/restaurant-ready-space.jpg";
import sustainableImage from "@/assets/green-office-interior.jpg";
import smartInteriorImage from "@/assets/smart-office-tech.jpg";
import beforeImage from "@/assets/dilapidated-meeting-room.jpg";
import afterImage from "@/assets/leased-retail-interior.jpg";
import showcaseOfficeImage from "@/assets/commercial-office-interior.jpg";
import showcaseRetailImage from "@/assets/retail-brand-store.jpg";
import showcaseRenovationImage from "@/assets/interior-fitout-progress.jpg";
import showcaseLeaseImage from "@/assets/restaurant-commercial-interior.jpg";
import ctaImage from "@/assets/commercial-interior.jpg";

const InteriorRenovationPage = () => {
  const spaceSolutions = [{
    icon: Building,
    label: "Corporate Offices"
  }, {
    icon: Store,
    label: "Retail Showrooms"
  }, {
    icon: Building2,
    label: "Commercial Buildings"
  }, {
    icon: Sparkles,
    label: "Business Centres"
  }, {
    icon: UtensilsCrossed,
    label: "Restaurants & Cafés"
  }, {
    icon: Stethoscope,
    label: "Clinics & Professional Spaces"
  }, {
    icon: DoorOpen,
    label: "Reception & Lobby Areas"
  }, {
    icon: Sofa,
    label: "Common Areas"
  }, {
    icon: Handshake,
    label: "Rental & Lease-Ready Spaces"
  }];

  const renovationWorks = [{
    icon: Wrench,
    label: "Complete Interior Renovation"
  }, {
    icon: Building2,
    label: "Building Refurbishment"
  }, {
    icon: Building,
    label: "Office Renovation"
  }, {
    icon: Store,
    label: "Retail Renovation"
  }, {
    icon: Layers,
    label: "Flooring Replacement"
  }, {
    icon: Ruler,
    label: "Ceiling & Partition Work"
  }, {
    icon: Plug,
    label: "Electrical Upgrades"
  }, {
    icon: Droplets,
    label: "Plumbing & Utility Upgrades"
  }, {
    icon: Lightbulb,
    label: "Lighting Improvements"
  }, {
    icon: Paintbrush,
    label: "Painting & Finishing"
  }, {
    icon: Droplet,
    label: "Washroom Renovation"
  }, {
    icon: Hammer,
    label: "Common-Area Upgrades"
  }];

  const designSteps = ["Space Planning", "Concept Design", "Material Selection", "3D Visualization", "Cost Planning", "Execution"];
  const layoutBasis = ["Available floor area", "Business requirements", "Employee/customer movement", "Storage requirements", "Lighting", "Ventilation", "Electrical requirements", "Brand identity", "Future expansion"];

  const executionScope = ["Site Assessment", "Space Measurement", "Design & Planning", "BOQ & Cost Estimation", "Material Selection", "Civil & Interior Works", "Electrical & Lighting", "HVAC Coordination", "Furniture & Fixtures", "Finishing & Quality Inspection", "Final Handover"];

  const officeSolutions = ["Reception Areas", "Executive Cabins", "Workstations", "Meeting Rooms", "Conference Rooms", "Boardrooms", "Cafeteria & Breakout Areas", "Server / IT Rooms", "Storage Areas", "Employee Wellness Spaces"];

  const retailSolutions = ["Showroom Design", "Display Areas", "Customer Zones", "Billing Counters", "Product Displays", "Brand Signage Integration", "Lighting Design", "Storage", "Back-of-House Areas", "Customer Experience Zones"];

  const leaseReadyWorks = ["Interior Fit-Out", "Basic Infrastructure", "Electrical & Lighting", "Flooring", "Ceiling", "Partitions", "Washrooms", "Reception Areas", "Common-Area Improvements", "Tenant-Specific Modifications"];

  const sustainableSolutions = [{
    icon: Lightbulb,
    label: "LED & Energy-Efficient Lighting"
  }, {
    icon: Sun,
    label: "Daylight Optimization"
  }, {
    icon: Zap,
    label: "Energy-Efficient HVAC Planning"
  }, {
    icon: Leaf,
    label: "Low-VOC Materials"
  }, {
    icon: Recycle,
    label: "Sustainable Flooring"
  }, {
    icon: Recycle,
    label: "Recycled / Responsible Materials"
  }, {
    icon: Droplet,
    label: "Water-Efficient Fixtures"
  }, {
    icon: Cpu,
    label: "Smart Controls"
  }, {
    icon: Gauge,
    label: "Energy Monitoring"
  }, {
    icon: Sun,
    label: "Solar-Ready Infrastructure"
  }];

  const smartSolutions = [{
    icon: Lightbulb,
    label: "Smart Lighting"
  }, {
    icon: Lock,
    label: "Access Control"
  }, {
    icon: Camera,
    label: "CCTV"
  }, {
    icon: Wifi,
    label: "Networking Infrastructure"
  }, {
    icon: MonitorSmartphone,
    label: "Meeting-Room Technology"
  }, {
    icon: Video,
    label: "Digital Signage"
  }, {
    icon: Gauge,
    label: "Energy Monitoring"
  }, {
    icon: Cpu,
    label: "Building Management Systems"
  }, {
    icon: Wifi,
    label: "IoT Integration"
  }, {
    icon: ShieldCheck,
    label: "Security Systems"
  }];

  const processSteps = [{
    num: "01",
    title: "Understand",
    description: "We understand your property, business requirements, budget and objectives.",
    icon: Search
  }, {
    num: "02",
    title: "Assess",
    description: "Our team evaluates the existing space, infrastructure and renovation requirements.",
    icon: Eye
  }, {
    num: "03",
    title: "Design",
    description: "We develop the space plan, design concept and material direction.",
    icon: PenTool
  }, {
    num: "04",
    title: "Plan",
    description: "Scope, BOQ, timelines and execution requirements are finalized.",
    icon: ClipboardList
  }, {
    num: "05",
    title: "Execute",
    description: "Civil, interior, electrical, finishing and related works are coordinated.",
    icon: Hammer
  }, {
    num: "06",
    title: "Inspect",
    description: "Quality checks are conducted throughout the execution process.",
    icon: CheckCircle2
  }, {
    num: "07",
    title: "Handover",
    description: "The completed space is prepared for occupation or business operations.",
    icon: KeyRound
  }];

  const requirementSolutions = [{
    requirement: "New Commercial Space",
    solution: "Complete Interior Fit-Out"
  }, {
    requirement: "Old Office",
    solution: "Office Renovation"
  }, {
    requirement: "Vacant Property",
    solution: "Lease-Ready Fit-Out"
  }, {
    requirement: "Retail Property",
    solution: "Retail Interior"
  }, {
    requirement: "Corporate Expansion",
    solution: "Multi-Floor Office Interior"
  }, {
    requirement: "Property Upgrade",
    solution: "Commercial Refurbishment"
  }, {
    requirement: "Tenant Requirement",
    solution: "Customized Fit-Out"
  }, {
    requirement: "Asset Enhancement",
    solution: "Renovation & Value Upgrade"
  }];

  const beforeAfter = [{
    before: "Old Office",
    after: "Modern Corporate Office"
  }, {
    before: "Vacant Commercial Space",
    after: "Lease-Ready Property"
  }, {
    before: "Outdated Retail Space",
    after: "Modern Showroom"
  }, {
    before: "Basic Lobby",
    after: "Premium Reception"
  }, {
    before: "Old Common Area",
    after: "Modern Business Environment"
  }];

  const showcaseProjects = [{
    title: "Commercial Office Interior",
    location: "Chennai, Tamil Nadu",
    area: "12,000 sq.ft",
    scope: "Complete Office Interior",
    status: "Delivered",
    image: showcaseOfficeImage
  }, {
    title: "Retail Interior Transformation",
    location: "Chennai, Tamil Nadu",
    area: "6,500 sq.ft",
    scope: "Retail Showroom Fit-Out",
    status: "Ongoing",
    image: showcaseRetailImage
  }, {
    title: "Commercial Renovation",
    location: "Chennai, Tamil Nadu",
    area: "9,000 sq.ft",
    scope: "Building Refurbishment",
    status: "Ongoing",
    image: showcaseRenovationImage
  }, {
    title: "Lease-Ready Fit-Out",
    location: "Chennai, Tamil Nadu",
    area: "4,800 sq.ft",
    scope: "Tenant-Ready Fit-Out",
    status: "Delivered",
    image: showcaseLeaseImage
  }];

  return <div className="min-h-screen gradient-mesh">
      {/* Hero Section */}
      <section id="interior_hero_section" className="prestige-hero relative  flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroInteriorImage} alt="Interior / Renovation - Transforming Commercial Spaces" className="w-full h-full object-cover" />
          <div className="prestige-hero-overlay absolute inset-0" />
        </div>

        <div className="relative z-10 container prestige-hero-content">
          <Badge className="prestige-hero-eyebrow">
            Interior & Renovation Services
          </Badge>
          <h1 className="prestige-hero-title">
            Interior / Renovation
            <span className="prestige-hero-highlight block">
              Transforming Commercial Spaces into High-Performance Business Environments
            </span>
          </h1>
          <p className="prestige-hero-description">
            From office interiors and retail spaces to complete commercial renovations, CommInfra delivers professionally planned interior and renovation solutions that improve functionality, appearance, tenant experience and long-term property value.
          </p>
          <p className="prestige-hero-tagline">
            Plan. Design. Renovate. Deliver.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="prestige-hero-primary" asChild>
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="prestige-hero-secondary" asChild>
              <a href="#interior_solutions_section">
                View Our Services
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* 01 — Commercial Interior Solutions */}
      <section id="interior_solutions_section" className="py-24 bg-gradient-section-1 text-white">
        <div className="container px-4">
          <div className="text-center mb-16">
            <div className="mb-6 inline-block bg-gradient-to-r from-primary/20 to-solar/20 text-accent border-none font-semibold px-6 py-2 rounded-full">
              Commercial Interior Solutions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-accent via-primary-foreground to-accent bg-clip-text text-transparent">
              Spaces Designed for Business Performance
            </h2>
            <p className="text-xl md:text-2xl text-primary-foreground/85 max-w-4xl mx-auto leading-relaxed">
              We create functional and visually refined commercial interiors tailored to the needs of modern businesses.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {spaceSolutions.map((item, index) => <Card key={index} className="group hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-500 bg-white border-none rounded-2xl hover-scale animate-fade-in" style={{ animationDelay: `${index * 80}ms` }}>
                <CardContent className="flex items-center space-x-4 p-6">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br from-primary/15 to-solar/15 flex items-center justify-center group-hover:from-primary group-hover:to-solar transition-colors duration-500">
                    <item.icon className="h-7 w-7 text-commercial group-hover:text-white transition-colors duration-500" />
                  </div>
                  <span className="font-semibold text-foreground text-lg">{item.label}</span>
                </CardContent>
              </Card>)}
          </div>

          <p className="text-center text-lg md:text-xl text-primary-foreground/85 max-w-4xl mx-auto">
            Every space is planned around <span className="font-semibold text-accent">functionality, brand identity, employee experience, customer movement and operational efficiency</span>.
          </p>
        </div>
      </section>

      {/* 02 — Renovation & Property Transformation */}
      <section className="py-24 bg-gradient-section-2 text-white">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6 inline-block bg-gradient-to-r from-primary/20 to-solar/20 text-accent border-none font-semibold px-6 py-2 rounded-full">
               Renovation & Property Transformation
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-accent via-primary-foreground to-accent bg-clip-text text-transparent">
                Give Existing Spaces a New Identity
              </h2>
              <p className="text-xl text-primary-foreground/85 mb-8 leading-relaxed">
                Our renovation solutions help transform existing commercial properties into modern, efficient and market-ready spaces.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {renovationWorks.map((item, index) => <div key={index} className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10">
                    <item.icon className="h-5 w-5 shrink-0 text-solar" />
                    <span className="text-sm text-primary-foreground/90">{item.label}</span>
                  </div>)}
              </div>
              <p className="mt-8 text-lg text-primary-foreground/85">
                The objective is to <span className="font-semibold text-solar">upgrade the property without compromising business operations, safety or design quality</span>.
              </p>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src={renovationImage} alt="Renovation and property transformation in progress" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-commercial-navy/60 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — Design & Planning */}
      <section className="py-24 bg-gradient-section-3 text-white">
        <div className="container px-4">
          <div className="text-center mb-14">
            <div className="mb-6 inline-block bg-gradient-to-r from-primary/20 to-solar/20 text-accent border-none font-semibold px-6 py-2 rounded-full">
              Design & Planning
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-accent via-primary-foreground to-accent bg-clip-text text-transparent">
              From Concept to Execution
            </h2>
            <p className="text-xl text-primary-foreground/85 max-w-3xl mx-auto">
              A successful interior project begins with proper planning.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
            {designSteps.map((step, index) => <div key={index} className="flex items-center gap-3">
                <div className="bg-white text-commercial-navy font-semibold px-5 py-3 rounded-full shadow-lg text-sm md:text-base">
                  {step}
                </div>
                {index < designSteps.length - 1 && <ArrowRight className="h-5 w-5 text-solar shrink-0" />}
              </div>)}
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-center text-lg text-primary-foreground/85 mb-6">We develop layouts based on:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {layoutBasis.map((item, index) => <span key={index} className="bg-white/10 backdrop-blur-sm border border-white/15 text-primary-foreground/90 px-4 py-2 rounded-full text-sm">
                  {item}
                </span>)}
            </div>
          </div>
        </div>
      </section>

      {/* 04 — Turnkey Interior Execution */}
      <section className="py-24 bg-gradient-section-1 text-white">
        <div className="container px-4">
          <div className="text-center mb-14">
            <div className="mb-6 inline-block bg-gradient-to-r from-primary/20 to-solar/20 text-accent border-none font-semibold px-6 py-2 rounded-full">
             Turnkey Interior Execution
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-accent via-primary-foreground to-accent bg-clip-text text-transparent">
              One Partner. Complete Execution.
            </h2>
            <p className="text-xl text-primary-foreground/85 max-w-3xl mx-auto">
              CommInfra can coordinate the complete interior execution process from initial planning through final handover.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {executionScope.map((step, index) => <div key={index} className="bg-white rounded-2xl p-5 text-center shadow-lg hover-scale transition-all duration-300">
                <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary to-commercial text-white flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <span className="text-sm font-medium text-commercial-navy">{step}</span>
              </div>)}
          </div>
          <p className="text-center text-lg text-primary-foreground/85 mt-10 max-w-3xl mx-auto">
            This creates a <span className="font-semibold text-solar">single coordinated workflow</span> instead of managing multiple independent contractors.
          </p>
        </div>
      </section>

      {/* 05 — Office Interior */}
      <section className="py-24 bg-gradient-section-2 text-white">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
              <img src={officeInteriorImage} alt="Modern commercial office interior" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-commercial-navy/60 via-transparent to-transparent"></div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="mb-6 inline-block bg-gradient-to-r from-primary/20 to-solar/20 text-accent border-none font-semibold px-6 py-2 rounded-full">
               Office Interior
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-accent via-primary-foreground to-accent bg-clip-text text-transparent">
                Modern Workspaces Built Around Your Business
              </h2>
              <p className="text-xl text-primary-foreground/85 mb-8 leading-relaxed">
                We create professional office environments designed to support productivity, collaboration and corporate identity.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {officeSolutions.map((item, index) => <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-solar" />
                    <span className="text-sm text-primary-foreground/90">{item}</span>
                  </div>)}
              </div>
              <p className="text-lg text-primary-foreground/85">
                Design can be adapted for <span className="font-semibold text-solar">startups, growing businesses, corporate offices and multi-floor commercial occupiers</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 06 — Retail & Commercial Interiors */}
      <section className="py-24 bg-gradient-section-3 text-white">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6 inline-block bg-gradient-to-r from-primary/20 to-solar/20 text-accent border-none font-semibold px-6 py-2 rounded-full">
               Retail & Commercial Interiors
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-accent via-primary-foreground to-accent bg-clip-text text-transparent">
                Create Spaces That Customers Remember
              </h2>
              <p className="text-xl text-primary-foreground/85 mb-8 leading-relaxed">
                Retail and commercial spaces require more than attractive interiors. They need <span className="font-semibold text-solar">efficient customer movement, visibility, functionality and brand consistency</span>.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {retailSolutions.map((item, index) => <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-solar" />
                    <span className="text-sm text-primary-foreground/90">{item}</span>
                  </div>)}
              </div>
              <p className="text-lg text-primary-foreground/85">
                Suitable for <span className="font-semibold text-solar">retail stores, showrooms, high-street properties and commercial plazas</span>.
              </p>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src={retailInteriorImage} alt="Branded retail interior design" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-commercial-navy/60 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 07 — Lease-Ready & Rental Property Fit-Out */}
      <section className="py-24 bg-gradient-section-1 text-white">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
              <img src={leaseReadyImage} alt="Lease-ready commercial space fit-out" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-commercial-navy/60 via-transparent to-transparent"></div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="mb-6 inline-block bg-gradient-to-r from-primary/20 to-solar/20 text-accent border-none font-semibold px-6 py-2 rounded-full">
               Lease-Ready & Rental Property Fit-Out
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-accent via-primary-foreground to-accent bg-clip-text text-transparent">
                Convert Empty Commercial Space into a Market-Ready Asset
              </h2>
              <p className="text-xl text-primary-foreground/85 mb-8 leading-relaxed">
                For property owners and investors, an unfinished or outdated space can affect leasing potential. CommInfra can prepare commercial spaces for occupancy.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {leaseReadyWorks.map((item, index) => <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-solar" />
                    <span className="text-sm text-primary-foreground/90">{item}</span>
                  </div>)}
              </div>
              <p className="text-lg text-primary-foreground/85">
                The goal is to create <span className="font-semibold text-solar">professional, functional and tenant-ready commercial spaces</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 08 — Sustainable Interior Solutions */}
      <section className="py-24 bg-gradient-section-2 text-white">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6 inline-block bg-gradient-to-r from-primary/20 to-solar/20 text-accent border-none font-semibold px-6 py-2 rounded-full">
               Sustainable Interior Solutions
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-accent via-primary-foreground to-accent bg-clip-text text-transparent">
                Better Interiors with Lower Operational Impact
              </h2>
              <p className="text-xl text-primary-foreground/85 mb-8 leading-relaxed">
                Our Interior & Renovation division extends CommInfra's philosophy of energy efficiency, solar power, smart energy systems, water management and low-carbon development into interiors.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {sustainableSolutions.map((item, index) => <div key={index} className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10">
                    <item.icon className="h-5 w-5 shrink-0 text-solar" />
                    <span className="text-sm text-primary-foreground/90">{item.label}</span>
                  </div>)}
              </div>
              <p className="text-lg font-semibold text-solar">Design beautiful spaces that perform efficiently.</p>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src={sustainableImage} alt="Sustainable commercial interior solutions" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-commercial-navy/60 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 09 — Smart Commercial Interiors */}
      <section className="py-24 bg-gradient-section-3 text-white">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
              <img src={smartInteriorImage} alt="Smart commercial interior technology" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-commercial-navy/60 via-transparent to-transparent"></div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="mb-6 inline-block bg-gradient-to-r from-primary/20 to-solar/20 text-accent border-none font-semibold px-6 py-2 rounded-full">
               Smart Commercial Interiors
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-accent via-primary-foreground to-accent bg-clip-text text-transparent">
                Technology Integrated into the Workplace
              </h2>
              <p className="text-xl text-primary-foreground/85 mb-8 leading-relaxed">
                Modern commercial interiors increasingly require technology infrastructure from day one.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {smartSolutions.map((item, index) => <div key={index} className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10">
                    <item.icon className="h-5 w-5 shrink-0 text-solar" />
                    <span className="text-sm text-primary-foreground/90">{item.label}</span>
                  </div>)}
              </div>
              <p className="text-lg text-primary-foreground/85">
                This complements CommInfra's existing focus on <span className="font-semibold text-solar">AI-powered building management and smart building systems</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10 — Our Interior & Renovation Process */}
      <section className="py-24 bg-gradient-section-1 text-white">
        <div className="container px-4">
          <div className="text-center mb-16">
            <div className="mb-6 inline-block bg-gradient-to-r from-primary/20 to-solar/20 text-accent border-none font-semibold px-6 py-2 rounded-full">
             — Our Interior & Renovation Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-accent via-primary-foreground to-accent bg-clip-text text-transparent">
              A Structured Approach from Site to Handover
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => <Card key={index} className="group hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-500 bg-white border-none rounded-2xl hover-scale animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-7">
                  <div className="w-14 h-14 mb-5 rounded-2xl bg-gradient-to-br from-primary/15 to-solar/15 flex items-center justify-center group-hover:from-primary group-hover:to-solar transition-colors duration-500">
                    <step.icon className="h-7 w-7 text-commercial group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div className="text-sm font-bold text-primary/60 mb-1 tracking-widest">{step.num}</div>
                  <h3 className="text-xl font-bold text-commercial-navy mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* 11 — Interior Solutions for Different Needs */}
      <section className="py-24 bg-gradient-section-2 text-white">
        <div className="container px-4">
          <div className="text-center mb-14">
            <div className="mb-6 inline-block bg-gradient-to-r from-primary/20 to-solar/20 text-accent border-none font-semibold px-6 py-2 rounded-full">
             Interior Solutions for Different Needs
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent via-primary-foreground to-accent bg-clip-text text-transparent">
              Designed Around Your Property
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {requirementSolutions.map((item, index) => <Card key={index} className="bg-white border-none rounded-2xl shadow-lg hover-scale transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <ArrowRightLeft className="h-6 w-6 mx-auto mb-3 text-primary" />
                  <p className="text-sm font-semibold text-muted-foreground mb-2">{item.requirement}</p>
                  <div className="w-full h-px bg-border mb-2"></div>
                  <p className="font-bold text-commercial-navy">{item.solution}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* 12 — Why CommInfra */}
      <section className="py-24 bg-gradient-section-3 text-white">
        <div className="container px-4 max-w-5xl">
          <div className="text-center mb-12">
            <div className="mb-6 inline-block bg-gradient-to-r from-primary/20 to-solar/20 text-accent border-none font-semibold px-6 py-2 rounded-full">
             Why CommInfra
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-accent via-primary-foreground to-accent bg-clip-text text-transparent">
              Real Estate Knowledge Beyond Interior Design
            </h2>
          </div>
          <p className="text-xl text-primary-foreground/85 mb-8 leading-relaxed text-center">
            Unlike an interior-only service provider, CommInfra operates across the <span className="font-semibold text-solar">commercial property lifecycle</span>, including land assets, built assets, property sales, leasing/rental and commercial infrastructure.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {["Commercial property requirements", "Tenant requirements", "Leasing requirements", "Asset enhancement", "Operational efficiency", "Sustainability", "Long-term property value"].map((item, index) => <span key={index} className="bg-white/10 backdrop-blur-sm border border-white/15 text-primary-foreground/90 px-4 py-2 rounded-full text-sm">
                {item}
              </span>)}
          </div>
          <div className="bg-white rounded-3xl p-10 text-center shadow-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-commercial-navy mb-4">Our Approach</h3>
            <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary via-commercial to-solar bg-clip-text text-transparent">
              Design + Infrastructure + Sustainability + Business Functionality
            </p>
          </div>
        </div>
      </section>

      {/* 13 — Before & After */}
      <section className="py-24 bg-gradient-section-1 text-white">
        <div className="container px-4">
          <div className="text-center mb-14">
            <div className="mb-6 inline-block bg-gradient-to-r from-primary/20 to-solar/20 text-accent border-none font-semibold px-6 py-2 rounded-full">
              Before & After
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-accent via-primary-foreground to-accent bg-clip-text text-transparent">
              Transforming Existing Spaces
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch mb-12">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src={beforeImage} alt="Commercial space before renovation" className="w-full h-96 object-cover" />
              <div className="absolute top-6 left-6">
                <Badge className="bg-commercial-navy/90 text-white border-none font-semibold px-5 py-2 text-sm">BEFORE</Badge>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src={afterImage} alt="Commercial space after renovation" className="w-full h-96 object-cover" />
              <div className="absolute top-6 right-6">
                <Badge className="bg-solar/90 text-commercial-navy border-none font-semibold px-5 py-2 text-sm">AFTER</Badge>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {beforeAfter.map((item, index) => <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-5 flex items-center justify-center gap-3">
                <span className="text-sm text-primary-foreground/85 text-center">{item.before}</span>
                <ArrowRight className="h-5 w-5 shrink-0 text-solar" />
                <span className="text-sm font-semibold text-white text-center">{item.after}</span>
              </div>)}
          </div>
        </div>
      </section>

      {/* 14 — Project Showcase */}
      <section className="py-24 bg-gradient-section-2 text-white">
        <div className="container px-4">
          <div className="text-center mb-16">
            <div className="mb-6 inline-block bg-gradient-to-r from-primary/20 to-solar/20 text-accent border-none font-semibold px-6 py-2 rounded-full">
             Project Showcase
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent via-primary-foreground to-accent bg-clip-text text-transparent">
              Interior & Renovation Projects
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {showcaseProjects.map((project, index) => <Card key={index} className="overflow-hidden hover-scale transition-all duration-300 border-none shadow-lg group bg-white">
                <div className="relative h-56 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute bottom-3 left-3">
                    <Badge className={`border-none font-semibold text-xs ${project.status === "Ongoing" ? "bg-solar text-commercial-navy" : "bg-primary text-white"}`}>
                      {project.status}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="text-lg font-bold text-commercial-navy mb-3">{project.title}</h3>
                  <div className="space-y-2 text-sm">
                    <p className="text-muted-foreground"><span className="font-semibold text-commercial">Location:</span> {project.location}</p>
                    <p className="text-muted-foreground"><span className="font-semibold text-commercial">Area:</span> {project.area}</p>
                    <p className="text-muted-foreground"><span className="font-semibold text-commercial">Scope:</span> {project.scope}</p>
                    <p className="text-muted-foreground"><span className="font-semibold text-commercial">Status:</span> {project.status}</p>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* 15 — Final CTA */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={ctaImage} alt="Transform your commercial space with CommInfra" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-commercial-navy/95 via-commercial-navy/85 to-commercial-navy/75"></div>
        </div>
        <div className="relative z-10 container text-center text-white px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}>
            Ready to Transform Your Commercial Space?
          </h2>
          <p className="text-lg md:text-2xl max-w-4xl mx-auto mb-10 leading-relaxed">
            Whether you are developing a new commercial property, renovating an existing building or preparing a space for leasing, our Interior / Renovation team can help transform the property into a <span className="font-semibold text-solar">functional, modern and business-ready environment</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group" asChild>
              <Link to="/contact">
                Request a Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-md text-white border border-white/40 hover:bg-white/20 px-8 py-4 rounded-full hover:scale-105 transition-all duration-300" asChild>
              <Link to="/contact">
                Contact CommInfra
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>;
};

export default InteriorRenovationPage;
