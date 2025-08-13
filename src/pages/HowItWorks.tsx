import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Search, Users, FileCheck, MessageSquare, DollarSign } from "lucide-react";

export default function HowItWorksPage() {
  return (
    <div className="container mx-auto py-12 px-4 space-y-20 animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="text-center space-y-6 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          How SkillSphere Works
        </h1>
        <p className="text-xl text-muted-foreground">
          Connect with AI specialists, complete projects, and grow your business in a few simple steps.
        </p>
      </section>

      {/* Process Steps */}
      <section className="max-w-5xl mx-auto">
        <div className="space-y-24">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 space-y-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-xl">1</div>
              <h2 className="text-3xl font-bold">Create Your Account</h2>
              <p className="text-lg text-muted-foreground">
                Sign up as a client or specialist. Complete your profile with relevant skills, experience, and portfolio samples to stand out.
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Quick registration process takes less than 5 minutes</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Secure authentication with optional two-factor security</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Complete profile increases your visibility</span>
                </li>
              </ul>
              <div className="mt-6">
                <Button asChild>
                  <Link to="/register">Create Account <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 bg-secondary/30 rounded-xl p-6">
              <div className="aspect-video bg-white rounded-lg shadow-md flex items-center justify-center">
                <div className="w-3/4 space-y-6">
                  <div className="h-8 bg-blue-100 rounded-full w-full"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-32 bg-gray-100 rounded-lg"></div>
                    <div className="space-y-2">
                      <div className="h-6 bg-gray-100 rounded-full w-3/4"></div>
                      <div className="h-4 bg-gray-100 rounded-full w-full"></div>
                      <div className="h-4 bg-gray-100 rounded-full w-5/6"></div>
                      <div className="h-4 bg-gray-100 rounded-full w-4/6"></div>
                    </div>
                  </div>
                  <div className="h-10 bg-blue-500 rounded-lg w-1/2 mx-auto"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 - For Clients */}
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="md:w-1/2 space-y-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-xl">2</div>
              <h2 className="text-3xl font-bold">Post a Project (For Clients)</h2>
              <p className="text-lg text-muted-foreground">
                Describe your project requirements, set your budget, and specify the timeline. Be detailed to attract the right specialists.
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Easy-to-use project posting form with helpful tips</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Set flexible budgets: fixed price or hourly rate</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Add attachments and references to clarify requirements</span>
                </li>
              </ul>
              <div className="mt-6">
                <Button asChild>
                  <Link to="/create-task">Post a Project <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 bg-secondary/30 rounded-xl p-6">
              <div className="aspect-video bg-white rounded-lg shadow-md p-6">
                <div className="space-y-4">
                  <div className="h-6 bg-gray-100 rounded-full w-1/2"></div>
                  <div className="h-8 bg-gray-100 rounded-lg w-full"></div>
                  <div className="h-24 bg-gray-100 rounded-lg w-full"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-8 bg-gray-100 rounded-lg"></div>
                    <div className="h-8 bg-gray-100 rounded-lg"></div>
                  </div>
                  <div className="h-8 bg-gray-100 rounded-lg w-full"></div>
                  <div className="h-10 bg-blue-500 rounded-lg w-1/3"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 - For Specialists */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 space-y-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-xl">2</div>
              <h2 className="text-3xl font-bold">Find Work (For Specialists)</h2>
              <p className="text-lg text-muted-foreground">
                Browse available projects that match your skills, or receive targeted recommendations. Submit detailed proposals to win clients.
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Advanced search filters to find relevant projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>AI-powered project recommendations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Customizable proposal templates to save time</span>
                </li>
              </ul>
              <div className="mt-6">
                <Button asChild>
                  <Link to="/tasks">Browse Projects <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 bg-secondary/30 rounded-xl p-6">
              <div className="aspect-video bg-white rounded-lg shadow-md flex flex-col p-4">
                <div className="h-10 bg-gray-100 rounded-lg w-full mb-4"></div>
                <div className="flex-1 grid grid-cols-1 gap-4">
                  <div className="border rounded-lg p-3 hover:border-blue-300 transition-colors">
                    <div className="space-y-2">
                      <div className="h-5 bg-gray-100 rounded-full w-3/4"></div>
                      <div className="h-3 bg-gray-100 rounded-full w-1/2"></div>
                      <div className="flex justify-between">
                        <div className="h-4 bg-blue-100 rounded-full w-1/4"></div>
                        <div className="h-4 bg-green-100 rounded-full w-1/5"></div>
                      </div>
                    </div>
                  </div>
                  <div className="border rounded-lg p-3 hover:border-blue-300 transition-colors">
                    <div className="space-y-2">
                      <div className="h-5 bg-gray-100 rounded-full w-2/3"></div>
                      <div className="h-3 bg-gray-100 rounded-full w-3/5"></div>
                      <div className="flex justify-between">
                        <div className="h-4 bg-blue-100 rounded-full w-1/4"></div>
                        <div className="h-4 bg-green-100 rounded-full w-1/5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="md:w-1/2 space-y-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-xl">3</div>
              <h2 className="text-3xl font-bold">Collaborate and Communicate</h2>
              <p className="text-lg text-muted-foreground">
                Use our built-in tools to message, share files, track milestones, and collaborate efficiently on your projects.
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Secure messaging with file attachment capabilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Milestone tracking and approval system</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Video conferencing integration for virtual meetings</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 bg-secondary/30 rounded-xl p-6">
              <div className="aspect-video bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                <div className="h-10 bg-blue-50 flex items-center px-4">
                  <div className="h-6 bg-gray-200 rounded-full w-1/3"></div>
                </div>
                <div className="flex-1 p-4 bg-gray-50 space-y-3">
                  <div className="flex">
                    <div className="w-8 h-8 rounded-full bg-blue-200 mr-2"></div>
                    <div className="bg-blue-100 p-2 rounded-lg rounded-tl-none w-3/4">
                      <div className="h-3 bg-white/60 rounded-full w-full mb-1"></div>
                      <div className="h-3 bg-white/60 rounded-full w-2/3"></div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-white p-2 rounded-lg rounded-tr-none w-3/4">
                      <div className="h-3 bg-gray-100 rounded-full w-full mb-1"></div>
                      <div className="h-3 bg-gray-100 rounded-full w-4/5"></div>
                      <div className="h-3 bg-gray-100 rounded-full w-3/5 mt-1"></div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-200 ml-2"></div>
                  </div>
                </div>
                <div className="h-12 bg-white px-4 flex items-center">
                  <div className="h-8 bg-gray-100 rounded-lg flex-1 mr-2"></div>
                  <div className="h-8 w-8 bg-blue-500 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 space-y-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-xl">4</div>
              <h2 className="text-3xl font-bold">Complete and Pay</h2>
              <p className="text-lg text-muted-foreground">
                Review and approve completed work. Release payment securely through our platform with full protection for both parties.
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Escrow payment protection ensures quality delivery</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Multiple payment methods supported</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Transparent fee structure with no hidden costs</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 bg-secondary/30 rounded-xl p-6">
              <div className="aspect-video bg-white rounded-lg shadow-md p-6 flex flex-col">
                <div className="h-8 bg-green-100 rounded-lg w-1/3 mb-4 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="h-24 bg-gray-50 border rounded-lg p-3">
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-100 rounded-full w-1/2"></div>
                      <div className="h-4 bg-gray-100 rounded-full w-3/4"></div>
                      <div className="flex justify-between items-center">
                        <div className="h-6 bg-green-100 rounded-full w-1/4 flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="h-6 bg-blue-500 rounded-lg w-1/5"></div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-3">
                      <div className="h-5 bg-white/60 rounded-full w-1/3"></div>
                      <div className="h-6 bg-green-100 rounded-lg w-1/4"></div>
                    </div>
                    <div className="h-10 bg-blue-500 rounded-lg w-1/2 mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-secondary/50 p-8 rounded-xl text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Search className="text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Smart Matching</h3>
            <p className="text-muted-foreground">
              Our AI algorithms connect you with the perfect talent or projects based on your skills, experience, and preferences.
            </p>
          </div>

          <div className="bg-secondary/50 p-8 rounded-xl text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <FileCheck className="text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
            <p className="text-muted-foreground">
              All specialists go through a comprehensive vetting process ensuring top-tier skills and professionalism.
            </p>
          </div>

          <div className="bg-secondary/50 p-8 rounded-xl text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <DollarSign className="text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Secure Payments</h3>
            <p className="text-muted-foreground">
              Our escrow system releases payment only when you're satisfied with the delivered work, protecting both parties.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">How do I get started?</h3>
            <p className="text-muted-foreground">
              Simply create an account, complete your profile, and you can immediately start posting projects or browsing available work.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">How does payment work?</h3>
            <p className="text-muted-foreground">
              Clients deposit funds into our secure escrow system. Once the work is completed and approved, the payment is released to the specialist.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">What if I'm not satisfied with the work?</h3>
            <p className="text-muted-foreground">
              Our platform includes a resolution center where you can work through any issues with your specialist. If needed, our support team can help mediate disputes.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Is my information secure?</h3>
            <p className="text-muted-foreground">
              Yes, we implement enterprise-grade security measures to protect your personal and financial information. All transactions and communications are encrypted.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl text-muted-foreground mb-8">
          Join thousands of businesses and specialists already using SkillSphere AI
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" asChild>
            <Link to="/register">Create an Account</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/tasks">Browse Projects</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}