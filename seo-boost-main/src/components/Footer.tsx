import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from "lucide-react";

const Footer = () => {
  const services = [
    "On-Page SEO",
    "Technical SEO", 
    "Local SEO",
    "E-commerce SEO",
    "Content Marketing",
    "Link Building"
  ];

  const quickLinks = [
    "About Us",
    "Our Services",
    "Case Studies",
    "Blog",
    "Contact",
    "Privacy Policy"
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-seo-dark text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-seo-blue to-seo-purple rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold">SEO Boost</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading SEO services agency in Mumbai, helping businesses achieve higher 
              search engine rankings and drive organic growth with proven strategies.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-seo-blue transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-seo-blue mt-0.5" />
                <div>
                  <p className="text-gray-300">+91 98765 43210</p>
                  <p className="text-sm text-gray-400">Mon - Sat: 9 AM - 6 PM</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-seo-blue mt-0.5" />
                <div>
                  <p className="text-gray-300">hello@seoboost.com</p>
                  <p className="text-sm text-gray-400">We reply within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-seo-blue mt-0.5" />
                <div>
                  <p className="text-gray-300">Mumbai, Maharashtra</p>
                  <p className="text-sm text-gray-400">India</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <Button 
              className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white"
              onClick={() => window.open('https://wa.me/919876543210?text=Hi! I need help with SEO services.', '_blank')}
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 SEO Boost. All rights reserved. Designed for maximum search engine visibility.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;