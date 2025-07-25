import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const SkillsSection = () => {
  const skills = [
    {
      name: 'Python',
      level: 90,
      description: 'Data manipulation, visualization, pandas, matplotlib, seaborn',
      icon: '🐍'
    },
    {
      name: 'SQL',
      level: 85,
      description: 'Querying, data extraction, database optimization',
      icon: '🗃️'
    },
    {
      name: 'Power BI',
      level: 88,
      description: 'Dashboard design, KPIs, DAX, data modeling',
      icon: '📊'
    },
    {
      name: 'C/C++',
      level: 80,
      description: 'System programming, algorithms, data structures',
      icon: '⚡'
    },
    {
      name: 'Tableau',
      level: 82,
      description: 'Interactive visualizations, storytelling, advanced analytics',
      icon: '📈'
    },
    {
      name: 'Excel',
      level: 92,
      description: 'Advanced formulas, pivot tables, VBA, financial modeling',
      icon: '📑'
    }
  ];

  const additionalSkills = [
    'Data Visualization',
    'Statistical Analysis',
    'Dashboard Creation',
    'KPI Development',
    'Data Cleaning',
    'Business Intelligence',
    'Report Automation',
    'Data Storytelling'
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technical expertise in data analysis tools and technologies
            </p>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
          </div>

          {/* Core Skills */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skills.map((skill, index) => (
              <Card key={skill.name} className="card-elevated group hover:scale-105 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{skill.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{skill.name}</h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {skill.description}
                  </p>
                  
                  {/* Skill Level */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Proficiency</span>
                      <span className="text-sm text-primary font-medium">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-8">Additional Expertise</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {additionalSkills.map((skill, index) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;