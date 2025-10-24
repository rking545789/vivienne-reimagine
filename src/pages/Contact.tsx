import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          type: "contact",
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        },
      });

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <article className="prose prose-lg max-w-none">
              <h1 className="text-4xl font-serif italic text-primary mb-6">
                Get in Touch
              </h1>
              
              <p className="text-lg leading-relaxed mb-8">
                I'd love to hear from you! Whether you have a question about capsule wardrobes, need styling advice, or just want to say hello, feel free to reach out.
              </p>

              <div className="bg-card border border-border p-8 rounded-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      placeholder="Tell me what's on your mind..."
                      rows={6}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-medium text-foreground mb-4">
                  Other Ways to Connect
                </h2>
                
                <div className="space-y-4">
                  <p className="leading-relaxed">
                    <strong>Collaboration Inquiries:</strong> If you're interested in working together, please include details about your proposal in your message.
                  </p>
                  
                  <p className="leading-relaxed">
                    <strong>Press & Media:</strong> For press inquiries, please send your request via the contact form above with "PRESS" in the subject line.
                  </p>
                  
                  <p className="leading-relaxed">
                    <strong>General Questions:</strong> Have a question about building a capsule wardrobe or personal styling? Check out our <a href="/start-here" className="text-primary hover:text-primary/80 italic">Start Here</a> page first—you might find the answer there!
                  </p>
                </div>
              </div>

              <div className="bg-secondary/30 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-medium mb-3">Stay Connected</h3>
                <p className="leading-relaxed mb-4">
                  Don't forget to follow us on social media for daily style inspiration, behind-the-scenes content, and exclusive tips!
                </p>
                <p className="text-sm text-muted-foreground">
                  You can find our social media links in the sidebar. →
                </p>
              </div>
            </article>
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

export default Contact;
