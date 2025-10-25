import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

interface ArticleCardProps {
  title: string;
  date: string;
  author?: string;
  excerpt: string;
  image: string;
  slug: string;
}

const ArticleCard = ({ title, date, author, excerpt, image, slug }: ArticleCardProps) => {
  return (
    <Card className="overflow-hidden border-border hover:shadow-lg transition-shadow">
      <Link to={`/article/${slug}`}>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover"
        />
      </Link>
      <div className="p-6">
        <Link to={`/article/${slug}`}>
          <h2 className="text-xl font-medium mb-2 hover:text-primary transition-colors uppercase tracking-wide">
            {title}
          </h2>
        </Link>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <span>{date}</span>
          {author && (
            <>
              <span>•</span>
              <span>By {author}</span>
            </>
          )}
        </div>
        <p className="text-foreground leading-relaxed mb-4">{excerpt}</p>
        <Link 
          to={`/article/${slug}`}
          className="text-primary hover:text-primary/80 transition-colors italic"
        >
          View the Post
        </Link>
      </div>
    </Card>
  );
};

export default ArticleCard;
