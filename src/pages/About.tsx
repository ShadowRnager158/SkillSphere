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
import { useState, useEffect } from "react";

// Enhanced Components
import { AnimatedElement } from '@/components/Animations';
import { ResponsiveContainer, ResponsiveGrid } from '@/components/ResponsiveDesign';
import LazyLoader from '@/components/LazyLoader';
import { CardSkeleton } from '@/components/LazyLoader';

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
      bio: "Former AI Research Lead at Google, PhD in Computer Science from MIT",
      linkedin: "#",
      twitter: "#",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      name: "Michael Chen",
      title: "CTO & Co-Founder",
      avatar: "MC",
      bio: "Ex-Engineering Director at OpenAI, 15+ years in AI/ML",
      linkedin: "#",
      twitter: "#",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      name: "Aisha Patel",
      title: "COO",
      avatar: "AP",
      bio: "Former VP of Operations at Stripe, MBA from Harvard Business School",
      linkedin: "#",
      twitter: "#",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      name: "David Kim",
      title: "Head of AI Research",
      avatar: "DK",
      bio: "PhD in AI from Stanford, published 50+ research papers",
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
    { label: 'AI Specialists', value: '5,000+', icon: Users, color: 'from-blue-500 to-blue-600' },
    { label: 'Client Companies', value: '2,000+', icon: Briefcase, color: 'from-green-500 to-green-600' },
    { label: 'Projects Completed', value: '10,000+', icon: CheckCircle, color: 'from-purple-500 to-purple-600' },
    { label: 'Countries Reached', value: '35+', icon: Globe, color: 'from-orange-500 to-orange-600' }
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
        
        <ResponsiveContainer maxWidth="7xl" className="relative text-center">
          <AnimatedElement animation="fade-in" delay={0.2}>
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
          </AnimatedElement>
        </ResponsiveContainer>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <ResponsiveContainer maxWidth="6xl">
          <ResponsiveGrid cols={{ lg: 2 }} gap={16} className="items-center">
            <AnimatedElement animation="slide-up" delay={0.3}>
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
                  Our Story
                </h2>
                <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    SkillSphere AI was founded in 2023 by a team of AI specialists and business leaders who recognized 
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
            </AnimatedElement>
            
            <AnimatedElement animation="slide-up" delay={0.4}>
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
            </AnimatedElement>
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <ResponsiveContainer maxWidth="6xl">
          <AnimatedElement animation="fade-in" delay={0.5}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                The principles that guide everything we do at SkillSphere
              </p>
            </div>
          </AnimatedElement>

          <ResponsiveGrid cols={{ sm: 1, md: 3 }} gap={8}>
            {values.map((value, index) => (
              <LazyLoader key={value.title} placeholder={<CardSkeleton />}>
                <AnimatedElement animation="slide-up" delay={0.6 + index * 0.1}>
                  <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <CardContent className="p-8 text-center">
                      <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center`}>
                        <value.icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              </LazyLoader>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <ResponsiveContainer maxWidth="6xl">
          <AnimatedElement animation="fade-in" delay={0.7}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                By The Numbers
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Our impact in connecting AI talent with global opportunities
              </p>
            </div>
          </AnimatedElement>

          <ResponsiveGrid cols={{ sm: 2, md: 4 }} gap={8}>
            {stats.map((stat, index) => (
              <LazyLoader key={stat.label} placeholder={<CardSkeleton />}>
                <AnimatedElement animation="scale-in" delay={0.8 + index * 0.1}>
                  <div className="text-center">
                    <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg`}>
                      <stat.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </AnimatedElement>
              </LazyLoader>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <ResponsiveContainer maxWidth="6xl">
          <AnimatedElement animation="fade-in" delay={0.9}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                The visionaries and experts behind SkillSphere's mission
              </p>
            </div>
          </AnimatedElement>

          <ResponsiveGrid cols={{ sm: 1, md: 2, lg: 4 }} gap={8}>
            {teamMembers.map((member, index) => (
              <LazyLoader key={member.name} placeholder={<CardSkeleton />}>
                <AnimatedElement animation="slide-up" delay={1.0 + index * 0.1}>
                  <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <CardContent className="p-6 text-center">
                      <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${member.gradient} flex items-center justify-center text-white font-bold text-2xl shadow-lg`}>
                        {member.avatar}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                        {member.title}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                        {member.bio}
                      </p>
                      <div className="flex justify-center gap-3">
                        <Button variant="outline" size="sm" asChild>
                          <Link to={member.linkedin}>
                            <Linkedin className="w-4 h-4" />
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <Link to={member.twitter}>
                            <Twitter className="w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              </LazyLoader>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Press Recognition */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <ResponsiveContainer maxWidth="6xl">
          <AnimatedElement animation="fade-in" delay={1.1}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Press Recognition
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Featured in leading technology and business publications
              </p>
            </div>
          </AnimatedElement>

          <ResponsiveGrid cols={{ sm: 2, md: 4 }} gap={8}>
            {pressLogos.map((press, index) => (
              <LazyLoader key={press.name} placeholder={<CardSkeleton />}>
                <AnimatedElement animation="scale-in" delay={1.2 + index * 0.1}>
                  <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-gray-500 to-gray-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                        {press.logo}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {press.name}
                      </h3>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              </LazyLoader>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600">
        <ResponsiveContainer maxWidth="4xl">
          <AnimatedElement animation="fade-in" delay={1.3}>
            <div className="text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join thousands of businesses and AI specialists who are already transforming their work with SkillSphere
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/signup">
                    Get Started Today
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                  <Link to="/contact">
                    Contact Sales
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedElement>
        </ResponsiveContainer>
      </section>
    </div>
  );
}