import { Link } from "react-router-dom";
import { Building2, Mail, Phone, MapPin } from "lucide-react";
const Footer = () => {
  const footerLinks = [{
    label: "About Us",
    path: "/about"
  }, {
    label: "Sustainability",
    path: "/sustainability"
  }, {
    label: "Business Revenue Model",
    path: "/business-model"
  }, {
    label: "REIT & Invest in Rental Yield Assets",
    path: "/reit-invest"
  }];
  return <footer className="bg-commercial-navy text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-solar" />
              <span className="text-xl font-bold">CommInfra</span>
            </div>
            <p className="text-sm text-white/80">
              Building the future of commercial real estate with ESG-aligned infrastructure and solar-powered sustainability.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.slice(0, 3).map(link => <li key={link.path}>
                  <Link to={link.path} className="text-sm text-white/80 hover:text-solar transition-smooth">
                    {link.label}
                  </Link>
                </li>)}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.slice(3).map(link => <li key={link.path}>
                  <Link to={link.path} className="text-sm text-white/80 hover:text-solar transition-smooth">
                    {link.label}
                  </Link>
                </li>)}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-white/80">
              
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 9444126240</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>shekar@comminfra.in</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm text-white/60">© 2025 shekar@CommInfra.in All rights reserved. Building with purpose.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;