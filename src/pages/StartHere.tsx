import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import capsuleWardrobe from "@/assets/capsule-wardrobe.jpg";

const StartHere = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <article className="prose prose-lg max-w-none">
              <h1 className="text-4xl font-serif italic text-primary mb-6">
                Welcome to The Mode Diary
              </h1>
              
              <img 
                src={capsuleWardrobe} 
                alt="Capsule wardrobe essentials" 
                className="w-full rounded-lg mb-8"
              />

              <p className="text-lg leading-relaxed mb-6">
                Thank you for visiting The Mode Diary! If you're new here, you might be wondering what this blog is all about and how it can help you develop your personal style.
              </p>

              <h2 className="text-2xl font-medium text-foreground mt-8 mb-4">
                What is The Mode Diary?
              </h2>
              
              <p className="leading-relaxed mb-6">
                The Mode Diary is a personal style blog that takes a unique approach to building a wardrobe. Instead of following fast fashion trends, we focus on creating carefully-curated capsule wardrobes based on timeless color palettes inspired by art, nature, and classic design.
              </p>

              <p className="leading-relaxed mb-6">
                The goal? To help you buy less clothing while loving everything you own. By building a cohesive wardrobe with pieces that work together seamlessly, you'll spend less time deciding what to wear and more time feeling confident in your choices.
              </p>

              <h2 className="text-2xl font-medium text-foreground mt-8 mb-4">
                How to Use This Blog
              </h2>

              <p className="leading-relaxed mb-6">
                Start by exploring different color palettes and finding ones that resonate with you. Each article breaks down how to build outfits using a specific palette, complete with styling suggestions and mix-and-match ideas.
              </p>

              <div className="bg-secondary/30 p-6 rounded-lg my-8">
                <h3 className="text-xl font-medium mb-4">Key Principles:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Focus on quality over quantity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Build around versatile neutral pieces</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Choose colors that make you feel confident</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Invest in timeless styles rather than trends</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Create a wardrobe that reflects your lifestyle</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-medium text-foreground mt-8 mb-4">
                The Capsule Wardrobe Approach
              </h2>

              <p className="leading-relaxed mb-6">
                A capsule wardrobe is a small collection of essential clothing items that don't go out of style and can be mixed and matched to create numerous outfits. The beauty of this approach is its simplicity and efficiency.
              </p>

              <p className="leading-relaxed mb-6">
                Instead of a closet full of clothes with nothing to wear, you'll have a curated selection where everything works together. This makes getting dressed in the morning a joy rather than a chore.
              </p>

              <h2 className="text-2xl font-medium text-foreground mt-8 mb-4">
                Ready to Begin?
              </h2>

              <p className="leading-relaxed mb-6">
                Head over to the <a href="/articles" className="text-primary hover:text-primary/80 italic">Articles</a> page to explore our latest styling guides, or browse by color palette to find inspiration that speaks to you. Don't forget to subscribe to our newsletter to receive new posts directly in your inbox!
              </p>
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

export default StartHere;
