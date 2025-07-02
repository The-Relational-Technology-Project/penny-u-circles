import { Button } from "@/components/ui/button";
import { Coffee, BookOpen, MapPin, MessageCircle, Users } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { href: "/", label: "Home", icon: Coffee },
    { href: "/map", label: "Find Gatherings", icon: MapPin },
    { href: "/reflect", label: "Reflect", icon: MessageCircle },
    { href: "/mosaic", label: "Mosaic", icon: BookOpen },
    { href: "/host", label: "Host", icon: Users },
  ];

  return (
    <nav className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-serif font-bold text-xl text-civic-earth">
            <Coffee className="h-6 w-6 text-civic-terracotta" />
            Penny U
          </Link>
          
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              
              return (
                <Button
                  key={item.href}
                  variant={isActive ? "secondary" : "ghost"}
                  size="sm"
                  asChild
                  className="gap-2"
                >
                  <Link to={item.href}>
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                </Button>
              );
            })}
          </div>
          
          {/* Mobile menu - simplified for demo */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <BookOpen className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;