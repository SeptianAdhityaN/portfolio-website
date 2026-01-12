import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, MapPin, Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- KONFIGURASI FORMSPREE ---
  // Ganti string di bawah ini dengan Form ID kamu dari formspree.io
  // Contoh: "xvnggqpw"
  const FORMSPREE_ID = "xykkyjpb"; 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Ubah data form menjadi object JSON
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Jika sukses terkirim
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon via email.",
          variant: "default", // Atau gunakan style success jika ada
        });
        form.reset(); // Kosongkan form
      } else {
        // Jika Formspree menolak (misal spam atau ID salah)
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send message");
      }
    } catch (error) {
      // Jika error koneksi internet atau lainnya
      toast({
        title: "Failed to send",
        description: "Something went wrong. Please try again later or email me directly.",
        variant: "destructive",
      });
      console.error("Form Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Ready to collaborate?
          </h2>
          <p className="text-muted-foreground mb-10">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-6 md:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2 text-left">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Septian Adhitya Nugroho"
                    required
                    disabled={isSubmitting}
                    className="bg-card border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2 text-left">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="septiannugroho73@gmail.com"
                    required
                    disabled={isSubmitting}
                    className="bg-card border-border focus:border-primary"
                  />
                </div>
              </div>
              
              <div className="space-y-2 text-left">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  required
                  disabled={isSubmitting}
                  className="bg-card border-border focus:border-primary resize-none"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full gap-2 bg-primary hover:bg-primary/90 transition-all"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Quick Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-muted-foreground"
          >
            <a 
              href="mailto:septiannugroho73@gmail.com" 
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4 text-primary" />
              <span>septiannugroho73@gmail.com</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-secondary" />
              <span>Indonesia</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};