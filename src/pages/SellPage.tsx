import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { Building2, TrendingUp, CheckCircle, Clock, DollarSign, FileText, Upload, MapPin, Calendar, Leaf, ShieldCheck, Timer, Store, ShoppingBag, Building, Trees, Blocks, Star, Award, Zap } from "lucide-react";

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
const projectStages = [{
  id: "started",
  title: "Started Projects",
  description: "Land acquired, foundation work begun",
  status: "🟢",
  cta: "Submit Site Details",
  image: constructionFoundation,
  completion: 15,
  completionText: "0-20% Complete"
}, {
  id: "semi-completed",
  title: "Semi-Completed Projects",
  description: "Structural work and basic construction in progress",
  status: "🟡",
  cta: "Upload Progress Report",
  image: semiCompletedScaffolding,
  completion: 40,
  completionText: "20-50% Complete"
}, {
  id: "halfway",
  title: "Halfway Through",
  description: "Interior work and finishing stages underway",
  status: "🟠",
  cta: "Schedule Site Visit",
  image: interiorFitout,
  completion: 65,
  completionText: "50-70% Complete"
}, {
  id: "completed",
  title: "Completed Projects",
  description: "Ready for occupancy with active tenants",
  status: "🔵",
  cta: "Share Asset Valuation",
  image: completedWithTenants,
  completion: 95,
  completionText: "90-100% Complete"
}];
const assetTypes = [{
  title: "Retail & Office Floors",
  icon: Store,
  image: retailFloorBranded,
  description: "Individual floors in commercial buildings with high rental potential"
}, {
  title: "Shopping Arcades / Plazas",
  icon: ShoppingBag,
  image: shoppingArcadeTraffic,
  description: "Retail complexes and shopping centers with foot traffic"
}, {
  title: "High Street Commercial Units",
  icon: Building2,
  image: highStreetFrontage,
  description: "Prime street-facing commercial properties in busy areas"
}, {
  title: "Lifestyle Centers / Business Parks",
  icon: Trees,
  image: lifestyleCenterGreen,
  description: "Mixed-use developments with amenities and green spaces"
}, {
  title: "Mixed-Use Commercial Blocks",
  icon: Blocks,
  image: completedWithTenants,
  description: "Multi-purpose commercial developments with diverse income streams"
}];
const valuationSteps = [{
  title: "ESG Upgrade Potential",
  description: "We assess solar installation possibilities, carbon credit eligibility, and sustainability improvements that can increase property value by 15-25%.",
  icon: Leaf,
  image: esgDashboard,
  features: ["Solar rooftop analysis", "Carbon credit assessment", "Green certification potential", "Energy efficiency upgrades"]
}, {
  title: "Legal and Compliance Checks",
  description: "Comprehensive review of all documentation, regulatory compliance, and legal clearances to ensure smooth transaction processing.",
  icon: ShieldCheck,
  image: legalComplianceReview,
  features: ["Title verification", "Approval status check", "Compliance audit", "Documentation review"]
}, {
  title: "Timeline for Offer and Closure",
  description: "Fast-track evaluation process with transparent timelines and regular updates throughout the acquisition journey.",
  icon: Timer,
  image: projectTimeline,
  features: ["48-hour initial assessment", "7-day due diligence", "Transparent pricing", "Quick closure process"]
}];
const faqs = [{
  question: "What documents are needed for property evaluation?",
  answer: "We require property documents, approvals (CMDA/DTCP), completion certificates, legal clearances, and recent photographs. Our team will guide you through the complete documentation process and help gather any missing paperwork."
}, {
  question: "How long does the evaluation process take?",
  answer: "Initial assessment: 48-72 hours for basic evaluation. Complete due diligence: 7-14 working days including site visits. We provide regular updates and maintain transparent communication throughout the process."
}, {
  question: "What types of properties are preferred?",
  answer: "We focus on commercial properties with ESG upgrade potential, prime locations, clear titles, and strong rental yield prospects. Both completed and under-construction properties are considered, especially those with growth potential."
}, {
  question: "How do you determine the property valuation?",
  answer: "Our valuation considers location premiums, current market rates, ESG upgrade potential, legal status, rental yield prospects, and future development possibilities using advanced analytics and market intelligence."
}, {
  question: "What deal structures do you offer?",
  answer: "We offer flexible deal structures including outright purchase, joint development partnerships, revenue sharing models, and staged payments. The structure depends on the property type, completion status, and seller preferences."
}];
const SellPage = () => {
  return <div className="min-h-screen">
      {/* Section 1: Intro - Sell Your Commercial Property */}
      <section className="sell_intro_section py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold leading-tight">
                  Unlock Value from Your Commercial Asset
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We offer fast evaluations, flexible deal structures, and ESG-aligned upgrades for sellers. 
                  Transform your property into a future-ready asset.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group relative overflow-hidden">
                  <span className="relative z-10">Submit Your Property for Evaluation</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 transition-transform duration-300 group-hover:scale-105"></div>
                </Button>
                <Button size="lg" variant="outline" className="hover-scale">
                  Learn About Our Process
                </Button>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
              <img src={sellerHandshake} alt="Professional handshake representing successful commercial property transaction" className="relative w-full h-96 object-cover rounded-3xl shadow-strong transition-transform duration-500 group-hover:scale-[1.02]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Project Stage Segmentation */}
      <section className="project_stage_segmentation_section py-20">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold">
              Project Stage Segmentation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We purchase properties at every stage of development with tailored evaluation processes and competitive pricing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {projectStages.map((stage, index) => <Card key={stage.id} className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm border border-border/50">
                <div className="relative overflow-hidden">
                  <img src={stage.image} alt={stage.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                    <span className="text-sm font-semibold text-primary">{stage.completionText}</span>
                  </div>
                  <div className="absolute top-4 right-4 text-3xl filter drop-shadow-lg">
                    {stage.status}
                  </div>
                </div>
                <CardHeader className="space-y-4">
                  <CardTitle className="text-xl">
                    {stage.title}
                  </CardTitle>
                  <Progress value={stage.completion} className="h-2" />
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{stage.description}</p>
                  <Button variant="outline" className="w-full group/btn">
                    <span className="group-hover/btn:translate-x-1 transition-transform">{stage.cta}</span>
                  </Button>
                </CardContent>
              </Card>)}
          </div>

          <div className="mt-16 text-center">
            <div className="relative group inline-block">
              <img src={projectTimeline} alt="Development timeline showing various project stages" className="w-full max-w-5xl h-80 object-cover rounded-3xl shadow-strong transition-transform duration-500 group-hover:scale-[1.02]" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Asset Type Categories Grid */}
      <section className="asset_type_categories_grid py-20 bg-gradient-to-br from-accent/20 via-background to-primary/5">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold">
              Asset Type Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We specialize in various commercial property types across different markets and development stages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {assetTypes.map((asset, index) => <Card key={index} className="group hover:shadow-strong transition-all duration-500 cursor-pointer bg-card/60 backdrop-blur-sm hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img src={asset.image} alt={asset.title} className="w-full h-56 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 group-hover:scale-110 transition-transform">
                    <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30">
                      <asset.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-2">{asset.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <p className="text-muted-foreground">{asset.description}</p>
                  <Button variant="outline" className="w-full group/btn hover:bg-primary hover:text-primary-foreground">
                    <Store className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                    Submit This Asset Type
                  </Button>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Section 4: Valuation & Due Diligence Workflow */}
      <section className="valuation_due_diligence_section py-20">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold">
              Valuation & Due Diligence Workflow
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive evaluation process ensures fair pricing, ESG alignment, and smooth transaction execution
            </p>
          </div>

          
        </div>
      </section>

      {/* Section 5: FAQs for Sellers */}
      <section className="seller_faq_section py-20 bg-gradient-to-br from-primary/5 via-background to-accent/10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-muted-foreground">
                  Get answers to common questions about our property acquisition process
                </p>
              </div>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-card/60 backdrop-blur-sm rounded-xl px-6 border border-border/50 shadow-soft">
                    <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>)}
              </Accordion>
            </div>
            <div className="lg:sticky lg:top-24">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <img src={sellerFaqTablet} alt="Professional reviewing seller information on tablet" className="relative w-full h-96 object-cover rounded-3xl shadow-strong transition-transform duration-500 group-hover:scale-[1.02]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Contact & Submission Portal */}
      <section className="contact_submission_portal_section py-20">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold">
              Contact & Submission Portal
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Submit your property details for a comprehensive evaluation and competitive offer
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <Card className="lg:col-span-3 p-8 bg-card/60 backdrop-blur-sm border border-border/50">
              <CardHeader className="space-y-4">
                <CardTitle className="text-2xl">Property Submission Form</CardTitle>
                <p className="text-muted-foreground">Provide details about your commercial property for evaluation</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Property Location *</label>
                    <Input placeholder="Enter city and area" className="transition-all focus:ring-2 focus:ring-primary/20" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Project Stage *</label>
                    <select className="w-full h-10 px-3 rounded-md border border-input bg-background transition-all focus:ring-2 focus:ring-primary/20">
                      <option>Started (0-20%)</option>
                      <option>Semi-completed (20-50%)</option>
                      <option>Halfway (50-70%)</option>
                      <option>Completed (90-100%)</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Asset Type *</label>
                    <select className="w-full h-10 px-3 rounded-md border border-input bg-background transition-all focus:ring-2 focus:ring-primary/20">
                      <option>Retail & Office Floors</option>
                      <option>Shopping Arcades</option>
                      <option>High Street Commercial</option>
                      <option>Lifestyle Centers</option>
                      <option>Mixed-Use Blocks</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Expected Value (₹) *</label>
                    <Input placeholder="Enter expected value in Crores" className="transition-all focus:ring-2 focus:ring-primary/20" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold">Approvals & Permissions</label>
                  <Textarea placeholder="List all approvals (CMDA/DTCP), permissions, and certifications obtained" className="min-h-[100px] transition-all focus:ring-2 focus:ring-primary/20" />
                </div>

                <div className="space-y-4">
                  <label className="text-sm font-semibold">Upload Documents</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-primary hover:bg-primary/5 transition-all cursor-pointer group">
                      <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground group-hover:text-primary transition-colors" />
                      <p className="text-sm font-medium">Site Photos</p>
                      <p className="text-xs text-muted-foreground">JPG, PNG up to 10MB</p>
                    </div>
                    <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-primary hover:bg-primary/5 transition-all cursor-pointer group">
                      <FileText className="h-8 w-8 mx-auto mb-2 text-muted-foreground group-hover:text-primary transition-colors" />
                      <p className="text-sm font-medium">Floor Plans</p>
                      <p className="text-xs text-muted-foreground">PDF, JPG up to 5MB</p>
                    </div>
                    <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-primary hover:bg-primary/5 transition-all cursor-pointer group">
                      <ShieldCheck className="h-8 w-8 mx-auto mb-2 text-muted-foreground group-hover:text-primary transition-colors" />
                      <p className="text-sm font-medium">Legal Documents</p>
                      <p className="text-xs text-muted-foreground">PDF up to 20MB</p>
                    </div>
                  </div>
                </div>

                <Button size="lg" className="w-full group relative overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    <Star className="h-5 w-5" />
                    Get Your Property Evaluated
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 transition-transform duration-300 group-hover:scale-105"></div>
                </Button>
              </CardContent>
            </Card>

            <div className="lg:col-span-2 space-y-8">
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-6 w-6 text-primary" />
                    Why Choose Us?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Zap className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Fast Evaluation</h4>
                      <p className="text-sm text-muted-foreground">48-hour initial assessment</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Competitive Pricing</h4>
                      <p className="text-sm text-muted-foreground">Market-leading valuations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Leaf className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">ESG Upgrades</h4>
                      <p className="text-sm text-muted-foreground">Value-added improvements</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Legal Support</h4>
                      <p className="text-sm text-muted-foreground">End-to-end assistance</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle>Quick Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-sm">Chennai, Bengaluru, Hyderabad</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="text-sm">Mon-Sat: 9 AM - 7 PM</span>
                  </div>
                  <Button variant="outline" className="w-full">
                    Schedule a Call
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default SellPage;