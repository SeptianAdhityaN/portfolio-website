import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { profile, codeSnippets } from "@/constants/data";

export const HeroSection = () => {
  const [currentSnippet, setCurrentSnippet] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const snippet = codeSnippets[currentSnippet];

    if (isTyping) {
      if (displayText.length < snippet.length) {
        const timeout = setTimeout(() => {
          setDisplayText(snippet.slice(0, displayText.length + 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 30);
        return () => clearTimeout(timeout);
      } else {
        setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length);
        setIsTyping(true);
      }
    }
  }, [displayText, isTyping, currentSnippet]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Badge */}
          <Badge
            variant="outline"
            className="border-secondary text-secondary px-4 py-1.5 text-sm font-medium"
          >
            ● Open to Work / Internship
          </Badge>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
            <span>Secure Code. </span>
            <br className="md:hidden" />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Immersive Experiences.
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {profile.shortSummary}
          </p>

          {/* Typewriter Effect */}
          <div className="glass-card inline-block px-6 py-3 font-mono text-sm md:text-base">
            <span className="text-muted-foreground">$ </span>
            <span className="text-primary">{displayText}</span>
            <span className="typewriter-cursor text-secondary">|</span>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Button
              size="lg"
              className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              asChild
            >
              <Link to="/projects">
                View My Work
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-border hover:border-primary/50 text-foreground"
              asChild // Tambahkan ini agar button merender elemen <a> di dalamnya
            >
              {/* Bungkus dengan tag <a> */}
              <a
                href={profile.cvLink}
                download="CV_Septian_Adhitya_Nugroho.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
