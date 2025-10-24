import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ArticleCard from "@/components/ArticleCard";
import heroImage from "@/assets/hero-wardrobe.jpg";
import outfitCamel from "@/assets/outfit-camel.jpg";
import outfitNavy from "@/assets/outfit-navy.jpg";
import outfitBlack from "@/assets/outfit-black.jpg";
import outfitSpring from "@/assets/outfit-spring.jpg";
import capsuleWardrobe from "@/assets/capsule-wardrobe.jpg";

const Index = () => {
  const articles = [
    {
      title: "Building Your Perfect Neutral Wardrobe",
      date: "October 22, 2025",
      excerpt: "Creating a cohesive wardrobe doesn't have to be complicated. Today I'm sharing my approach to building a neutral color palette that works for every season. The secret? Focus on versatile pieces that can be mixed and matched effortlessly. Think quality over quantity - investing in well-made basics pays dividends in the long run...",
      image: outfitCamel,
      slug: "building-neutral-wardrobe",
    },
    {
      title: "The Navy & White Classic Combination",
      date: "October 20, 2025",
      excerpt: "There's something timeless about navy and white. This classic combination never goes out of style and works for virtually any occasion. Whether you're dressing for the office or a weekend brunch, these two colors create a sophisticated foundation. Let me show you how to make this duo work for your wardrobe with fresh styling ideas...",
      image: outfitNavy,
      slug: "navy-white-combination",
    },
    {
      title: "Mastering the Monochrome Look",
      date: "October 17, 2025",
      excerpt: "Black on black might seem simple, but there's an art to pulling off a monochrome look that's elegant rather than boring. The key is in the textures and silhouettes. Today I'm sharing my favorite tips for creating depth and interest in an all-black ensemble. From choosing the right fabrics to accessorizing strategically...",
      image: outfitBlack,
      slug: "monochrome-styling",
    },
    {
      title: "Spring Pastels: A Breath of Fresh Air",
      date: "October 15, 2025",
      excerpt: "As we transition into warmer weather, it's time to embrace the soft, romantic appeal of pastel tones. Pink, cream, and soft grey create a gentle color story that feels fresh and modern. These delicate hues are surprisingly versatile and can be dressed up or down depending on the occasion. Let me guide you through...",
      image: outfitSpring,
      slug: "spring-pastels",
    },
    {
      title: "The Essential Capsule Wardrobe Guide",
      date: "October 12, 2025",
      excerpt: "A capsule wardrobe is about curating a collection of essential pieces that you love and that work together seamlessly. Today I'm breaking down the must-have items that form the foundation of any great wardrobe. From the perfect white tee to the ideal pair of trousers, these pieces will serve you well season after season...",
      image: capsuleWardrobe,
      slug: "capsule-wardrobe-guide",
    },
  ];

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
            {articles.map((article, index) => (
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
