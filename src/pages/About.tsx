import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4 space-y-20 animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="text-center space-y-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          About SkillSphere AI
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Connecting businesses with top AI specialists since 2023, we're reimagining how work gets done in the AI age.
        </p>
      </section>

      {/* Our Story */}
      <section className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4">
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
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8">
            <div className="aspect-square bg-white rounded-lg shadow-md flex items-center justify-center">
              <div className="h-24 w-24 rounded-full bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-4xl">S</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-blue-100 border-2 border-blue-200 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                  <path d="M8 3v3a2 2 0 0 1-2 2H3"></path>
                  <path d="M21 8h-3a2 2 0 0 1-2-2V3"></path>
                  <path d="M3 16h3a2 2 0 0 1 2 2v3"></path>
                  <path d="M16 21v-3a2 2 0 0 1 2-2h3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Accessibility</h3>
              <p className="text-muted-foreground">
                We believe AI technology should be accessible to everyone. Our platform bridges the gap between 
                specialists and businesses of all sizes, making expertise available regardless of location or budget.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-green-50 to-green-100">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-green-100 border-2 border-green-200 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p className="text-muted-foreground">
                We maintain rigorous standards for our specialists, ensuring they possess both technical proficiency 
                and professional excellence. Our vetting process guarantees the highest quality of work.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-purple-100 border-2 border-purple-200 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Trust</h3>
              <p className="text-muted-foreground">
                Our secure platform, transparent processes, and commitment to protecting both clients and specialists 
                create an environment of trust. We stand behind every project with our satisfaction guarantee.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership Team</h2>
        
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {name: "Sarah Johnson", title: "CEO & Co-Founder", background: "bg-blue-100"},
            {name: "Michael Chen", title: "CTO & Co-Founder", background: "bg-green-100"},
            {name: "Aisha Patel", title: "COO", background: "bg-yellow-100"},
            {name: "David Kim", title: "Head of AI Research", background: "bg-purple-100"},
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className={`w-32 h-32 ${member.background} rounded-full mx-auto mb-4`}></div>
              <h3 className="font-bold text-lg">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-secondary/30 py-12 px-6 rounded-2xl">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">SkillSphere By The Numbers</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-blue-600">5K+</p>
              <p className="text-lg font-medium mt-2">AI Specialists</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-blue-600">2K+</p>
              <p className="text-lg font-medium mt-2">Client Companies</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-blue-600">10K+</p>
              <p className="text-lg font-medium mt-2">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-blue-600">35+</p>
              <p className="text-lg font-medium mt-2">Countries Reached</p>
            </div>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          We're always looking for passionate, talented individuals to help us build the future of AI-powered work.
        </p>
        
        <Button size="lg" asChild>
          <Link to="/support">View Open Positions</Link>
        </Button>
      </section>

      {/* Press & Recognition */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Press & Recognition</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-70">
          <div className="aspect-[3/1] bg-gray-200 rounded"></div>
          <div className="aspect-[3/1] bg-gray-200 rounded"></div>
          <div className="aspect-[3/1] bg-gray-200 rounded"></div>
          <div className="aspect-[3/1] bg-gray-200 rounded"></div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Have questions about our company or services? Our team is here to help.
        </p>
        
        <Button size="lg" asChild>
          <Link to="/support">Contact Us</Link>
        </Button>
      </section>
    </div>
  );
}