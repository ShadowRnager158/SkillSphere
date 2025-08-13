import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Facebook, 
  Instagram,
  ArrowRight,
  Shield,
  Users,
  Award,
  Zap
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [scrollProgress, setScrollProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 't') {
        e.preventDefault();
        scrollToTop();
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const footerSections = [
    {
      title: 'Platform',
      links: [
        { name: 'Browse Projects', href: '/tasks' },
        { name: 'Post a Project', href: '/create-task' },
        { name: 'How It Works', href: '/how-it-works' },
        { name: 'Success Stories', href: '/success-stories' },
      ]
    },
    {
      title: 'For Talent',
      links: [
        { name: 'Become a Skiller', href: '/register?type=skiller' },
        { name: 'Browse Projects', href: '/tasks' },
        { name: 'Skill Assessment', href: '/assessment' },
        { name: 'Learning Resources', href: '/resources' },
      ]
    },
    {
      title: 'For Clients',
      links: [
        { name: 'Hire Talent', href: '/register' },
        { name: 'Post Projects', href: '/create-task' },
        { name: 'Client Guide', href: '/client-guide' },
        { name: 'Enterprise Solutions', href: '/enterprise' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press', href: '/press' },
        { name: 'Partners', href: '/partners' },
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'Contact Support', href: '/support' },
        { name: 'Community', href: '/community' },
        { name: 'Status', href: '/status' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms of Service', href: '/terms-of-service' },
        { name: 'Cookie Policy', href: '/cookie-policy' },
        { name: 'GDPR', href: '/gdpr' },
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/skillsphere' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/skillsphere' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/skillsphere' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/skillsphere' },
  ];

  const stats = [
    { label: 'Active Projects', value: '2,500+' },
    { label: 'Top Professionals', value: '10,000+' },
    { label: 'Countries Served', value: '150+' },
    { label: 'Success Rate', value: '98%' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white mt-auto">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section with Logo and Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">SkillSphere</h3>
                <p className="text-blue-200 text-sm">Top 3% Talent Platform</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Connect with the world's top professionals. Whether you're hiring talent or showcasing your skills, SkillSphere is your gateway to exceptional results.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>support@skillsphere.com</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold text-white mb-6">Platform Impact</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter and Social */}
        <div className="border-t border-gray-700 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
              <p className="text-gray-300 mb-4">
                Get the latest insights on remote work, freelancing, and industry trends.
              </p>
              <div className="flex space-x-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg font-medium transition-all duration-200 hover:shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
              <p className="text-gray-300 mb-4">
                Join our community and stay connected with the latest updates.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200 hover:scale-110"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>© {currentYear} SkillSphere. All rights reserved.</span>
              <div className="hidden sm:flex items-center space-x-4">
                <Link to="/privacy-policy" className="hover:text-blue-400 transition-colors">
                  Privacy
                </Link>
                <span>•</span>
                <Link to="/terms-of-service" className="hover:text-blue-400 transition-colors">
                  Terms
                </Link>
                <span>•</span>
                <Link to="/cookie-policy" className="hover:text-blue-400 transition-colors">
                  Cookies
                </Link>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span>Secure & Trusted</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-blue-400" />
                <span>10K+ Professionals</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-yellow-400" />
                <span>Top 3% Quality</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      {scrollProgress > 10 && (
        <div className="fixed bottom-8 right-6 sm:bottom-10 sm:right-8 z-50 animate-in slide-in-from-bottom duration-500 ease-out hover:animate-bounce-slow">
          {/* Progress Ring */}
          <div className="relative w-16 h-16 group">
            <svg className="w-16 h-16 transform -rotate-90 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 64 64">
              <circle
                cx="32"
                cy="32"
                r="28"
                stroke="currentColor"
                strokeWidth="2"
                fill="transparent"
                className="text-gray-300 dark:text-gray-600 transition-colors duration-300"
                strokeDasharray="175.93"
                strokeDashoffset="0"
              />
              <circle
                cx="32"
                cy="32"
                r="28"
                stroke="currentColor"
                strokeWidth="2"
                fill="transparent"
                className="text-blue-500 dark:text-blue-400 transition-all duration-300"
                strokeDasharray="175.93"
                strokeDashoffset={175.93 - (175.93 * scrollProgress) / 100}
                style={{
                  transition: 'stroke-dashoffset 0.3s ease-in-out'
                }}
              />
            </svg>
            
            {/* Button */}
            <button
              onClick={scrollToTop}
              className="absolute inset-2 w-12 h-12 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 dark:from-blue-500 dark:via-indigo-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:via-indigo-600 dark:hover:to-purple-600 focus:from-blue-700 focus:via-indigo-700 focus:to-purple-700 dark:focus:from-blue-600 dark:focus:via-indigo-600 dark:focus:to-purple-600 text-white rounded-full shadow-2xl hover:shadow-blue-500/25 dark:hover:shadow-blue-400/25 focus:shadow-blue-500/50 dark:focus:shadow-blue-400/50 transition-all duration-500 hover:scale-110 hover:-translate-y-1 focus:scale-110 focus:-translate-y-1 flex items-center justify-center group backdrop-blur-sm border border-white/20 dark:border-gray-300/20 focus:border-white/40 dark:focus:border-gray-200/40 animate-pulse-slow focus:outline-none focus:ring-4 focus:ring-blue-500/25 dark:focus:ring-blue-400/25"
              aria-label="Back to top"
              title="Scroll to top (Ctrl/Cmd + T)"
            >
              <ArrowRight className="w-5 h-5 transform rotate-[-90deg] group-hover:scale-110 group-hover:-translate-y-0.5 transition-all duration-300" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 via-indigo-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Ripple Effect */}
              <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
              
              {/* Subtle Glow */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div>
            </button>
            
            {/* Tooltip */}
            <div className="absolute bottom-full right-1/2 transform translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Scroll to top
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-100"></div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}