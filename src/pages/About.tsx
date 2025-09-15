import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Users, 
  Globe, 
  Award, 
  Target, 
  Shield, 
  Zap, 
  Heart, 
  Star, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin,
  Linkedin,
  Twitter,
  Github,
  ExternalLink,
  CheckCircle,
  TrendingUp,
  Briefcase,
  Clock
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamMembers = [
    {
      name: "Bello Abdul Rahman",
      title: "CEO & Co-Founder",
      avatar: "BA",
      bio: "Undergraduate",
      linkedin: "#",
      twitter: "#",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      name: "Abdul Afeez Adedeji",
      title: "CTO & Co-Founder",
      avatar: "AA",
      bio: "Undergraduate",
      linkedin: "#",
      twitter: "#",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      name: "Abdul rahman Gbotemi ",
      title: "COO",
      avatar: "AG",
      bio: "Undergraduate",
      linkedin: "#",
      twitter: "#",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      name: "Al ameen Odusanya",
      title: "Head of AI Research",
      avatar: "AO",
      bio: "Undergraduate",
      linkedin: "#",
      twitter: "#",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Accessibility",
      description: "We believe AI technology should be accessible to everyone. Our platform bridges the gap between specialists and businesses of all sizes.",
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-500/10 dark:bg-blue-500/20"
    },
    {
      icon: Award,
      title: "Quality",
      description: "We maintain rigorous standards for our specialists, ensuring they possess both technical proficiency and professional excellence.",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-500/10 dark:bg-green-500/20"
    },
    {
      icon: Shield,
      title: "Trust",
      description: "Our secure platform, transparent processes, and commitment to protecting both clients and specialists create an environment of trust.",
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-500/10 dark:bg-purple-500/20"
    }
  ];

  const stats = [
    { label: 'AI Specialists', value: '0+', icon: Users, color: 'from-blue-500 to-blue-600' },
    { label: 'Client Companies', value: '0+', icon: Briefcase, color: 'from-green-500 to-green-600' },
    { label: 'Projects Completed', value: '0+', icon: CheckCircle, color: 'from-purple-500 to-purple-600' },
    { label: 'Countries Reached', value: '0+', icon: Globe, color: 'from-orange-500 to-orange-600' }
  ];

  const pressLogos = [
    { name: 'TechCrunch', logo: 'TC' },
    { name: 'Forbes', logo: 'F' },
    { name: 'Wired', logo: 'W' },
    { name: 'MIT Tech Review', logo: 'MIT' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-indigo-600/20 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-indigo-900/30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/10 dark:bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/10 dark:bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="secondary" className="mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-white/20 dark:border-gray-700/50">
              🚀 Since 2023
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight text-gray-900 dark:text-white">
              About
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                SkillSphere
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Connecting businesses with top AI specialists since 2023, we're reimagining how work gets done in the AI age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="grid lg:grid-cols-2 gap-16 items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
                  Our Story
                </h2>
                <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    SkillSphere AI was founded in 2025 by a team of AI specialists and business leaders who recognized 
                    a growing gap in the market: as AI technologies rapidly evolved, businesses struggled to find qualified 
                    talent to help them implement these transformative tools.
                  </p>
                  <p>
                    What started as a small community of AI engineers and data scientists has grown into a global platform 
                    connecting thousands of AI specialists with businesses of all sizes, from startups to Fortune 500 companies.
                  </p>
                  <p>
                    Our mission is to democratize access to AI talent and make it possible for any business to harness 
                    the power of artificial intelligence, regardless of their size or technical expertise.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/30 dark:to-purple-500/30 rounded-3xl p-8 backdrop-blur-sm border border-white/20 dark:border-gray-700/50">
                  <div className="aspect-square bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl flex items-center justify-center backdrop-blur-sm">
                    <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl">
                      <span className="text-white font-bold text-6xl">S</span>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-bounce delay-1000"></div>
                <div className="absolute top-1/2 -right-8 w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                    <CardContent className="p-8">
                      <div className={`w-16 h-16 ${value.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <div className={`w-10 h-10 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center`}>
                          <value.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{value.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Our Leadership Team
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Meet the visionaries behind SkillSphere
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="group"
                >
                  <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center">
                    <CardContent className="p-6">
                      <div className={`w-24 h-24 bg-gradient-to-r ${member.gradient} rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {member.avatar}
                      </div>
                      <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">{member.name}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{member.title}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {member.bio}
                      </p>
                      
                      <div className="flex justify-center space-x-3">
                        <a href={member.linkedin} className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300">
                          <Linkedin className="w-4 h-4" />
                        </a>
                        <a href={member.twitter} className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300">
                          <Twitter className="w-4 h-4" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-blue-700 dark:to-indigo-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-indigo-700/90 dark:from-blue-700/90 dark:to-indigo-800/90">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                SkillSphere By The Numbers
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Our impact in numbers
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`w-10 h-10 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-lg text-blue-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Press & Recognition */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Press & Recognition
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Featured in leading publications worldwide
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {pressLogos.map((press, index) => (
                <motion.div
                  key={press.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                  transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20 dark:border-gray-700/50">
                    <div className="aspect-[3/1] flex items-center justify-center">
                      <span className="text-2xl font-bold text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">
                        {press.logo}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Have questions about our company or services? Our team is here to help.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
                <Link to="/support" className="flex items-center gap-2">
                  Contact Us
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-4 text-lg font-semibold rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105">
                <Link to="/careers">Join Our Team</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}