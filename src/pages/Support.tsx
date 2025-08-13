import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, Mail, Phone, Clock, FileCheck, DollarSign, User } from 'lucide-react';

export default function SupportPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log({ email, name, subject, message });
    setSubmitted(true);
    // Reset form
    setEmail('');
    setName('');
    setSubject('');
    setMessage('');
    
    // Show success message briefly
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="container mx-auto py-12 px-4 animate-in fade-in duration-700">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">How Can We Help You?</h1>
          <p className="text-xl text-muted-foreground">
            Get support, answers to your questions, and help with your projects.
          </p>
        </div>

        <Tabs defaultValue="faq" className="space-y-12">
          <TabsList className="grid grid-cols-3 max-w-lg mx-auto">
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="contact">Contact Us</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          {/* FAQ Tab */}
          <TabsContent value="faq">
            <div className="space-y-12">
              {/* Account & Registration */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Account & Registration</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <User className="h-5 w-5 text-blue-500" />
                        How do I create an account?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Creating an account is simple. Click the "Sign Up" button in the top right corner, 
                        fill out the registration form with your email, name, and password. Verify your 
                        email address through the verification link we'll send you, and your account will 
                        be active immediately.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <User className="h-5 w-5 text-blue-500" />
                        How do I reset my password?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        If you've forgotten your password, click on the "Log In" button, then select 
                        "Forgot Password" below the login form. Enter your email address, and we'll 
                        send you a link to reset your password. Follow the instructions in the email 
                        to create a new password.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <User className="h-5 w-5 text-blue-500" />
                        Can I have both a client and specialist account?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Yes, with a single SkillSphere account, you can operate as both a client and a 
                        specialist. In your account settings, you can switch between client and specialist 
                        views to post projects or bid on them accordingly.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <User className="h-5 w-5 text-blue-500" />
                        How do I update my profile?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        To update your profile, log in and click on your profile picture in the top right 
                        corner. Select "Profile" from the dropdown menu. From there, you can edit your personal 
                        information, skills, experience, portfolio, and other settings.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Projects & Tasks */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Projects & Tasks</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileCheck className="h-5 w-5 text-green-500" />
                        How do I post a project?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        To post a project, log in to your account and click the "Post a Task" button in the 
                        navigation bar. Fill out the project details form with a descriptive title, detailed 
                        requirements, budget, deadline, and any necessary attachments. Review your listing 
                        and submit it to make it live on our platform.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileCheck className="h-5 w-5 text-green-500" />
                        How long will my project be visible?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Your project will remain visible on our platform for 30 days from the posting date or 
                        until you award it to a specialist, whichever comes first. You can always extend the 
                        visibility period through your project management dashboard if needed.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileCheck className="h-5 w-5 text-green-500" />
                        How do I find projects to work on?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        As a specialist, you can browse available projects by clicking on the "Browse Tasks" 
                        link in the navigation. Use the filters to narrow down projects by category, budget range, 
                        or specific skills. You can also set up alerts for new projects that match your expertise.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileCheck className="h-5 w-5 text-green-500" />
                        Can I edit my project after posting?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Yes, you can edit most aspects of your project after posting, including the description, 
                        attachments, and deadline. However, if your project has already received proposals, you 
                        cannot change the budget significantly. Any major changes will require closing the current 
                        project and creating a new one.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Payments & Billing */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Payments & Billing</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-green-500" />
                        How does the payment system work?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Our platform uses an escrow system for secure payments. When you hire a specialist, 
                        you deposit the agreed amount into escrow. The specialist begins work knowing the 
                        funds are secured. Once you approve the completed work, the payment is released to 
                        the specialist. This protects both parties during the transaction.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-green-500" />
                        What payment methods do you accept?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        We accept most major credit and debit cards (Visa, Mastercard, American Express), 
                        as well as PayPal. For larger enterprise clients, we also support bank transfers. 
                        All payment information is securely encrypted and processed through our PCI-compliant 
                        payment partners.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-green-500" />
                        What are the platform fees?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Our platform charges a 10% fee to specialists on completed projects. Clients pay 
                        a 5% service fee on top of their project budget. These fees cover platform maintenance, 
                        payment processing, customer support, and our escrow payment protection service. 
                        Enterprise clients may qualify for custom fee structures.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-green-500" />
                        How do refunds work?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        If you're not satisfied with the delivered work, we encourage you to first work with 
                        your specialist to request revisions. If issues cannot be resolved, you can open a 
                        dispute through our Resolution Center. Our support team will review the case and may 
                        issue a full or partial refund depending on the circumstances.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Contact Us Tab */}
          <TabsContent value="contact">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Send Us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and our support team will get back to you within 24 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {submitted ? (
                      <div className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4 mb-4">
                        Thank you for your message! We'll respond shortly.
                      </div>
                    ) : null}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Name
                          </label>
                          <Input 
                            id="name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <Input 
                            id="email" 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your email address"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </label>
                        <Input 
                          id="subject" 
                          value={subject} 
                          onChange={(e) => setSubject(e.target.value)}
                          placeholder="What is your message about?"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <Textarea 
                          id="message" 
                          value={message} 
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Please provide details about your inquiry"
                          rows={6}
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-blue-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Email Support</p>
                        <p className="text-sm text-muted-foreground">support@skillsphere.ai</p>
                        <p className="text-sm text-muted-foreground">For general inquiries</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-blue-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Phone Support</p>
                        <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                        <p className="text-sm text-muted-foreground">Monday-Friday, 9am-6pm EST</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <MessageSquare className="h-5 w-5 text-blue-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Live Chat</p>
                        <p className="text-sm text-muted-foreground">Available on the website</p>
                        <p className="text-sm text-muted-foreground">24/7 for premium members</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-blue-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Response Time</p>
                        <p className="text-sm text-muted-foreground">Emails: Within 24 hours</p>
                        <p className="text-sm text-muted-foreground">Urgent issues: Within 4 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Headquarters</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>SkillSphere AI Inc.</p>
                    <p>123 Tech Plaza</p>
                    <p>San Francisco, CA 94105</p>
                    <p>United States</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Resources Tab */}
          <TabsContent value="resources">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="md:col-span-3">
                <CardHeader>
                  <CardTitle>Help Center</CardTitle>
                  <CardDescription>
                    Explore our comprehensive knowledge base and tutorials
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-secondary/30 p-6 rounded-lg">
                    <h3 className="text-lg font-medium mb-3">Popular Topics</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <Button variant="outline" className="justify-start h-auto py-3">
                        <div className="text-left">
                          <p className="font-medium">Getting Started Guide</p>
                          <p className="text-xs text-muted-foreground">
                            Learn the basics of using SkillSphere
                          </p>
                        </div>
                      </Button>
                      <Button variant="outline" className="justify-start h-auto py-3">
                        <div className="text-left">
                          <p className="font-medium">Project Management</p>
                          <p className="text-xs text-muted-foreground">
                            Tips for successful project completion
                          </p>
                        </div>
                      </Button>
                      <Button variant="outline" className="justify-start h-auto py-3">
                        <div className="text-left">
                          <p className="font-medium">Payment & Billing</p>
                          <p className="text-xs text-muted-foreground">
                            Information about transactions and fees
                          </p>
                        </div>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Video Tutorials</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                  <h3 className="font-medium">Platform Walkthrough</h3>
                  <p className="text-sm text-muted-foreground">
                    A comprehensive guide to navigating and using the SkillSphere platform effectively.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Guides & Tutorials</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li>
                      <a href="#" className="flex items-center gap-2 text-blue-600 hover:underline">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                          <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                        Creating a Standout Profile
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center gap-2 text-blue-600 hover:underline">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                          <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                        How to Write Winning Proposals
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center gap-2 text-blue-600 hover:underline">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                          <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                        Managing Client Expectations
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center gap-2 text-blue-600 hover:underline">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                          <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                        Dispute Resolution Process
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Webinars & Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-b pb-3">
                      <p className="font-medium">AI Skills in Demand</p>
                      <p className="text-sm text-muted-foreground">August 15, 2025 • 2:00 PM EST</p>
                      <Button variant="link" className="p-0 h-auto mt-1">Register Now</Button>
                    </div>
                    <div className="border-b pb-3">
                      <p className="font-medium">Client Success Stories</p>
                      <p className="text-sm text-muted-foreground">August 22, 2025 • 1:00 PM EST</p>
                      <Button variant="link" className="p-0 h-auto mt-1">Register Now</Button>
                    </div>
                    <div>
                      <p className="font-medium">Platform Updates & Features</p>
                      <p className="text-sm text-muted-foreground">September 5, 2025 • 11:00 AM EST</p>
                      <Button variant="link" className="p-0 h-auto mt-1">Register Now</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}