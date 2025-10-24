import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

interface ArticleCardProps {
  title: string;
  date: string;
  excerpt: string;
  image: string;
  slug: string;
}

const ArticleCard = ({ title, date, excerpt, image, slug }: ArticleCardProps) => {
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
        <p className="text-sm text-muted-foreground mb-4">{date}</p>
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
