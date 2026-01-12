import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Trophy, ExternalLink, ArrowRight, Medal } from "lucide-react";
import { projects, socials } from "@/constants/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// --- DATA SELECTOR ---
const pmCopilot = projects.find(p => p.id === "pm-copilot");
const unesaMap = projects.find(p => p.id === "unesa-roblox-map");
const plastiQuest = projects.find(p => p.id === "plastiquest-roblox");
const hungryNumbers = projects.find(p => p.id === "hungry-numbers");

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
            A curated selection of Web Applications, Roblox Games, and Interactive Logic.
          </p>
        </motion.div>

        {/* --- BENTO GRID LAYOUT --- 
            Mobile: grid-cols-1 (Vertikal)
            Tablet: grid-cols-2
            Desktop: grid-cols-3
        */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto lg:auto-rows-fr"
        >
          
          {/* 1. PM COPILOT (Utama) 
              Mobile: 1 Kolom
              Tablet: Full Width (col-span-2)
              Desktop: Besar (col-span-2 & row-span-2)
          */}
          {pmCopilot && (
            <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-2 lg:row-span-2">
              <a href={pmCopilot.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                <Card className="glass-card p-5 md:p-6 h-full group cursor-pointer transition-all duration-300 hover:border-primary/30 hover:bg-white/5 flex flex-col">
                  <motion.div whileHover={{ scale: 1.01 }} className="h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <Badge className="bg-primary/20 text-primary border-0">{pmCopilot.category}</Badge>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    
                    <div className="mb-4 flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{pmCopilot.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{pmCopilot.description}</p>
                    </div>

                    {/* Gambar Besar */}
                    <div className="relative overflow-hidden rounded-lg bg-card/50 border border-border mb-6 aspect-video">
                      <img 
                        src="/images/pm-copilot.png" 
                        alt={pmCopilot.title} 
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {pmCopilot.techStack.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-[10px] md:text-xs border-border text-muted-foreground">{tech}</Badge>
                      ))}
                    </div>
                  </motion.div>
                </Card>
              </a>
            </motion.div>
          )}

          {/* 2. UNESA ROBLOX 
              Mobile: 1 Kolom
              Tablet: 1 Kolom
              Desktop: 1 Kolom (Kanan Atas)
          */}
          {unesaMap && (
            <motion.div variants={itemVariants} className="md:col-span-1 lg:col-span-1">
              <a href={unesaMap.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                <Card className="glass-card p-5 md:p-6 h-full group cursor-pointer transition-all duration-300 hover:border-secondary/30 hover:bg-white/5">
                  <motion.div whileHover={{ scale: 1.02 }} className="h-full flex flex-col">
                    <div className="flex items-start justify-between mb-2">
                      <Badge className="bg-secondary/20 text-secondary border-0">{unesaMap.category}</Badge>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-secondary transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{unesaMap.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{unesaMap.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {unesaMap.techStack.slice(0,3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-[10px] md:text-xs border-secondary/30 text-secondary">{tech}</Badge>
                      ))}
                    </div>
                  </motion.div>
                </Card>
              </a>
            </motion.div>
          )}

          {/* 3. PLASTIQUEST 
              Mobile: 1 Kolom
              Tablet: 1 Kolom
              Desktop: 1 Kolom (Kanan Bawah)
          */}
          {plastiQuest && (
            <motion.div variants={itemVariants} className="md:col-span-1 lg:col-span-1">
              <a href={plastiQuest.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                <Card className="glass-card p-5 md:p-6 h-full group cursor-pointer transition-all duration-300 hover:border-secondary/30 hover:bg-white/5">
                  <motion.div whileHover={{ scale: 1.02 }} className="h-full flex flex-col">
                    <div className="flex items-start justify-between mb-2">
                      <Badge className="bg-secondary/20 text-secondary border-0">{plastiQuest.category}</Badge>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-secondary transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{plastiQuest.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{plastiQuest.description}</p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {plastiQuest.techStack.slice(0,3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-[10px] md:text-xs border-secondary/30 text-secondary">{tech}</Badge>
                      ))}
                    </div>
                  </motion.div>
                </Card>
              </a>
            </motion.div>
          )}

          {/* --- BARIS BAWAH (ROW 3) --- */}

          {/* 4. HUNGRY NUMBERS 
              Mobile: 1 Kolom
              Tablet: 1 Kolom
              Desktop: 1 Kolom (Kiri Bawah)
          */}
          {hungryNumbers && (
            <motion.div variants={itemVariants} className="md:col-span-1">
              <a href={hungryNumbers.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                <Card className="glass-card p-5 md:p-6 h-full group cursor-pointer transition-all duration-300 hover:border-primary/30 hover:bg-white/5">
                  <motion.div whileHover={{ scale: 1.02 }} className="h-full flex flex-col">
                    <div className="flex items-start justify-between mb-2">
                      <Badge className="bg-primary/20 text-primary border-0">{hungryNumbers.category}</Badge>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{hungryNumbers.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{hungryNumbers.description}</p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {hungryNumbers.techStack.slice(0,2).map((tech) => (
                         <Badge key={tech} variant="outline" className="text-[10px] md:text-xs border-border text-muted-foreground">{tech}</Badge>
                      ))}
                    </div>
                  </motion.div>
                </Card>
              </a>
            </motion.div>
          )}

          {/* 5. BEST PARTICIPANT 
              Mobile: 1 Kolom
              Tablet: 1 Kolom
              Desktop: 1 Kolom (Tengah Bawah)
          */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <Card className="glass-card p-5 md:p-6 h-full group cursor-default transition-all duration-300 hover:border-yellow-500/30">
              <motion.div whileHover={{ scale: 1.02 }} className="h-full flex flex-col items-center text-center justify-center">
                <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center mb-3">
                  <Medal className="w-6 h-6 text-yellow-500" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">
                  Best Participant
                </h3>
                <p className="text-xs font-mono text-yellow-500 mb-2">TALENTHUB BATCH 16</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Game Development Essentials. Top performer in Python & Pygame logic.
                </p>
              </motion.div>
            </Card>
          </motion.div>

          {/* 6. SOCIALS 
              Mobile: 1 Kolom
              Tablet: Full Width di baris terakhir (opsional) atau 1 kolom
              Desktop: 1 Kolom (Kanan Bawah)
          */}
          <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-1">
            <Card className="glass-card p-5 md:p-6 h-full group">
              <motion.div whileHover={{ scale: 1.02 }} className="h-full flex flex-col items-center justify-center text-center">
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Let's Connect
                </h3>
                <div className="flex gap-4">
                  {/* GITHUB */}
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="w-12 h-12 border-border transition-all duration-300 hover:bg-white/10 hover:text-white hover:border-white"
                    asChild
                  >
                    <a href={socials.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-6 h-6" />
                    </a>
                  </Button>
                  
                  {/* LINKEDIN */}
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="w-12 h-12 border-border transition-all duration-300 hover:bg-[#0077b5]/20 hover:text-[#0077b5] hover:border-[#0077b5]"
                    asChild
                  >
                    <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-6 h-6" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            </Card>
          </motion.div>

        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <Button 
            variant="outline" 
            size="lg" 
            className="gap-2 border-border hover:border-primary/50"
            asChild
          >
            <Link to="/projects">
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};