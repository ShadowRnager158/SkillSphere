import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  MapPin, 
  Briefcase, 
  Clock, 
  Users, 
  Globe, 
  Heart, 
  Zap, 
  Award, 
  ArrowRight,
  Building2,
  Sparkles,
  Target,
  TrendingUp,
  Star,
  CheckCircle
} from 'lucide-react';

export default function CareersPage() {
  const openPositions = [
    {
      id: 1,
      title: "Senior Full-Stack Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      experience: "5+ years",
      salary: "$120K - $180K",
      description: "Join our core engineering team to build scalable solutions that connect millions of professionals worldwide.",
      requirements: [
        "Expert in React, Node.js, and TypeScript",
        "Experience with microservices architecture",
        "Strong problem-solving and communication skills",
        "Passion for building user-centric products"
      ],
      benefits: ["Remote-first", "Competitive salary", "Stock options", "Health insurance"],
      posted: "2 days ago"
    },
    {
      id: 2,
      title: "Product Marketing Manager",
      department: "Marketing",
      location: "New York, NY",
      type: "Full-time",
      experience: "3+ years",
      salary: "$90K - $130K",
      description: "Drive product adoption and market positioning for our innovative talent platform.",
      requirements: [
        "Experience in B2B SaaS marketing",
        "Strong analytical and creative skills",
        "Experience with growth marketing strategies",
        "Excellent communication and presentation skills"
      ],
      benefits: ["Hybrid work", "Performance bonuses", "Professional development", "Flexible PTO"],
      posted: "1 week ago"
    },
    {
      id: 3,
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      salary: "$100K - $150K",
      description: "Create intuitive and beautiful user experiences that delight our global community.",
      requirements: [
        "Strong portfolio showcasing web and mobile design",
        "Experience with design systems and prototyping",
        "User research and testing experience",
        "Collaboration with cross-functional teams"
      ],
      benefits: ["Remote-first", "Design tools budget", "Conference attendance", "Creative freedom"],
      posted: "3 days ago"
    },
    {
      id: 4,
      title: "Data Scientist",
      department: "Data & Analytics",
      location: "Austin, TX",
      type: "Full-time",
      experience: "3+ years",
      salary: "$110K - $160K",
      description: "Leverage data to drive business decisions and improve user experience.",
      requirements: [
        "Strong Python and SQL skills",
        "Experience with machine learning models",
        "Statistical analysis and A/B testing",
        "Business acumen and storytelling"
      ],
      benefits: ["Hybrid work", "Data science tools", "Research opportunities", "Competitive benefits"],
      posted: "5 days ago"
    }
  ];

  const departments = [
    { name: "Engineering", count: 8, icon: Briefcase },
    { name: "Marketing", count: 5, icon: Target },
    { name: "Design", count: 4, icon: Heart },
    { name: "Sales", count: 6, icon: TrendingUp },
    { name: "Data & Analytics", count: 3, icon: Zap },
    { name: "Customer Success", count: 4, icon: Users }
  ];

  const companyValues = [
    {
      title: "Innovation First",
      description: "We constantly push boundaries to create cutting-edge solutions",
      icon: Sparkles
    },
    {
      title: "User-Centric",
      description: "Every decision we make is driven by user needs and feedback",
      icon: Heart
    },
    {
      title: "Global Impact",
      description: "We're building a platform that connects talent worldwide",
      icon: Globe
    },
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do",
      icon: Award
    }
  ];

  const benefits = [
    {
      category: "Health & Wellness",
      items: ["Comprehensive health insurance", "Mental health support", "Gym membership", "Wellness programs"]
    },
    {
      category: "Work-Life Balance",
      items: ["Flexible working hours", "Unlimited PTO", "Remote work options", "Parental leave"]
    },
    {
      category: "Growth & Development",
      items: ["Learning budget", "Conference attendance", "Mentorship programs", "Career advancement"]
    },
    {
      category: "Team & Culture",
      items: ["Team events", "Diversity initiatives", "Inclusive environment", "Fun activities"]
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
              <Building2 className="w-4 h-4" />
              <span>Join Our Team</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Build the Future of
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"> Work</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Join SkillSphere and help us revolutionize how the world works. We're building a platform that connects 
              millions of talented professionals with amazing opportunities, and we need passionate people to make it happen.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3">
                View Open Positions
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3">
                Learn About Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input 
                  placeholder="Search jobs..." 
                  className="pl-10 border-gray-300 dark:border-gray-600"
                />
              </div>
              <Select>
                <SelectTrigger className="border-gray-300 dark:border-gray-600">
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="sales">Sales</SelectItem>
                  <SelectItem value="data">Data & Analytics</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="border-gray-300 dark:border-gray-600">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="sf">San Francisco</SelectItem>
                  <SelectItem value="nyc">New York</SelectItem>
                  <SelectItem value="austin">Austin</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="border-gray-300 dark:border-gray-600">
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="full-time">Full-time</SelectItem>
                  <SelectItem value="part-time">Part-time</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                  <SelectItem value="internship">Internship</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Department Overview */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Explore Our Teams
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Find your perfect fit in one of our dynamic departments
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {departments.map((dept) => (
            <Card key={dept.name} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <dept.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{dept.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{dept.count} open positions</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Open Positions */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Open Positions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to join our mission? Check out our current openings
          </p>
        </div>

        <div className="space-y-6">
          {openPositions.map((position) => (
            <Card key={position.id} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200">
                        {position.department}
                      </Badge>
                      <Badge variant="outline" className="border-green-300 text-green-700 dark:text-green-400">
                        {position.type}
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {position.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {position.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{position.experience}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{position.salary}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 lg:mt-0 lg:ml-6">
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2">
                      Apply Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{position.posted}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {position.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Company Values */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Values
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {companyValues.map((value) => (
            <Card key={value.title} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Work With Us?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We take care of our team so you can focus on doing your best work
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {benefits.map((category) => (
            <Card key={category.category} className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {category.items.map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Can't Find the Right Role?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              Submit Your Resume
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
