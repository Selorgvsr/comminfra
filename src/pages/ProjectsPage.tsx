import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, MapPin, Zap, Droplets, Car, Sun, Leaf, TrendingUp, DollarSign, Users, Calendar, FileText, Filter, Award, Target, Clock } from "lucide-react";
import projectsPortfolioMontageImage from "@/assets/projects-portfolio-montage.jpg";
import projectCardsEsgImage from "@/assets/project-cards-esg.jpg";
import projectCategoriesFilterImage from "@/assets/project-categories-filter.jpg";
import esgSustainableBuildingImage from "@/assets/esg-sustainable-commercial-building.jpg";
import projectTimelineImage from "@/assets/project-timeline.jpg";
import investorMeetingCalendarImage from "@/assets/investor-meeting-calendar.jpg";

const ProjectsPage = () => {
  const featuredProjects = [
    {
      title: "Green Valley Business Park",
      location: "Mumbai, Maharashtra",
      type: "Business Park",
      esgHighlight: "100% Solar Powered",
      status: "Completed",
      description: "Modern business complex with integrated solar infrastructure",
    },
    {
      title: "Metro Lifestyle Center",
      location: "Bangalore, Karnataka",
      type: "Mixed-Use Development",
      esgHighlight: "LEED Gold Certified",
      status: "Ongoing",
      description: "Retail and entertainment hub with sustainable design",
    },
    {
      title: "Smart Commerce Plaza",
      location: "Pune, Maharashtra",
      type: "Retail Complex",
      esgHighlight: "Carbon Neutral",
      status: "Completed",
      description: "High-street retail with smart building technology",
    },
    {
      title: "Eco Corporate Campus",
      location: "Chennai, Tamil Nadu",
      type: "Office Complex",
      esgHighlight: "Rainwater Harvesting",
      status: "Upcoming",
      description: "Corporate offices with environmental sustainability focus",
    },
    {
      title: "Solar Agri Hub",
      location: "Ahmedabad, Gujarat",
      type: "Agrivoltaic Zone",
      esgHighlight: "Dual Land Use",
      status: "Ongoing",
      description: "Agricultural land with solar panel integration",
    },
    {
      title: "Urban Retail District",
      location: "Hyderabad, Telangana",
      type: "Lifestyle Center",
      esgHighlight: "Zero Waste",
      status: "Completed",
      description: "Shopping and dining destination with waste management",
    },
  ];

  const projectCategories = [
    {
      title: "Mixed-Use Developments",
      count: "12 Projects",
      icon: Building2,
    },
    {
      title: "Retail & Office Complexes",
      count: "18 Projects",
      icon: Building2,
    },
    {
      title: "Lifestyle Centers",
      count: "8 Projects",
      icon: Users,
    },
    {
      title: "Business Parks",
      count: "15 Projects",
      icon: Building2,
    },
    {
      title: "Agrivoltaic Zones",
      count: "6 Projects",
      icon: Sun,
    },
  ];

  const esgMetrics = [
    {
      title: "Solar Capacity Installed",
      value: "25 MW",
      icon: Sun,
    },
    {
      title: "Carbon Credits Generated",
      value: "50,000 Tons CO2e",
      icon: Leaf,
    },
    {
      title: "Water Conservation",
      value: "2M Liters/Year",
      icon: Droplets,
    },
    {
      title: "LEED Certified Projects",
      value: "85%",
      icon: Award,
    },
  ];

  const projectTimeline = [
    {
      year: "2024",
      status: "Upcoming",
      projects: ["Eco Corporate Campus", "Smart Tech Park", "Green Retail Hub"],
      count: 3,
    },
    {
      year: "2023",
      status: "Ongoing",
      projects: ["Metro Lifestyle Center", "Solar Agri Hub", "Urban Commons"],
      count: 5,
    },
    {
      year: "2022",
      status: "Completed",
      projects: ["Green Valley Business Park", "Smart Commerce Plaza", "Urban Retail District"],
      count: 8,
    },
    {
      year: "2021",
      status: "Completed",
      projects: ["Eco Office Tower", "Solar Shopping Mall", "Sustainable Plaza"],
      count: 6,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* SEO Meta Tags */}
      <title>Projects - Commercial Development Portfolio | CommercialDev</title>
      
      {/* Hero Section */}
      <section id="hero_projects_section" className="relative py-20 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${projectsPortfolioMontageImage})` }}
        >
          <div className="absolute inset-0 bg-commercial-navy/80"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Explore Our Commercial Real Estate Projects
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in">
              From high street retail to solar-powered business parks, our developments reflect precision, purpose, and performance.
            </p>
            <Button variant="hero" size="lg" className="animate-fade-in">
              View Our Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="featured_projects_grid" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-commercial-navy mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing our portfolio of sustainable commercial developments with ESG alignment and innovation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover-scale transition-all duration-300 border-commercial/20">
                <CardContent className="p-0">
                  <div className="h-48 bg-gradient-to-br from-commercial/20 to-commercial/40 flex items-center justify-center">
                    <Building2 className="h-16 w-16 text-commercial" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        project.status === 'Ongoing' ? 'bg-blue-100 text-blue-800' :
                        'bg-orange-100 text-orange-800'
                      }`}>
                        {project.status}
                      </span>
                      <span className="text-xs bg-commercial/10 text-commercial px-2 py-1 rounded-full">
                        {project.esgHighlight}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-commercial-navy mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2 flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {project.location}
                    </p>
                    <p className="text-sm text-commercial font-medium mb-3">
                      {project.type}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <img 
              src={projectCardsEsgImage} 
              alt="Project cards with solar icons and carbon credit badges"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-medium"
            />
          </div>
        </div>
      </section>

      {/* Project Categories Section */}
      <section id="project_categories_filter" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-commercial-navy mb-4">
              Project Categories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our diverse portfolio across different commercial real estate categories
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
            {projectCategories.map((category, index) => (
              <Card key={index} className="text-center cursor-pointer hover-scale transition-all duration-300 border-commercial/20 hover:border-commercial/40 bg-commercial-navy">
                <CardContent className="p-6">
                  <div className="bg-solar/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <category.icon className="h-8 w-8 text-solar" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-solar font-medium">
                    {category.count}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <img 
              src={projectCategoriesFilterImage} 
              alt="Category icons with zoning overlays"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-medium"
            />
          </div>
        </div>
      </section>

      {/* ESG & Sustainability Impact Section */}
      <section id="project_esg_impact_section" className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-commercial-navy mb-6">
                ESG & Sustainability Impact
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our commitment to environmental, social, and governance excellence drives measurable 
                impact across all our commercial developments.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {esgMetrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-commercial/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <metric.icon className="h-6 w-6 text-commercial" />
                    </div>
                    <div className="text-2xl font-bold text-commercial-navy mb-1">
                      {metric.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {metric.title}
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-commercial rounded-full"></div>
                  <span className="text-muted-foreground">LEED and BREEAM certified developments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-commercial rounded-full"></div>
                  <span className="text-muted-foreground">Solar integration across all projects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-commercial rounded-full"></div>
                  <span className="text-muted-foreground">Water conservation and waste reduction</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={esgSustainableBuildingImage} 
                alt="Sustainable commercial building with ESG features including solar panels, green walls, and electric vehicle charging"
                className="w-full rounded-lg shadow-medium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Timeline & Status Section */}
      <section id="project_timeline_section" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-commercial-navy mb-4">
              Project Timeline & Status
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Track our development journey from completed milestones to exciting upcoming launches
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {projectTimeline.map((timeline, index) => (
              <Card key={index} className="text-center hover-scale transition-all duration-300 border-commercial/20">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-commercial mb-2">
                    {timeline.year}
                  </div>
                  <div className={`text-sm px-3 py-1 rounded-full mb-4 inline-block ${
                    timeline.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    timeline.status === 'Ongoing' ? 'bg-blue-100 text-blue-800' :
                    'bg-orange-100 text-orange-800'
                  }`}>
                    {timeline.status}
                  </div>
                  <div className="text-2xl font-semibold text-commercial-navy mb-3">
                    {timeline.count} Projects
                  </div>
                  <div className="space-y-1">
                    {timeline.projects.slice(0, 2).map((project, idx) => (
                      <div key={idx} className="text-xs text-muted-foreground">
                        {project}
                      </div>
                    ))}
                    {timeline.projects.length > 2 && (
                      <div className="text-xs text-commercial">
                        +{timeline.projects.length - 2} more
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <img 
              src={projectTimelineImage} 
              alt="Timeline with construction icons and launch dates"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-medium"
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="project_cta_section" className="py-20 bg-commercial text-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Want to Collaborate or Invest?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join us in creating the next generation of sustainable commercial real estate that delivers 
                both financial returns and positive environmental impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="investor" size="lg">
                  Schedule a Project Tour
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-commercial">
                  Talk to Our Development Team
                </Button>
              </div>
            </div>
            <div>
              <img 
                src={investorMeetingCalendarImage} 
                alt="Investor meeting and site visit calendar"
                className="w-full rounded-lg shadow-medium"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;