import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ArticleCard from "@/components/ArticleCard";
import outfitCamel from "@/assets/outfit-camel.jpg";
import outfitNavy from "@/assets/outfit-navy.jpg";
import outfitBlack from "@/assets/outfit-black.jpg";
import outfitSpring from "@/assets/outfit-spring.jpg";
import capsuleWardrobe from "@/assets/capsule-wardrobe.jpg";
import heroImage from "@/assets/hero-wardrobe.jpg";

const Articles = () => {
  const articles = [
    {
      title: "Building Your Perfect Neutral Wardrobe",
      date: "October 22, 2025",
      excerpt: "Creating a cohesive wardrobe doesn't have to be complicated. Today I'm sharing my approach to building a neutral color palette that works for every season...",
      image: outfitCamel,
      slug: "building-neutral-wardrobe",
    },
    {
      title: "The Navy & White Classic Combination",
      date: "October 20, 2025",
      excerpt: "There's something timeless about navy and white. This classic combination never goes out of style and works for virtually any occasion...",
      image: outfitNavy,
      slug: "navy-white-combination",
    },
    {
      title: "Mastering the Monochrome Look",
      date: "October 17, 2025",
      excerpt: "Black on black might seem simple, but there's an art to pulling off a monochrome look that's elegant rather than boring...",
      image: outfitBlack,
      slug: "monochrome-styling",
    },
    {
      title: "Spring Pastels: A Breath of Fresh Air",
      date: "October 15, 2025",
      excerpt: "As we transition into warmer weather, it's time to embrace the soft, romantic appeal of pastel tones...",
      image: outfitSpring,
      slug: "spring-pastels",
    },
    {
      title: "The Essential Capsule Wardrobe Guide",
      date: "October 12, 2025",
      excerpt: "A capsule wardrobe is about curating a collection of essential pieces that you love and that work together seamlessly...",
      image: capsuleWardrobe,
      slug: "capsule-wardrobe-guide",
    },
    {
      title: "Transitional Dressing for Every Season",
      date: "October 10, 2025",
      excerpt: "The key to year-round style is mastering the art of transitional dressing. Learn how to layer effectively and adapt your core pieces...",
      image: heroImage,
      slug: "transitional-dressing",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif italic text-primary mb-8 text-center">
          All Articles
        </h1>

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

export default Articles;
