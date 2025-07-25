import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Mail } from 'lucide-react';
import profileImage from '@/assets/saurabh-profile.jpg';

const HeroSection = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-soft via-background to-background opacity-50"></div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-12 relative">
            <div className="w-48 h-48 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/70 rounded-full blur-lg opacity-20 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src={profileImage}
                  alt="Saurabh Himral - Data Analyst"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <div className="space-y-6 mb-12">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="block text-foreground">Hi, I'm</span>
              <span className="block text-primary font-bold">Saurabh</span>
            </h1>
            
            <div className="text-xl md:text-2xl text-muted-foreground font-medium">
              Data Analyst & Insight Explorer
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Turning raw data into powerful insights using Python, SQL, and Power BI. 
              Passionate about uncovering actionable intelligence from complex datasets.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="xl" 
              variant="hero"
              onClick={scrollToPortfolio}
              className="group"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            
            <Button 
              size="xl" 
              variant="outline-primary"
              onClick={scrollToContact}
              className="group"
            >
              <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Get In Touch
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
              <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;