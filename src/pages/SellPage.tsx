import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Building2, 
  TrendingUp, 
  CheckCircle, 
  Clock, 
  DollarSign,
  FileText,
  Upload,
  MapPin,
  Calendar,
  Leaf,
  ShieldCheck,
  Timer,
  Store,
  ShoppingBag,
  Building,
  Trees,
  Layers3
} from "lucide-react";

// Image imports
import sellerHandshake from "@/assets/seller-handshake.jpg";
import projectTimeline from "@/assets/project-timeline.jpg";
import constructionFoundation from "@/assets/construction-foundation-work.jpg";
import semiCompletedScaffolding from "@/assets/semi-completed-scaffolding.jpg";
import interiorFitout from "@/assets/interior-fitout-progress.jpg";
import completedWithTenants from "@/assets/completed-with-tenants.jpg";
import retailFloorBranded from "@/assets/retail-floor-branded.jpg";
import shoppingArcadeTraffic from "@/assets/shopping-arcade-traffic.jpg";
import highStreetFrontage from "@/assets/high-street-frontage.jpg";
import lifestyleCenterGreen from "@/assets/lifestyle-center-green.jpg";
import esgDashboard from "@/assets/esg-dashboard.jpg";
import legalComplianceReview from "@/assets/legal-compliance-review.jpg";
import sellerFaqTablet from "@/assets/seller-faq-tablet.jpg";

// Data structures
const projectStages = [
  {
    id: "started",
    title: "Started Projects",
    description: "Land acquired, foundation begun",
    status: "🟢",
    cta: "Submit Site Details",
    image: constructionFoundation,
    completion: "0-20%"
  },
  {
    id: "semi-completed",
    title: "Semi-Completed Projects", 
    description: "Structural work in progress",
    status: "🟡",
    cta: "Upload Progress Report",
    image: semiCompletedScaffolding,
    completion: "20-50%"
  },
  {
    id: "halfway",
    title: "Halfway Through",
    description: "50–70% completion",
    status: "🟠", 
    cta: "Schedule Site Visit",
    image: interiorFitout,
    completion: "50-70%"
  },
  {
    id: "completed",
    title: "Completed Projects",
    description: "Ready for occupancy",
    status: "🔵",
    cta: "Share Asset Valuation", 
    image: completedWithTenants,
    completion: "90-100%"
  }
];

const assetTypes = [
  {
    title: "Retail & Office Floors",
    icon: Store,
    image: retailFloorBranded,
    description: "Individual floors in commercial buildings"
  },
  {
    title: "Shopping Arcades / Plazas", 
    icon: ShoppingBag,
    image: shoppingArcadeTraffic,
    description: "Retail complexes and shopping centers"
  },
  {
    title: "High Street Commercial Units",
    icon: Building2,
    image: highStreetFrontage, 
    description: "Prime street-facing commercial properties"
  },
  {
    title: "Lifestyle Centers / Business Parks",
    icon: Trees,
    image: lifestyleCenterGreen,
    description: "Mixed-use developments with amenities"
  },
  {
    title: "Mixed-Use Commercial Blocks",
    icon: Layers3,
    image: completedWithTenants,
    description: "Multi-purpose commercial developments"
  }
];

const valuationSteps = [
  {
    title: "ESG Upgrade Potential",
    description: "Assessment of solar, carbon credits, and sustainability improvements",
    icon: Leaf,
    image: esgDashboard
  },
  {
    title: "Legal and Compliance Checks",
    description: "Thorough review of documentation and regulatory compliance",
    icon: ShieldCheck,
    image: legalComplianceReview
  },
  {
    title: "Timeline for Offer and Closure", 
    description: "Fast-track evaluation with transparent timelines",
    icon: Timer,
    image: projectTimeline
  }
];

const faqs = [
  {
    question: "What documents are needed for property evaluation?",
    answer: "We require property documents, approvals, completion certificates, legal clearances, and recent photographs. Our team will guide you through the complete documentation process."
  },
  {
    question: "How long does the evaluation process take?",
    answer: "Initial assessment: 48-72 hours. Complete due diligence: 7-14 working days. We provide regular updates throughout the process."
  },
  {
    question: "What types of properties are preferred?",
    answer: "We focus on commercial properties with ESG upgrade potential, prime locations, clear titles, and strong rental yield prospects. Both completed and under-construction properties are considered."
  },
  {
    question: "How do you determine the property valuation?",
    answer: "Our valuation considers location, market rates, ESG upgrade potential, legal status, rental yield prospects, and current market conditions using advanced analytics."
  }
];

const SellPage = () => {
  return (
    <div className="min-h-screen">
      {/* Section 1: Intro - Sell Your Commercial Property */}
      <section className="sell_intro_section py-20 bg-gradient-subtle">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold text-commercial-navy leading-tight">
                Unlock Value from Your Commercial Asset
              </h1>
              <p className="text-xl text-muted-foreground">
                We offer fast evaluations, flexible deal structures, and ESG-aligned upgrades for sellers.
              </p>
              <Button size="lg" className="bg-commercial hover:bg-commercial/90">
                Submit Your Property for Evaluation
              </Button>
            </div>
            <div className="relative">
              <img 
                src={sellerHandshake} 
                alt="Seller handshake in front of commercial building"
                className="w-full h-96 object-cover rounded-2xl shadow-strong"
              />
              <div className="absolute inset-0 bg-commercial/10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Project Stage Segmentation */}
      <section className="project_stage_segmentation_section py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-commercial-navy mb-4">
              Project Stage Segmentation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We purchase properties at every stage of development with tailored evaluation processes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
            {projectStages.map((stage) => (
              <Card key={stage.id} className="group hover:shadow-strong transition-all duration-300">
                <div className="relative">
                  <img 
                    src={stage.image}
                    alt={stage.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-medium">{stage.completion}</span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">{stage.status}</span>
                    {stage.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{stage.description}</p>
                  <Button variant="outline" className="w-full">
                    {stage.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <img 
              src={projectTimeline}
              alt="Project timeline showing development stages"
              className="w-full max-w-4xl mx-auto h-64 object-cover rounded-2xl shadow-strong"
            />
          </div>
        </div>
      </section>

      {/* Section 3: Asset Type Categories Grid */}
      <section className="asset_type_categories_grid py-20 bg-accent/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-commercial-navy mb-4">
              Asset Type Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We specialize in various commercial property types across different markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {assetTypes.map((asset, index) => (
              <Card key={index} className="group hover:shadow-strong transition-all duration-300 cursor-pointer">
                <div className="relative overflow-hidden">
                  <img 
                    src={asset.image}
                    alt={asset.title}
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-commercial-navy/20 group-hover:bg-commercial-navy/10 transition-colors"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full">
                      <asset.icon className="h-6 w-6 text-commercial" />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{asset.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{asset.description}</p>
                  <Button variant="outline" className="w-full">
                    Submit This Asset Type
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Valuation & Due Diligence Workflow */}
      <section className="valuation_due_diligence_section py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-commercial-navy mb-4">
              Valuation & Due Diligence Workflow
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive evaluation process ensures fair pricing and smooth transactions
            </p>
          </div>

          <div className="space-y-12">
            {valuationSteps.map((step, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center gap-4">
                    <div className="bg-commercial/10 p-3 rounded-full">
                      <step.icon className="h-8 w-8 text-commercial" />
                    </div>
                    <h3 className="text-2xl font-bold text-commercial-navy">{step.title}</h3>
                  </div>
                  <p className="text-lg text-muted-foreground">{step.description}</p>
                  <Button variant="outline">Learn More</Button>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <img 
                    src={step.image}
                    alt={step.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-strong"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: FAQs for Sellers */}
      <section className="seller_faq_section py-20 bg-accent/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold text-commercial-navy mb-8">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6 border-0 shadow-sm">
                    <AccordionTrigger className="text-left font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="lg:sticky lg:top-24">
              <img 
                src={sellerFaqTablet}
                alt="Seller reading FAQ on tablet"
                className="w-full h-96 object-cover rounded-2xl shadow-strong"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Contact & Submission Portal */}
      <section className="contact_submission_portal_section py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-commercial-navy mb-4">
              Contact & Submission Portal
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Submit your property details for a comprehensive evaluation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl text-commercial-navy">Property Submission Form</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Property Location</label>
                    <Input placeholder="Enter location" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Project Stage</label>
                    <select className="w-full h-10 px-3 rounded-md border border-input bg-background">
                      <option>Started (0-20%)</option>
                      <option>Semi-completed (20-50%)</option>
                      <option>Halfway (50-70%)</option>
                      <option>Completed (90-100%)</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Asset Type</label>
                    <select className="w-full h-10 px-3 rounded-md border border-input bg-background">
                      <option>Retail & Office Floors</option>
                      <option>Shopping Arcades</option>
                      <option>High Street Commercial</option>
                      <option>Lifestyle Centers</option>
                      <option>Mixed-Use Blocks</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Expected Value (₹)</label>
                    <Input placeholder="Enter expected value" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Approvals & Permissions</label>
                  <Textarea placeholder="List all approvals and permissions obtained" />
                </div>

                <div className="space-y-4">
                  <label className="text-sm font-medium">Upload Documents</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-commercial transition-colors cursor-pointer">
                      <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Site Photos</p>
                    </div>
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-commercial transition-colors cursor-pointer">
                      <FileText className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Floor Plans</p>
                    </div>
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-commercial transition-colors cursor-pointer">
                      <ShieldCheck className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Legal Documents</p>
                    </div>
                  </div>
                </div>

                <Button size="lg" className="w-full bg-commercial hover:bg-commercial/90">
                  Get Your Property Evaluated
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-6 w-6 text-commercial" />
                    Fast Evaluation Process
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Get your property evaluated within 48-72 hours with our streamlined process.</p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-6 w-6 text-commercial" />
                    Competitive Pricing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">We offer market-leading prices with ESG upgrade value considerations.</p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-6 w-6 text-commercial" />
                    Transparent Process
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Complete transparency in valuation methodology and transaction process.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SellPage;