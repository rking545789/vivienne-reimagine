import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ArticleCard from "@/components/ArticleCard";
import heroImage from "@/assets/hero-wardrobe.jpg";
import outfitCamel from "@/assets/outfit-camel.jpg";
import outfitNavy from "@/assets/outfit-navy.jpg";
import outfitBlack from "@/assets/outfit-black.jpg";
import outfitSpring from "@/assets/outfit-spring.jpg";
import capsuleWardrobe from "@/assets/capsule-wardrobe.jpg";
import outfitTrench from "@/assets/outfit-trench.jpg";
import outfitBlazer from "@/assets/outfit-blazer.jpg";
import outfitKnit from "@/assets/outfit-knit.jpg";
import outfitSilk from "@/assets/outfit-silk.jpg";
import outfitDress from "@/assets/outfit-dress.jpg";
import wardrobeMinimal from "@/assets/wardrobe-minimal.jpg";
import accessoriesLuxury from "@/assets/accessories-luxury.jpg";

const Index = () => {
  const articles = [
    {
      title: "The Timeless Trench Coat: Your Ultimate Investment Piece",
      date: "October 24, 2025",
      excerpt: "Every woman needs a classic trench coat in her wardrobe. This iconic piece transcends trends and seasons, offering sophistication and versatility that few garments can match. Whether you're rushing to a meeting or enjoying a weekend stroll, the trench coat elevates any outfit instantly. I'm sharing my favorite ways to style this wardrobe hero, from casual denim combinations to elegant evening looks. Discover why this investment piece deserves a prime spot in your closet and how to choose the perfect one for your body type and lifestyle...",
      image: outfitTrench,
      slug: "timeless-trench-coat",
    },
    {
      title: "Power Dressing: The Modern Blazer Guide",
      date: "October 23, 2025",
      excerpt: "The tailored blazer has evolved from corporate staple to fashion essential. Today's blazers offer endless styling possibilities - pair them with jeans for smart casual, or dress them up for professional settings. I'm breaking down the anatomy of the perfect blazer, from shoulder fit to lapel styles, and showing you how to incorporate this versatile piece into your everyday rotation. Learn the art of power dressing with confidence and discover why every woman should own at least three different blazer styles...",
      image: outfitBlazer,
      slug: "modern-blazer-guide",
    },
    {
      title: "Building Your Perfect Neutral Wardrobe",
      date: "October 22, 2025",
      excerpt: "Creating a cohesive wardrobe doesn't have to be complicated. Today I'm sharing my approach to building a neutral color palette that works for every season. The secret? Focus on versatile pieces that can be mixed and matched effortlessly. Think quality over quantity - investing in well-made basics pays dividends in the long run. From the perfect camel coat to timeless white shirts, I'll guide you through building a wardrobe foundation that never goes out of style...",
      image: outfitCamel,
      slug: "building-neutral-wardrobe",
    },
    {
      title: "Cozy Elegance: Mastering Autumn Knitwear",
      date: "October 21, 2025",
      excerpt: "As temperatures drop, knitwear becomes your best friend. But there's an art to looking chic rather than frumpy in sweaters and cardigans. The key lies in choosing the right fabrics, fits, and styling techniques. Today I'm revealing my secrets for creating effortlessly elegant autumn looks with knits. From cable-knit turtlenecks to oversized cardigans, discover how to balance comfort with sophistication. Learn which knit textures work best for your body shape and how to layer them for maximum impact...",
      image: outfitKnit,
      slug: "autumn-knitwear-guide",
    },
    {
      title: "The Navy & White Classic Combination",
      date: "October 20, 2025",
      excerpt: "There's something timeless about navy and white. This classic combination never goes out of style and works for virtually any occasion. Whether you're dressing for the office or a weekend brunch, these two colors create a sophisticated foundation that exudes elegance and refinement. Let me show you how to make this duo work for your wardrobe with fresh styling ideas that feel modern and exciting. From nautical-inspired looks to corporate chic...",
      image: outfitNavy,
      slug: "navy-white-combination",
    },
    {
      title: "The Art of Silk: Elevating Your Everyday Style",
      date: "October 19, 2025",
      excerpt: "Silk has an unmatched ability to transform ordinary outfits into something extraordinary. The luxurious drape and subtle sheen of silk elevates your appearance instantly, making it the ultimate choice for those seeking effortless elegance. Today I'm sharing my insider tips on incorporating silk pieces into your daily wardrobe without feeling overdressed. From silk blouses paired with tailored trousers to delicate camisoles layered under blazers, discover how this timeless fabric can revolutionize your style...",
      image: outfitSilk,
      slug: "art-of-silk-styling",
    },
    {
      title: "Parisian Chic: The Wrap Dress & Coat Pairing",
      date: "October 18, 2025",
      excerpt: "French women have mastered the art of effortless elegance, and one of their secret weapons is the classic wrap dress paired with a tailored coat. This combination strikes the perfect balance between feminine and sophisticated, making it ideal for everything from business meetings to dinner dates. I'm revealing the styling secrets behind this iconic Parisian look, including how to choose the right proportions, the best coat lengths for different dress styles, and accessorizing tips that add that je ne sais quoi...",
      image: outfitDress,
      slug: "parisian-chic-dress-coat",
    },
    {
      title: "Mastering the Monochrome Look",
      date: "October 17, 2025",
      excerpt: "Black on black might seem simple, but there's an art to pulling off a monochrome look that's elegant rather than boring. The key is in the textures and silhouettes. Today I'm sharing my favorite tips for creating depth and interest in an all-black ensemble. From choosing the right fabrics to accessorizing strategically, learn how to make monochrome work for every occasion. Discover the power of layering different materials and how subtle details can make all the difference...",
      image: outfitBlack,
      slug: "monochrome-styling",
    },
    {
      title: "Spring Pastels: A Breath of Fresh Air",
      date: "October 15, 2025",
      excerpt: "As we transition into warmer weather, it's time to embrace the soft, romantic appeal of pastel tones. Pink, cream, and soft grey create a gentle color story that feels fresh and modern. These delicate hues are surprisingly versatile and can be dressed up or down depending on the occasion. Let me guide you through styling spring pastels with confidence, from choosing complementary shades to mixing pastels with neutrals for a sophisticated look...",
      image: outfitSpring,
      slug: "spring-pastels",
    },
    {
      title: "Curating Your Minimalist Wardrobe: Less Is More",
      date: "October 14, 2025",
      excerpt: "The minimalist wardrobe philosophy isn't about deprivation - it's about intentional curation. By carefully selecting pieces that truly serve you, you create a closet where everything works together harmoniously. Today I'm walking you through my process for building a minimalist wardrobe that maximizes versatility while minimizing clutter. Learn how to identify your core pieces, the art of quality over quantity, and strategies for maintaining a streamlined closet. Discover the freedom that comes from owning less but loving everything you have...",
      image: wardrobeMinimal,
      slug: "minimalist-wardrobe-curation",
    },
    {
      title: "Accessorizing with Intention: The Finishing Touches",
      date: "October 13, 2025",
      excerpt: "The right accessories can transform a simple outfit into something memorable. But the key word here is 'right' - over-accessorizing can overwhelm your look while too little leaves it incomplete. Today I'm sharing my foolproof formula for accessorizing with intention. From statement jewelry to designer handbags, silk scarves to sunglasses, learn how to choose pieces that enhance rather than overpower. Discover the rule of three, the power of metallics, and how to build a capsule accessory collection...",
      image: accessoriesLuxury,
      slug: "intentional-accessorizing",
    },
    {
      title: "The Essential Capsule Wardrobe Guide",
      date: "October 12, 2025",
      excerpt: "A capsule wardrobe is about curating a collection of essential pieces that you love and that work together seamlessly. Today I'm breaking down the must-have items that form the foundation of any great wardrobe. From the perfect white tee to the ideal pair of trousers, these pieces will serve you well season after season. Learn the exact formula for building your capsule, including specific quantities and versatile combinations that maximize your outfit options...",
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
