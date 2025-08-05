import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-cityscape.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Rank High On 
              <span className="block text-gradient bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                GOOGLE SEARCH ENGINE
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Professional SEO services in Mumbai to boost your website rankings, 
              increase organic traffic, and grow your business online with proven strategies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="hero" size="lg" className="bg-white text-seo-blue hover:bg-blue-50">
                Get Free SEO Audit
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-seo-blue">
                View Our Work
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="text-white">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="w-6 h-6 text-blue-200" />
                </div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-blue-200">Websites Optimized</div>
              </div>
              <div className="text-white">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-blue-200" />
                </div>
                <div className="text-2xl font-bold">250+</div>
                <div className="text-sm text-blue-200">Happy Clients</div>
              </div>
              <div className="text-white">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-6 h-6 text-blue-200" />
                </div>
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm text-blue-200">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-elegant border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Get Your Free SEO Consultation</h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name*"
                  className="w-full px-4 py-3 rounded-lg bg-white/90 text-seo-dark placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-seo-blue"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email*"
                  className="w-full px-4 py-3 rounded-lg bg-white/90 text-seo-dark placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-seo-blue"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Mobile Number*"
                  className="w-full px-4 py-3 rounded-lg bg-white/90 text-seo-dark placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-seo-blue"
                  required
                />
              </div>
              <div>
                <input
                  type="url"
                  placeholder="Website URL"
                  className="w-full px-4 py-3 rounded-lg bg-white/90 text-seo-dark placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-seo-blue"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-3"
              >
                Send Message
              </Button>
            </form>
            <p className="text-white/80 text-sm mt-4 text-center">
              🚀 Get response within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;