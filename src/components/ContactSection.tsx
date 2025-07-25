import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'saurabhhimral@gmail.com',
      href: 'mailto:saurabhhimral@gmail.com',
      primary: true
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 94593 91411',
      href: 'tel:+919459391411'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Saurabh Himral',
      href: 'https://www.linkedin.com/in/saurabh-himral-889332200/'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'SaurabhHimral',
      href: 'https://github.com/SaurabhHimral'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your data into actionable insights? Let's discuss your project and explore how we can work together.
            </p>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Cards */}
            <div className="lg:col-span-2 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((contact) => {
                  const IconComponent = contact.icon;
                  return (
                    <Card key={contact.label} className={`card-elevated group hover:scale-105 transition-all duration-300 cursor-pointer ${contact.primary ? 'ring-2 ring-primary/20' : ''}`}>
                      <a href={contact.href} target="_blank" rel="noopener noreferrer" className="block">
                        <CardHeader className="pb-3">
                          <div className="flex items-center space-x-3">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${contact.primary ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'} group-hover:scale-110 transition-transform`}>
                              <IconComponent className="h-5 w-5" />
                            </div>
                            <CardTitle className="text-lg">{contact.label}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-muted-foreground font-medium group-hover:text-primary transition-colors">
                            {contact.value}
                          </p>
                        </CardContent>
                      </a>
                    </Card>
                  );
                })}
              </div>

              {/* Additional Info */}
              <Card className="card-elevated">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">Location & Availability</h3>
                      <p className="text-muted-foreground mb-3">
                        Based in India, available for remote work and consultations worldwide.
                      </p>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-green-600 font-medium">Available for new projects</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Action */}
            <div className="space-y-6">
              <Card className="card-elevated">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">Ready to Start?</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Let's discuss your data analysis needs and how I can help transform your business insights.
                  </p>
                  
                  <div className="space-y-3">
                    <Button 
                      className="w-full group" 
                      size="lg"
                      onClick={() => window.open('mailto:saurabhhimral@gmail.com?subject=Data Analysis Project Inquiry', '_blank')}
                    >
                      <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      Send Email
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.open('https://www.linkedin.com/in/saurabh-himral-889332200/', '_blank')}
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      Connect on LinkedIn
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="card-elevated">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Send className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Quick Response</h4>
                  <p className="text-sm text-muted-foreground">
                    I typically respond to inquiries within 24 hours
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;