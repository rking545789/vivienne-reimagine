import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { articlesData } from "@/data/articles";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SearchDialog = ({ open, onOpenChange }: SearchDialogProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredArticles = articlesData.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleArticleClick = (slug: string) => {
    navigate(`/article/${slug}`);
    onOpenChange(false);
    setSearchQuery("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif italic text-primary">
            Search Articles
          </DialogTitle>
        </DialogHeader>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <Input
            type="text"
            placeholder="Search for articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-10"
            autoFocus
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        <div className="flex-1 overflow-y-auto mt-4 space-y-4">
          {searchQuery === "" ? (
            <div className="text-center text-muted-foreground py-8">
              <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Start typing to search articles...</p>
            </div>
          ) : filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <button
                key={article.slug}
                onClick={() => handleArticleClick(article.slug)}
                className="w-full text-left p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors group"
              >
                <div className="flex gap-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-20 h-20 object-cover rounded flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-1">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {article.excerpt}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      {article.date}
                    </p>
                  </div>
                </div>
              </button>
            ))
          ) : (
            <div className="text-center text-muted-foreground py-8">
              <p>No articles found matching "{searchQuery}"</p>
              <p className="text-sm mt-2">Try a different search term</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
