import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Calendar, 
  ExternalLink, 
  Download, 
  Mail, 
  Phone, 
  Globe, 
  FileText,
  ArrowRight,
  Newspaper,
  TrendingUp,
  Award,
  Users,
  Zap
} from 'lucide-react';

export default function PressPage() {
  const pressReleases = [
    {
      id: 1,
      title: "SkillSphere Raises $50M Series B Funding to Expand Global Talent Platform",
      date: "March 15, 2024",
      category: "Funding",
      summary: "Company plans to expand operations across 50+ countries and launch new AI-powered matching technology",
      link: "#",
      featured: true
    },
    {
      id: 2,
      title: "SkillSphere Launches Revolutionary AI-Powered Skill Assessment Platform",
      date: "February 28, 2024",
      category: "Product Launch",
      summary: "New technology uses advanced AI to evaluate professional skills with 95% accuracy",
      link: "#",
      featured: false
    },
    {
      id: 3,
      title: "SkillSphere Named Top 10 Fastest-Growing Companies by Forbes",
      date: "January 20, 2024",
      category: "Awards",
      summary: "Company recognized for exceptional growth and innovation in the talent marketplace sector",
      link: "#",
      featured: false
    },
    {
      id: 4,
      title: "SkillSphere Partners with Microsoft to Integrate Azure AI Services",
      date: "December 10, 2023",
      category: "Partnerships",
      summary: "Strategic partnership to enhance platform capabilities and expand enterprise solutions",
      link: "#",
      featured: false
    }
  ];

  const mediaCoverage = [
    {
      id: 1,
      outlet: "TechCrunch",
      title: "SkillSphere's AI Revolution: How Machine Learning is Transforming Freelancing",
      date: "March 10, 2024",
      author: "Sarah Johnson",
      link: "#",
      logo: "https://via.placeholder.com/120x60/1a1a1a/ffffff?text=TechCrunch"
    },
    {
      id: 2,
      outlet: "Forbes",
      title: "The Future of Work: SkillSphere's Vision for Global Talent Connection",
      date: "February 25, 2024",
      author: "Michael Chen",
      link: "#",
      logo: "https://via.placeholder.com/120x60/000000/ffffff?text=Forbes"
    },
    {
      id: 3,
      outlet: "Wired",
      title: "How SkillSphere is Solving the Global Skills Gap",
      date: "February 15, 2024",
      author: "Emily Rodriguez",
      link: "#",
      logo: "https://via.placeholder.com/120x60/000000/ffffff?text=Wired"
    },
    {
      id: 4,
      outlet: "Harvard Business Review",
      title: "The Gig Economy Evolution: Lessons from SkillSphere's Success",
      date: "January 30, 2024",
      author: "Dr. James Wilson",
      link: "#",
      logo: "https://via.placeholder.com/120x60/000000/ffffff?text=HBR"
    }
  ];

  const companyStats = [
    { label: "Total Users", value: "2M+", icon: Users },
    { label: "Countries Served", value: "150+", icon: Globe },
    { label: "Projects Completed", value: "500K+", icon: TrendingUp },
    { label: "Success Rate", value: "98%", icon: Award }
  ];

  const mediaResources = [
    {
      title: "Company Logo Pack",
      description: "High-resolution logos in various formats and color schemes",
      format: "ZIP",
      size: "15.2 MB",
      icon: Download
    },
    {
      title: "Brand Guidelines",
      description: "Complete brand identity and usage guidelines",
      format: "PDF",
      size: "8.7 MB",
      icon: FileText
    },
    {
      title: "Product Screenshots",
      description: "High-quality screenshots of our platform",
      format: "ZIP",
      size: "45.1 MB",
      icon: Download
    },
    {
      title: "Executive Headshots",
      description: "Professional photos of our leadership team",
      format: "ZIP",
      size: "12.3 MB",
      icon: Download
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Newspaper className="w-4 h-4" />
              <span>Press & Media</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Press & Media
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"> Resources</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Stay updated with the latest news, press releases, and media coverage about SkillSphere. 
              Find resources for journalists and media professionals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3">
                Contact Media Team
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3">
                Download Press Kit
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Company Stats */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {companyStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Press Release */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Latest News
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay informed about our latest developments, partnerships, and achievements
          </p>
        </div>

        {pressReleases.filter(pr => pr.featured).map((release) => (
          <Card key={release.id} className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white border-0 shadow-2xl mb-12">
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-4">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  {release.category}
                </Badge>
                <span className="text-blue-100 text-sm">{release.date}</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">{release.title}</h3>
              <p className="text-blue-100 text-lg mb-6 leading-relaxed">{release.summary}</p>
              <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Read Full Release
                <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        ))}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pressReleases.filter(pr => !pr.featured).map((release) => (
            <Card key={release.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200">
                    {release.category}
                  </Badge>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{release.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {release.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{release.summary}</p>
                <Button variant="ghost" className="p-0 h-auto text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Media Coverage */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Media Coverage
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Recent articles and features about SkillSphere in leading publications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mediaCoverage.map((article) => (
            <Card key={article.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <img 
                    src={article.logo} 
                    alt={article.outlet} 
                    className="w-20 h-10 object-contain flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{article.outlet}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{article.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">By {article.author}</p>
                    <Button variant="ghost" className="p-0 h-auto text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                      Read Article
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Media Resources */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Media Resources
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Download high-quality assets and resources for your media coverage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mediaResources.map((resource) => (
            <Card key={resource.title} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{resource.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{resource.description}</p>
                <div className="flex items-center justify-center space-x-2 text-xs text-gray-500 dark:text-gray-400 mb-4">
                  <span>{resource.format}</span>
                  <span>•</span>
                  <span>{resource.size}</span>
                </div>
                <Button variant="outline" className="w-full border-blue-300 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20">
                  Download
                  <Download className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Need a quote, interview, or have questions? Our media team is here to help.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
                <p className="text-blue-600 dark:text-blue-400">press@skillsphere.com</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">For press inquiries</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Phone</h3>
                <p className="text-blue-600 dark:text-blue-400">+1 (555) 123-4567</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Media hotline</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Website</h3>
                <p className="text-blue-600 dark:text-blue-400">skillsphere.com</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Company website</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
