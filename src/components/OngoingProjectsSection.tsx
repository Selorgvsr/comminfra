import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import constructionProgressBuildingImage from "@/assets/construction-progress-building.jpg";
import urbanCommonsPlazaImage from "@/assets/urban-commons-plaza.jpg";

const ongoingProjects = [{
  name: "Commercial Office Building",
  location: "SRP Tools,OMR,Chennai",
  status: "Structural Work",
  description: "Modern high-rise commercial tower under construction with state-of-the-art facilities and sustainable design features.",
  image: constructionProgressBuildingImage
}, {
  name: "Commercial Retail Building",
  location: "Indira Nagar, Chennai",
  status: "Interior Fitout",
  description: "Premium commercial complex with smart building systems and eco-friendly infrastructure. Targeting LEED Gold certification.",
  image: urbanCommonsPlazaImage
}];

const OngoingProjectsSection = () => {
  return (
    <section id="ongoing_projects_section" className="py-20 bg-gradient-section-2">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wide text-slate-50">
            Ongoing Projects
          </h2>
          <div className="w-20 h-1 bg-commercial mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ongoingProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover-scale transition-all duration-300 border-commercial/20 shadow-lg group">
              <div className="relative h-56 overflow-hidden">
                <img src={project.image} alt={project.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-commercial-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-commercial-navy mb-2">{project.name}</h3>
                <p className="text-sm text-muted-foreground mb-2 flex items-center">
                  <MapPin className="h-4 w-4 mr-1 text-commercial" />
                  {project.location}
                </p>
                <span className="inline-block text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-800 mb-4">
                  {project.status}
                </span>
                <div className="flex flex-col gap-2">
                  <Button asChild size="sm" className="w-full bg-commercial hover:bg-commercial/90 text-white">
                    <Link to="/contact">Book Visit</Link>
                  </Button>
                  <Button variant="outline" size="sm" className="w-full border-commercial text-commercial hover:bg-commercial/10">
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OngoingProjectsSection;
