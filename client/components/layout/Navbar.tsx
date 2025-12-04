import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    {
      label: "Services",
      href: "/services",
      submenu: [
        {
          label: "Web Development",
          href: "/services?category=web-app-development",
        },
        {
          label: "Mobile App Development",
          href: "/services?category=mobile-app-development",
        },
        {
          label: "Custom Software",
          href: "/services?category=custom-software-solutions",
        },
      ],
    },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Career", href: "/career" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-xl text-gray-900"
          >
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">
                <img src="../../../public/icon.png"></img>
              </span>
            </div>
            <span>Ventechplus</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-primary"
                      : "text-gray-700 hover:text-primary"
                  } flex items-center gap-1`}
                >
                  {item.label}
                  {item.submenu && <ChevronDown size={16} />}
                </Link>

                {/* Dropdown Menu */}
                {item.submenu && (
                  <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.label}
                        to={subitem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary first:rounded-t-md last:rounded-b-md"
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
                Let's Talk →
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() => item.submenu && setServicesOpen(!servicesOpen)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                    isActive(item.href)
                      ? "text-primary bg-gray-100"
                      : "text-gray-700 hover:bg-gray-100"
                  } flex items-center justify-between`}
                >
                  <Link to={item.href} className="flex-1">
                    {item.label}
                  </Link>
                  {item.submenu && (
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  )}
                </button>

                {/* Mobile Submenu */}
                {item.submenu && servicesOpen && (
                  <div className="pl-4 space-y-1">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.label}
                        to={subitem.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-primary rounded-md"
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-white rounded-full">
              Let's Talk →
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
