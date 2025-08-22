import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Check, 
  Search, 
  Users, 
  FileCheck, 
  MessageSquare, 
  DollarSign,
  Rocket,
  Shield,
  Zap,
  Award,
  Clock,
  Star,
  TrendingUp,
  Globe,
  Briefcase,
  Code,
  Palette,
  Database,
  Cloud,
  Smartphone,
  Server,
  Cpu,
  HardDrive,
  Wifi,
  Bluetooth,
  Battery,
  WifiOff,
  Volume2,
  VolumeX,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Repeat,
  Shuffle,
  ChevronRight,
  ChevronLeft,
  Filter,
  Plus,
  Calendar,
  MapPin,
  Brain,
  Lock,
  Unlock,
  Key,
  LogOut,
  X,
  Home,
  MessageSquare as MessageSquareIcon,
  FileText,
  Image,
  Video,
  Music,
  Folder,
  File,
  BarChart3,
  PieChart,
  Activity,
  Timer,
  CheckSquare,
  Square,
  HelpCircle,
  Info,
  AlertCircle,
  ThumbsUp,
  ThumbsDown,
  Eye,
  EyeOff,
  Edit,
  Trash2,
  Minus,
  Save
} from "lucide-react";
import { motion } from "framer-motion";

export default function HowItWorksPage() {
  const steps = [
    {
      number: "01",
      title: "Create Your Account",
      description: "Sign up as a client or specialist. Complete your profile with relevant skills, experience, and portfolio samples to stand out.",
      icon: Users,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      features: [
        "Quick registration process takes less than 5 minutes",
        "Secure authentication with optional two-factor security",
        "Complete profile increases your visibility"
      ],
      action: {
        text: "Create Account",
        link: "/signup",
        icon: ArrowRight
      }
    },
    {
      number: "02",
      title: "Post a Project (For Clients)",
      description: "Describe your project requirements, set your budget, and specify the timeline. Be detailed to attract the right specialists.",
      icon: FileCheck,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/10",
      features: [
        "Easy-to-use project posting form with helpful tips",
        "Set flexible budgets: fixed price or hourly rate",
        "Add attachments and references to clarify requirements"
      ],
      action: {
        text: "Post a Project",
        link: "/create-task",
        icon: ArrowRight
      }
    },
    {
      number: "03",
      title: "Browse & Apply (For Specialists)",
      description: "Search through available projects, filter by skills and budget, and submit compelling proposals to win projects.",
      icon: Search,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10",
      features: [
        "Advanced search and filtering options",
        "Save favorite projects for later review",
        "Submit detailed proposals with portfolio samples"
      ],
      action: {
        text: "Browse Projects",
        link: "/tasks",
        icon: ArrowRight
      }
    },
    {
      number: "04",
      title: "Collaborate & Deliver",
      description: "Work together using our built-in communication tools, track progress, and ensure quality delivery within deadlines.",
      icon: MessageSquare,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500/10",
      features: [
        "Real-time messaging and video calls",
        "File sharing and project management tools",
        "Milestone tracking and progress updates"
      ],
      action: {
        text: "Get Started",
        link: "/dashboard",
        icon: ArrowRight
      }
    },
    {
      number: "05",
      title: "Payment & Review",
      description: "Secure escrow payments, milestone releases, and leave reviews to build your reputation on the platform.",
      icon: DollarSign,
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-500/10",
      features: [
        "Secure escrow payment protection",
        "Milestone-based payment releases",
        "Build reputation through reviews and ratings"
      ],
      action: {
        text: "Learn More",
        link: "/help",
        icon: ArrowRight
      }
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Secure & Trusted",
      description: "Enterprise-grade security with verified users and escrow protection",
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get matched with the perfect specialist in under 24 hours",
      color: "text-yellow-600 dark:text-yellow-400"
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Rigorous vetting process ensures only top-tier talent",
      color: "text-purple-600 dark:text-purple-400"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support for any questions",
      color: "text-green-600 dark:text-green-400"
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "50,000+", icon: CheckSquare },
    { label: "Active Users", value: "25,000+", icon: Users },
    { label: "Success Rate", value: "98.5%", icon: TrendingUp },
    { label: "Countries", value: "45+", icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center relative z-10"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              How SkillSphere
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Works
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Connect with world-class tech talent, complete projects, and grow your business in a few simple steps. 
              Our platform makes it easy to find the right expertise for any project.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Simple 5-Step Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From project posting to successful completion, we've streamlined every step.
            </p>
          </motion.div>

          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
              >
                <div className="md:w-1/2 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-2xl shadow-lg`}>
                      {step.number}
                    </div>
                    <div className={`p-3 rounded-full ${step.bgColor} dark:bg-opacity-20`}>
                      <step.icon className={`w-8 h-8 ${step.color.replace('from-', 'text-').replace(' to-', '')}`} />
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{step.title}</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <ul className="space-y-3 mt-6">
                    {step.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8">
                    <Button 
                      asChild
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                    >
                      <Link to={step.action.link}>
                        {step.action.text}
                        <step.action.icon className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
                
                <div className="md:w-1/2">
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-xl flex items-center justify-center">
                      <div className="w-4/5 space-y-6">
                        <div className="h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-full shadow-lg"></div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="h-32 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-800 dark:to-blue-800 rounded-lg shadow-md"></div>
                          <div className="space-y-3">
                            <div className="h-6 bg-gray-200 dark:bg-gray-600 rounded-full w-3/4"></div>
                            <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded-full w-full"></div>
                            <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded-full w-5/6"></div>
                            <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded-full w-4/6"></div>
                          </div>
                        </div>
                        <div className="h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg w-1/2 mx-auto shadow-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose SkillSphere?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We've built the most trusted platform for connecting skilled professionals with amazing opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
                  <div className={`inline-flex p-3 rounded-full bg-gray-100 dark:bg-gray-700 mb-4`}>
                    <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Platform Impact
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Join thousands of successful projects and professionals worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
                  <div className="inline-flex p-3 rounded-full bg-blue-500/10 dark:bg-blue-500/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</h3>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join SkillSphere today and discover a world of opportunities. Whether you're looking to hire talent or showcase your skills, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                asChild
                className="px-8 py-4 text-lg bg-white text-blue-600 hover:bg-gray-100 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                <Link to="/signup">
                  <Rocket className="w-5 h-5 mr-2" />
                  Get Started Free
                </Link>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                asChild
                className="px-8 py-4 text-lg border-2 border-white text-white hover:bg-white hover:text-blue-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                <Link to="/help">
                  <HelpCircle className="w-5 h-5 mr-2" />
                  Learn More
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}