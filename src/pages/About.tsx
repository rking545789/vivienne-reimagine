import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import heroImage from "@/assets/hero-wardrobe.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <article className="prose prose-lg max-w-none">
              <h1 className="text-4xl font-serif italic text-primary mb-6">
                About The Mode Diary
              </h1>
              
              <img 
                src={heroImage} 
                alt="About us" 
                className="w-full rounded-lg mb-8"
              />

              <h2 className="text-2xl font-medium text-foreground mt-8 mb-4">
                Our Story
              </h2>
              
              <p className="leading-relaxed mb-6">
                The Mode Diary was born from a simple realization: we don't need more clothes, we need better wardrobes. In a world of fast fashion and endless options, it's easy to feel overwhelmed and still have nothing to wear.
              </p>

              <p className="leading-relaxed mb-6">
                I started this blog to share a different approach to personal style—one that emphasizes quality, versatility, and intentionality. By focusing on carefully-curated color palettes and timeless pieces, we can build wardrobes that not only look beautiful but also make our daily lives easier.
              </p>

              <h2 className="text-2xl font-medium text-foreground mt-8 mb-4">
                Our Philosophy
              </h2>

              <div className="bg-secondary/30 p-6 rounded-lg my-8">
                <h3 className="text-xl font-medium mb-4">We Believe In:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span><strong>Thoughtful Consumption:</strong> Buying less but choosing better quality pieces that last</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span><strong>Color Harmony:</strong> Creating cohesive wardrobes through carefully selected color palettes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span><strong>Timeless Style:</strong> Focusing on classic pieces rather than fleeting trends</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span><strong>Personal Expression:</strong> Helping you develop a signature style that feels authentically you</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span><strong>Sustainable Fashion:</strong> Making choices that are better for our planet</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-medium text-foreground mt-8 mb-4">
                What Makes Us Different
              </h2>

              <p className="leading-relaxed mb-6">
                Unlike typical fashion blogs that focus on trends, we take our inspiration from art, nature, and timeless design. Each capsule wardrobe we present is built around a specific color palette, making it easy to mix and match pieces and create countless outfit combinations.
              </p>

              <p className="leading-relaxed mb-6">
                We believe that style should be accessible, sustainable, and above all, personal. Our goal isn't to tell you what to wear, but to give you the tools and inspiration to create a wardrobe that truly reflects who you are.
              </p>

              <h2 className="text-2xl font-medium text-foreground mt-8 mb-4">
                Join Our Community
              </h2>

              <p className="leading-relaxed mb-6">
                The Mode Diary is more than just a blog—it's a community of women who are rethinking their relationship with fashion. We're here to support each other in building wardrobes we love, shopping more intentionally, and developing personal style with confidence.
              </p>

              <p className="leading-relaxed mb-6">
                Subscribe to our newsletter to join thousands of readers who are transforming their wardrobes, one thoughtful choice at a time. Follow us on social media to share your own capsule wardrobe creations and connect with like-minded style enthusiasts.
              </p>

              <div className="bg-accent/20 p-6 rounded-lg mt-8">
                <p className="text-center text-lg italic">
                  "Style is a way to say who you are without having to speak."
                </p>
                <p className="text-center text-sm text-muted-foreground mt-2">— Rachel Zoe</p>
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

export default About;
