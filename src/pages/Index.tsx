import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import ArticleCard from "@/components/ArticleCard";
import { articlesData } from "@/data/articles";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ARTICLES_PER_PAGE = 10;

const Index = () => {
  const [featuredArticle, ...otherArticles] = articlesData;
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(otherArticles.length / ARTICLES_PER_PAGE);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;
  const currentArticles = otherArticles.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    document.getElementById('more-stories')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const getPageNumbers = () => {
    const pages = [];
    const showEllipsisStart = currentPage > 3;
    const showEllipsisEnd = currentPage < totalPages - 2;

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      
      if (showEllipsisStart) {
        pages.push(-1);
      }
      
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        pages.push(i);
      }
      
      if (showEllipsisEnd) {
        pages.push(-2);
      }
      
      pages.push(totalPages);
    }
    
    return pages;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Featured Article Hero Section */}
      <div className="relative w-full h-[85vh] mb-16 overflow-hidden group">
        <img 
          src={featuredArticle.image} 
          alt={featuredArticle.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-5xl mx-auto px-6 pb-16 w-full">
            <div className="space-y-6 text-white">
              <div className="inline-block px-4 py-2 bg-primary/90 backdrop-blur-sm rounded-full text-sm font-medium tracking-wider mb-4">
                FEATURED STORY
              </div>
              
              <h1 className="text-5xl md:text-7xl font-serif italic leading-tight mb-6 animate-fade-in">
                {featuredArticle.title}
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mb-8 font-light">
                {featuredArticle.excerpt}
              </p>
              
              <div className="flex items-center gap-6">
                <Link 
                  to={`/article/${featuredArticle.slug}`}
                  className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-white text-primary hover:bg-primary hover:text-white transition-all duration-300 rounded-full font-medium tracking-wide"
                >
                  Read Full Story
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
                
                <span className="text-white/70 text-sm tracking-wider">
                  {featuredArticle.date}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-12" id="more-stories">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif italic text-primary mb-3">
            More Style Stories
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover timeless fashion insights and inspiration
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="space-y-12 mb-12">
              {currentArticles.map((article, index) => (
                <ArticleCard key={index} {...article} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination className="mb-8">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                  
                  {getPageNumbers().map((page, index) => (
                    <PaginationItem key={index}>
                      {page === -1 || page === -2 ? (
                        <PaginationEllipsis />
                      ) : (
                        <PaginationLink
                          onClick={() => handlePageChange(page)}
                          isActive={currentPage === page}
                          className="cursor-pointer"
                        >
                          {page}
                        </PaginationLink>
                      )}
                    </PaginationItem>
                  ))}
                  
                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
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

export default Index;
