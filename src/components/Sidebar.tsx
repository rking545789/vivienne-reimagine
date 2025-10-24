import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Share2, Rss } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const Sidebar = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          type: "subscription",
          email: email.trim(),
        },
      });

      if (error) throw error;

      toast({
        title: "Successfully subscribed!",
        description: "Thank you for joining our style community.",
      });
      setEmail("");
    } catch (error) {
      console.error("Error subscribing:", error);
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <aside className="space-y-8">
      {/* About Section */}
      <div className="bg-secondary/30 p-6 rounded-lg text-center">
        <div className="mb-4">
          <h2 className="text-3xl font-serif italic text-primary mb-2">
            The <span className="text-4xl">Style</span> Chronicles
          </h2>
        </div>
        <p className="text-sm leading-relaxed text-foreground mb-4">
          The Style Chronicles is a unique personal style blog with carefully-selected capsule wardrobes based on color palettes drawn from works of art, nature, and more. It helps women buy less clothing, and to love what they buy.
        </p>
        <Link to="/about">
          <Button variant="link" className="text-primary hover:text-primary/80">
            Read more...
          </Button>
        </Link>
      </div>

      {/* Social Media */}
      <div className="flex justify-center gap-4">
        <button className="hover:text-primary transition-colors">
          <Facebook className="w-5 h-5" />
        </button>
        <button className="hover:text-primary transition-colors">
          <Instagram className="w-5 h-5" />
        </button>
        <button className="hover:text-primary transition-colors">
          <Twitter className="w-5 h-5" />
        </button>
        <button className="hover:text-primary transition-colors">
          <Share2 className="w-5 h-5" />
        </button>
        <button className="hover:text-primary transition-colors">
          <Rss className="w-5 h-5" />
        </button>
      </div>

      {/* Subscribe */}
      <div className="bg-card border border-border p-6 rounded-lg">
        <h3 className="text-center text-lg font-medium mb-4 tracking-wide">
          STAY UP TO DATE
        </h3>
        <form onSubmit={handleSubscribe} className="space-y-3">
          <Input
            type="email"
            placeholder="E-Mail Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="text-center"
          />
          <Button type="submit" className="w-full bg-muted hover:bg-muted-foreground/20" disabled={isSubmitting}>
            {isSubmitting ? "SUBSCRIBING..." : "SUBSCRIBE"}
          </Button>
        </form>
        <p className="text-xs text-center mt-3 text-muted-foreground">
          <Link to="/privacy-policy">
            <Button variant="link" className="text-xs h-auto p-0 text-muted-foreground hover:text-primary">
              Privacy Policy
            </Button>
          </Link>
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
