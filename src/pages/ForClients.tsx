import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Shield, Users, Zap, Target, Award, Building, Globe, Clock, DollarSign, ArrowRight, Play, MessageSquare, Phone, Mail, Calendar, CheckCircle, TrendingUp, Rocket, Brain, Code, Database, Cloud, Smartphone, Palette, Shield as ShieldIcon, Lock, Unlock, Key, Users2, Briefcase, GraduationCap, Target as TargetIcon, Zap as ZapIcon, Lightbulb, Coffee, Beer, Trophy, Gift, Sparkles, ShoppingBag, Truck } from "lucide-react";
import { Link } from "react-router-dom";

// Enhanced Components
import { AnimatedElement } from '@/components/Animations';
import { ResponsiveContainer, ResponsiveGrid } from '@/components/ResponsiveDesign';
import LazyLoader from '@/components/LazyLoader';
import { CardSkeleton } from '@/components/LazyLoader';

export default function ForClientsPage() {
  const features = [
    {
      icon: Shield,
      title: "Enterprise-grade Security",
      description: "Advanced security protocols and data protection measures keep your sensitive information safe.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Dedicated Account Management",
      description: "Your personal account manager ensures your business requirements are met efficiently.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Target,
      title: "Custom Talent Pools",
      description: "Access pre-screened specialists tailored to your industry and technical requirements.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "Get started in days, not months. Our streamlined process gets talent working on your projects quickly.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Globe,
      title: "Global Talent Access",
      description: "Tap into a worldwide network of AI specialists available 24/7 across all time zones.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "All specialists are pre-vetted with proven track records and ongoing performance monitoring.",
      color: "from-teal-500 to-blue-500"
    }
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Define Your Requirements",
      description: "Share your business challenges and project requirements with our enterprise team. We'll help you scope the work and define clear deliverables.",
      icon: Target,
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: 2,
      title: "Access Top Talent",
      description: "We'll match you with pre-vetted AI specialists from our global talent pool who have the exact skills you need for your project.",
      icon: Users,
      color: "from-green-500 to-emerald-500"
    },
    {
      step: 3,
      title: "Collaborate & Execute",
      description: "Work directly with your assigned specialists through our secure platform. Track progress, provide feedback, and ensure quality delivery.",
      icon: Code,
      color: "from-purple-500 to-pink-500"
    },
    {
      step: 4,
      title: "Scale & Optimize",
      description: "As your needs grow, easily scale your team and optimize processes based on performance data and insights.",
      icon: TrendingUp,
      color: "from-orange-500 to-red-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO",
      company: "TechFlow Solutions",
      avatar: "SC",
      content: "SkillSphere transformed our AI development capabilities. We went from struggling to find qualified talent to having a world-class team in just 2 weeks.",
      rating: 5,
      project: "AI-Powered Analytics Platform",
      results: "40% faster development, 60% cost reduction"
    },
    {
      name: "Michael Rodriguez",
      role: "VP of Engineering",
      company: "InnovateCorp",
      avatar: "MR",
      content: "The quality of specialists we've found through SkillSphere is exceptional. They've become an integral part of our engineering team.",
      rating: 5,
      project: "Machine Learning Infrastructure",
      results: "3x faster deployment, 50% better performance"
    },
    {
      name: "Emily Watson",
      role: "Product Director",
      company: "DataVision Inc",
      avatar: "EW",
      content: "Working with SkillSphere has been a game-changer. Their specialists are not just skilled but truly understand our business needs.",
      rating: 5,
      project: "Predictive Analytics Engine",
      results: "25% increase in accuracy, 70% faster insights"
    }
  ];

  const industries = [
    { name: "Healthcare", icon: Shield, projects: 150, specialists: 45 },
    { name: "Finance", icon: DollarSign, projects: 200, specialists: 60 },
    { name: "E-commerce", icon: ShoppingBag, projects: 180, specialists: 55 },
    { name: "Manufacturing", icon: Building, projects: 120, specialists: 40 },
    { name: "Education", icon: GraduationCap, projects: 90, specialists: 30 },
    { name: "Transportation", icon: Truck, projects: 110, specialists: 35 }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-indigo-600/20 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-indigo-900/30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/10 dark:bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/10 dark:bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer maxWidth="7xl" className="relative text-center">
          <AnimatedElement animation="fade-in" delay={0.2}>
            <Badge variant="secondary" className="mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-white/20 dark:border-gray-700/50">
              🚀 Enterprise Solutions
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight text-gray-900 dark:text-white">
              Supercharge Your Business
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                with AI Talent
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Access top AI specialists and solutions to accelerate your business growth, innovation, and digital transformation with SkillSphere's enterprise offerings.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule a Demo
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-4 text-lg">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
          </AnimatedElement>
        </ResponsiveContainer>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <ResponsiveContainer maxWidth="6xl">
          <ResponsiveGrid cols={{ sm: 2, md: 4 }} gap={8}>
            {[
              { label: 'Enterprise Clients', value: '500+', icon: Building, color: 'from-blue-500 to-cyan-500' },
              { label: 'AI Specialists', value: '5,000+', icon: Brain, color: 'from-green-500 to-emerald-500' },
              { label: 'Projects Completed', value: '2,000+', icon: CheckCircle, color: 'from-purple-500 to-pink-500' },
              { label: 'Success Rate', value: '98%', icon: Trophy, color: 'from-orange-500 to-red-500' }
            ].map((stat, index) => (
              <LazyLoader key={stat.label} placeholder={<CardSkeleton />}>
                <AnimatedElement animation="scale-in" delay={0.3 + index * 0.1}>
                  <div className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg`}>
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
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

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <ResponsiveContainer maxWidth="6xl">
          <AnimatedElement animation="fade-in" delay={0.4}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Why Enterprise Clients Choose SkillSphere
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Built for scale, security, and success - discover what makes us the preferred choice for growing businesses
              </p>
            </div>
          </AnimatedElement>

          <ResponsiveGrid cols={{ sm: 1, md: 2, lg: 3 }} gap={8}>
            {features.map((feature, index) => (
              <LazyLoader key={feature.title} placeholder={<CardSkeleton />}>
                <AnimatedElement animation="slide-up" delay={0.5 + index * 0.1}>
                  <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <CardContent className="p-8 text-center">
                      <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg`}>
                        <feature.icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              </LazyLoader>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <ResponsiveContainer maxWidth="6xl">
          <AnimatedElement animation="fade-in" delay={0.6}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                How It Works for Businesses
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                A simple, streamlined process designed to get you results quickly and efficiently
              </p>
            </div>
          </AnimatedElement>

          <div className="space-y-16">
            {howItWorks.map((step, index) => (
              <LazyLoader key={step.step} placeholder={<CardSkeleton />}>
                <AnimatedElement animation="slide-up" delay={0.7 + index * 0.1}>
                  <div className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                    <div className="lg:w-1/2 space-y-6">
                      <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-3xl shadow-lg`}>
                        {step.step}
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {step.title}
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    <div className="lg:w-1/2">
                      <div className={`w-full h-64 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-xl`}>
                        <step.icon className="w-24 h-24 text-white" />
                      </div>
                    </div>
                  </div>
                </AnimatedElement>
              </LazyLoader>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <ResponsiveContainer maxWidth="6xl">
          <AnimatedElement animation="fade-in" delay={0.8}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Trusted Across Industries
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                From healthcare to finance, we've helped businesses in every sector accelerate their AI transformation
              </p>
            </div>
          </AnimatedElement>

          <ResponsiveGrid cols={{ sm: 2, md: 3 }} gap={8}>
            {industries.map((industry, index) => (
              <LazyLoader key={industry.name} placeholder={<CardSkeleton />}>
                <AnimatedElement animation="scale-in" delay={0.9 + index * 0.1}>
                  <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <industry.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {industry.name}
                      </h3>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">{industry.projects}</div>
                          <div className="text-gray-600 dark:text-gray-400">Projects</div>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">{industry.specialists}</div>
                          <div className="text-gray-600 dark:text-gray-400">Specialists</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              </LazyLoader>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <ResponsiveContainer maxWidth="6xl">
          <AnimatedElement animation="fade-in" delay={1.0}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                What Our Enterprise Clients Say
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Real results from real businesses - discover how SkillSphere is transforming industries
              </p>
            </div>
          </AnimatedElement>

          <ResponsiveGrid cols={{ sm: 1, md: 3 }} gap={8}>
            {testimonials.map((testimonial, index) => (
              <LazyLoader key={testimonial.name} placeholder={<CardSkeleton />}>
                <AnimatedElement animation="slide-up" delay={1.1 + index * 0.1}>
                  <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-1 mb-4">
                        {renderStars(testimonial.rating)}
                      </div>
                      
                      <blockquote className="text-gray-600 dark:text-gray-400 mb-6 italic leading-relaxed">
                        "{testimonial.content}"
                      </blockquote>
                      
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                            {testimonial.avatar}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}, {testimonial.company}</div>
                          </div>
                        </div>
                        
                        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                          <div className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                            Project: {testimonial.project}
                          </div>
                          <div className="text-sm text-green-600 dark:text-green-400 font-medium">
                            Results: {testimonial.results}
                          </div>
                        </div>
                      </div>
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
          <AnimatedElement animation="fade-in" delay={1.2}>
            <div className="text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join hundreds of enterprise clients who are already accelerating their growth with SkillSphere's AI talent solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Get Started Today
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule a Call
                </Button>
              </div>
            </div>
          </AnimatedElement>
        </ResponsiveContainer>
      </section>
    </div>
  );
}