import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ArticleCard from "@/components/ArticleCard";
import heroImage from "@/assets/hero-wardrobe.jpg";
import { articlesData } from "@/data/articles";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="relative w-full h-96 mb-12">
        <img 
          src={heroImage} 
          alt="Elegant wardrobe" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end justify-center pb-12">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-serif italic text-primary mb-2">
              Your Personal Style Journey
            </h2>
            <p className="text-lg text-foreground">Curating timeless wardrobes with intention</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {articlesData.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
