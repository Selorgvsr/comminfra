import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import logo from "@/assets/comminfra-logo.svg";
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
      <div className="container py-12 text-slate-50">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="CommInfra Logo" className="h-16 w-auto" />
              <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-primary to-commercial bg-clip-text text-blue-700">
                COMMINFRA
              </span>
            </div>
            <p className="text-sm text-red-500">
              Building the future of commercial real estate with ESG-aligned infrastructure and solar-powered sustainability.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-blue-700">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.slice(0, 3).map(link => <li key={link.path}>
                  <Link to={link.path} className="text-sm transition-smooth text-red-500">
                    {link.label}
                  </Link>
                </li>)}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-blue-700">Services</h3>
            <ul className="space-y-2">
              {footerLinks.slice(3).map(link => <li key={link.path}>
                  <Link to={link.path} className="text-sm transition-smooth text-red-500">
                    {link.label}
                  </Link>
                </li>)}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-blue-700">Contact</h3>
            <div className="space-y-2 text-sm text-white/80">
              
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-red-600" />
                <span className="text-red-600">+91 9444126240</span>
              </div>
              <div className="flex items-center space-x-2 text-red-600">
                <Mail className="h-4 w-4" />
                <span>shekar@comminfra.in</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm text-red-500">© 2025 shekar@CommInfra.in All rights reserved. Building with purpose.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;