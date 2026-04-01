import React, { useEffect } from 'react';
import * as LucideIcons from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { portfolioData } from '../data/portfolioData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Portfolio = () => {
  useEffect(() => {
    // Add Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Set default font
    document.body.style.fontFamily = 'IBM Plex Sans, sans-serif';

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const getIcon = (iconName) => {
    const iconMap = {
      'zap': 'Zap',
      'trending-up': 'TrendingUp',
      'database': 'Database',
      'clock': 'Clock',
      'activity': 'Activity',
      'tv': 'Tv',
      'file-presentation': 'FileText',
      'award': 'Award',
      'trophy': 'Trophy',
      'graduation-cap': 'GraduationCap',
      'badge-check': 'BadgeCheck'
    };
    const IconComponent = LucideIcons[iconMap[iconName]] || LucideIcons.Circle;
    return <IconComponent />;
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'radial-gradient(circle, #06b6d4 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="mb-6">
            <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 text-sm px-4 py-1">
              Open to Opportunities
            </Badge>
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-bold mb-6">
            <span className="text-white">{portfolioData.personal.name}</span>
          </h1>
          
          <p className="text-2xl sm:text-3xl text-cyan-400 font-semibold mb-6" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            {portfolioData.personal.title}
          </p>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
            {portfolioData.personal.tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToContact}
              className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold px-8 py-6 text-lg"
            >
              <LucideIcons.Mail className="mr-2" size={20} />
              Get in Touch
            </Button>
            <Button
              onClick={() => {
                const element = document.getElementById('projects');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              variant="outline"
              className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 text-lg"
            >
              <LucideIcons.Briefcase className="mr-2" size={20} />
              View My Work
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <LucideIcons.ChevronDown className="text-cyan-400" size={32} />
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioData.keyMetrics.map((metric, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-cyan-400">
                    {getIcon(metric.icon)}
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  {metric.value}
                </div>
                <div className="text-slate-300 font-semibold mb-1">{metric.label}</div>
                <div className="text-sm text-slate-400">{metric.description}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">
                About Me
              </h2>
              <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
                <p>{portfolioData.personal.summary}</p>
                <p>
                  Currently based in {portfolioData.personal.location}, I specialize in modern data stack technologies including Databricks, Apache Pinot, and cloud platforms like AWS and GCP.
                </p>
                <p>
                  When I'm not optimizing data pipelines, you'll find me watching {portfolioData.interests.join(', ')}.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {portfolioData.languages.map((lang, index) => (
                  <Badge key={index} variant="outline" className="border-slate-600 text-slate-300">
                    {lang}
                  </Badge>
                ))}
              </div>
            </div>

            <Card className="bg-slate-800/30 border-slate-700 p-8">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Education</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <LucideIcons.GraduationCap className="text-cyan-400 mr-3 mt-1" size={24} />
                  <div>
                    <div className="text-white font-semibold text-lg">{portfolioData.education.degree}</div>
                    <div className="text-slate-300">{portfolioData.education.institution}</div>
                    <div className="text-slate-400 text-sm mt-1">{portfolioData.education.period}</div>
                    <div className="mt-2">
                      <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                        CGPA: {portfolioData.education.cgpa}/10
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section - Continued in next file part */}
      <section id="experience" className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">
            Professional Experience
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-cyan-500/30 hidden md:block"></div>

            <div className="space-y-12">
              {portfolioData.experience.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-cyan-500 border-4 border-slate-950 hidden md:block"></div>

                  <Card className="bg-slate-800/50 border-slate-700 p-8 md:ml-20 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                        <p className="text-cyan-400 font-semibold text-lg">{exp.company}</p>
                      </div>
                      <div className="mt-2 md:mt-0 text-right">
                        <Badge className="bg-slate-700 text-slate-300">
                          {exp.period}
                        </Badge>
                        <p className="text-slate-400 text-sm mt-1">{exp.location}</p>
                      </div>
                    </div>

                    <ul className="space-y-3 mt-6">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-slate-300">
                          <LucideIcons.CheckCircle2 className="text-emerald-400 mr-3 mt-1 flex-shrink-0" size={20} />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4 text-center text-white">
            Technical Skills
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Experienced in modern data engineering tools and practices
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(portfolioData.skills).map(([category, skills], index) => (
              <Card key={index} className="bg-slate-800/30 border-slate-700 p-6 hover:border-cyan-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      className="bg-slate-700 text-slate-200 hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors"
                      style={{ fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Render in separate part */}
      <ProjectsSection portfolioData={portfolioData} getIcon={getIcon} />

      {/* Achievements Section */}
      <AchievementsSection portfolioData={portfolioData} getIcon={getIcon} />

      {/* Contact Section */}
      <ContactSection />

      <Footer />
    </div>
  );
};

// Projects Section Component
const ProjectsSection = ({ portfolioData, getIcon }) => (
  <section id="projects" className="py-24 bg-slate-900/30">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold mb-4 text-center text-white">
        Key Projects & Impact
      </h2>
      <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
        Delivering measurable business value through technical excellence
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioData.projects.map((project, index) => (
          <Card key={index} className="bg-slate-800/50 border-slate-700 p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1">
            <div className="flex items-start justify-between mb-4">
              <div className="text-cyan-400 bg-cyan-500/10 p-3 rounded-lg">
                {getIcon(project.icon)}
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
            <p className="text-slate-300 mb-4">{project.description}</p>
            <div className="mb-4">
              <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                {project.impact}
              </Badge>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, idx) => (
                <Badge key={idx} variant="outline" className="border-slate-600 text-slate-400 text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

// Achievements Section Component
const AchievementsSection = ({ portfolioData, getIcon }) => (
  <section className="py-24 bg-slate-950">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold mb-12 text-center text-white">
        Achievements & Recognition
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {portfolioData.achievements.map((achievement, index) => (
          <Card key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-800/30 border-slate-700 p-6 text-center hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
            <div className="flex justify-center mb-4">
              <div className="text-cyan-400 bg-cyan-500/10 p-4 rounded-full">
                {getIcon(achievement.icon)}
              </div>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
            <p className="text-slate-300 text-sm mb-1">{achievement.organization}</p>
            <p className="text-slate-400 text-xs">{achievement.period}</p>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

// Contact Section Component  
const ContactSection = () => {
  const [formData, setFormData] = React.useState({ name: '', email: '', message: '' });
  const [status, setStatus] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Message sent! (Demo mode - no actual email sent)');
    setTimeout(() => setStatus(''), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-slate-900/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-4 text-center text-white">
          Let's Connect
        </h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          Interested in collaborating or discussing data engineering opportunities? Reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: 'Mail', label: 'Email', value: 'subhadeep.mondal2001@gmail.com', link: 'mailto:subhadeep.mondal2001@gmail.com' },
            { icon: 'Linkedin', label: 'LinkedIn', value: 'Connect on LinkedIn', link: 'https://www.linkedin.com/in/subhadeep-mondal-kiit/' },
            { icon: 'Github', label: 'GitHub', value: 'View my code', link: 'https://github.com/smondal1174' }
          ].map((contact, index) => {
            const Icon = LucideIcons[contact.icon];
            return (
              <a
                key={index}
                href={contact.link}
                target={contact.link.startsWith('http') ? '_blank' : undefined}
                rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block"
              >
                <Card className="bg-slate-800/30 border-slate-700 p-6 text-center hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1">
                  <Icon className="text-cyan-400 mx-auto mb-3" size={32} />
                  <h3 className="text-white font-semibold mb-1">{contact.label}</h3>
                  <p className="text-slate-400 text-sm">{contact.value}</p>
                </Card>
              </a>
            );
          })}
        </div>

        <Card className="bg-slate-800/30 border-slate-700 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white font-semibold mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-white font-semibold mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block text-white font-semibold mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold py-3 text-lg"
            >
              <LucideIcons.Send className="mr-2" size={20} />
              Send Message
            </Button>
            {status && (
              <p className="text-center text-emerald-400 mt-4">{status}</p>
            )}
          </form>
        </Card>
      </div>
    </section>
  );
};

export default Portfolio;