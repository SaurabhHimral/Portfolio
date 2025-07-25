import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, TrendingUp, Database, BarChart3 } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Bio */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a data analyst and I love to see the insights from the data. With a background in 
                Electronics and Communication Engineering and a keen interest in exploring trends, 
                patterns, and business insights, I enjoy transforming datasets into decisions.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in data analytics combines technical expertise with a passion for 
                storytelling through data visualization. I believe that every dataset has a story 
                to tell, and I'm here to help uncover those narratives.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2024</div>
                  <div className="text-sm text-muted-foreground">Graduate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">6+</div>
                  <div className="text-sm text-muted-foreground">Core Skills</div>
                </div>
              </div>
            </div>

            {/* Education & Highlights */}
            <div className="space-y-6">
              {/* Education Card */}
              <Card className="card-elevated">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">Education</h3>
                      <p className="text-primary font-medium">
                        B.E. in Electronics and Communication Engineering
                      </p>
                      <p className="text-muted-foreground">
                        Panjab University • Class of 2024
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Core Strengths */}
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-card rounded-lg border">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Data Analysis & Insights</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-card rounded-lg border">
                  <Database className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Database Management</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-card rounded-lg border">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Data Visualization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;