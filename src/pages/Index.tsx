import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ArticleCard from "@/components/ArticleCard";
import heroImage from "@/assets/hero-wardrobe.jpg";
import { articlesData } from "@/data/articles";
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
import jewelryLayering from "@/assets/jewelry-layering.jpg";
import shoesCollection from "@/assets/shoes-collection.jpg";
import denimStyle from "@/assets/denim-style.jpg";
import proportionStyling from "@/assets/proportion-styling.jpg";
import beltStyling from "@/assets/belt-styling.jpg";
import tailoringFit from "@/assets/tailoring-fit.jpg";
import patternMixing from "@/assets/pattern-mixing.jpg";
import colorBlocking from "@/assets/color-blocking.jpg";
import winterLayering from "@/assets/winter-layering.jpg";
import workWardrobe from "@/assets/work-wardrobe.jpg";
import eveningStyle from "@/assets/evening-style.jpg";
import summerLinen from "@/assets/summer-linen.jpg";
import necklineGuide from "@/assets/neckline-guide.jpg";
import pantsFit from "@/assets/pants-fit.jpg";
import sleeveStyling from "@/assets/sleeve-styling.jpg";
import springTransition from "@/assets/spring-transition.jpg";
import textureMixing from "@/assets/texture-mixing.jpg";
import weekendCasual from "@/assets/weekend-casual.jpg";

const Index = () => {
  const articles = articlesData.slice(0, 12).map(article => ({
    title: article.title,
    date: article.date,
    excerpt: article.excerpt,
    image: article.image,
    slug: article.slug
  }));

  const displayArticles = [
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
      title: "Jewelry Layering 101: Creating Your Signature Look",
      date: "October 16, 2025",
      excerpt: "Mastering the art of jewelry layering can instantly elevate your style game. The secret is knowing which pieces to combine and how to balance proportions. Today I'm sharing my foolproof formula for layering necklaces, bracelets, and rings to create a cohesive, personalized look. Learn the golden rules of mixing metals, varying lengths, and incorporating different styles. Whether you prefer delicate minimalism or bold statements, discover how to create depth and interest through strategic jewelry layering that reflects your unique personality...",
      image: jewelryLayering,
      slug: "jewelry-layering-guide",
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
    {
      title: "The Ultimate Shoe Guide: Building Your Foundation",
      date: "October 11, 2025",
      excerpt: "Your shoe collection can make or break your wardrobe versatility. Today I'm revealing the essential footwear styles every woman needs and how to choose the perfect pairs for your lifestyle. From classic pumps to versatile ankle boots, comfortable loafers to statement heels - learn which styles deserve investment and how to care for them properly. Discover the magic number of shoes you actually need and how to select styles that complement your entire wardrobe while providing comfort and confidence...",
      image: shoesCollection,
      slug: "essential-shoe-collection",
    },
    {
      title: "Denim Done Right: Finding Your Perfect Fit",
      date: "October 10, 2025",
      excerpt: "Finding the perfect pair of jeans can feel like searching for a needle in a haystack, but it doesn't have to be. Today I'm demystifying denim shopping with my comprehensive guide to finding jeans that flatter your body type. Learn about different rises, leg shapes, and washes, plus styling tricks that work for everyone. Whether you're petite, tall, curvy, or athletic, discover the denim styles that will become your go-to favorites and how to style them for any occasion from casual to dressy...",
      image: denimStyle,
      slug: "perfect-denim-fit",
    },
    {
      title: "Proportion Play: The Secret to Balanced Outfits",
      date: "October 9, 2025",
      excerpt: "Understanding proportion is the secret weapon of stylish women everywhere. It's not about following rigid rules, but learning to balance silhouettes for the most flattering effect. Today I'm sharing my guide to mastering proportions - from the classic tucked-in trick to experimenting with oversized and fitted pieces. Learn how to create visual balance, elongate your silhouette, and develop an eye for what works for your body type. These simple techniques will transform how you put together outfits...",
      image: proportionStyling,
      slug: "mastering-proportions",
    },
    {
      title: "Belt It Better: Transform Your Silhouette",
      date: "October 8, 2025",
      excerpt: "A well-placed belt can completely transform an outfit, defining your waist and adding instant polish. But there's more to belting than just cinching - it's about knowing when, where, and how to add this powerful accessory. Today I'm sharing my favorite belting techniques for dresses, coats, oversized shirts, and more. Learn which belt styles work best for different occasions, how to choose the right width for your frame, and creative ways to use belts beyond the traditional waist placement...",
      image: beltStyling,
      slug: "belting-techniques",
    },
    {
      title: "The Tailoring Advantage: Why Fit Matters Most",
      date: "October 7, 2025",
      excerpt: "The difference between an okay outfit and an outstanding one often comes down to fit. Even the most expensive garment looks cheap if it doesn't fit properly, while affordable pieces can look luxurious with the right alterations. Today I'm revealing which tailoring adjustments make the biggest impact and are worth the investment. Learn how to identify fit issues, what your tailor can (and can't) fix, and the key measurements that matter most. Discover how proper fit can revolutionize your entire wardrobe...",
      image: tailoringFit,
      slug: "importance-of-tailoring",
    },
    {
      title: "Pattern Mixing Made Easy: Breaking the Rules",
      date: "October 6, 2025",
      excerpt: "Pattern mixing might seem intimidating, but it's one of the most fun ways to express your personal style. The key is understanding which patterns play well together and how to balance scale and color. Today I'm sharing my foolproof formulas for mixing stripes, florals, plaids, and more with confidence. Learn the secret to making bold combinations work, how to use neutrals as your anchor, and why mixing patterns can actually simplify your styling process. Get ready to break free from matchy-matchy monotony...",
      image: patternMixing,
      slug: "pattern-mixing-guide",
    },
    {
      title: "Color Blocking Like a Pro: Bold & Beautiful",
      date: "October 5, 2025",
      excerpt: "Color blocking is the art of combining solid blocks of different colors to create striking, modern looks. When done right, it's incredibly chic and surprisingly easy to pull off. Today I'm teaching you the principles of successful color blocking - from choosing complementary colors to understanding color theory basics. Learn which combinations work best for different occasions, how to balance bold choices with neutrals, and styling tricks that make color blocking accessible even for color-shy dressers...",
      image: colorBlocking,
      slug: "color-blocking-guide",
    },
    {
      title: "Winter Layering Secrets: Warmth Meets Style",
      date: "October 4, 2025",
      excerpt: "Cold weather dressing doesn't mean sacrificing style for warmth. The art of layering allows you to stay cozy while looking pulled-together and chic. Today I'm sharing my winter layering strategies, from base layers to statement coats, and everything in between. Learn how to add dimension without bulk, which fabrics layer best, and styling tricks for scarves that actually keep you warm. Discover how to transition your favorite pieces through the coldest months while maintaining your signature style...",
      image: winterLayering,
      slug: "winter-layering-guide",
    },
    {
      title: "The Versatile Work Wardrobe: From Desk to Dinner",
      date: "October 3, 2025",
      excerpt: "Building a work wardrobe that transitions seamlessly from office to evening is the ultimate styling challenge. Today I'm sharing my strategies for creating professional looks that work hard from 9 to 9. Learn which pieces offer maximum versatility, how to accessorize for different occasions, and simple swaps that take you from boardroom to bar. Discover the power pieces that earn their place in your closet and styling formulas that simplify your morning routine while keeping you polished all day...",
      image: workWardrobe,
      slug: "versatile-work-wardrobe",
    },
    {
      title: "Evening Elegance: Dressing for Special Occasions",
      date: "October 2, 2025",
      excerpt: "Special occasions call for special styling, but that doesn't mean you need a closet full of one-time-wear dresses. Today I'm sharing smart strategies for building an evening wardrobe that works across multiple events. Learn how to choose pieces that can be styled different ways, the power of statement accessories, and which silhouettes flatter every body type. From cocktail parties to formal galas, discover how to look effortlessly elegant without the stress or excessive spending...",
      image: eveningStyle,
      slug: "evening-elegance-guide",
    },
    {
      title: "Summer Linen: Breathable Luxury Style",
      date: "October 1, 2025",
      excerpt: "Linen is the unsung hero of summer fabrics - breathable, elegant, and effortlessly chic despite its tendency to wrinkle. Today I'm teaching you how to embrace linen's relaxed sophistication and make it work for your summer wardrobe. Learn which linen pieces are worth investing in, how to style them for different occasions, and care tips that keep your linen looking its best. Discover why the wrinkles are actually part of the charm and how to work with this beautiful natural fabric...",
      image: summerLinen,
      slug: "summer-linen-style",
    },
    {
      title: "Neckline Navigator: Flattering Your Face Shape",
      date: "September 30, 2025",
      excerpt: "The neckline you choose can dramatically impact how an outfit looks on you. Different necklines flatter different face shapes and body types - understanding these relationships is game-changing. Today I'm breaking down the most common necklines and which ones work best for you. From V-necks to boat necks, scoop to square, learn how to choose styles that elongate your neck, balance your proportions, and highlight your best features. This simple knowledge will revolutionize your shopping strategy...",
      image: necklineGuide,
      slug: "neckline-face-shape-guide",
    },
    {
      title: "Pants Perfected: The Ultimate Fit Guide",
      date: "September 29, 2025",
      excerpt: "Well-fitting pants are the foundation of countless outfits, yet they're surprisingly difficult to find. Today I'm sharing everything you need to know about pants fit - from rise and inseam to leg opening and hem length. Learn how to identify fit issues, which styles work best for your body type, and the simple alterations that make the biggest difference. Whether you prefer trousers, chinos, or dress pants, discover how to achieve that perfect fit that makes you feel confident and comfortable...",
      image: pantsFit,
      slug: "perfect-pants-fit",
    },
    {
      title: "Sleeve Styling: The Details That Make a Difference",
      date: "September 28, 2025",
      excerpt: "Sleeve styling is often overlooked, but it's one of the easiest ways to add interest and polish to your outfits. From rolling to cuffing, pushing up to letting down, these small adjustments can completely change a look's vibe. Today I'm sharing my favorite sleeve styling techniques for different garments and occasions. Learn how to achieve the perfectly casual rolled sleeve, when to show off statement cuffs, and how sleeve length affects your overall proportions. These simple tricks add instant sophistication...",
      image: sleeveStyling,
      slug: "sleeve-styling-tricks",
    },
    {
      title: "Spring Transition Dressing: Between Season Style",
      date: "September 27, 2025",
      excerpt: "Transitional dressing is an art form - it's all about layering smart and choosing versatile pieces that work across temperature fluctuations. Today I'm sharing my strategies for navigating spring's unpredictable weather without sacrificing style. Learn which transitional pieces are most valuable, how to layer efficiently, and styling tricks that work from chilly mornings to warm afternoons. Discover the joy of transitional dressing and how it can actually be more creative than dressing for extreme weather...",
      image: springTransition,
      slug: "spring-transition-dressing",
    },
    {
      title: "Texture Talk: Mixing Fabrics with Confidence",
      date: "September 26, 2025",
      excerpt: "Mixing different textures adds depth, interest, and sophistication to your outfits. Leather with silk, wool with cashmere, denim with satin - the possibilities are endless when you understand how textures interact. Today I'm teaching you the art of texture mixing, from understanding which fabrics complement each other to balancing heavy and light materials. Learn how to create outfits with visual interest even in neutral colors, and discover why texture mixing is the secret weapon of stylish dressers everywhere...",
      image: textureMixing,
      slug: "mixing-textures-guide",
    },
    {
      title: "Weekend Casual Elevated: Comfort Meets Style",
      date: "September 25, 2025",
      excerpt: "Casual doesn't have to mean sloppy. Today I'm showing you how to elevate your weekend wardrobe with pieces that are comfortable yet polished. Learn the art of looking effortlessly put-together even in your most relaxed outfits. From elevated basics to strategic styling tricks, discover how small changes make big impacts. Whether you're running errands or meeting friends for brunch, these casual-chic formulas ensure you always look intentional and stylish without sacrificing comfort or spending hours getting ready...",
      image: weekendCasual,
      slug: "elevated-weekend-casual",
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
            {displayArticles.map((article, index) => (
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
