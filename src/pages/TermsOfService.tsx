export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto py-12 px-4 animate-in fade-in duration-700">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-blue max-w-none">
          <p className="text-muted-foreground text-lg mb-6">
            Last updated: July 18, 2025
          </p>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p>
                Welcome to SkillSphere AI ("Company," "we," "us," "our"). By accessing or using our platform, website, and services, you agree to be bound by these Terms of Service ("Terms"). 
                If you disagree with any part of the Terms, you may not access our services.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
              <p>
                SkillSphere AI provides an online marketplace connecting clients with AI specialists and freelancers ("Specialists") for various 
                project-based work. Our platform enables users to post projects, bid on work, communicate, exchange files, and process payments.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Account Registration</h2>
              <p>
                To use our services, you must create an account by providing accurate and complete information. You are responsible for maintaining 
                the security of your account and password. The Company cannot and will not be liable for any loss or damage from your failure to 
                comply with this security obligation.
              </p>
              <p>
                You must be at least 18 years old or the legal age in your jurisdiction to create an account and use our services.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">4. User Conduct</h2>
              <p>
                You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>Use the service for any illegal purpose or in violation of any local, state, national, or international law</li>
                <li>Harass, abuse, or harm another person</li>
                <li>Impersonate another user or person</li>
                <li>Post or transmit any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable</li>
                <li>Attempt to gain unauthorized access to other computer systems or networks connected to the Service</li>
                <li>Interfere with another user's use and enjoyment of the Service</li>
                <li>Post content that infringes any patent, trademark, trade secret, copyright, or other proprietary rights of any party</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Payment Terms</h2>
              <p>
                All payments are processed securely through our platform. Clients agree to pay the agreed-upon amount for services rendered. 
                SkillSphere AI charges a service fee on transactions between Clients and Specialists.
              </p>
              <p className="mt-2">
                For detailed information on our fee structure, refund policy, and payment methods, please refer to our Payment Terms page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property Rights</h2>
              <p>
                Unless otherwise agreed upon in writing between Clients and Specialists, all intellectual property rights for work delivered 
                and accepted on the platform transfer from the Specialist to the Client upon full payment.
              </p>
              <p className="mt-2">
                SkillSphere AI retains all right, title, and interest in and to the platform, including all intellectual property rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, in no event shall SkillSphere AI, its directors, employees, partners, agents, suppliers, 
                or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, 
                loss of profits, data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>Your access to or use of or inability to access or use the Service</li>
                <li>Any conduct or content of any third party on the Service</li>
                <li>Any content obtained from the Service</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
              <p>
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including 
                without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of changes 
                by posting the updated Terms on this page. Your continued use of the Service after any such changes constitutes your acceptance 
                of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
              </p>
              <p className="mt-2">
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these 
                Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="mt-2">
                Email: legal@skillsphere.ai<br />
                Address: 123 Tech Plaza, San Francisco, CA 94105
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}