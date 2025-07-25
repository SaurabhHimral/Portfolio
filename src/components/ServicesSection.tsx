import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, TrendingUp, Database, PieChart, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: BarChart3,
      title: 'Dashboard Creation',
      description: 'Custom Power BI dashboards tailored to your business goals. Track KPIs, analyze performance, and make informed decisions with interactive visualizations.',
      features: [
        'Interactive KPI Dashboards',
        'Real-time Data Monitoring',
        'Custom Visualizations',
        'Performance Analytics'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Data Analysis',
      description: 'Deep dive into your data to uncover hidden patterns, trends, and actionable insights that drive business growth and strategic decision-making.',
      features: [
        'Statistical Analysis',
        'Trend Identification',
        'Predictive Insights',
        'Business Intelligence'
      ]
    },
    {
      icon: Database,
      title: 'Data Processing',
      description: 'Clean, transform, and optimize your raw data for analysis. From data cleaning to advanced manipulation using Python and SQL.',
      features: [
        'Data Cleaning & Validation',
        'ETL Processes',
        'Database Optimization',
        'Data Integration'
      ]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="gradient-text">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional data analysis services to help your business make data-driven decisions
            </p>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.title} className="card-elevated group hover:scale-105 transition-all duration-300 h-full">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-card rounded-2xl p-8 border card-elevated max-w-2xl mx-auto">
              <PieChart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Data?</h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how I can help you unlock insights from your data and create powerful dashboards for your business.
              </p>
              <Button size="lg" onClick={scrollToContact} className="group">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;