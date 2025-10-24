import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { articlesData } from "@/data/articles";

const ArticleDetail = () => {
  const { slug } = useParams();
  const article = articlesData.find(a => a.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-serif italic text-primary mb-4">Article Not Found</h1>
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Articles
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <article className="lg:col-span-2">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-96 object-cover rounded-lg mb-8"
            />
            
            <p className="text-sm text-muted-foreground mb-4">{article.date}</p>
            
            <h1 className="text-4xl md:text-5xl font-serif italic text-primary mb-6">
              {article.title}
            </h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-8 text-foreground">
                {article.content.intro}
              </p>

              {article.content.sections.map((section, index) => (
                <div key={index} className="mb-8">
                  <h2 className="text-2xl font-medium mb-4 text-primary">
                    {section.heading}
                  </h2>
                  <p className="leading-relaxed mb-6 text-foreground">
                    {section.content}
                  </p>
                  {section.image && (
                    <img 
                      src={section.image} 
                      alt={section.heading}
                      className="w-full h-64 object-cover rounded-lg mb-6"
                    />
                  )}
                </div>
              ))}

              <div className="border-t border-border pt-8 mt-8">
                <h2 className="text-2xl font-medium mb-4 text-primary">Final Thoughts</h2>
                <p className="leading-relaxed text-foreground">
                  {article.content.conclusion}
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <Link to="/">
                <Button variant="outline" size="lg">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Explore More Articles
                </Button>
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ArticleDetail;
