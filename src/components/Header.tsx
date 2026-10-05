import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/comminfra-logo.svg";
const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [{
    label: "Buy",
    path: "/buy"
  }, {
    label: "Sell",
    path: "/sell"
  }, {
    label: "Rent/Lease Asset",
    path: "/rent-lease-asset"
  }, {
    label: "Interior/Renovation",
    path: "/interior-renovation"
  }, {
    label: "Project",
    path: "/projects"
  }, {
    label: "Contact Us",
    path: "/contact"
  }];
  return <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between gap-3">
        <Link to="/" className="flex min-w-0 items-center space-x-2 sm:space-x-3">
          <img src={logo} alt="CommInfra Logo" className="h-12 w-auto shrink-0 sm:h-16" />
          <span className="truncate text-2xl font-extrabold tracking-wider drop-shadow-sm sm:text-3xl">
            <span className="text-blue-700">COMM</span>
            <span className="text-blue-700">INFRA</span>
          </span>
        </Link>
        
        <nav className="hidden xl:flex items-center space-x-1">
          {navItems.map(item => <Button key={item.path} variant={location.pathname === item.path ? "commercial" : "ghost"} size="sm" asChild>
              <Link to={item.path} className="header-nav-link text-lg">{item.label}</Link>
            </Button>)}
        </nav>
        
        <div className="flex items-center space-x-2">
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="shrink-0 xl:hidden" aria-label="Open navigation menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map(item => <Button key={item.path} variant={location.pathname === item.path ? "commercial" : "ghost"} className="header-nav-link justify-start" asChild onClick={() => setIsOpen(false)}>
                    <Link to={item.path}>{item.label}</Link>
                  </Button>)}
                <Button variant="investor" className="mt-4" asChild>
                  <Link to="/reit-invest">Invest Now</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>;
};
export default Header;