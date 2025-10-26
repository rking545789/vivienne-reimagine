import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex max-w-7xl mx-auto px-4 py-8 gap-8">
        <main className="flex-1">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using The Mode Diary website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
              <p className="text-muted-foreground mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on The Mode Diary website for personal, non-commercial transitory viewing only.
              </p>
              <p className="text-muted-foreground">
                This license shall automatically terminate if you violate any of these restrictions and may be terminated by The Mode Diary at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Content Disclaimer</h2>
              <p className="text-muted-foreground mb-4">
                The materials on The Mode Diary website are provided on an 'as is' basis. The Mode Diary makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Implied warranties or conditions of merchantability</li>
                <li>Fitness for a particular purpose</li>
                <li>Non-infringement of intellectual property or other violation of rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
              <p className="text-muted-foreground">
                All content on this website, including but not limited to text, images, graphics, logos, and articles, is the property of The Mode Diary or its content suppliers and is protected by international copyright laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. User Conduct</h2>
              <p className="text-muted-foreground mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Use the website for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to any portion of the website</li>
                <li>Interfere with or disrupt the website or servers</li>
                <li>Reproduce, duplicate, or copy material from the website without permission</li>
                <li>Redistribute content from The Mode Diary without authorization</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Limitations of Liability</h2>
              <p className="text-muted-foreground">
                In no event shall The Mode Diary or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on The Mode Diary website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. External Links</h2>
              <p className="text-muted-foreground">
                The Mode Diary has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by The Mode Diary. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Modifications</h2>
              <p className="text-muted-foreground">
                The Mode Diary may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
              <p className="text-muted-foreground">
                These terms and conditions are governed by and construed in accordance with applicable laws, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms of Service, please contact us through our contact page or email us at contact@themodediary.com.
              </p>
            </section>

            <p className="text-sm text-muted-foreground mt-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </main>
        
        <aside className="hidden lg:block w-80">
          <Sidebar />
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
