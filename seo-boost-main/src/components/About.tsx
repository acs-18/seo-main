import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle, 
  Award, 
  Users, 
  Target,
  ArrowRight,
  Star
} from "lucide-react";

const About = () => {
  const achievements = [
    { icon: <Users className="w-6 h-6" />, number: "250+", label: "Happy Clients" },
    { icon: <Award className="w-6 h-6" />, number: "500+", label: "Projects Completed" },
    { icon: <Target className="w-6 h-6" />, number: "98%", label: "Success Rate" },
    { icon: <Star className="w-6 h-6" />, number: "5+", label: "Years Experience" },
  ];

  const whyChooseUs = [
    "Proven track record with 500+ successful SEO projects",
    "Data-driven strategies with transparent reporting",
    "Expert team with Google-certified SEO specialists",
    "Custom solutions tailored to your business needs",
    "24/7 support and regular performance monitoring",
    "ROI-focused approach with measurable results"
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-gradient">SEO Boost</span> 
              <br />for Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We are a leading SEO services agency in Mumbai, dedicated to helping businesses 
              achieve higher search engine rankings and drive organic growth. Our expert team 
              uses proven strategies and cutting-edge techniques to deliver exceptional results.
            </p>

            <div className="space-y-4 mb-8">
              {whyChooseUs.map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{point}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg">
              Start Your SEO Journey
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((stat, index) => (
              <Card key={index} className="p-6 text-center shadow-card glow-on-hover border-0 card-gradient">
                <div className="w-12 h-12 bg-gradient-to-r from-seo-blue to-seo-purple rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Our <span className="text-gradient">SEO Process</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              A systematic approach to deliver measurable SEO results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "SEO Audit",
                description: "Comprehensive analysis of your website's current SEO performance"
              },
              {
                step: "02", 
                title: "Strategy",
                description: "Custom SEO strategy based on your business goals and market analysis"
              },
              {
                step: "03",
                title: "Implementation",
                description: "Execute on-page, technical, and off-page SEO optimizations"
              },
              {
                step: "04",
                title: "Monitor & Report",
                description: "Continuous monitoring with detailed monthly performance reports"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-seo-blue to-seo-purple rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {process.step}
                </div>
                <h4 className="text-xl font-bold mb-3">{process.title}</h4>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;