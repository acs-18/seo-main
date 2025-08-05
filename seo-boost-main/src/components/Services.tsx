import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Settings, 
  FileText, 
  MapPin, 
  TrendingUp, 
  Smartphone,
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "On-Page SEO",
      description: "Optimize your website content, meta tags, headers, and internal linking structure for better search engine visibility.",
      features: ["Keyword Research", "Content Optimization", "Meta Tags", "Schema Markup"],
      color: "from-seo-blue to-blue-400"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Technical SEO",
      description: "Fix technical issues, improve site speed, mobile optimization, and ensure search engines can crawl your site effectively.",
      features: ["Site Speed Optimization", "Mobile Optimization", "XML Sitemaps", "Core Web Vitals"],
      color: "from-seo-purple to-purple-400"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Off-Page SEO",
      description: "Build high-quality backlinks, improve domain authority, and enhance your website's reputation across the web.",
      features: ["Link Building", "Brand Mentions", "Social Signals", "Citation Building"],
      color: "from-emerald-500 to-teal-400"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Local SEO",
      description: "Dominate local search results, optimize Google My Business, and attract customers in your local area.",
      features: ["Google My Business", "Local Citations", "Review Management", "Location Pages"],
      color: "from-orange-500 to-red-400"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Content Marketing",
      description: "Create SEO-optimized content that engages your audience and drives organic traffic to your website.",
      features: ["Blog Writing", "Content Strategy", "Keyword Research", "Content Optimization"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "E-commerce SEO",
      description: "Specialized SEO strategies for online stores to increase product visibility and drive more sales.",
      features: ["Product Optimization", "Category Pages", "Shopping Ads", "Conversion Optimization"],
      color: "from-pink-500 to-rose-400"
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">SEO Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive SEO solutions to boost your online presence, increase organic traffic, 
            and drive business growth with proven strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 glow-on-hover border-0 card-gradient">
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-6`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button variant="outline" className="w-full group hover:bg-primary hover:text-primary-foreground">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            Get Custom SEO Strategy
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;