import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, FileText } from 'lucide-react';  // Added FileText for paper icon
import netflixProject from '@/assets/netflix-project.jpg';
import hrDashboard from '@/assets/hr-dashboard.jpg';
import eegResearch from '@/assets/eeg-research.jpg';

const PortfolioSection = () => {
  const projects = [
    {
      title: 'Netflix Movies: Data Analysis Case Study',
      description: 'Comprehensive analysis of Netflix movies dataset exploring genre trends, vote averages, and viewing patterns. Created compelling visualizations to tell the story behind the data.',
      image: netflixProject,
      tools: ['Python', 'pandas', 'seaborn', 'matplotlib'],
      keyOutcomes: [
        'Genre trend analysis',
        'Vote average insights',
        'Visual storytelling',
        'Data-driven recommendations'
      ],
      type: 'Data Analysis',
      featured: true,
      githubUrl: 'https://github.com/SaurabhHimral/Netflix-Movies-Data-Analysis-Case-Study'  // Added GitHub link[2]
    },
    {
      title: 'HR Attendance Analytics Dashboard',
      description: 'Interactive Power BI dashboard providing comprehensive insights into employee attendance patterns, team performance, and absenteeism trends for strategic HR decisions.',
      image: hrDashboard,
      tools: ['Power BI', 'DAX', 'Excel'],
      keyOutcomes: [
        '91.83% overall presence tracked',
        'Team-specific insights',
        'Absenteeism pattern analysis',
        'Real-time monitoring'
      ],
      type: 'Dashboard',
      featured: true,
      githubUrl: 'https://github.com/SaurabhHimral/HR-Attendance-Analytics-Dashboard'  // Added GitHub link[1]
    },
    {
      title: 'EEG Emotion Recognition Research',
      description: 'Advanced research project combining CNN and Transformer models for emotional state classification from EEG signals, achieving high accuracy in mental health applications.',
      image: eegResearch,
      tools: ['Python', 'TensorFlow', 'CNN', 'Transformers'],
      keyOutcomes: [
        '97.5% classification accuracy',
        'CNN-Transformer fusion',
        'Mental health applications',
        'Cognitive technology advancement'
      ],
      type: 'Research',
      featured: true,
      paperUrl: 'https://doi.org/10.21203/rs.3.rs-3739841/v1'  // Added DOI link for research paper[3]
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcase of data analysis projects, dashboards, and research work demonstrating technical expertise and business impact
            </p>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card key={project.title} className="overflow-hidden card-elevated group">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Project Image */}
                  <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Project Content */}
                  <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="space-y-6">
                      {/* Project Type & Title */}
                      <div>
                        <Badge variant="secondary" className="mb-3">
                          {project.type}
                        </Badge>
                        <h3 className="text-2xl lg:text-3xl font-bold leading-tight">
                          {project.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tools */}
                      <div>
                        <h4 className="font-semibold mb-3">Tools & Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tools.map((tool) => (
                            <Badge key={tool} variant="outline" className="text-xs">
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Key Outcomes */}
                      <div>
                        <h4 className="font-semibold mb-3">Key Outcomes</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {project.keyOutcomes.map((outcome) => (
                            <div key={outcome} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              <span className="text-sm text-muted-foreground">{outcome}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-3 pt-4">
                        {/* <Button size="sm" className="group">
                          View Details
                          <ExternalLink className="ml-2 h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Button> */}
                        {project.githubUrl && (
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block"
                          >
                            <Button size="sm" variant="outline">
                              <Github className="mr-2 h-3 w-3" />
                              Source Code
                            </Button>
                          </a>
                        )}
                        {project.paperUrl && (
                          <a 
                            href={project.paperUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block"
                          >
                            <Button size="sm" variant="outline">
                              <FileText className="mr-2 h-3 w-3" />
                              View Paper
                            </Button>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-12">
            <Button variant="outline-primary" size="lg">
              View All Projects
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;