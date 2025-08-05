import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare,
  Send,
  Clock,
  ExternalLink
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We'll get back to you within 24 hours.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      info: "+91 98765 43210",
      action: "tel:+919876543210"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us", 
      info: "hello@seoboost.com",
      action: "mailto:hello@seoboost.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      info: "Mumbai, Maharashtra, India",
      action: "#"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      info: "Mon - Sat: 9 AM - 6 PM",
      action: "#"
    }
  ];

  const whatsappNumber = "919876543210";
  const whatsappMessage = "Hi! I'm interested in your SEO services. Please provide more information.";

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to boost your search engine rankings? Contact us today for a free SEO consultation 
            and discover how we can help grow your business online.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="p-6 h-full card-gradient border-0">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-seo-blue to-seo-purple rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      {item.action.startsWith('#') ? (
                        <p className="text-muted-foreground">{item.info}</p>
                      ) : (
                        <a 
                          href={item.action}
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          {item.info}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-8 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                  Quick Response on WhatsApp
                </h4>
                <p className="text-green-600 dark:text-green-300 text-sm mb-3">
                  Get instant replies to your SEO queries
                </p>
                <Button 
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 card-gradient border-0">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Website URL
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="https://yourwebsite.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select a service</option>
                    <option value="seo-audit">SEO Audit</option>
                    <option value="on-page-seo">On-Page SEO</option>
                    <option value="technical-seo">Technical SEO</option>
                    <option value="local-seo">Local SEO</option>
                    <option value="content-marketing">Content Marketing</option>
                    <option value="ecommerce-seo">E-commerce SEO</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Tell us about your SEO goals and requirements..."
                  ></textarea>
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Send Message
                  <Send className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;