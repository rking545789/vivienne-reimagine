import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <article className="prose prose-lg max-w-none">
              <h1 className="text-4xl font-serif italic text-primary mb-8">
                Privacy Policy
              </h1>
              
              <p className="text-muted-foreground mb-6">
                Last Updated: November 2, 2025
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-medium text-foreground mb-4">Introduction</h2>
                <p className="text-foreground leading-relaxed mb-4">
                  Welcome to The Style Chronicles. We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website and subscribe to our newsletter.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-medium text-foreground mb-4">Information We Collect</h2>
                <p className="text-foreground leading-relaxed mb-4">
                  We collect the following types of information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground">
                  <li><strong>Email Address:</strong> When you subscribe to our newsletter, we collect your email address to send you style tips, fashion trends, and wardrobe inspiration.</li>
                  <li><strong>Usage Data:</strong> We automatically collect information about how you interact with our website, including pages visited, time spent, and browsing patterns.</li>
                  <li><strong>Cookies:</strong> We use cookies to enhance your browsing experience and analyze website traffic.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-medium text-foreground mb-4">How We Use Your Information</h2>
                <p className="text-foreground leading-relaxed mb-4">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground">
                  <li>To send you our newsletter with fashion content and style advice</li>
                  <li>To improve our website and content based on your preferences</li>
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To analyze website traffic and user behavior</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-medium text-foreground mb-4">Data Security</h2>
                <p className="text-foreground leading-relaxed mb-4">
                  We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-medium text-foreground mb-4">Your Rights</h2>
                <p className="text-foreground leading-relaxed mb-4">
                  You have the following rights regarding your personal data:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground">
                  <li><strong>Access:</strong> You can request a copy of the personal data we hold about you</li>
                  <li><strong>Correction:</strong> You can request that we correct any inaccurate information</li>
                  <li><strong>Deletion:</strong> You can request that we delete your personal data</li>
                  <li><strong>Unsubscribe:</strong> You can unsubscribe from our newsletter at any time by clicking the unsubscribe link in our emails</li>
                  <li><strong>Object:</strong> You can object to our processing of your personal data</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-medium text-foreground mb-4">Third-Party Services</h2>
                <p className="text-foreground leading-relaxed mb-4">
                  We may use third-party services to help us operate our website and deliver our newsletter. These third parties have access to your personal data only to perform specific tasks on our behalf and are obligated to protect your information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-medium text-foreground mb-4">Cookies Policy</h2>
                <p className="text-foreground leading-relaxed mb-4">
                  Our website uses cookies to improve your experience. Cookies are small text files stored on your device that help us remember your preferences and understand how you use our site. You can control cookies through your browser settings.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-medium text-foreground mb-4">Children's Privacy</h2>
                <p className="text-foreground leading-relaxed mb-4">
                  Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-medium text-foreground mb-4">Changes to This Policy</h2>
                <p className="text-foreground leading-relaxed mb-4">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-medium text-foreground mb-4">Contact Us</h2>
                <p className="text-foreground leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:
                </p>
                <p className="text-foreground leading-relaxed">
                  <strong>Email:</strong> privacy@themodediary.com<br />
                  <strong>Address:</strong> The Mode Diary, Fashion District, New York, NY 10013
                </p>
              </section>

              <div className="mt-12 p-6 bg-secondary/30 rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  By using our website and subscribing to our newsletter, you acknowledge that you have read and understood this Privacy Policy.
                </p>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
