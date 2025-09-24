import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Building2, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Buy", path: "/buy" },
    { label: "Sell", path: "/sell" },
    { label: "Land Asset", path: "/land-assets" },
    { label: "Build Asset", path: "/build-asset" },
    { label: "Rent/Lease Asset", path: "/rent-lease-asset" },
    { label: "Projects", path: "/projects" },
    { label: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Building2 className="h-8 w-8 text-commercial" />
          <span className="text-xl font-bold text-commercial-navy">CommercialDev</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Button
              key={item.path}
              variant={location.pathname === item.path ? "commercial" : "ghost"}
              size="sm"
              asChild
            >
              <Link to={item.path}>{item.label}</Link>
            </Button>
          ))}
        </nav>
        
        <div className="flex items-center space-x-2">
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Button
                    key={item.path}
                    variant={location.pathname === item.path ? "commercial" : "ghost"}
                    className="justify-start"
                    asChild
                    onClick={() => setIsOpen(false)}
                  >
                    <Link to={item.path}>{item.label}</Link>
                  </Button>
                ))}
                <Button variant="investor" className="mt-4" asChild>
                  <Link to="/reit-invest">Invest Now</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;