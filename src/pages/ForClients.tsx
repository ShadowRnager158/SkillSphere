import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function ForClientsPage() {
  return (
    <div className="container mx-auto py-12 px-4 space-y-20 animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="text-center space-y-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Enterprise Solutions for Growing Businesses
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Access top AI talent and solutions to supercharge your business growth and innovation with SkillSphere's enterprise offerings.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" asChild>
            <Link to="/register">Schedule a Demo</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/how-it-works">Learn More</Link>
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-secondary/50 p-8 rounded-xl">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Enterprise-grade Security</h3>
          <p className="text-muted-foreground">
            Advanced security protocols and data protection measures keep your sensitive information safe.
          </p>
        </div>

        <div className="bg-secondary/50 p-8 rounded-xl">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Dedicated Account Management</h3>
          <p className="text-muted-foreground">
            Your personal account manager ensures your business requirements are met efficiently.
          </p>
        </div>

        <div className="bg-secondary/50 p-8 rounded-xl">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Custom Talent Pools</h3>
          <p className="text-muted-foreground">
            Access pre-screened specialists tailored to your industry and technical requirements.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works for Businesses</h2>
        
        <div className="space-y-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-2xl mb-4">1</div>
              <h3 className="text-2xl font-bold mb-3">Define Your Requirements</h3>
              <p className="text-muted-foreground">
                Share your business challenges and project requirements with our enterprise team. We'll help you scope the work and define clear deliverables.
              </p>
            </div>
            <div className="md:w-1/2 bg-gray-100 rounded-lg p-6">
              <div className="w-full h-48 bg-gradient-to-br from-blue-50 to-indigo-50 rounded flex items-center justify-center text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="md:w-1/2">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-2xl mb-4">2</div>
              <h3 className="text-2xl font-bold mb-3">Access Top Talent</h3>
              <p className="text-muted-foreground">
                We'll match you with pre-vetted AI specialists from our global talent pool who have the exact skills you need for your project.
              </p>
            </div>
            <div className="md:w-1/2 bg-gray-100 rounded-lg p-6">
              <div className="w-full h-48 bg-gradient-to-br from-blue-50 to-indigo-50 rounded flex items-center justify-center text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-2xl mb-4">3</div>
              <h3 className="text-2xl font-bold mb-3">Collaborate Securely</h3>
              <p className="text-muted-foreground">
                Use our enterprise-grade platform to communicate, share files, and track progress in a secure environment with all the tools you need.
              </p>
            </div>
            <div className="md:w-1/2 bg-gray-100 rounded-lg p-6">
              <div className="w-full h-48 bg-gradient-to-br from-blue-50 to-indigo-50 rounded flex items-center justify-center text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-12">Enterprise Pricing Plans</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border rounded-xl p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Startup</h3>
              <p className="text-3xl font-bold">$1,999<span className="text-base font-normal text-muted-foreground">/month</span></p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Up to 5 concurrent projects</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Basic account management</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Standard talent pool access</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Email & chat support</span>
              </li>
            </ul>
            <Button className="w-full">Get Started</Button>
          </div>
          
          <div className="border rounded-xl p-8 bg-white shadow-md relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
              Most Popular
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Business</h3>
              <p className="text-3xl font-bold">$4,999<span className="text-base font-normal text-muted-foreground">/month</span></p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Up to 15 concurrent projects</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Dedicated account manager</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Premium talent pool access</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Priority support with phone access</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Custom talent matching</span>
              </li>
            </ul>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">Contact Sales</Button>
          </div>
          
          <div className="border rounded-xl p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Enterprise</h3>
              <p className="text-3xl font-bold">Custom</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Unlimited projects</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Executive account management</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Custom talent pools</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>24/7 premium support</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Custom integrations</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Dedicated servers</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full">Request Quote</Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary/50 p-12 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-12">Trusted by Industry Leaders</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg">
            <div className="flex text-yellow-500 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-500" />
              ))}
            </div>
            <p className="text-gray-700 mb-4">
              "SkillSphere has been instrumental in helping us scale our AI operations. Their talent pool is exceptional and the platform makes collaboration seamless."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full"></div>
              <div>
                <p className="font-semibold">Sarah Johnson</p>
                <p className="text-sm text-muted-foreground">CTO, TechInnovate</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg">
            <div className="flex text-yellow-500 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-500" />
              ))}
            </div>
            <p className="text-gray-700 mb-4">
              "The quality of talent we've accessed through SkillSphere's enterprise offering has exceeded our expectations. Our AI projects are now delivered faster and with higher quality."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full"></div>
              <div>
                <p className="font-semibold">Michael Chen</p>
                <p className="text-sm text-muted-foreground">Director of Engineering, DataVision</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
        <p className="text-xl text-muted-foreground mb-8">
          Join hundreds of forward-thinking companies leveraging AI talent through SkillSphere Enterprise.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" asChild>
            <Link to="/register">Schedule a Demo</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/support">Contact Sales</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}